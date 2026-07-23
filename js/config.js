// @ts-check
// js/config.js — কেন্দ্রীয় কনফিগ: ছড়িয়ে থাকা magic value গুলোর একটাই ঠিকানা।
// Browser: global AbashonConfig · Node (tests): module.exports — দুই পরিবেশেই এক উৎস।
const AbashonConfig = Object.freeze({
  COPILOT: Object.freeze({
    HISTORY_MAX: 10,        // চ্যাট history-তে সর্বোচ্চ turn
    MSG_CAP: 800,           // প্রতি turn-এর টেক্সট cap (server-ও একই cap করে)
    LISTINGS_MAX: 6,        // LLM context-এ সর্বোচ্চ listing
    HISTORY_SEND: 6,        // request-এ পাঠানো শেষ কয় turn
  }),
  MEMORY: Object.freeze({
    MAX_AREAS: 5,           // পছন্দের এলাকা-তালিকার দৈর্ঘ্য
    MAX_SEARCHES: 10,       // previous-search ring-এর দৈর্ঘ্য
    STORAGE_KEY: 'abashon_conv_memory_v1',
  }),
  RANKING: Object.freeze({
    CACHE_KEY: 'abashon_area_factors_v1',
    CACHE_TTL_MS: 24 * 60 * 60 * 1000, // এলাকা-প্রোফাইল cache: ২৪ ঘণ্টা
  }),
  UI: Object.freeze({
    GRID_CHUNK: 24,         // property grid: প্রতি চাঙ্কে কার্ড
    IMG_CARD_W: 480,        // grid card ছবির width
    IMG_AI_W: 420,          // AI-ফলাফল কার্ড
    IMG_MINI_W: 240,        // home mini card
    IMG_QUALITY: '60',      // Unsplash q প্যারামিটার
  }),
  TEXT: Object.freeze({
    GRACEFUL_NO_DATA: 'এই মুহূর্তে লাইভ listing মেলানো যাচ্ছে না — তবে থেমে থাকার দরকার নেই: এলাকা, বাজেট আর বেডরুম লিখে আবার চেষ্টা করো, অথবা Properties পেজ থেকে সরাসরি ব্রাউজ করতে পারো। ভাড়া/আইন/শিফটিং নিয়ে সাধারণ প্রশ্নও করতে পারো, আমি উত্তর দেব।',
  }),
});
if (typeof module !== 'undefined' && module.exports) module.exports = AbashonConfig;
