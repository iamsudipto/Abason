// @ts-check
// js/validators.js — কেন্দ্রীয় validation: ফোন/NID/ছবি/দৈর্ঘ্য — এক সংজ্ঞা, সব সার্ভিসে ব্যবহার।
const Validators = (() => {
  const BD_PHONE_RE = /^01[3-9]\d{8}$/;          // বাংলাদেশি মোবাইল: 01[3-9] + ৮ সংখ্যা
  const NID_RE = /^(\d{10}|\d{13}|\d{17})$/;     // NID: ১০/১৩/১৭ সংখ্যা
  const OTP_RE = /^\d{6}$/;
  const IMAGE_MAX_BYTES = 5 * 1024 * 1024;       // server bucket limit-এর সাথে মিলিয়ে (5MB)

  /** @param {unknown} v */
  const bdPhone = v => typeof v === 'string' && BD_PHONE_RE.test(v.trim());
  /** @param {unknown} v */
  const nid = v => typeof v === 'string' && NID_RE.test(v.trim());
  /** @param {unknown} v */
  const otp = v => typeof v === 'string' && OTP_RE.test(v.trim());
  /** @param {unknown} v @param {number} min @param {number} max */
  const lengthBetween = (v, min, max) => typeof v === 'string' && v.trim().length >= min && v.trim().length <= max;
  /**
   * ছবি-ফাইল যাচাই — ব্যর্থে {ok:false, message} (কোন Error-class ছুড়বে সেটা caller ঠিক করে)
   * @param {File|unknown} file @param {number} [maxBytes]
   */
  function imageFile(file, maxBytes) {
    const cap = maxBytes || IMAGE_MAX_BYTES;
    if (!file || typeof File === 'undefined' || !(file instanceof File))
      return { ok: false, message: 'ছবি বাছাই করুন।' };
    if (!file.type || !file.type.startsWith('image/'))
      return { ok: false, message: 'শুধু ছবি (JPG/PNG/WebP) আপলোড করা যাবে।' };
    if (file.size > cap)
      return { ok: false, message: 'ছবির সাইজ সর্বোচ্চ ৫MB — একটু ছোট ছবি দিন।' };
    return { ok: true, message: '' };
  }
  return { bdPhone, nid, otp, lengthBetween, imageFile, IMAGE_MAX_BYTES };
})();
if (typeof module !== 'undefined' && module.exports) module.exports = Validators;
