// js/phoneVerificationService.js — Module 1 (phone OTP) client wrapper.
//
// Unlike services/otpService.js (the older, fully client-side demo mock), this talks to the
// REAL send-otp / verify-otp Edge Functions, which store the code server-side and flip
// profiles.phone_verified themselves. Placed in js/ (not services/) because it needs the
// live `abashonDB` client, same as authService.js and propertyService.js.
//
// Required before: an owner can publish a listing, OR a buyer can book a visit / message
// an owner (enforce this check in the calling UI code using session.phoneVerified).

class PhoneVerificationError extends AppError {
  constructor(code, message) { super(code, message); this.name = 'PhoneVerificationError'; }
}

const PhoneVerificationSvc = {
  /**
   * @param {string} phone - BD mobile number, any common format.
   * @returns {Promise<{ sessionId:number, expiresAt:string, phone:string, demo:boolean, devCode?:string }>}
   */
  async sendOTP(phone) {
    const { data, error } = await abashonDB.functions.invoke('send-otp', { body: { phone } });
    if (error) throw new PhoneVerificationError('SEND_FAILED', 'OTP পাঠানো যায়নি। আবার চেষ্টা করুন।');
    if (data && data.code) throw new PhoneVerificationError(data.code, data.message || 'OTP পাঠানো যায়নি।');
    return data;
  },

  /**
   * @param {number} sessionId
   * @param {string} code - 6-digit string
   * @returns {Promise<{ verified:true, phone:string }>}
   */
  async verifyOTP(sessionId, code) {
    const { data, error } = await abashonDB.functions.invoke('verify-otp', { body: { sessionId, code } });
    if (error) throw new PhoneVerificationError('VERIFY_FAILED', 'যাচাই করা যায়নি। আবার চেষ্টা করুন।');
    if (data && data.code) throw new PhoneVerificationError(data.code, data.message || 'ভুল কোড।');
    return data;
  },
};
