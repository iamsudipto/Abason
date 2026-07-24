// js/nlp.js — আবাসন Enterprise NLP engine
//
// Pure-function, dependency-free, ব্রাউজার + Node (tests) দুই জায়গায় চলে।
// Pipeline: normalize → language detect → fuzzy spelling repair → tokenization →
// negation detection (scope-aware) → entity extraction → multi-intent classification
// (confidence সহ) → query expansion। এর ফলাফল deterministic property-filter এবং
// ai-copilot-এর QUERY_ANALYSIS grounding — দুই জায়গাতেই ব্যবহৃত হয়।

const AbashonNLP = (() => {

  // ── ১) Canonical dictionaries ──
  const BN_DIGITS = { '০':'0','১':'1','২':'2','৩':'3','৪':'4','৫':'5','৬':'6','৭':'7','৮':'8','৯':'9' };

  // Romanized-Bangla / misspelling / বাংলা → canonical token
  const VARIANTS = {
    basa:'basha', bassa:'basha', basha:'basha', 'বাসা':'basha', 'বাড়ি':'bari', 'বাড়ী':'bari', bari:'bari',
    vara:'bhara', bara:'bhara', vhara:'bhara', bhara:'bhara', bharaa:'bhara', 'ভাড়া':'bhara',
    flat:'flat', flet:'flat', 'ফ্ল্যাট':'flat', house:'house', home:'house', apartment:'flat',
    ghor:'room', rum:'room', room:'room', 'রুম':'room', 'ঘর':'room', bed:'bed', 'বেড':'bed', bhk:'bhk',
    need:'need', lagbe:'lagbe', 'লাগবে':'lagbe', chai:'chai', 'চাই':'chai', want:'need',
    khujchi:'khujchi', khunji:'khujchi', khujtesi:'khujchi', 'খুঁজছি':'khujchi', 'খুজছি':'khujchi', dorkar:'need', 'দরকার':'need',
    kinbo:'kinbo', kinmu:'kinbo', 'কিনব':'kinbo', 'কিনবো':'kinbo', kena:'kena', 'কেনা':'kena', buy:'buy', kinte:'kinbo', purchase:'buy',
    sell:'sell', bikri:'sell', 'বিক্রি':'sell', bechbo:'sell',
    mash:'month', mas:'month', month:'month', 'মাস':'month',
    hajar:'hajar', hazar:'hajar', hazr:'hajar', 'হাজার':'hajar', k:'hajar',
    lakh:'lakh', lac:'lakh', 'লাখ':'lakh', tk:'taka', taka:'taka', 'টাকা':'taka', budget:'budget', 'বাজেট':'budget',
    bachelor:'bachelor', bechelor:'bachelor', bachelar:'bachelor', becholor:'bachelor', 'ব্যাচেলর':'bachelor',
    family:'family', famili:'family', 'ফ্যামিলি':'family', sublet:'sublet', 'সাবলেট':'sublet',
    female:'female', 'মেয়ে':'female', girls:'female',
    agrim:'advance', oggrim:'advance', advance:'advance', 'অগ্রিম':'advance', jamanat:'deposit', 'জামানত':'deposit',
    ucched:'eviction', uched:'eviction', eviction:'eviction', 'উচ্ছেদ':'eviction', notice:'notice', 'নোটিশ':'notice',
    roshid:'receipt', rosid:'receipt', receipt:'receipt', 'রসিদ':'receipt', ain:'law', law:'law', 'আইন':'law',
    lift:'lift', elevator:'lift', 'লিফট':'lift', parking:'parking', garaz:'parking', garage:'parking', 'পার্কিং':'parking', 'গ্যারেজ':'parking',
    generator:'generator', 'জেনারেটর':'generator', gas:'gas', 'গ্যাস':'gas',
    furnished:'furnished', 'ফার্নিশড':'furnished', balcony:'balcony', 'বারান্দা':'balcony', 'ব্যালকনি':'balcony', chad:'roof', 'ছাদ':'roof', cctv:'cctv',
    shift:'shifting', shifting:'shifting', movers:'shifting', 'শিফট':'shifting', 'শিফটিং':'shifting', 'স্থানান্তর':'shifting',
    chukti:'agreement', agreement:'agreement', contract:'agreement', 'চুক্তি':'agreement', 'চুক্তিপত্র':'agreement',
    fraud:'fraud', scam:'fraud', protarona:'fraud', 'প্রতারণা':'fraud', 'ভুয়া':'fraud', fake:'fraud',
    negotiate:'negotiate', dorkoshakoshi:'negotiate', 'দরকষাকষি':'negotiate', discount:'negotiate', 'কমানো':'negotiate',
    interior:'interior', 'ইন্টেরিয়র':'interior', design:'interior',
    kivabe:'how', kibhabe:'how', how:'how', 'কিভাবে':'how', 'কীভাবে':'how', verify:'verify', 'যাচাই':'verify',
    hi:'greet', hello:'greet', salam:'greet', assalamualaikum:'greet', 'হাই':'greet', 'হ্যালো':'greet', 'সালাম':'greet',
    sasta:'cheap', 'সস্তা':'cheap', cheap:'cheap', kom:'low', 'কম':'low', dami:'premium', 'দামি':'premium', premium:'premium',
    pet:'pet', cat:'pet', dog:'pet', 'বিড়াল':'pet', 'কুকুর':'pet', 'পোষা':'pet',
    student:'student', 'স্টুডেন্ট':'student', 'ছাত্র':'student', 'ছাত্রী':'student',
    chakri:'job', chakuri:'job', 'চাকরি':'job', job:'job', service:'job',
    business:'business', 'ব্যবসা':'business', doctor:'doctor', 'ডাক্তার':'doctor', engineer:'engineer', 'ইঞ্জিনিয়ার':'engineer',
    tola:'floortok', 'তলা':'floortok', floor:'floortok', nich:'ground', 'নিচ':'ground', ground:'ground', 'গ্রাউন্ড':'ground', top:'top',
    office:'office', 'অফিস':'office', hostel:'hostel', 'হোস্টেল':'hostel', mess:'mess', 'মেস':'mess',
    jon:'person', 'জন':'person', member:'person', 'সদস্য':'person',
    na:'NEG', nai:'NEG', nei:'NEG', 'না':'NEG', 'নাই':'NEG', 'নেই':'NEG', not:'NEG', dont:'NEG', "don't":'NEG', no:'NEG',
    chara:'EXCL', chhara:'EXCL', 'ছাড়া':'EXCL', bade:'EXCL', baade:'EXCL', 'বাদে':'EXCL', without:'EXCL', 'ব্যতীত':'EXCL',
  };

  // ক্যানোনিকাল → দ্বিভাষিক expansion (embedding/সার্চ recall)
  const EXPAND = {
    basha:'বাসা house apartment', bari:'বাড়ি house', bhara:'ভাড়া rent', flat:'ফ্ল্যাট apartment', room:'রুম',
    kinbo:'কেনা buy purchase', kena:'কেনা buy', buy:'কেনা', advance:'অগ্রিম deposit', eviction:'উচ্ছেদ',
    receipt:'রসিদ', law:'আইন', lift:'লিফট elevator', parking:'পার্কিং', shifting:'শিফটিং moving movers',
    agreement:'চুক্তিপত্র contract', fraud:'প্রতারণা scam', bachelor:'ব্যাচেলর', family:'ফ্যামিলি',
    negotiate:'দরকষাকষি', cheap:'সস্তা কম দাম affordable', month:'মাস',
  };

  const AREAS = [
    { key:'gulshan', bn:'গুলশান', city:'Dhaka' }, { key:'banani', bn:'বনানী', city:'Dhaka' },
    { key:'baridhara', bn:'বারিধারা', city:'Dhaka' }, { key:'dhanmondi', bn:'ধানমন্ডি', city:'Dhaka' },
    { key:'lalmatia', bn:'লালমাটিয়া', city:'Dhaka' }, { key:'mirpur', bn:'মিরপুর', city:'Dhaka' },
    { key:'uttara', bn:'উত্তরা', city:'Dhaka' }, { key:'mohammadpur', bn:'মোহাম্মদপুর', city:'Dhaka' },
    { key:'shyamoli', bn:'শ্যামলী', city:'Dhaka' }, { key:'bashundhara', bn:'বসুন্ধরা', city:'Dhaka' },
    { key:'badda', bn:'বাড্ডা', city:'Dhaka' }, { key:'rampura', bn:'রামপুরা', city:'Dhaka' },
    { key:'mohakhali', bn:'মহাখালী', city:'Dhaka' }, { key:'motijheel', bn:'মতিঝিল', city:'Dhaka' },
    { key:'wari', bn:'ওয়ারী', city:'Dhaka' }, { key:'khulshi', bn:'খুলশী', city:'Chattogram' },
    { key:'nasirabad', bn:'নাসিরাবাদ', city:'Chattogram' }, { key:'agrabad', bn:'আগ্রাবাদ', city:'Chattogram' },
    { key:'ambarkhana', bn:'আম্বরখানা', city:'Sylhet' }, { key:'zindabazar', bn:'জিন্দাবাজার', city:'Sylhet' },
  ];
  const AREA_LOOKUP = {};
  AREAS.forEach(a => { AREA_LOOKUP[a.key] = a; AREA_LOOKUP[a.bn] = a; });
  const CITIES = { dhaka:'Dhaka', 'ঢাকা':'Dhaka', chattogram:'Chattogram', chittagong:'Chattogram', ctg:'Chattogram', 'চট্টগ্রাম':'Chattogram', sylhet:'Sylhet', 'সিলেট':'Sylhet' };

  const AMENITY_SET = new Set(['lift','parking','generator','gas','furnished','balcony','cctv','roof']);
  const SEARCH_NOUNS = new Set(['basha','bari','flat','house','room']);
  const SEARCH_VERBS = new Set(['chai','lagbe','need','khujchi']);

  // ── ২) Helpers ──
  function lev1(a, b) { // Levenshtein distance ≤1? (দ্রুত পথ — spelling repair-এর জন্য)
    if (a === b) return true;
    const la = a.length, lb = b.length;
    if (Math.abs(la - lb) > 1) return false;
    let i = 0, j = 0, edits = 0;
    while (i < la && j < lb) {
      if (a[i] === b[j]) { i++; j++; continue; }
      if (++edits > 1) return false;
      if (la > lb) i++; else if (lb > la) j++; else { i++; j++; }
    }
    return edits + (la - i) + (lb - j) <= 1;
  }
  const VARIANT_KEYS = Object.keys(VARIANTS).filter(k => /^[a-z']+$/.test(k) && k.length >= 4);
  const AREA_KEYS = AREAS.map(a => a.key);

  function canonToken(tok) {
    if (VARIANTS[tok]) return VARIANTS[tok];
    if (AREA_LOOKUP[tok]) return tok;
    if (/^[a-z']+$/.test(tok) && tok.length >= 5) { // fuzzy শুধু latin ও ≥5 অক্ষরে —
      // ছোট শব্দে false positive হয় (যেমন "pari"→"wari", "pari"→"bari")
      for (const k of AREA_KEYS) if (k.length >= 5 && lev1(tok, k)) return k;
      for (const k of VARIANT_KEYS) if (k.length >= 5 && lev1(tok, k)) return VARIANTS[k];
    }
    return tok;
  }

  function detectLanguage(q) {
    const bn = (q.match(/[\u0980-\u09FF]/g) || []).length;
    const en = (q.match(/[a-zA-Z]/g) || []).length;
    if (bn && en) return 'mixed';
    if (bn) return 'bn';
    if (!en) return 'en';
    // পুরোটা latin — romanized Bangla কি না: canonical bangla-উৎস টোকেনের অনুপাত দেখে
    const toks = q.toLowerCase().split(/[^a-z']+/).filter(Boolean);
    const bangl = toks.filter(t => { const c = VARIANTS[t]; return c && !['need','buy','law','how','greet','cctv'].includes(c) && /^[a-z]/.test(t) && ['basha','bari','bhara','lagbe','chai','khujchi','kinbo','hajar','month','agrim','advance','shifting','chukti','fraud'].includes(c); }).length;
    return bangl >= 1 && bangl >= Math.ceil(toks.length * 0.2) ? 'banglish' : 'en';
  }

  function normalize(raw) {
    let q = String(raw || '').trim().replace(/\s+/g, ' ');
    q = q.replace(/[\u09E6-\u09EF]/g, d => BN_DIGITS[d] || d);
    q = q.replace(/([0-9]+)\s*k\b/gi, (_, n) => String(Number(n) * 1000)); // 30k → 30000
    return q;
  }

  function tokenize(normalized) {
    return normalized.toLowerCase()
      .split(/[^a-z0-9\u0980-\u09FF']+/).filter(Boolean)
      .map(t => ({ raw: t, canon: canonToken(t) }));
  }

  // ── ৩) Negation (scope-aware) ──
  // NEG (না/not/nai): পেছনের ২ টোকেনের মধ্যে target খোঁজে; EXCL (ছাড়া/without/bade): ঠিক আগের টোকেন।
  // clause-boundary (but/কিন্তু/and ইত্যাদি) পেরিয়ে scan করে না — নইলে "X lagbe but I don't know Y"-তে
  // "don't" ভুলভাবে আগের clause-এর "lagbe"-কে negate করে ফেলত (আসল বাগ, ১১০০-query eval-এ ধরা পড়েছে)।
  const CLAUSE_BREAK = new Set(['but','কিন্তু','and','আর','however','যদিও','তবে','though','যাইহোক']);
  function detectNegations(tokens) {
    const out = [];
    const PRIORITY = ['amenity','area','tenant','buy','rent','search'];
    for (let i = 0; i < tokens.length; i++) {
      const c = tokens[i].canon;
      if (c !== 'NEG' && c !== 'EXCL') continue;
      const span = c === 'EXCL' ? 1 : 3;
      const found = []; // window-এর সব candidate নিয়ে priority-তে বাছি —
      // "parking lagbe na": verb(lagbe) আগে এলেও negation-টা আসলে parking-এর
      for (let j = i - 1; j >= Math.max(0, i - span); j--) {
        const t = tokens[j].canon;
        if (CLAUSE_BREAK.has(t)) break; // clause-boundary — আরও পেছনে scan করা বন্ধ
        if (AMENITY_SET.has(t)) found.push({ target: 'amenity', token: t });
        else if (t === 'pet') found.push({ target: 'pet', token: t });
        else if (AREA_LOOKUP[t]) found.push({ target: 'area', token: AREA_LOOKUP[t].key });
        else if (t === 'bachelor' || t === 'family' || t === 'female') found.push({ target: 'tenant', token: t });
        else if (t === 'kinbo' || t === 'kena' || t === 'buy') found.push({ target: 'buy', token: t });
        else if (t === 'bhara') found.push({ target: 'rent', token: t });
        else if (SEARCH_VERBS.has(t) || SEARCH_NOUNS.has(t)) found.push({ target: 'search', token: t });
      }
      if (found.length) {
        found.sort((a, b) => PRIORITY.indexOf(a.target) - PRIORITY.indexOf(b.target));
        out.push(found[0]);
      }
    }
    // "বাসা চাই না" জাতীয় noun+verb+না জোড়ায় search একবারই গুনি
    const seen = new Set();
    return out.filter(n => { const k = n.target + ':' + n.token; if (seen.has(k)) return false; seen.add(k); return true; });
  }

  // ── ৪) Entity extraction ──
  function extractEntities(normalized, tokens, negations) {
    const lower = normalized.toLowerCase();
    const e = { areas: [], excludedAreas: [], city: null, budgetMin: null, budgetMax: null,
                bedrooms: null, tenantType: null, txType: null, amenities: [], excludedAmenities: [], durationMonths: null };

    const negAreas = new Set(negations.filter(n => n.target === 'area').map(n => n.token));
    const negAmen = new Set(negations.filter(n => n.target === 'amenity').map(n => n.token));
    const negatedBuy = negations.some(n => n.target === 'buy');
    const negatedRent = negations.some(n => n.target === 'rent');

    for (const t of tokens) {
      const c = t.canon;
      if (AREA_LOOKUP[c]) {
        const a = AREA_LOOKUP[c];
        (negAreas.has(a.key) ? e.excludedAreas : e.areas).includes(a.key) ||
          (negAreas.has(a.key) ? e.excludedAreas : e.areas).push(a.key);
        e.city = e.city || a.city;
      }
      if (CITIES[c] || CITIES[t.raw]) e.city = CITIES[c] || CITIES[t.raw];
      if (AMENITY_SET.has(c)) (negAmen.has(c) ? e.excludedAmenities : e.amenities).includes(c) ||
        (negAmen.has(c) ? e.excludedAmenities : e.amenities).push(c);
      if (c === 'bachelor') e.tenantType = 'BACHELOR';
      if (c === 'family') e.tenantType = e.tenantType || 'FAMILY';
      if (c === 'female') e.tenantType = 'FEMALE';
    }

    // budget: "30000-40000" / "30 hajar" / "৩০ হাজার" (আগেই digit-normalized) / "2 lakh"
    const range = lower.match(/(\d{1,3})\s*(?:-|to|থেকে)\s*(\d{1,3})\s*(?:hajar|hazar|হাজার)/) ||
                  lower.match(/(\d{4,6})\s*(?:-|to|থেকে)\s*(\d{4,6})/);
    if (range) {
      const mul = /hajar|hazar|হাজার/.test(range[0]) ? 1000 : 1;
      e.budgetMin = Number(range[1]) * mul; e.budgetMax = Number(range[2]) * mul;
    } else {
      const hz = lower.match(/(\d{1,3})\s*(?:hajar|hazar|হাজার)/);
      const lk = lower.match(/(\d{1,2}(?:\.\d)?)\s*(?:lakh|lac|লাখ)/);
      const plain = lower.match(/(?:budget|বাজেট|৳|taka|tk|টাকা)\s*(\d{4,6})/) || lower.match(/(\d{4,6})\s*(?:taka|tk|টাকা|৳)/);
      const moddhe = lower.match(/(\d{4,6})\s*(?:er\s*moddhe|এর\s*মধ্যে|moddhe|মধ্যে|er\s*vitore|ভিতরে)/);
      if (hz) e.budgetMax = Number(hz[1]) * 1000;
      else if (lk) e.budgetMax = Math.round(Number(lk[1]) * 100000);
      else if (plain) e.budgetMax = Number(plain[1]);
      else if (moddhe) e.budgetMax = Number(moddhe[1]);
      else {
        // search-context এ একা দাঁড়ানো ৪-৬ digit সংখ্যা = বাজেট ধরে নিই ("30000 e basha")
        const lone = lower.match(/(?:^|\s)(\d{4,6})(?:\s|$)/);
        const hasSearchCtx = tokens.some(t => SEARCH_NOUNS.has(t.canon) || t.canon === 'bhara');
        if (lone && hasSearchCtx) e.budgetMax = Number(lone[1]);
      }
    }

    const bed = lower.match(/(\d)\s*(?:bhk|bed(?:room)?s?|বেড|রুম|room|rum|ghor)/);
    if (bed) e.bedrooms = Number(bed[1]);
    const dur = lower.match(/(\d{1,2})\s*(?:mash|mas|month|মাস)/);
    if (dur) e.durationMonths = Number(dur[1]);

    // pet / occupation / floor / familySize / propertyType
    const canonSet = new Set(tokens.map(t => t.canon));
    if (canonSet.has('pet')) e.pet = negations.some(n => n.target === 'pet') ? false : true;
    else e.pet = null;
    e.occupation = ['student','job','business','doctor','engineer'].find(o => canonSet.has(o)) || null;
    const fl = lower.match(/(\d{1,2})\s*(?:tola|তলা|no\.?\s*floor|floor)/);
    if (fl) e.preferredFloor = Number(fl[1]);
    else if (canonSet.has('ground')) e.preferredFloor = 0;
    else if (canonSet.has('top') && canonSet.has('floortok')) e.preferredFloor = 'top';
    else e.preferredFloor = null;
    const fs = lower.match(/(\d{1,2})\s*(?:jon|জন|member|সদস্য)/);
    e.familySize = fs ? Number(fs[1]) : null;
    if (e.familySize && !e.tenantType) e.tenantType = 'FAMILY';
    e.propertyType = canonSet.has('office') ? 'OFFICE'
      : (canonSet.has('mess') || canonSet.has('hostel')) ? 'MESS'
      : canonSet.has('sublet') ? 'SUBLET'
      : canonSet.has('flat') ? 'FLAT'
      : (canonSet.has('bari') || canonSet.has('house')) ? 'HOUSE'
      : canonSet.has('room') ? 'ROOM' : null;

    const hasBuy = tokens.some(t => ['kinbo','kena','buy'].includes(t.canon));
    const hasRent = tokens.some(t => t.canon === 'bhara');
    if (negatedBuy) e.txType = 'RENT';
    else if (hasBuy) e.txType = 'SALE';
    else if (hasRent && !negatedRent) e.txType = 'RENT';
    return e;
  }

  // ── ৫) Multi-intent classification + confidence ──
  const INTENT_RULES = {
    property_search: { toks:['basha','bari','flat','house','room','bhk','bed','khujchi','chai','lagbe','need','bhara','cheap','premium','office','mess','hostel','sublet','এলাকা','এলাকায়','area','neighborhood','পাড়া'], w:1 },
    buy_guidance:    { toks:['kinbo','kena','buy','দলিল','খতিয়ান','নামজারি','dolil','khotian','namjari','registration'], w:2 },
    rent_law:        { toks:['advance','deposit','eviction','notice','receipt','law'], w:2 },
    shifting:        { toks:['shifting','moving','move','বদলাতে','bodlate','shift','সরাতে','sorate'], w:3 },
    fraud_check:     { toks:['fraud','verified','genuine','আসল','real','জালিয়াতি','প্রতারণা','ভুয়া','vua','scam'], w:3 },
    agreement:       { toks:['agreement'], w:3 },
    price_negotiation:{ toks:['negotiate','koto','কত','price','দাম','dam'], w:3 },
    platform_help:   { toks:['how','verify','account','login','visit','help','সাহায্য','sahajjo'], w:1 },
    interior:        { toks:['interior','মিস্ত্রি','mistri','plumber','electrician','handyman','মেরামত','repair'], w:3 },
    greeting:        { toks:['greet'], w:2 },
  };
  function classifyIntents(tokens, entities, negations) {
    const canon = tokens.map(t => t.canon);
    const scores = {};
    for (const [intent, rule] of Object.entries(INTENT_RULES)) {
      let s = 0;
      for (const k of rule.toks) if (canon.includes(k)) s += rule.w;
      scores[intent] = s;
    }
    if (entities.areas.length) scores.property_search += 2;
    if (entities.budgetMax) scores.property_search += 2;
    if (entities.bedrooms) scores.property_search += 1;
    if (negations.some(n => n.target === 'search')) scores.property_search = 0;
    if (negations.some(n => n.target === 'buy')) scores.buy_guidance = 0;
    const total = Object.values(scores).reduce((a, b) => a + b, 0);
    let intents = Object.entries(scores).filter(([, s]) => s > 0)
      .map(([intent, s]) => ({ intent, score: s, confidence: Math.round((s / total) * 100) / 100 }))
      .sort((a, b) => b.score - a.score);
    // multi-intent: score≥2 এবং শীর্ষের অন্তত অর্ধেক
    const top = intents[0];
    intents = intents.filter(x => x === top || (x.score >= 2 && x.score >= top.score * 0.5));
    if (!intents.length) intents = [{ intent: negations.some(n => n.target === 'search') ? 'not_looking' : 'other', score: 0, confidence: 0.3 }];
    return intents;
  }

  function expandQuery(normalized, tokens) {
    const extra = [];
    for (const t of tokens) if (EXPAND[t.canon]) extra.push(EXPAND[t.canon]);
    const hz = normalized.toLowerCase().match(/(\d{1,3})\s*(?:hajar|hazar|হাজার)/);
    if (hz) extra.push(String(Number(hz[1]) * 1000));
    return extra.length ? normalized + ' ' + [...new Set(extra)].join(' ') : normalized;
  }

  // ── ৬) Deterministic match post-filter (negation/entity-aware) ──
  function filterMatches(matches, analysis) {
    if (!Array.isArray(matches) || !matches.length) return matches;
    const e = analysis.entities;
    return matches.filter(({ p }) => {
      if (!p) return true;
      if (e.txType === 'RENT' && String(p.type).toUpperCase() === 'SALE') return false;
      if (e.txType === 'SALE' && String(p.type).toUpperCase() === 'RENT') return false;
      if (e.excludedAreas.length && p.area && e.excludedAreas.includes(String(p.area).toLowerCase())) return false;
      if (e.budgetMax && Number(p.rent) > e.budgetMax * 1.15) return false;
      if (e.budgetMin && Number(p.rent) < e.budgetMin * 0.85) return false;
      if (e.bedrooms && p.beds && Number(p.beds) !== e.bedrooms) return false;
      return true;
    });
  }

  function analyze(raw) {
    const normalized = normalize(raw);
    const tokens = tokenize(normalized);
    const lang = detectLanguage(normalized);
    const negations = detectNegations(tokens);
    const entities = extractEntities(normalized, tokens, negations);
    const intents = classifyIntents(tokens, entities, negations);
    return {
      raw: String(raw || ''), normalized, lang,
      tokens: tokens.map(t => t.canon),
      negations, entities, intents,
      primaryIntent: intents[0].intent,
      confidence: intents[0].confidence,
      expandedQuery: expandQuery(normalized, tokens),
    };
  }

  return { analyze, normalize, tokenize, detectLanguage, detectNegations, extractEntities, classifyIntents, filterMatches };
})();

if (typeof module !== 'undefined' && module.exports) module.exports = AbashonNLP;
