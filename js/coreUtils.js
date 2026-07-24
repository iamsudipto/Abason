// @ts-check
// js/coreUtils.js — ভাগাভাগি utility: HTML-escape, বাংলা সংখ্যা, নিরাপদ storage, TTL cache।
// আগে এগুলো app.js/agreementService/conversationMemory/rankingService-এ আলাদা কপি ছিল।
const AbashonUtil = (() => {
  /** XSS-নিরাপদ HTML escape (canonical সংজ্ঞা) @param {unknown} s */
  function esc(s) {
    if (typeof document !== 'undefined') {
      const d = document.createElement('div');
      d.textContent = s == null ? '' : String(s);
      return d.innerHTML;
    } // Node (tests): সমতুল্য
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  /** 123 → ১২৩ @param {number|string} n */
  const bn = n => String(n).replace(/[0-9]/g, d => '০১২৩৪৫৬৭৮৯'[Number(d)]);
  /** localStorage JSON পড়া — ব্যর্থে fallback @param {string} key @param {*} fb */
  function storageGetJSON(key, fb) {
    try { const r = localStorage.getItem(key); return r ? JSON.parse(r) : fb; } catch (e) { return fb; }
  }
  /** localStorage JSON লেখা — ব্যর্থতা নীরব @param {string} key @param {*} val */
  function storageSetJSON(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); return true; } catch (e) { return false; }
  }
  /**
   * TTL cache (localStorage-backed) — RankEngine-এর মতো "রোজকার ডেটা"র জন্য
   * @param {string} key @param {number} ttlMs
   */
  function createTtlCache(key, ttlMs) {
    return {
      get() {
        const c = storageGetJSON(key, null);
        return (c && typeof c.ts === 'number' && Date.now() - c.ts < ttlMs) ? c.data : null;
      },
      set(data) { storageSetJSON(key, { ts: Date.now(), data }); },
    };
  }
  /**
   * টেক্সট ধীরে ধীরে reveal করে (streaming-এর visual অনুভূতি — real backend token-stream না,
   * client-side reveal মাত্র)। prefers-reduced-motion থাকলে সাথে সাথেই পুরো টেক্সট দেখায় (accessibility)।
   * @param {HTMLElement} el @param {string} text @param {{onDone?:Function, wordsPerTick?:number}} [opts]
   */
  function typewriter(el, text, opts) {
    opts = opts || {};
    const reduceMotion = typeof window !== 'undefined' && window.matchMedia
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || typeof window === 'undefined') {
      el.textContent = text;
      if (opts.onDone) opts.onDone();
      return;
    }
    const words = String(text).split(/(\s+)/); // whitespace রেখেই split, join করলে হুবহু ফিরে আসে
    const perTick = Math.max(1, opts.wordsPerTick || 2); // দীর্ঘ উত্তরেও দ্রুত শেষ হয়
    let i = 0;
    el.textContent = '';
    (function tick() {
      i = Math.min(words.length, i + perTick);
      el.textContent = words.slice(0, i).join('');
      if (el.scrollIntoView && el.parentElement) el.parentElement.scrollTop = el.parentElement.scrollHeight;
      if (i < words.length) requestAnimationFrame(() => setTimeout(tick, 16));
      else if (opts.onDone) opts.onDone();
    })();
  }
  return { esc, bn, storageGetJSON, storageSetJSON, createTtlCache, typewriter };
})();
if (typeof module !== 'undefined' && module.exports) module.exports = AbashonUtil;
