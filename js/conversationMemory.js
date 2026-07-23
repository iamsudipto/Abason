// js/conversationMemory.js — আবাসন Conversation Memory
//
// দায়িত্ব (SRP): কথোপকথন জুড়ে ব্যবহারকারীর প্রেফারেন্স মনে রাখা —
// budget, preferred area, family size, parking, pet, occupation, preferred floor,
// property type, previous searches — এবং সেই context দিয়ে (ক) deterministic ফলাফল
// enrich/re-rank করা, (খ) copilot-কে USER_PROFILE পাঠানো যাতে জানা তথ্য আবার জিজ্ঞেস না করে।
//
// Merge policy: প্রতিটা scalar slot-এ "latest wins"; area/amenity list-এ recency-ordered unique;
// query-র নিজের entity সবসময় memory-কে override করে (enrich)। Persistence: localStorage
// (device-scoped, ব্যর্থ হলে in-memory এ নিঃশব্দ fallback) — Clear করা যায় ConvMemory.clear() দিয়ে।

const ConvMemory = (() => {
  // কেন্দ্রীয় config/util — browser-এ global, Node টেস্টে require (একই উৎস)
  const CFG = (typeof AbashonConfig !== 'undefined') ? AbashonConfig : require('./config.js');
  const U = (typeof AbashonUtil !== 'undefined') ? AbashonUtil : require('./coreUtils.js');
  const KEY = CFG.MEMORY.STORAGE_KEY;
  const MAX_AREAS = CFG.MEMORY.MAX_AREAS, MAX_SEARCHES = CFG.MEMORY.MAX_SEARCHES;

  const empty = () => ({
    budgetMin: null, budgetMax: null,
    areas: [], excludedAreas: [], city: null,
    familySize: null, tenantType: null, bedrooms: null,
    parking: null,           // true=লাগবে, false=বাদ, null=অজানা
    pet: null,               // true=পোষা প্রাণী আছে/আনবে, false=নেই
    occupation: null,        // student|job|business|doctor|engineer
    preferredFloor: null,    // সংখ্যা | 0=নিচতলা | 'top'
    propertyType: null,      // FLAT|HOUSE|ROOM|OFFICE|MESS|SUBLET
    txType: null,            // RENT|SALE
    amenities: [], excludedAmenities: [],
    durationMonths: null,
    searches: [],            // {q, ts} — সাম্প্রতিকটা আগে, deduped
    updatedAt: null,
  });

  let mem = empty();
  let storageOk = true;

  function load() {
    const parsed = U.storageGetJSON(KEY, null);
    if (parsed) mem = Object.assign(empty(), parsed);
  }
  function save() {
    if (!storageOk) return;
    storageOk = U.storageSetJSON(KEY, mem);
  }
  if (typeof localStorage !== 'undefined') load();

  function mergeList(target, items, max) {
    for (const it of items || []) {
      const i = target.indexOf(it);
      if (i >= 0) target.splice(i, 1);
      target.unshift(it); // recency: নতুনটা সামনে
    }
    if (target.length > max) target.length = max;
  }

  // NLP analysis → memory তে শোষণ (query-প্রমাণিত তথ্যই কেবল ঢোকে)
  function absorb(nlp, rawQuery) {
    if (!nlp || !nlp.entities) return;
    const e = nlp.entities;
    if (e.budgetMax) { mem.budgetMax = e.budgetMax; mem.budgetMin = e.budgetMin || null; }
    mergeList(mem.areas, e.areas, MAX_AREAS);
    mergeList(mem.excludedAreas, e.excludedAreas, MAX_AREAS);
    mem.areas = mem.areas.filter(a => !mem.excludedAreas.includes(a));
    if (e.city) mem.city = e.city;
    if (e.familySize) mem.familySize = e.familySize;
    if (e.tenantType) mem.tenantType = e.tenantType;
    if (e.bedrooms) mem.bedrooms = e.bedrooms;
    if (e.amenities && e.amenities.includes('parking')) mem.parking = true;
    if (e.excludedAmenities && e.excludedAmenities.includes('parking')) mem.parking = false;
    if (e.pet === true || e.pet === false) mem.pet = e.pet;
    if (e.occupation) mem.occupation = e.occupation;
    if (e.preferredFloor !== null && e.preferredFloor !== undefined) mem.preferredFloor = e.preferredFloor;
    if (e.propertyType) mem.propertyType = e.propertyType;
    if (e.txType) mem.txType = e.txType;
    mergeList(mem.amenities, (e.amenities || []).filter(a => a !== 'parking'), 6);
    mergeList(mem.excludedAmenities, (e.excludedAmenities || []).filter(a => a !== 'parking'), 6);
    if (e.durationMonths) mem.durationMonths = e.durationMonths;

    // previous searches: শুধু বাসা-খোঁজা প্রশ্ন, dedupe (case-insensitive)
    if (nlp.primaryIntent === 'property_search' && rawQuery) {
      const norm = String(rawQuery).trim().toLowerCase();
      mem.searches = mem.searches.filter(s => s.q.trim().toLowerCase() !== norm);
      mem.searches.unshift({ q: String(rawQuery).trim().slice(0, 120), ts: Date.now() });
      if (mem.searches.length > MAX_SEARCHES) mem.searches.length = MAX_SEARCHES;
    }
    mem.updatedAt = Date.now();
    save();
  }

  // query entities + memory → effective entities (query জিতে, memory ফাঁক পূরণ করে)
  function enrich(nlp) {
    const q = (nlp && nlp.entities) || {};
    const eff = Object.assign({}, q);
    if (!eff.budgetMax && mem.budgetMax) { eff.budgetMax = mem.budgetMax; eff.budgetMin = mem.budgetMin; eff._budgetFromMemory = true; }
    if ((!eff.areas || !eff.areas.length) && mem.areas.length) { eff.areas = mem.areas.slice(0, 3); eff._areasFromMemory = true; }
    if ((!eff.excludedAreas || !eff.excludedAreas.length) && mem.excludedAreas.length) eff.excludedAreas = mem.excludedAreas.slice();
    if (!eff.bedrooms && mem.bedrooms) eff.bedrooms = mem.bedrooms;
    if (!eff.txType && mem.txType) eff.txType = mem.txType;
    if (!eff.tenantType && mem.tenantType) eff.tenantType = mem.tenantType;
    if (!eff.propertyType && mem.propertyType) eff.propertyType = mem.propertyType;
    return eff;
  }

  // preferred-area boost: query-তে এলাকা না থাকলে memory-র পছন্দের এলাকা আগে (stable)
  function rankBoost(matches, effEntities) {
    if (!Array.isArray(matches) || matches.length < 2) return matches;
    if (!effEntities || !effEntities._areasFromMemory || !effEntities.areas || !effEntities.areas.length) return matches;
    const pref = new Set(effEntities.areas.map(a => String(a).toLowerCase()));
    return matches
      .map((m, i) => ({ m, i, hit: m.p && m.p.area && pref.has(String(m.p.area).toLowerCase()) ? 1 : 0 }))
      .sort((a, b) => (b.hit - a.hit) || (a.i - b.i))
      .map(x => x.m);
  }

  // copilot-এর USER_PROFILE payload (compact, sanitizable)
  function compact() {
    const p = {
      budgetMin: mem.budgetMin, budgetMax: mem.budgetMax,
      areas: mem.areas.slice(0, 4), excludedAreas: mem.excludedAreas.slice(0, 4), city: mem.city,
      familySize: mem.familySize, tenantType: mem.tenantType, bedrooms: mem.bedrooms,
      parking: mem.parking, pet: mem.pet, occupation: mem.occupation,
      preferredFloor: mem.preferredFloor, propertyType: mem.propertyType, txType: mem.txType,
      durationMonths: mem.durationMonths,
      recentSearches: mem.searches.slice(0, 5).map(s => s.q),
    };
    const has = Object.values(p).some(v => Array.isArray(v) ? v.length : (v !== null && v !== undefined));
    return has ? p : null;
  }

  function clear() { mem = empty(); save(); }
  function snapshot() { return JSON.parse(JSON.stringify(mem)); }

  return { absorb, enrich, rankBoost, compact, clear, snapshot };
})();

if (typeof module !== 'undefined' && module.exports) module.exports = ConvMemory;
