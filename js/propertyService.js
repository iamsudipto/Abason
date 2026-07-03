// js/propertyService.js
const PropertySvc = {
  async create(rec) {
    const { data, error } = await abashonDB.from('properties').insert(rec).select().single();
    if (error) throw error;
    return data;
  },
  async fetchAll() {
    const { data, error } = await abashonDB
      .from('properties').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  },
  async fetchBySeller(ownerId) {
    const { data, error } = await abashonDB
      .from('properties').select('*').eq('owner_id', ownerId).order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  }
};

// Supabase row -> the shape pCard()/renderProps()/dashboard UI expects (t, img, v, ai, ...)
function dbRowToCard(r){
  return {
    id: r.id, t: r.title, city: r.city, area: r.area, ptype: r.type,
    type: 'RENT', rent: r.rent, beds: r.bedrooms, baths: r.baths, sqft: r.sizesqrt,
    furnished: r.furnished, floor: '—', v: r.verified, ai: 90,
    img: r.image, imgs: r.images && r.images.length ? r.images : (r.image ? [r.image] : []),
    desc: r.description, am: [], tags: [],
    ow: r.owner_name, oi: (r.owner_name||'S').trim()[0],
    owner: r.owner_id, createdAt: new Date(r.created_at).getTime()
  };
}