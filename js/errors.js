// @ts-check
// js/errors.js — কেন্দ্রীয় error hierarchy + user-friendly বার্তা।
// সব সার্ভিসের typed error এখন AppError-এর subclass — একই shape ({code, message}),
// এক জায়গায় বাংলা-বার্তার mapping। পুরনো class-নাম/কোড অপরিবর্তিত (backward compatible)।

/** ভিত্তি error: প্রতিটা সার্ভিস-error-এর কমন কাঠামো */
class AppError extends Error {
  /** @param {string} code machine-readable কোড @param {string} message ব্যবহারকারী-বার্তা @param {object} [meta] */
  constructor(code, message, meta) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    if (meta) this.meta = meta;
  }
}

/** code → বাংলা fallback বার্তা (সার্ভিস নিজে message দিলে সেটাই জেতে) */
const ERROR_MESSAGES = Object.freeze({
  INVALID_INPUT: 'তথ্যটা ঠিকমতো দেওয়া হয়নি — আরেকবার দেখে দাও।',
  RATE_LIMIT: 'একটু ঘন ঘন চেষ্টা হয়ে যাচ্ছে — কিছুক্ষণ পর আবার চেষ্টা করো।',
  UNAUTHENTICATED: 'আগে লগইন করে নাও।',
  FORBIDDEN: 'এই কাজের অনুমতি তোমার অ্যাকাউন্টে নেই।',
  NOT_FOUND: 'খুঁজে পাওয়া যায়নি।',
  NETWORK: 'ইন্টারনেট সংযোগে সমস্যা মনে হচ্ছে — চেক করে আবার চেষ্টা করো।',
  UPSTREAM_ERROR: 'সার্ভিসটা এই মুহূর্তে সাড়া দিচ্ছে না — একটু পরে চেষ্টা করো।',
  PAYLOAD_TOO_LARGE: 'পাঠানো ডেটা বেশি বড় হয়ে গেছে।',
  UNKNOWN: 'কিছু একটা গোলমাল হয়েছে — আবার চেষ্টা করো।',
});

/** যেকোনো error → নিরাপদ, বন্ধুত্বপূর্ণ বাংলা বার্তা (technical লিক নয়) @param {unknown} e */
function toFriendly(e) {
  if (!e) return ERROR_MESSAGES.UNKNOWN;
  const err = /** @type {{code?:string,message?:string}} */ (e);
  if (err.code && ERROR_MESSAGES[err.code] && (!err.message || /^[A-Z_]+$/.test(err.message)))
    return ERROR_MESSAGES[err.code];
  if (err.message && /[\u0980-\u09FF]/.test(err.message)) return err.message; // বাংলা বার্তা সার্ভিসেরই
  if (err.code && ERROR_MESSAGES[err.code]) return ERROR_MESSAGES[err.code];
  if (err.message && /fetch|network|Failed to load/i.test(err.message)) return ERROR_MESSAGES.NETWORK;
  return ERROR_MESSAGES.UNKNOWN;
}

if (typeof module !== 'undefined' && module.exports) module.exports = { AppError, toFriendly, ERROR_MESSAGES };
