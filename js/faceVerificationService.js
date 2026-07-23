// js/faceVerificationService.js — Modules 2 & 3 (NID capture + face verification) client wrapper.
//
// Module 2 (NID capture) is format-only, never government-verified — see nidService.js and
// the non-goals in the spec. Module 3 (face verification) is what actually prevents one
// person holding multiple owner accounts.
//
// UI MUST disclose biometric data collection (the selfie) explicitly before calling
// submitFaceVerification — do not bundle this silently into a generic "verification" step.
// UI MUST label NID submission as "পরিচয়পত্র জমা দেওয়া হয়েছে" (submitted), never "যাচাইকৃত"
// (verified) — that word is reserved for face_verified.

class FaceVerificationError extends AppError {
  constructor(code, message) { super(code, message); this.name = 'FaceVerificationError'; }
}

function isValidNIDFormat(nidNumber) {
  return Validators.nid(nidNumber); // কেন্দ্রীয় সংজ্ঞা: js/validators.js
}

const MAX_ID_IMAGE_BYTES = Validators.IMAGE_MAX_BYTES; // server-side bucket limit-এর সাথে মিলিয়ে
function assertValidImage(file) {
  const v = Validators.imageFile(file, MAX_ID_IMAGE_BYTES); // কেন্দ্রীয় নিয়ম: js/validators.js
  if (!v.ok) throw new FaceVerificationError('INVALID_INPUT', v.message);
}

const FaceVerificationSvc = {
  isValidNIDFormat,

  /**
   * Module 2 — store the NID number (format-checked only) + upload the NID photo to the
   * private `nid-documents` bucket. Does NOT verify anything against a government database
   * (no such public API exists).
   * @param {string} userId
   * @param {string} nidNumber
   * @param {File} nidImageFile
   * @returns {Promise<{ nidImagePath:string }>}
   */
  async submitNid(userId, nidNumber, nidImageFile) {
    assertValidImage(nidImageFile);
    if (!isValidNIDFormat(nidNumber)) {
      throw new FaceVerificationError('INVALID_INPUT', 'NID অবশ্যই ১০, ১৩ বা ১৭ সংখ্যার হতে হবে।');
    }
    const path = `${userId}/nid-${Date.now()}-${nidImageFile.name}`;
    const { error: upErr } = await abashonDB.storage.from('nid-documents').upload(path, nidImageFile, { upsert: false });
    if (upErr) throw new FaceVerificationError('UPLOAD_FAILED', 'ছবি আপলোড করা যায়নি।');

    const { error: dbErr } = await abashonDB
      .from('profiles')
      .update({ nid_number: nidNumber.trim(), nid_image_path: path })
      .eq('id', userId);
    if (dbErr) throw new FaceVerificationError('SAVE_FAILED', 'তথ্য সংরক্ষণ করা যায়নি।');

    return { nidImagePath: path };
  },

  /**
   * Module 3 — upload a live selfie + call the verify-face Edge Function.
   * `livenessCheckPassed` must come from an actual liveness prompt (blink/head-turn) run
   * client-side before this call — never fabricate this flag.
   * @param {string} userId
   * @param {string} nidImagePath - from submitNid()
   * @param {File} selfieFile
   * @param {boolean} livenessCheckPassed
   * @returns {Promise<{ verified:boolean, score:number, checkedAt:string }>}
   */
  async submitFaceVerification(userId, nidImagePath, selfieFile, livenessCheckPassed) {
    assertValidImage(selfieFile);
    if (!nidImagePath) throw new FaceVerificationError('INVALID_INPUT', 'আগে NID ছবি জমা দিন।');
    if (!livenessCheckPassed) throw new FaceVerificationError('LIVENESS_REQUIRED', 'লাইভনেস চেক সম্পন্ন করুন।');

    const selfiePath = `${userId}/selfie-${Date.now()}.jpg`;
    const { error: upErr } = await abashonDB.storage.from('face-verification').upload(selfiePath, selfieFile, { upsert: false });
    if (upErr) throw new FaceVerificationError('UPLOAD_FAILED', 'সেলফি আপলোড করা যায়নি।');

    const { data, error } = await abashonDB.functions.invoke('verify-face', {
      body: { nidImagePath, selfieImagePath: selfiePath, livenessPassed: true },
    });
    if (error) throw new FaceVerificationError('VERIFY_FAILED', 'যাচাই করা যায়নি। আবার চেষ্টা করুন।');
    if (data && data.code) throw new FaceVerificationError(data.code, data.message || 'যাচাই ব্যর্থ হয়েছে।');
    return data;
  },
};
