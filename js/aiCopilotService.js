// js/aiCopilotService.js — আবাসন AI Housing Copilot client wrapper
//
// Contract (ইচ্ছাকৃতভাবে সরল): CopilotSvc.ask() হয় LLM-এর টেক্সট ফেরত দেয়, নয়তো null —
// null মানে "LLM এখন নেই" (key বসেনি / rate limit / নেটওয়ার্ক), caller তখন নিঃশব্দে আগের
// deterministic engine (aiMatch + CHAT_FAQ)-এ পড়ে যায়। কখনো throw করে না — user-facing
// error কখনো technical হবে না (Fallback Rules)।

const _CopCFG = (typeof AbashonConfig !== 'undefined') ? AbashonConfig : require('./config.js');
let _copDb = null; // DI: init(db) দিলে সেটা, নইলে global abashonDB (composition root: index.html)
const CopilotSvc = {
  /** dependency injection — টেস্ট/ভবিষ্যৎ রি-ইউজের জন্য @param {{functions:object,rpc:Function}} db */
  init(db) { _copDb = db || null; },
  /**
   * @param {string} query
   * @param {{history?:{role:string,text:string}[], listings?:object[], faq?:object|null}} opts
   * @returns {Promise<{text:string,confidence:string|null,sources:object[],lang:string|null}|null>} null → deterministic fallback
   */
  async ask(query, opts) {
    opts = opts || {};
    try {
      const db = _copDb || abashonDB;
      const { data, error } = await db.functions.invoke('ai-copilot', {
        body: {
          query,
          history: (opts.history || []).slice(-_CopCFG.COPILOT.HISTORY_SEND),
          listings: (opts.listings || []).slice(0, _CopCFG.COPILOT.LISTINGS_MAX),
          faq: opts.faq || null,
          profile: opts.profile || null,
          nlp: opts.nlp ? {
            lang: opts.nlp.lang,
            intents: (opts.nlp.intents || []).slice(0, 3).map(i => ({ intent: i.intent, confidence: i.confidence })),
            entities: opts.nlp.entities || null,
            negations: (opts.nlp.negations || []).slice(0, 5),
          } : null,
        },
      });
      if (error || !data || data.demo || data.code || !data.text) return null;
      return {
        text: data.text,
        confidence: data.confidence || null,   // 'high'|'medium'|'low' — retrieval score থেকে
        sources: Array.isArray(data.sources) ? data.sources : [], // source attribution (RAG docs)
        lang: data.lang || null,
        eventId: data.event_id || null,        // monitoring: 👍/👎 feedback-এর জন্য
        fbToken: data.fb_token || null,
      };
    } catch (e) {
      console.warn('[copilot] unavailable, falling back:', e && e.message);
      return null;
    }
  },

  /** 👍/👎 — response-এর event token দিয়ে; ব্যর্থতা নীরব (monitoring, UX নয়) */
  async feedback(eventId, fbToken, up) {
    if (!eventId || !fbToken) return false;
    try {
      const db = _copDb || abashonDB;
      const { data, error } = await db.rpc('ai_feedback', { p_event: eventId, p_token: fbToken, p_up: !!up });
      return !error && data === true;
    } catch (e) { return false; }
  },
};

if (typeof module !== 'undefined' && module.exports) module.exports = CopilotSvc; // Node টেস্টের জন্য
