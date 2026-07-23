// js/rankingService.js — আবাসন Intelligent Ranking Engine
//
// ১৩টা ফ্যাক্টরে listing র‍্যাংক করে: budget, commute/distance, crime(safety), flood,
// internet, school, hospital, noise(quietness), air quality, future value(growth),
// owner trust, listing quality — এবং প্রতিটা সুপারিশের ব্যাখ্যা তৈরি করে।
//
// সততা-নীতি (hallucination রোধ): দুই ধরনের ডেটা, দুই লেবেল —
//  • 'listing'      = বাস্তব listing ফিল্ড (ভাড়া, verified, ছবি, coords) — নির্ভরযোগ্য
//  • 'area-profile' = area_factor_profiles টেবিলের কিউরেটেড এলাকা-স্কোর — আনুমানিক,
//                     ব্যাখ্যায় সবসময় "(এলাকা-ভিত্তিক, আনুমানিক)" ট্যাগ থাকে
// কোনো ফ্যাক্টরের ডেটা না থাকলে সেটা স্কোরে ঢোকে না (weight পুনরায় normalize হয়) —
// বানানো সংখ্যা কখনো নয়।
//
// Personalization: ConvMemory প্রোফাইল দেখে weight বদলায় (family→school/hospital↑,
// student→budget/commute↑) — ব্যাখ্যাতেও সেটা বলা হয়।

const RankEngine = (() => {
  const CFG = (typeof AbashonConfig !== 'undefined') ? AbashonConfig : require('./config.js');
  const U = (typeof AbashonUtil !== 'undefined') ? AbashonUtil : require('./coreUtils.js');
  const cache = U.createTtlCache(CFG.RANKING.CACHE_KEY, CFG.RANKING.CACHE_TTL_MS);

  // base weights (sum ≈ 1) — প্রোফাইল অনুযায়ী multiplier বসে, তারপর normalize
  const FACTORS = [
    { key: 'budget',   label: 'বাজেট',        w: 0.16, src: 'listing' },
    { key: 'commute',  label: 'যাতায়াত/দূরত্ব', w: 0.11, src: 'listing' },
    { key: 'safety',   label: 'নিরাপত্তা',     w: 0.10, src: 'area', col: 'safety' },
    { key: 'flood',    label: 'বন্যা/জলাবদ্ধতা', w: 0.09, src: 'area', col: 'flood_safety' },
    { key: 'internet', label: 'ইন্টারনেট',     w: 0.06, src: 'area', col: 'internet' },
    { key: 'school',   label: 'স্কুল',         w: 0.07, src: 'area', col: 'school_access' },
    { key: 'hospital', label: 'হাসপাতাল',      w: 0.07, src: 'area', col: 'hospital_access' },
    { key: 'noise',    label: 'শব্দ/শান্ততা',   w: 0.06, src: 'area', col: 'quietness' },
    { key: 'air',      label: 'বাতাসের মান',    w: 0.05, src: 'area', col: 'air_quality' },
    { key: 'future',   label: 'ভবিষ্যৎ মূল্য',  w: 0.06, src: 'area', col: 'growth_outlook' },
    { key: 'trust',    label: 'মালিক-বিশ্বাস',  w: 0.09, src: 'listing' },
    { key: 'quality',  label: 'লিস্টিং-মান',    w: 0.08, src: 'listing' },
  ];

  let areaMap = null; // lower(area) → profile row; null = লোড হয়নি

  async function load(db) {
    if (areaMap) return true;
    const cached = (typeof localStorage !== 'undefined') ? cache.get() : null; // TTL cache: js/coreUtils.js
    if (Array.isArray(cached) && cached.length) {
      areaMap = new Map(cached.map(r => [String(r.area).toLowerCase(), r]));
      return true;
    }
    try {
      const { data, error } = await db.from('area_factor_profiles').select('*');
      if (error || !Array.isArray(data) || !data.length) return false;
      areaMap = new Map(data.map(r => [String(r.area).toLowerCase(), r]));
      if (typeof localStorage !== 'undefined') cache.set(data);
      return true;
    } catch (e) { return false; }
  }

  function haversineKm(lat1, lng1, lat2, lng2) {
    const R = 6371, toR = d => d * Math.PI / 180;
    const dLat = toR(lat2 - lat1), dLng = toR(lng2 - lng1);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toR(lat1)) * Math.cos(toR(lat2)) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  // পছন্দের এলাকার centroid — বাস্তব listing coords থেকে (fabricate নয়)
  function areaCentroid(allProps, areaKey) {
    let sLat = 0, sLng = 0, n = 0;
    for (const p of allProps || []) {
      if (p && p.area && String(p.area).toLowerCase() === areaKey && Number.isFinite(p.lat) && Number.isFinite(p.lng)) {
        sLat += p.lat; sLng += p.lng; n++;
      }
    }
    return n ? { lat: sLat / n, lng: sLng / n } : null;
  }

  // ── per-factor scorers → {score:0-5|null, note} ──
  function scoreBudget(p, eff) {
    const max = eff && eff.budgetMax;
    if (!max || !Number.isFinite(Number(p.rent))) return { score: null, note: '' };
    const r = Number(p.rent);
    if (r <= max * 0.85) return { score: 5, note: `বাজেটের বেশ নিচে (৳${r.toLocaleString()})` };
    if (r <= max) return { score: 4.5, note: `বাজেটের মধ্যে (৳${r.toLocaleString()} ≤ ৳${max.toLocaleString()})` };
    if (r <= max * 1.15) return { score: 3, note: `বাজেটের সামান্য উপরে (+${Math.round((r / max - 1) * 100)}%)` };
    return { score: 1.5, note: `বাজেট ছাড়িয়ে (৳${r.toLocaleString()})` };
  }
  function scoreCommute(p, eff, allProps) {
    const prefs = (eff && eff.areas) || [];
    if (!prefs.length) return { score: null, note: '' };
    const pArea = String(p.area || '').toLowerCase();
    if (prefs.some(a => String(a).toLowerCase() === pArea))
      return { score: 5, note: `পছন্দের এলাকাতেই (${p.area})` };
    if (Number.isFinite(p.lat) && Number.isFinite(p.lng)) {
      let best = null;
      for (const a of prefs) {
        const c = areaCentroid(allProps, String(a).toLowerCase());
        if (c) { const d = haversineKm(p.lat, p.lng, c.lat, c.lng); if (best === null || d < best.d) best = { d, a }; }
      }
      if (best) {
        const km = Math.round(best.d * 10) / 10;
        const s = best.d < 2 ? 4.5 : best.d < 5 ? 4 : best.d < 10 ? 3 : best.d < 20 ? 2 : 1;
        return { score: s, note: `${best.a} থেকে ~${km} কিমি` };
      }
    }
    return { score: 2.5, note: 'পছন্দের এলাকার বাইরে — যাতায়াত যাচাই করো' };
  }
  function scoreTrust(p) {
    if (p.v === true) return { score: 5, note: 'Verified মালিক ✅' };
    if (p.v === false) return { score: 2.5, note: 'মালিক এখনো verified নন' };
    return { score: null, note: '' };
  }
  function scoreQuality(p) {
    const checks = [
      Array.isArray(p.imgs) ? p.imgs.length > 1 : !!p.img,
      typeof p.desc === 'string' && p.desc.length > 80,
      Array.isArray(p.am) && p.am.length >= 4,
      p.svc !== undefined && p.svc !== null,
      p.adv !== undefined && p.adv !== null,
      Number.isFinite(p.lat) && Number.isFinite(p.lng),
    ];
    const done = checks.filter(Boolean).length;
    const score = Math.round((done / checks.length) * 5 * 10) / 10;
    return { score, note: `তথ্য-সম্পূর্ণতা ${done}/${checks.length}` };
  }
  function scoreArea(p, col, label) {
    if (!areaMap) return { score: null, note: '' };
    const prof = areaMap.get(String(p.area || '').toLowerCase());
    if (!prof || !Number.isFinite(Number(prof[col]))) return { score: null, note: `${label}: এলাকা-প্রোফাইল নেই` };
    return { score: Number(prof[col]), note: prof.note ? '' : '', profNote: prof.note };
  }

  // profile → weight multipliers (ব্যাখ্যায়ও ব্যবহৃত)
  function personalWeights(profile) {
    const mult = {}; const reasons = [];
    const fam = profile && (profile.tenantType === 'FAMILY' || (profile.familySize && profile.familySize >= 3));
    if (fam) { mult.school = 1.8; mult.hospital = 1.4; mult.noise = 1.2; reasons.push('পরিবার — স্কুল/হাসপাতাল বেশি গুরুত্ব'); }
    if (profile && profile.occupation === 'student') { mult.budget = 1.4; mult.commute = 1.4; mult.school = 0.4; reasons.push('স্টুডেন্ট — বাজেট/যাতায়াত বেশি গুরুত্ব'); }
    if (profile && profile.txType === 'SALE') { mult.future = 2.0; mult.budget = 1.2; reasons.push('কেনা — ভবিষ্যৎ মূল্য বেশি গুরুত্ব'); }
    return { mult, reasons };
  }

  /**
   * matches: [{p, sc, reason}] (aiMatch আউটপুট) → rankScore/factors/explain সহ, sorted
   * ctx: { entities (enriched), profile (ConvMemory.compact()), allProps (centroid-এর জন্য) }
   */
  function rank(matches, ctx) {
    if (!Array.isArray(matches) || matches.length < 2) return matches;
    ctx = ctx || {};
    const eff = ctx.entities || {};
    const { mult, reasons: personalReasons } = personalWeights(ctx.profile || {});
    const allProps = ctx.allProps || matches.map(m => m.p);

    const ranked = matches.map(m => {
      const p = m.p || {};
      const parts = [];
      for (const f of FACTORS) {
        let r;
        if (f.key === 'budget') r = scoreBudget(p, eff);
        else if (f.key === 'commute') r = scoreCommute(p, eff, allProps);
        else if (f.key === 'trust') r = scoreTrust(p);
        else if (f.key === 'quality') r = scoreQuality(p);
        else r = scoreArea(p, f.col, f.label);
        if (r.score === null) continue; // ডেটা নেই → স্কোরে ঢোকে না
        parts.push({ key: f.key, label: f.label, score: r.score, w: f.w * (mult[f.key] || 1),
                     src: f.src, note: r.note, profNote: r.profNote || '' });
      }
      const wSum = parts.reduce((a, x) => a + x.w, 0) || 1;
      const rankScore = Math.round(parts.reduce((a, x) => a + (x.w / wSum) * (x.score / 5), 0) * 100);
      return Object.assign({}, m, { rankScore, factors: parts });
    });

    ranked.sort((a, b) => (b.rankScore - a.rankScore) || (b.sc || 0) - (a.sc || 0));
    ranked._personalReasons = personalReasons;
    return ranked;
  }

  // এক লাইনের কার্ড-সারাংশ: সেরা ২ + দুর্বলতম ১ (থাকলে)
  function summary(m, maxLen) {
    if (!m || !Array.isArray(m.factors) || !m.factors.length) return '';
    const sorted = m.factors.slice().sort((a, b) => b.score - a.score);
    const bits = [];
    for (const f of sorted.slice(0, 2)) if (f.score >= 4) bits.push(`${f.label} ভালো${f.src === 'area' ? '*' : ''}`);
    const worst = sorted[sorted.length - 1];
    if (worst && worst.score <= 2) bits.push(`${worst.label} দুর্বল${worst.src === 'area' ? '*' : ''}`);
    let s = bits.join(' · ');
    if (maxLen && s.length > maxLen) s = s.slice(0, maxLen - 1) + '…';
    return s;
  }

  // পূর্ণ ব্যাখ্যা (LLM context / টুলটিপ): প্রতি ফ্যাক্টর + সততা-ডিসক্লেইমার
  function explain(m) {
    if (!m || !Array.isArray(m.factors)) return '';
    const lines = m.factors
      .slice().sort((a, b) => b.w - a.w)
      .map(f => {
        const tag = f.src === 'area' ? ' (এলাকা-ভিত্তিক, আনুমানিক)' : '';
        const extra = f.note ? ` — ${f.note}` : (f.profNote ? ` — ${f.profNote}` : '');
        return `${f.label}: ${f.score}/৫${tag}${extra}`;
      });
    lines.push('* এলাকা-স্কোরগুলো কিউরেটেড এলাকা-প্রোফাইল থেকে — নির্দিষ্ট বাসার পরিমাপ নয়; visit করে যাচাই করাই ভালো।');
    return lines.join('\n');
  }

  function ready() { return areaMap !== null; }
  function _setProfilesForTest(rows) { areaMap = new Map(rows.map(r => [String(r.area).toLowerCase(), r])); }

  return { load, rank, summary, explain, ready, _setProfilesForTest, _haversineKm: haversineKm };
})();

if (typeof module !== 'undefined' && module.exports) module.exports = RankEngine;
