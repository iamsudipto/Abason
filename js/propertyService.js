// js/propertyService.js
// phone কলাম column-level এ বন্ধ (শুধু get_property_contact() RPC দিয়ে পাওয়া যায়),
// তাই select('*') এখানে ব্যবহার করা যাবে না — পুরো query ব্যর্থ হয়ে যাবে।
const SAFE_COLS = 'id,created_at,title,area,rent,type,sizesqrt,bedrooms,furnished,tenant,available,city,owner_id,owner_name,baths,image,images,verified,description,latitude,longitude,advance_months,service_charge,available_from,balcony,floor_no,total_floors,gas,water_24h,generator,lift,parking,cctv,security_guard,facing,landmark,negotiable,min_stay_months,reserved_until,reserved_by';

const PropertySvc = {
  // Phase 12 — Trust breakdown: শুধু aggregate boolean+timestamp (owner_trust_summary RPC,
  // verification_events-এর RLS অক্ষত রেখে ন্যূনতম-প্রকাশ)। ব্যর্থ হলে null — detail page কখনো ভাঙবে না।
  async trustSummary(ownerId) {
    if (!ownerId) return null;
    try {
      const { data, error } = await abashonDB.rpc('owner_trust_summary', { p_owner_id: ownerId });
      return error ? null : data;
    } catch (e) { return null; }
  },
  async create(rec) {
    const { data, error } = await abashonDB.from('properties').insert(rec).select(SAFE_COLS).single();
    if (error) throw error;
    return data;
  },
  // DB-side pagination: PostgREST ডিফল্টে ১০০০ সারিতে থামে, তাই ব্যাচে ব্যাচে সব টানি
  // (নীরব truncation নয়)। ইন্টারঅ্যাকটিভ map/filter সব রেকর্ড মেমরিতে চায় বলে এখানে full
  // set আনা হয়; বড় স্কেলে (৫k+) UI যখন সার্ভার-সাইড ফিল্টারে যাবে তখন search() RPC-র
  // limit/offset পথ ব্যবহার্য।
  async fetchAll(pageSize = 1000, hardCap = 20000) {
    const out = [];
    for (let from = 0; from < hardCap; from += pageSize) {
      const { data, error } = await abashonDB
        .from('properties').select(SAFE_COLS)
        .order('created_at', { ascending: false })
        .range(from, from + pageSize - 1);
      if (error) throw error;
      if (!data || !data.length) break;
      out.push(...data);
      if (data.length < pageSize) break; // শেষ পেজ
    }
    return out;
  },
  async fetchBySeller(ownerId) {
    // মালিক নিজের listing দেখলেও phone আলাদাভাবেই লাগবে (তার নিজের ফোন, তাই আলাদা সমস্যা না)
    const { data, error } = await abashonDB
      .from('properties').select(SAFE_COLS).eq('owner_id', ownerId).order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  },

  // Module: Search — fuzzy, typo-tolerant, Bangla + Banglish (e.g. "dhanmoni" -> Dhanmondi,
  // "gulsan" -> Gulshan). Backed by pg_trgm similarity + substring match in Postgres
  // (search_properties RPC), so no external search service is needed.
  // filters: { city, minRent, maxRent, type, bedrooms, limit, offset }
  async search(q, filters = {}) {
    const { data, error } = await abashonDB.rpc('search_properties', {
      q: q || '',
      p_city: filters.city ?? null,
      p_min_rent: filters.minRent ?? null,
      p_max_rent: filters.maxRent ?? null,
      p_type: filters.type ?? null,
      p_bedrooms: filters.bedrooms ?? null,
      p_limit: filters.limit ?? 20,
      p_offset: filters.offset ?? 0,
    });
    if (error) throw error;
    return data;
  },

  // Autocomplete: area/city suggestions as the user types, typo-tolerant.
  // Returns [{ label, kind }] where kind is 'area' | 'city'.
  async autocomplete(q) {
    if (!q || q.trim().length < 2) return [];
    const { data, error } = await abashonDB.rpc('autocomplete_locations', { q: q.trim(), p_limit: 8 });
    if (error) throw error;
    return data;
  },

  // Module: Property AI (rule-based, no external AI service).
  // Rent suggestion for a new listing the seller is drafting — comparable-based,
  // same cascading scope logic as the existing rent_fairness indicator.
  async estimateRent({ city, area, type, bedrooms, sizesqrt }) {
    const { data, error } = await abashonDB.rpc('estimate_rent', {
      p_city: city, p_area: area, p_type: type,
      p_bedrooms: bedrooms ?? null, p_sizesqrt: sizesqrt ?? null,
    });
    if (error) throw error;
    return data;
  },

  // Similar listings for the detail page — same city/type, closest area/bedrooms/rent.
  async getSimilar(propertyId, limit = 6) {
    const { data, error } = await abashonDB.rpc('similar_properties', { prop_id: propertyId, p_limit: limit });
    if (error) throw error;
    return data;
  }
};

// Supabase row -> the shape pCard()/renderProps()/dashboard UI expects (t, img, v, ai, ...)
// Listing Score — real, rule-based (verification + completeness of submitted info),
// computed straight from the row so every card can show it with zero extra queries.
// Matches what the detail page already tells users: "not a guess."
function computePropertyScore(r){
  let s = 0;
  s += r.verified ? 35 : 0;
  const imgCount = (r.images && r.images.length) ? r.images.length : (r.image ? 1 : 0);
  s += Math.min(imgCount, 5) * 3;                                    // up to 15
  const descLen = (r.description || '').trim().length;
  s += descLen >= 100 ? 10 : descLen >= 30 ? 5 : 0;
  const amenities = ['lift','parking','generator','cctv','security_guard','water_24h'].filter(k => r[k]).length
                   + (r.gas && r.gas !== 'None' ? 1 : 0);
  s += Math.min(amenities, 7) * 2;                                    // up to 14
  s += r.landmark ? 3 : 0;
  s += r.negotiable ? 3 : 0;
  s += r.owner_name ? 5 : 0;
  s += r.image_review_status === 'clear' ? 10 : r.image_review_status === 'pending' ? 4 : 0;
  s += (r.floor_no != null && r.total_floors != null) ? 2 : 0;
  s += r.available_from ? 3 : 0;
  return Math.max(30, Math.min(98, Math.round(s)));                   // never a flat/fake 100
}

function dbRowToCard(r){
  const am = [];
  if (r.lift) am.push('Lift');
  if (r.parking) am.push('Car Parking');
  if (r.generator) am.push('Generator');
  if (r.cctv) am.push('CCTV');
  if (r.security_guard) am.push('Security');
  if (r.water_24h) am.push('Water');
  if (r.gas && r.gas !== 'None') am.push(r.gas === 'Line Gas' ? 'Gas Line' : 'Gas');
  return {
    id: r.id, t: r.title, city: r.city, area: r.area, ptype: r.type,
    type: 'RENT', rent: r.rent, beds: r.bedrooms, baths: r.baths, sqft: r.sizesqrt,
    furnished: r.furnished,
    floor: (r.floor_no!=null && r.total_floors!=null) ? `${r.floor_no}/${r.total_floors}` : '—',
    v: r.verified, ai: computePropertyScore(r),
    img: r.image, imgs: r.images && r.images.length ? r.images : (r.image ? [r.image] : []),
    desc: r.description || '', am, tags: [],
    ow: r.owner_name || 'Abashon Owner', oi: (r.owner_name||'A').trim()[0] || 'A',
    owner: r.owner_id, createdAt: new Date(r.created_at).getTime(),
    lat: r.latitude, lng: r.longitude,           // ম্যাপে বসানোর জন্য
    tenant: r.tenant, minStay: r.min_stay_months, landmark: r.landmark,
    svc: Number(r.service_charge)||0, adv: Number(r.advance_months)||0, // Phase 9 cost-breakdown-এর জন্য দরকার (আগে বাদ পড়েছিল)
    reserved: !!(r.reserved_until && new Date(r.reserved_until) > new Date()),
    reservedUntil: r.reserved_until || null,
    fromDB: true                                  // hardcoded ১০টা demo listing থেকে আলাদা করার জন্য
  };
}