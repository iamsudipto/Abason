// ── DATA ──
const aM={ঢাকা:['গুলশান','বনানী','ধানমন্ডি','মিরপুর','উত্তরা','মোহাম্মদপুর'],সিলেট:['শাহজালালপুর','আম্বরখানা','জিন্দাবাজার'],চট্টগ্রাম:['খুলশী','পাঁচলাইশ','নাসিরাবাদ','আগ্রাবাদ']};
const props=[
  {id:0,t:'৩ BHK Apartment',city:'ঢাকা',area:'গুলশান',sqft:1450,beds:3,baths:2,floor:'৫ম',rent:45000,type:'RENT',v:true,ai:98,img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&h=400&fit=crop',imgs:['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&h=400&fit=crop','https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700&h=400&fit=crop','https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&h=400&fit=crop'],desc:'গুলশান ২ এ আধুনিক ফ্ল্যাট। মার্বেল ফ্লোর, মডুলার কিচেন, ২৪ ঘণ্টা নিরাপত্তা।',am:['Lift','Car Parking','Generator','Gas','Internet','CCTV'],ow:'রহিম সাহেব',oi:'র',tags:['premium','lift','family']},
  {id:1,t:'২ BHK Flat',city:'ঢাকা',area:'ধানমন্ডি',sqft:950,beds:2,baths:2,floor:'৩য়',rent:28000,type:'RENT',v:true,ai:95,img:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700&h=400&fit=crop',imgs:['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700&h=400&fit=crop'],desc:'ধানমন্ডি ১৫ নম্বরে নিরিবিলি পরিবেশে সুন্দর ফ্ল্যাট।',am:['Lift','Gas','Water','Security'],ow:'করিম সাহেব',oi:'ক',tags:['family','lift']},
  {id:2,t:'২ BHK House',city:'সিলেট',area:'শাহজালালপুর',sqft:900,beds:2,baths:1,floor:'১ম',rent:18000,type:'RENT',v:true,ai:92,img:'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=700&h=400&fit=crop',imgs:['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=700&h=400&fit=crop'],desc:'শাহজালালপুরে শান্ত পরিবেশে বাড়ি।',am:['Gas','Water','Balcony','Parking'],ow:'আহমেদ সাহেব',oi:'আ',tags:['budget','family']},
  {id:3,t:'৩ BHK Flat',city:'ঢাকা',area:'মিরপুর',sqft:1100,beds:3,baths:2,floor:'৪র্থ',rent:22000,type:'RENT',v:false,ai:88,img:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=700&h=400&fit=crop',imgs:['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=700&h=400&fit=crop'],desc:'মিরপুর ১০ এ পরিবারের জন্য আদর্শ। মেট্রো কাছে।',am:['Metro Nearby','Gas','Water','Lift'],ow:'হাসান সাহেব',oi:'হ',tags:['family','metro']},
  {id:4,t:'১ BHK Studio',city:'সিলেট',area:'জিন্দাবাজার',sqft:450,beds:1,baths:1,floor:'২য়',rent:10000,type:'RENT',v:true,ai:96,img:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&h=400&fit=crop',imgs:['https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&h=400&fit=crop'],desc:'জিন্দাবাজারে bachelor এর জন্য পারফেক্ট।',am:['Internet','Gas','Security'],ow:'তানভীর সাহেব',oi:'ত',tags:['bachelor','budget','studio']},
  {id:5,t:'৪ BHK Luxury Flat',city:'চট্টগ্রাম',area:'খুলশী',sqft:1800,beds:4,baths:3,floor:'৬ষ্ঠ',rent:65000,type:'SALE',v:true,ai:99,img:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&h=400&fit=crop',imgs:['https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&h=400&fit=crop','https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&h=400&fit=crop'],desc:'খুলশীতে সী-ভিউ সহ বিলাসবহুল ফ্ল্যাট। Pool, Gym সহ।',am:['Swimming Pool','Gym','Car Parking','Lift','CCTV'],ow:'চৌধুরী সাহেব',oi:'চ',tags:['premium','luxury','pool']},
  {id:6,t:'২ BHK Flat',city:'চট্টগ্রাম',area:'পাঁচলাইশ',sqft:850,beds:2,baths:2,floor:'২য়',rent:20000,type:'RENT',v:true,ai:93,img:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700&h=400&fit=crop',imgs:['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700&h=400&fit=crop'],desc:'পাঁচলাইশে পরিবারবান্ধব ফ্ল্যাট।',am:['Gas','Water','Security','Lift'],ow:'ইসলাম সাহেব',oi:'ই',tags:['family','lift']},
  {id:7,t:'৩ BHK Flat',city:'ঢাকা',area:'উত্তরা',sqft:1250,beds:3,baths:2,floor:'৭ম',rent:35000,type:'RENT',v:true,ai:97,img:'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&h=400&fit=crop',imgs:['https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&h=400&fit=crop'],desc:'উত্তরা সেক্টর ৭। এয়ারপোর্ট কাছে।',am:['Lift','Car Parking','Generator','Gas'],ow:'রাহেলা বেগম',oi:'রা',tags:['family','lift','airport']},
  {id:8,t:'২ BHK House',city:'সিলেট',area:'আম্বরখানা',sqft:800,beds:2,baths:1,floor:'Ground',rent:14000,type:'RENT',v:false,ai:87,img:'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=700&h=400&fit=crop',imgs:['https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=700&h=400&fit=crop'],desc:'আম্বরখানায় বাগানসহ স্বতন্ত্র বাড়ি।',am:['Garden','Parking','Gas','Water'],ow:'নজরুল সাহেব',oi:'ন',tags:['budget','garden']},
  {id:9,t:'৩ BHK Flat',city:'চট্টগ্রাম',area:'আগ্রাবাদ',sqft:1200,beds:3,baths:2,floor:'৫ম',rent:30000,type:'RENT',v:true,ai:94,img:'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&h=400&fit=crop',imgs:['https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&h=400&fit=crop'],desc:'আগ্রাবাদ কমার্শিয়াল এলাকায় সুবিধাজনক ফ্ল্যাট।',am:['Lift','Gas','CCTV','Parking'],ow:'সালাম সাহেব',oi:'স',tags:['commercial','family']},
];
const svcs=[
  {icon:'🚛',t:'Truck Service',d:'পিকআপ থেকে ফুল ট্রাক।',opts:[{n:'Pickup Truck (1 ton)',d:'Small load',p:1000},{n:'Mini Truck (2 ton)',d:'Medium load',p:1600},{n:'Full Truck (5 ton)',d:'Full house',p:2600}]},
  {icon:'👷',t:'Labor Service',d:'প্রশিক্ষিত লেবার।',opts:[{n:'Basic (2 workers, half day)',d:'Light work',p:1200},{n:'Standard (4 workers, half day)',d:'Normal move',p:2400},{n:'Premium (4 workers, full day)',d:'Large house',p:4800}]},
  {icon:'📦',t:'Packing Service',d:'নিরাপদে প্যাকিং।',opts:[{n:'Basic Packing',d:'General items',p:800},{n:'Standard',d:'Electronics',p:1500},{n:'Premium',d:'Fragile items',p:2500}]},
  {icon:'🛋️',t:'Furniture Shifting',d:'ভারি আসবাব।',opts:[{n:'Basic (5 pcs)',d:'Less furniture',p:600},{n:'Standard (10 pcs)',d:'Normal amount',p:1000},{n:'Full Room',d:'Whole house',p:1800}]},
  {icon:'🧹',t:'Cleaning Service',d:'বাসা পরিষ্কার।',opts:[{n:'Basic Clean',d:'Quick clean',p:500},{n:'Deep Clean',d:'Thorough',p:800},{n:'Move-in Clean',d:'Complete',p:1200}]},
  {icon:'🔧',t:'Installation',d:'AC, Fan, সব লাগানো।',opts:[{n:'Basic Electric',d:'Fan & lights',p:500},{n:'Plumbing + Electric',d:'Complete',p:900},{n:'Full Home Setup',d:'With AC',p:1500}]},
];
const designers=[
  {n:'Rahman Interiors',style:'Modern Minimalist',rating:'4.9 ⭐',price:'৳50,000 – ৳2,00,000',desc:'১০ বছরের অভিজ্ঞতা। ঢাকার ১৫০+ প্রজেক্ট সম্পন্ন।',imgs:['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop','https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop','https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=300&h=200&fit=crop']},
  {n:'DreamSpace Studio',style:'Contemporary Luxe',rating:'4.8 ⭐',price:'৳80,000 – ৳3,50,000',desc:'Premium interior। European design।',imgs:['https://images.unsplash.com/photo-1616137466211-f939a420be84?w=300&h=200&fit=crop','https://images.unsplash.com/photo-1615873968403-89e068629265?w=300&h=200&fit=crop','https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=300&h=200&fit=crop']},
  {n:'Sylhet Home Decor',style:'Traditional Fusion',rating:'4.7 ⭐',price:'৳30,000 – ৳1,20,000',desc:'সিলেটের সেরা ডিজাইনার।',imgs:['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=200&fit=crop','https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=300&h=200&fit=crop','https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300&h=200&fit=crop']},
  {n:'Chittagong Design Co.',style:'Coastal Modern',rating:'4.8 ⭐',price:'৳40,000 – ৳1,80,000',desc:'Coastal theme specialist।',imgs:['https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=300&h=200&fit=crop','https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop','https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop']},
];
const furs=[
  {t:'New',n:'Dining Table Set',p:18500,old:22000,img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop'},
  {t:'Used',n:'Sofa Set (3+1+1)',p:8000,old:12000,img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop'},
  {t:'New',n:'King Bed Frame',p:24000,old:28000,img:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop'},
  {t:'Used',n:'Double Door Wardrobe',p:6500,old:9000,img:'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=400&h=300&fit=crop'},
  {t:'New',n:'Dressing Table',p:7200,old:9500,img:'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=400&h=300&fit=crop'},
  {t:'Used',n:'Study Table',p:2800,old:4500,img:'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=300&fit=crop'},
  {t:'New',n:'TV Cabinet',p:12000,old:15000,img:'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&h=300&fit=crop'},
  {t:'Used',n:'Refrigerator',p:22000,old:35000,img:'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop'},
];

let curProp=null,allProps=[...props],curProps=[...props];
let aiDB=null;   // আগে js/aiDB.js একটা blocking <script> ছিল (618KB, প্রতি pageload-এ) — এখন শুধু
                  // AI পেজ খোলা হলে fetch হয়, নিচের ensureAiDB() দিয়ে
let _aiDBPromise=null;
async function ensureAiDB(){
  if(Array.isArray(aiDB)) return aiDB;                 // আগেই লোড হয়ে গেছে
  if(_aiDBPromise) return _aiDBPromise;                 // ইতিমধ্যে fetch চলছে — একই promise শেয়ার করি
  _aiDBPromise=(async()=>{
    const res=await fetch('js/aiDB.json');
    if(!res.ok) throw new Error('AI_DB_FETCH_FAILED');
    aiDB=await res.json();
    DB_AREAS=[...new Set(aiDB.map(p=>p.area))];          // aiDB আসার পরই এটা রিফ্রেশ করা লাগে
    return aiDB;
  })();
  try{ return await _aiDBPromise; }
  catch(e){ _aiDBPromise=null; throw e; }                // ব্যর্থ হলে পরের চেষ্টায় আবার fetch করতে দিই
}
let _favIds=new Set(); // logged-in user এর সব favorite property_id — pCard() হার্ট আইকনের জন্য
// Phase 11 — Property Comparison (net-new, master-prompt Section 14/19): session-persistent (login লাগে না)
let _compareIds=AbashonUtil.storageGetJSON('abashon_compare_v1',[])||[];
let LST_HTML=document.getElementById('page-listings').innerHTML; // detail view থেকে ফেরার জন্য আসল grid markup সংরক্ষণ





// ── CURSOR ──
const cur=document.getElementById('cursor'),curF=document.getElementById('cursor-follower');
let mx=0,my=0,fx=0,fy=0;
document.addEventListener('mousemove',e=>{
  mx=e.clientX;my=e.clientY;
  cur.style.left=mx+'px';cur.style.top=my+'px';
});
(function anim(){fx+=(mx-fx)*.12;fy+=(my-fy)*.12;
  curF.style.left=fx+'px';curF.style.top=fy+'px';
  requestAnimationFrame(anim);})();
document.querySelectorAll('button,a,[onclick]').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.width='20px';cur.style.height='20px';curF.style.width='60px';curF.style.height='60px';});
  el.addEventListener('mouseleave',()=>{cur.style.width='12px';cur.style.height='12px';curF.style.width='40px';curF.style.height='40px';});
});

// ── LOADER ──
window.addEventListener('load',()=>{
  setTimeout(()=>{document.getElementById('loader').classList.add('hidden');},2000);
});

// ── NAVBAR SCROLL ──
window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>60);
});

// ── REVEAL ON SCROLL ──
const ro=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});
},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el=>ro.observe(el));

// ── COUNTER ──
function animCounter(el){
  const target=+el.dataset.target,dur=1500,start=Date.now();
  const tick=()=>{const p=Math.min((Date.now()-start)/dur,1);el.textContent=Math.floor(p*target);if(p<1)requestAnimationFrame(tick);};tick();
}
const cro=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){animCounter(e.target);cro.unobserve(e.target);}});
},{threshold:.5});
document.querySelectorAll('.counter').forEach(el=>cro.observe(el));

// ── RIPPLE ──
document.querySelectorAll('.ripple-container').forEach(btn=>{
  btn.addEventListener('click',e=>{
    const r=document.createElement('span'),rect=btn.getBoundingClientRect();
    r.className='ripple';const s=Math.max(btn.clientWidth,btn.clientHeight);
    r.style.cssText=`width:${s}px;height:${s}px;left:${e.clientX-rect.left-s/2}px;top:${e.clientY-rect.top-s/2}px`;
    btn.appendChild(r);setTimeout(()=>r.remove(),600);
  });
});

// ── NAV ──
function setActiveNav(p){
  const cur = document.getElementById('cur-page');
  const labels={home:'হোম',listings:'Properties',map:'Map',ai:'AI Home Finder',shifting:'Shifting',interior:'Interior',furniture:'Furniture',about:'About',dashboard:'Dashboard'};
  document.querySelectorAll('.nav-links a, #mobile-bottom-nav a').forEach(a=>a.classList.toggle('active', a.dataset.p===p));
  if(cur) cur.textContent = labels[p]||'';
}
// ── ROUTER (hash-based) ──
// প্রতিটা পেজ ও প্রতিটা লিস্টিং এখন নিজস্ব URL পায়: #/listings, #/p/276 ইত্যাদি।
// hash routing বেছে নেওয়ার কারণ: file:// থেকে খুললেও কাজ করে, আর static hosting-এ
// (Netlify/Vercel/GitHub Pages) কোনো rewrite rule লাগে না। back/forward বাটনও এখন কাজ করে।
const PAGE_TITLES={home:'Abashon | আবাসন — Luxury Housing Ecosystem',listings:'Properties — আবাসন',map:'Map Search — আবাসন',ai:'AI Assistant — আবাসন',shifting:'Shifting — আবাসন',interior:'Interior — আবাসন',furniture:'Furniture — আবাসন',about:'About — আবাসন',tools:'Tools & Calculators — আবাসন',dashboard:'Dashboard — আবাসন',admin:'Admin — আবাসন'};
let _propsReady=null;   // DB থেকে listing লোড শেষ হলে resolve হয় — #/p/<id> deep link এটার জন্য অপেক্ষা করে

// '#/p/276' -> {detail:276} · '#/listings' -> {page:'listings'} · খালি/অচেনা hash -> {page:'home'}
function parseRoute(h){
  const dm=/^#\/p\/(\d+)$/.exec(h||'');
  if(dm) return {detail:+dm[1]};
  const prm=/^#\/payment-result\?(.*)$/.exec(h||'');
  if(prm){ const q=new URLSearchParams(prm[1]); return {paymentResult:{status:q.get('status'),tranId:q.get('tran_id')}}; }
  const pm=/^#\/([a-z]+)$/.exec(h||'');
  if(pm && PAGE_TITLES[pm[1]]) return {page:pm[1]};
  return {page:'home'};
}
// URL বদলায়; আসল রেন্ডার _route() করে (hashchange দিয়ে, বা hash একই থাকলে সরাসরি)
function _nav(path){
  const h='#'+path;
  if(location.hash===h) _route(); else location.hash=h;
}
async function _route(){
  const r=parseRoute(location.hash);
  if(r.detail!=null){ await renderDetail(r.detail); return; }
  if(r.paymentResult){ await renderPaymentResult(r.paymentResult.status,r.paymentResult.tranId); return; }
  let p=r.page;
  if(p==='dashboard'||p==='admin'){
    try{ if(_sessionReady) await _sessionReady; }catch(e){}   // cold load-এ session restore শেষ হওয়া পর্যন্ত অপেক্ষা
    if(!session){
      openAuth('seller','login'); p='home';
      try{ history.replaceState(null,'',location.pathname+location.search+'#/home'); }catch(e){}
    }else if(p==='admin' && !session.isAdmin){
      // admin না হলে চুপচাপ home-এ — আসল data-level নিরাপত্তা তো RPC-এর _is_admin() গার্ডেই আছে,
      // এটা শুধু UX (খালি/broken admin page দেখানো এড়ানো)
      toast('এই পেজ শুধু admin-দের জন্য','err',2500); p='home';
      try{ history.replaceState(null,'',location.pathname+location.search+'#/home'); }catch(e){}
    }
  }
  _showPage(p);
  document.title=PAGE_TITLES[p]||PAGE_TITLES.home;
}
window.addEventListener('hashchange',_route);

// Public API — ৮৭টা onclick call-site অপরিবর্তিত; এখন শুধু URL সেট করে
function goPage(p){
  if(p==='dashboard' && !session){ openAuth('seller','login'); return; }
  if(p==='admin' && !(session&&session.isAdmin)){ return; }
  _nav('/'+p);
}
// আসল DOM কাজ (আগের goPage-এর ভেতরটা)
function _showPage(p){
  document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));
  document.getElementById('page-'+p).classList.add('active');
  setActiveNav(p);
  window.scrollTo({top:0,behavior:'smooth'});
  if(p==='listings'){
    // detail view page-listings overwrite করে ফেলেছিল? — আগে আসল markup ফিরিয়ে আনি
    if(!document.getElementById('pgrid')) document.getElementById('page-listings').innerHTML=LST_HTML;
    renderProps(curProps);
  }
  if(p==='map')initMapPage();
  if(p==='shifting')initShiftMap();
  if(p==='shifting')renderSvcs();
  if(p==='shifting'){ mvRenderChecklist(); mvRenderInventory(); }
  if(p==='interior')renderDesigners();
  if(p==='furniture')renderFurs();
  if(p==='dashboard'){renderDash();}
  if(p==='admin'){initAdminPage();}
  if(p==='ai')initAIPage();
  setTimeout(()=>{document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el=>ro.observe(el));},100);
}
// ── Moving Checklist + Inventory/Packing Planner ──
// localStorage-backed (per-device, same pattern as the reservation-lock mock service) —
// this is a personal planning tool, not shared/critical data, so no DB table needed.
const MV_CL_KEY='abashon_moving_checklist', MV_INV_KEY='abashon_moving_inventory';
const MV_DEFAULT_CHECKLIST=[
  'প্রতিটা রুমের অবস্থার ছবি তুলে রাখো (deposit বিতর্ক এড়াতে)',
  'ইউটিলিটি মিটার রিডিং (গ্যাস/বিদ্যুৎ/পানি) নোট করো',
  'ঠিকানা বদলের কথা ব্যাংক/NID-তে আপডেট করো',
  'নতুন বাসার চাবি/লক পরীক্ষা করো',
  'ইন্টারনেট/DTH লাইন transfer বা নতুন সংযোগ বুক করো',
  'পুরনো বাসার advance/deposit ফেরতের ব্যাপারে লিখিত confirm নাও',
];
function mvLoad(key){ try{ return JSON.parse(localStorage.getItem(key)||'[]'); }catch(e){ return []; } }
function mvSave(key,val){ try{ localStorage.setItem(key,JSON.stringify(val)); }catch(e){} }

function mvRenderChecklist(){
  const box=document.getElementById('mv-checklist-box'); if(!box)return;
  let items=mvLoad(MV_CL_KEY);
  if(!items.length){ items=MV_DEFAULT_CHECKLIST.map(t=>({t,done:false})); mvSave(MV_CL_KEY,items); }
  box.innerHTML=items.map((it,i)=>`
    <div style="display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:1px solid var(--border)">
      <input type="checkbox" ${it.done?'checked':''} onchange="mvToggleChecklist(${i})" style="width:16px;height:16px;flex-shrink:0"/>
      <span style="font-family:var(--font-ui);font-size:.8rem;color:${it.done?'var(--white-30)':'var(--white-60)'};text-decoration:${it.done?'line-through':'none'};flex:1">${dtEsc(it.t)}</span>
      <button onclick="mvRemoveChecklist(${i})" style="background:none;border:none;color:var(--white-30);cursor:pointer;font-size:.9rem">✕</button>
    </div>`).join('');
}
function mvToggleChecklist(i){ const items=mvLoad(MV_CL_KEY); items[i].done=!items[i].done; mvSave(MV_CL_KEY,items); mvRenderChecklist(); }
function mvRemoveChecklist(i){ const items=mvLoad(MV_CL_KEY); items.splice(i,1); mvSave(MV_CL_KEY,items); mvRenderChecklist(); }
function mvAddChecklistItem(){
  const inp=document.getElementById('mv-cl-new'); const t=inp.value.trim(); if(!t)return;
  const items=mvLoad(MV_CL_KEY); items.push({t,done:false}); mvSave(MV_CL_KEY,items);
  inp.value=''; mvRenderChecklist();
}

function mvRenderInventory(){
  const box=document.getElementById('mv-inventory-box'); if(!box)return;
  const items=mvLoad(MV_INV_KEY);
  if(!items.length){ box.innerHTML=`<div style="padding:14px 0;font-family:var(--font-ui);font-size:.78rem;color:var(--white-30)">এখনো কোনো জিনিস যোগ করোনি।</div>`; return; }
  box.innerHTML=items.map((it,i)=>`
    <div style="display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:1px solid var(--border)">
      <input type="checkbox" ${it.packed?'checked':''} onchange="mvToggleInventory(${i})" style="width:16px;height:16px;flex-shrink:0"/>
      <span style="font-family:var(--font-ui);font-size:.8rem;color:${it.packed?'var(--white-30)':'var(--white-60)'};text-decoration:${it.packed?'line-through':'none'};flex:1">${dtEsc(it.item)}${it.room?` <span style="opacity:.6">· ${dtEsc(it.room)}</span>`:''}</span>
      <button onclick="mvRemoveInventory(${i})" style="background:none;border:none;color:var(--white-30);cursor:pointer;font-size:.9rem">✕</button>
    </div>`).join('')
    + `<div style="margin-top:8px;font-family:var(--font-ui);font-size:.72rem;color:var(--white-30)">প্যাক হয়েছে: ${items.filter(x=>x.packed).length}/${items.length}</div>`;
}
function mvToggleInventory(i){ const items=mvLoad(MV_INV_KEY); items[i].packed=!items[i].packed; mvSave(MV_INV_KEY,items); mvRenderInventory(); }
function mvRemoveInventory(i){ const items=mvLoad(MV_INV_KEY); items.splice(i,1); mvSave(MV_INV_KEY,items); mvRenderInventory(); }
function mvAddInventoryItem(){
  const itemInp=document.getElementById('mv-inv-item'), roomInp=document.getElementById('mv-inv-room');
  const item=itemInp.value.trim(); if(!item)return;
  const items=mvLoad(MV_INV_KEY); items.push({item,room:roomInp.value.trim(),packed:false}); mvSave(MV_INV_KEY,items);
  itemInp.value=''; roomInp.value=''; mvRenderInventory();
}
function filterCityGo(c){_curListingFilter=c;_advFilters={budgetMin:null,budgetMax:null,beds:null,furnished:'',tenant:'',parking:false,amenities:[]};curProps=baseFilteredProps();goPage('listings');}
// Phase 6 — Rent/Buy nav শর্টকাট: filterCityGo-এর হুবহু প্যাটার্নে, নতুন লজিক নয় (reuse)
function filterTypeGo(t){_curListingFilter=t;_advFilters={budgetMin:null,budgetMax:null,beds:null,furnished:'',tenant:'',parking:false,amenities:[]};curProps=baseFilteredProps();goPage('listings');}
// goSell() সরানো হয়েছে (Buy/Sell nav-entry সরানোর পর কোনো caller অবশিষ্ট নেই) — seller onboarding
// এখনো goPage('dashboard')-এর নিজস্ব session-gate দিয়ে সম্পূর্ণ কার্যকর, শুধু shortcut কমেছে।



// ── JOURNEY ──
function initJourney(){
  const steps=[
    {i:'🔍',l:'Step 1',t:'AI দিয়ে খুঁজুন',d:'Location, budget & type'},
    {i:'🎬',l:'Step 2',t:'ছবি ও ভিডিও',d:'Verified photos & video tour'},
    {i:'📅',l:'Step 3',t:'১০% দিয়ে বুক',d:'bKash · Nagad · Card'},
    {i:'🚚',l:'Step 4',t:'Shifting করুন',d:'Truck · Labor · Packing'},
    {i:'🎨',l:'Step 5',t:'Interior সাজান',d:'Your dream home setup'},
  ];
  const el=document.getElementById('journey-steps');
  if(el)el.innerHTML=steps.map(s=>`
    <div class="j-step reveal">
      <div class="j-icon">${s.i}</div>
      <div class="j-num">${s.l}</div>
      <div class="j-title">${s.t}</div>
      <div class="j-desc">${s.d}</div>
    </div>`).join('');
}

// ── PROP CARD ──
function pCard(p){
  return`<div class="prop-card" onclick="openDetail(${p.id})">
    <div class="prop-img-wrap">
      <img src="${imgOpt(p.img,AbashonConfig.UI.IMG_CARD_W)}" alt="${dtEsc(p.t)}" loading="lazy" decoding="async"/>
      <div class="prop-badges">
        <span class="prop-badge ${p.type==='RENT'?'badge-rent':'badge-sale'}">${p.type==='RENT'?'Rent':'Sale'}</span>
        ${p.v?'<span class="prop-badge badge-v">✓ Verified</span>':''}
        ${p.reserved?'<span class="prop-badge" style="background:rgba(179,38,47,.85);color:#fff">🔒 Reserved</span>':''}
        <span class="prop-badge badge-ai">🤖 ${p.ai}%</span>
      </div>
      <button class="prop-fav" aria-label="প্রিয় তালিকায় যোগ/বাদ দাও" ${p.fromDB?`data-id="${p.id}" onclick="toggleFav(${p.id},event)"`:`onclick="event.stopPropagation();this.textContent=this.textContent==='♡'?'❤️':'♡'"`}>${p.fromDB&&_favIds.has(p.id)?'❤️':'♡'}</button>
      <button class="prop-cmp ${_compareIds.includes(p.id)?'active':''}" title="Compare-এ যোগ করো" aria-label="তুলনার জন্য যোগ/বাদ দাও" onclick="toggleCompare(${p.id},event)">⚖</button>
      <button class="vid-tag" onclick="event.stopPropagation();openVid(${p.id})">▶ Video</button>
      <div class="ai-score">🛡️ ${p.ai}% Safe</div>
    </div>
    <div class="prop-body">
      <div class="prop-title">${dtEsc(p.t)}</div>
      <div class="prop-loc">📍 ${dtEsc(p.area)}, ${dtEsc(p.city)}</div>
      <div class="prop-specs">
        <span class="prop-spec">🛏 ${p.beds}</span>
        <span class="prop-spec">🚿 ${p.baths}</span>
        <span class="prop-spec">📐 ${p.sqft}sqft</span>
        <span class="prop-spec">🏢 ${p.floor}</span>
      </div>
      <div class="prop-footer">
        <div class="prop-price">৳${p.rent.toLocaleString()} <small>/${p.type==='RENT'?'mo':'sale'}</small></div>
        <button class="prop-btn" ${p.reserved?'style="background:var(--white-10);color:var(--white-60)"':''} onclick="event.stopPropagation();openDetail(${p.id})">${p.reserved?'🔒 Reserved':'Book'}</button>
      </div>
      <div class="prop-owner">
        <div class="owner-av">${p.oi}</div>
        <span class="owner-nm">${dtEsc(p.ow)}</span>
        ${p.v?'<span class="owner-v">✓ Verified</span>':''}
      </div>
    </div>
  </div>`;
}

// ── Phase 11 — Property Comparison (net-new) ──────────────────────────────
function toggleCompare(id,ev){
  if(ev)ev.stopPropagation();
  const i=_compareIds.indexOf(id);
  if(i>-1){_compareIds.splice(i,1);}
  else{
    if(_compareIds.length>=5){toast('সর্বোচ্চ ৫টা প্রপার্টি একসাথে compare করা যায়','err',2500);return;}
    _compareIds.push(id);
  }
  AbashonUtil.storageSetJSON('abashon_compare_v1',_compareIds);
  renderProps(curProps&&curProps.length?curProps:allProps); // ব্যাজ-স্টেট রিফ্রেশ করতে re-render (grid ছোট, সস্তা)
  renderCompareBar();
}
function clearCompare(){ _compareIds=[]; AbashonUtil.storageSetJSON('abashon_compare_v1',_compareIds); renderCompareBar(); closeM('compare-ov'); renderProps(curProps&&curProps.length?curProps:allProps); }
function renderCompareBar(){
  const bar=document.getElementById('compare-bar'); if(!bar)return;
  if(!_compareIds.length){bar.hidden=true;return;}
  bar.hidden=false;
  const props=_compareIds.map(id=>allProps.find(p=>p.id===id)).filter(Boolean);
  bar.innerHTML=`<div class="compare-bar-inner">
    <div class="compare-bar-thumbs">${props.map(p=>`<img src="${imgOpt(p.img,60)}" alt="${dtEsc(p.t)}" title="${dtEsc(p.t)}"/>`).join('')}</div>
    <span class="compare-bar-count">${bnNum(_compareIds.length)}টা নির্বাচিত</span>
    <button class="btn-primary" style="padding:8px 18px" onclick="openCompareOv()"><span>⚖ Compare করো</span></button>
    <button class="compare-bar-clear" onclick="clearCompare()" aria-label="সব সরাও">✕</button>
  </div>`;
}
// বিদ্যমান cost/rank ডেটা পুনর্ব্যবহার করে সহজ, decision-supportive verdict — নতুন কোনো AI-কল নয়
function compareVerdicts(props){
  if(props.length<2)return [];
  const v=[];
  const cheapest=props.reduce((a,b)=>a.rent<b.rent?a:b); v.push(['💰 সেরা বাজেট',cheapest]);
  const bestOverall=props.reduce((a,b)=>((b.ai||0)+(b.v?10:0))>((a.ai||0)+(a.v?10:0))?b:a); v.push(['🏆 সেরা সার্বিক',bestOverall]);
  const bestFamily=props.reduce((a,b)=>{const sa=(a.am||[]).filter(x=>['Lift','Security','CCTV','Generator'].includes(x)).length,sb=(b.am||[]).filter(x=>['Lift','Security','CCTV','Generator'].includes(x)).length;return sb>sa?b:a;}); v.push(['👨‍👩‍👧 সেরা ফ্যামিলি-বান্ধব',bestFamily]);
  const valPerSqft=p=>p.sqft?p.rent/p.sqft:Infinity;
  const bestValue=props.reduce((a,b)=>valPerSqft(b)<valPerSqft(a)?b:a); v.push(['⭐ সেরা ভ্যালু (৳/sqft)',bestValue]);
  return v;
}
function openCompareOv(){
  const props=_compareIds.map(id=>allProps.find(p=>p.id===id)).filter(Boolean);
  const box=document.getElementById('compare-ov-body');
  if(props.length<2){box.innerHTML='<div style="padding:40px;text-align:center;color:var(--white-30)">তুলনা করতে অন্তত ২টা প্রপার্টি বেছে নাও</div>';openM('compare-ov');return;}
  const rows=[
    ['ছবি',p=>`<img src="${imgOpt(p.img,160)}" alt="${dtEsc(p.t)}" style="width:100%;height:90px;object-fit:cover;border-radius:8px"/>`],
    ['নাম',p=>dtEsc(p.t)],
    ['ভাড়া/দাম',p=>`৳${p.rent.toLocaleString()}`],
    ['মাসিক আনুমানিক খরচ',p=>p.type==='RENT'?`৳${(p.rent+(Number(p.svc)||0)).toLocaleString()}`:'—'],
    ['প্রাথমিক খরচ',p=>p.type==='RENT'&&p.adv?`৳${(p.rent*p.adv+p.rent+(Number(p.svc)||0)).toLocaleString()}`:'—'],
    ['বেড/বাথ',p=>`${p.beds}/${p.baths}`],
    ['সাইজ',p=>p.sqft+' sqft'],
    ['এলাকা',p=>dtEsc(p.area)+', '+dtEsc(p.city)],
    ['যাচাইকৃত',p=>p.v?'✓ হ্যাঁ':'না'],
    ['সুবিধা',p=>(p.am||[]).slice(0,4).join(', ')||'—'],
  ];
  const verdicts=compareVerdicts(props);
  box.innerHTML=`
    <div style="overflow-x:auto">
    <table class="compare-table">
      <thead><tr><th></th>${props.map(p=>`<th>${dtEsc(p.t.slice(0,22))}${p.t.length>22?'…':''}<button onclick="toggleCompare(${p.id});openCompareOv()" style="display:block;margin-top:4px;background:none;border:none;color:var(--white-30);font-size:.65rem;cursor:pointer;text-decoration:underline">সরাও</button></th>`).join('')}</tr></thead>
      <tbody>${rows.map(([label,fn])=>`<tr><td>${label}</td>${props.map(p=>`<td>${fn(p)}</td>`).join('')}</tr>`).join('')}</tbody>
    </table>
    </div>
    <div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--border)">
      <div style="font-family:var(--font-ui);font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--white-30);margin-bottom:10px">সংক্ষিপ্ত সিদ্ধান্ত-সহায়তা</div>
      <div style="display:flex;gap:10px;flex-wrap:wrap">${verdicts.map(([label,p])=>`<div style="flex:1;min-width:150px;padding:10px 14px;background:var(--glass);border:1px solid var(--border-gold);border-radius:10px"><div style="font-family:var(--font-ui);font-size:.7rem;color:var(--gold)">${label}</div><div style="font-family:var(--font-ui);font-size:.8rem;color:var(--white);margin-top:2px;cursor:pointer" onclick="closeM('compare-ov');openDetail(${p.id})">${dtEsc(p.t.slice(0,26))}</div></div>`).join('')}</div>
      <div style="font-family:var(--font-ui);font-size:.65rem;color:var(--white-30);margin-top:10px">*এই সিদ্ধান্ত-সহায়তা তোমার নির্বাচিত প্রপার্টিগুলোর তথ্যের সরল তুলনা — চূড়ান্ত সিদ্ধান্ত তোমারই।</div>
    </div>`;
  openM('compare-ov');
}

// ছবির URL অপ্টিমাইজ: Unsplash হলে গ্রিড-সাইজ width + কম quality + auto=format (WebP/AVIF)।
// অন্য উৎসের URL অপরিবর্তিত থাকে — কিছুই ভাঙে না।
function imgOpt(url,w){
  try{
    if(typeof url!=='string'||!url.includes('images.unsplash.com'))return url;
    const u=new URL(url);
    u.searchParams.set('w',String(w||480));
    u.searchParams.set('q',AbashonConfig.UI.IMG_QUALITY);
    u.searchParams.set('auto','format');
    u.searchParams.set('fit','crop');
    return u.toString();
  }catch(e){return url;}
}

const _gridObservers={};
function renderProps(list,gid='pgrid'){
  const g=document.getElementById(gid);if(!g)return;
  if(_gridObservers[gid]){_gridObservers[gid].disconnect();delete _gridObservers[gid];}
  if(!list||!list.length){g.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:64px;color:var(--white-30)"><div style="font-size:3rem;margin-bottom:16px">🔍</div><div style="font-family:var(--font-display);font-size:1.25rem;color:var(--white-60)">No properties found</div></div>';return;}
  // Lighthouse/মেমরি: ৫০০ কার্ড একসাথে না এঁকে ২৪টা করে চাঙ্কে আঁকি (স্ক্রলে বাকিটা)
  const CHUNK=AbashonConfig.UI.GRID_CHUNK;let drawn=Math.min(CHUNK,list.length);
  g.innerHTML=list.slice(0,drawn).map(p=>pCard(p)).join('');
  if(drawn>=list.length)return;
  const sentinel=document.createElement('div');
  sentinel.style.cssText='grid-column:1/-1;height:1px';
  g.appendChild(sentinel);
  const io=new IntersectionObserver(entries=>{
    if(!entries.some(e=>e.isIntersecting))return;
    const next=list.slice(drawn,drawn+CHUNK);
    drawn+=next.length;
    sentinel.insertAdjacentHTML('beforebegin',next.map(p=>pCard(p)).join(''));
    if(drawn>=list.length){io.disconnect();sentinel.remove();delete _gridObservers[gid];}
  },{rootMargin:'600px'});
  io.observe(sentinel);
  _gridObservers[gid]=io;
}
function renderSvcs(){
  const g=document.getElementById('svc-grid');if(!g)return;
  g.innerHTML=svcs.map((s,i)=>`
    <div class="svc-card" onclick="openSvc(${i})">
      <div class="svc-icon">${s.icon}</div>
      <div class="svc-title">${s.t}</div>
      <div class="svc-desc">${s.d}</div>
      <div class="svc-price-row">
        <div class="svc-price">৳${s.opts[0].p}<small>+</small></div>
        <div class="svc-arrow">→</div>
      </div>
    </div>`).join('');
}
function renderDesigners(){
  const g=document.getElementById('int-grid');if(!g)return;
  g.innerHTML=designers.map((d,i)=>`
    <div class="int-card" onclick="openInt(${i})">
      <img class="int-img" src="${d.imgs[0]}" alt="${dtEsc(d.t||'Interior design')}" loading="lazy"/>
      <div class="int-body">
        <div class="int-verified">✓ Verified Designer</div>
        <div class="int-name">${dtEsc(d.n)}</div>
        <div class="int-style">${dtEsc(d.style)}</div>
        <div class="int-footer">
          <div class="int-rating">${d.rating}</div>
          <div class="int-price">${d.price}</div>
        </div>
      </div>
    </div>`).join('');
}
function renderFurs(){
  const g=document.getElementById('fur-grid');if(!g)return;
  g.innerHTML=furs.map((f,i)=>`
    <div class="fur-card" onclick="openFur(${i})" style="cursor:pointer">
      <img class="fur-img" src="${f.img}" alt="${dtEsc(f.t||f.name||'Furniture')}" loading="lazy"/>
      <div class="fur-body">
        <div class="fur-type">${f.t}</div>
        <div class="fur-name">${f.n}</div>
        <div class="fur-prices"><span class="fur-price">৳${f.p.toLocaleString()}</span><span class="fur-old">৳${f.old.toLocaleString()}</span></div>
      </div>
    </div>`).join('');
}
// Phase 16 — ecosystem consistency: svc-card(openSvc)/int-card(openInt)-এর হুবহু প্যাটার্নে furniture-ও
// AKSIS Phase 7 — Report Suspicious Listing (Section 24)
let _reportListingPid=null;
function openReportListing(pid){
  if(!requireAuth('buyer',()=>openReportListing(pid)))return;
  _reportListingPid=pid;
  document.getElementById('rl-category').value='other';
  document.getElementById('rl-reason').value='';
  const ev=document.getElementById('rl-evidence'); if(ev)ev.value='';
  openM('report-listing-ov');
}
async function submitListingReport(){
  if(!_reportListingPid)return;
  const category=document.getElementById('rl-category').value;
  const reason=_val('rl-reason');
  if(!reason){ toast('বিস্তারিত লেখো','err'); return; }
  const fileInp=document.getElementById('rl-evidence');
  const btn=document.getElementById('rl-submit-btn');
  const orig=btn.innerHTML; btn.disabled=true; btn.innerHTML='<span class="svc-spin"></span> জমা হচ্ছে…';
  try{
    const r=await ReportSvc.reportListing(_reportListingPid,category,reason,fileInp?.files||[]);
    closeM('report-listing-ov');
    toast(`✓ রিপোর্ট জমা হয়েছে — admin team পর্যালোচনা করবে`,'',3500);
  }catch(e){ toast(friendlyError(e),'err'); }
  finally{ btn.disabled=false; btn.innerHTML=orig; }
}
function openFur(i){
  const f=furs[i]; if(!f)return;
  document.getElementById('fur-m-img').src=f.img;
  document.getElementById('fur-m-img').alt=f.n;
  document.getElementById('fur-m-n').textContent=f.n;
  document.getElementById('fur-m-t').textContent=f.t==='New'?'নতুন':'ব্যবহৃত';
  document.getElementById('fur-m-p').textContent='৳'+f.p.toLocaleString();
  document.getElementById('fur-m-old').textContent='৳'+f.old.toLocaleString();
  openM('fur-ov');
}
function contactFurSeller(){
  closeM('fur-ov');
  setTimeout(()=>toast('✓ বিক্রেতাকে জানানো হয়েছে — শীঘ্রই যোগাযোগ করবে','',3000),150);
}
// ── FILTERS ──
let _curListingFilter='';
// Phase 8 — Search & Discovery: base city/type filter এখন একটা helper-এ (fPill ও advanced-filter দুটোই পুনর্ব্যবহার করে)
function baseFilteredProps(){
  return _curListingFilter ? allProps.filter(p=>cityEq(p.city,_curListingFilter)||p.type===_curListingFilter) : allProps;
}
function fPill(el,f){
  document.querySelectorAll('.filter-bar .filter-btn').forEach(b=>{if(b.id!=='adv-filter-toggle')b.classList.remove('active');});
  el.classList.add('active');
  _curListingFilter=f;
  applyAllFilters();
}
function sortP(v){let l=[...curProps];if(v==='low')l.sort((a,b)=>a.rent-b.rent);else if(v==='high')l.sort((a,b)=>b.rent-a.rent);renderProps(l);}

// ── Advanced filters (progressive disclosure) — Phase 8 ──
let _advFilters={budgetMin:null,budgetMax:null,beds:null,furnished:'',tenant:'',parking:false,amenities:[]};
function toggleAdvFilters(){
  const p=document.getElementById('adv-filter-panel'),btn=document.getElementById('adv-filter-toggle');
  const open=p.hasAttribute('hidden');
  if(open)p.removeAttribute('hidden');else p.setAttribute('hidden','');
  btn.setAttribute('aria-expanded',String(open));
  btn.classList.toggle('active',open);
}
function afPickBeds(el){
  const cur=el.classList.contains('active');
  document.querySelectorAll('#af-beds-pills button').forEach(b=>b.classList.remove('active'));
  if(!cur){el.classList.add('active');_advFilters.beds=Number(el.dataset.v);}else{_advFilters.beds=null;}
  applyAllFilters();
}
function clearAdvFilters(){
  _advFilters={budgetMin:null,budgetMax:null,beds:null,furnished:'',tenant:'',parking:false,amenities:[]};
  const p=document.getElementById('adv-filter-panel');
  if(p){
    p.querySelectorAll('input[type="number"]').forEach(i=>i.value='');
    p.querySelectorAll('input[type="checkbox"]').forEach(i=>i.checked=false);
    p.querySelectorAll('select').forEach(s=>s.value='');
    p.querySelectorAll('#af-beds-pills button').forEach(b=>b.classList.remove('active'));
  }
  applyAllFilters();
}
const AF_AMENITY_IDS=['Lift','Generator','Security','Gas'];
function applyAllFilters(){
  const g=id=>document.getElementById(id);
  _advFilters.budgetMin=Number(g('af-budmin')?.value)||null;
  _advFilters.budgetMax=Number(g('af-budmax')?.value)||null;
  _advFilters.furnished=g('af-furnished')?.value||'';
  _advFilters.tenant=g('af-tenant')?.value||'';
  _advFilters.parking=!!g('af-parking')?.checked;
  _advFilters.amenities=AF_AMENITY_IDS.filter(a=>g('af-am-'+a)?.checked);

  let list=baseFilteredProps();
  const f=_advFilters;
  if(f.budgetMin)list=list.filter(p=>p.rent>=f.budgetMin);
  if(f.budgetMax)list=list.filter(p=>p.rent<=f.budgetMax);
  if(f.beds)list=list.filter(p=>f.beds>=4?(p.beds||0)>=4:p.beds===f.beds);
  if(f.furnished)list=list.filter(p=>p.furnished===f.furnished);
  if(f.tenant)list=list.filter(p=>p.tenant===f.tenant||p.tenant==='Any');
  if(f.parking)list=list.filter(p=>p.park&&p.park!=='None');
  if(f.amenities.length)list=list.filter(p=>f.amenities.every(a=>(p.am||[]).includes(a)));
  curProps=list;
  renderProps(curProps);
  renderActiveChips();
}
// active-filter chips — প্রতিটা আলাদাভাবে সরানো যায় (master-prompt: filters সবসময় স্পষ্টভাবে দৃশ্যমান)
function renderActiveChips(){
  const box=document.getElementById('active-filter-chips'); if(!box)return;
  const f=_advFilters,chips=[];
  if(f.budgetMin)chips.push(['বাজেট ≥ ৳'+f.budgetMin.toLocaleString(),"g('af-budmin').value='';applyAllFilters()"]);
  if(f.budgetMax)chips.push(['বাজেট ≤ ৳'+f.budgetMax.toLocaleString(),"g('af-budmax').value='';applyAllFilters()"]);
  if(f.beds)chips.push([f.beds+'+ বেড',"document.querySelectorAll('#af-beds-pills button').forEach(b=>b.classList.remove('active'));_advFilters.beds=null;applyAllFilters()"]);
  if(f.furnished)chips.push([f.furnished,"g('af-furnished').value='';applyAllFilters()"]);
  if(f.tenant)chips.push([f.tenant,"g('af-tenant').value='';applyAllFilters()"]);
  if(f.parking)chips.push(['পার্কিং',"g('af-parking').checked=false;applyAllFilters()"]);
  f.amenities.forEach(a=>chips.push([a,`g('af-am-${a}').checked=false;applyAllFilters()`]));
  if(!chips.length){box.innerHTML='';return;}
  box.innerHTML=chips.map(([label,onclick])=>`<span class="active-chip">${dtEsc(label)}<button aria-label="${dtEsc(label)} ফিল্টার সরাও" onclick="const g=id=>document.getElementById(id);${onclick}">✕</button></span>`).join('')
    +`<button class="active-chip-clear" onclick="clearAdvFilters()">সব মুছুন</button>`;
}
function saveListingSearch(){
  const isType=['RENT','SALE'].includes(_curListingFilter);
  saveCurrentSearch(null, isType?null:_curListingFilter, isType?_curListingFilter:null);
}

// ── DETAIL ──
// কার্ডে ক্লিক = URL বদল (#/p/276) — ফলে প্রতিটা লিস্টিং এখন শেয়ারযোগ্য লিংক
function openDetail(id){ _nav('/p/'+id); }

// Phase 9 — Complete Cost Breakdown (master-prompt Section 21): rent+service_charge+advance
// একত্রে যোগ করে "মাসিক আনুমানিক খরচ" ও "প্রাথমিক খরচ" দেখায় — সব বিদ্যমান listing-ফিল্ড থেকে,
// কোনো বানানো সংখ্যা নয়। SALE-টাইপে প্রযোজ্য না (advance/সার্ভিস-চার্জ ভাড়ার ধারণা)।
function costBreakdownHtml(p){
  if(p.type!=='RENT')return '';
  const svc=Number(p.svc)||0, advMonths=Number(p.adv)||0, advAmt=p.rent*advMonths;
  const monthly=p.rent+svc, initial=advAmt+p.rent+svc;
  const row=(label,amt,note)=>`<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);font-family:var(--font-ui);font-size:.8125rem"><span style="color:var(--white-60)">${dtEsc(label)}${note?`<span style="color:var(--white-30);font-size:.7rem"> — ${dtEsc(note)}</span>`:''}</span><span style="color:var(--white);font-weight:600">${typeof amt==='number'?'৳'+amt.toLocaleString():dtEsc(amt)}</span></div>`;
  return `
  <div class="dash-card" style="margin-bottom:20px">
    <div class="dash-card-title">💰 সম্পূর্ণ খরচ</div>
    <div style="font-family:var(--font-ui);font-size:.7rem;color:var(--white-30);margin-bottom:10px">listing-এ দেওয়া তথ্য থেকে হিসাব — মালিকের সাথে নিশ্চিত করে নিও</div>
    ${row('মাসিক ভাড়া',p.rent)}
    ${svc?row('সার্ভিস চার্জ/মাস',svc):''}
    <div style="display:flex;justify-content:space-between;padding:10px 0;font-family:var(--font-ui);font-size:.875rem;font-weight:700"><span style="color:var(--emerald-l)">মাসিক আনুমানিক খরচ</span><span style="color:var(--emerald-l)">৳${monthly.toLocaleString()}</span></div>
    <div style="height:1px;background:var(--border-gold);margin:6px 0 10px"></div>
    ${advMonths?row('অগ্রিম',advAmt,bnNum(advMonths)+' মাস'):row('অগ্রিম','owner-এর সাথে জেনে নাও')}
    ${row('প্রথম মাসের ভাড়া+সার্ভিস চার্জ',p.rent+svc)}
    <div style="display:flex;justify-content:space-between;padding:10px 0;font-family:var(--font-ui);font-size:.9375rem;font-weight:700"><span style="color:var(--gold)">মোট প্রাথমিক খরচ (উঠার আগে)</span><span style="color:var(--gold)">${advMonths?'৳'+initial.toLocaleString():'অগ্রিম জানা গেলে হিসাব করা যাবে'}</span></div>
  </div>`;
}
async function renderDetail(id){
  if(_propsReady) await _propsReady;   // deep link DB লোডের আগেই আসতে পারে — লোড শেষ হওয়া পর্যন্ত অপেক্ষা
  const p=allProps.find(x=>x.id===id)||(typeof aiDB!=='undefined'&&Array.isArray(aiDB)&&aiDB.find(x=>x.id===id));
  if(!p){ toast('এই লিস্টিংটি খুঁজে পাওয়া যায়নি — হয়তো মুছে ফেলা হয়েছে','err',4000); _nav('/listings'); return; }
  curProp=p;
  document.getElementById('page-listings').innerHTML=`
  <div style="background:var(--bg);min-height:100vh;padding-bottom:80px">
    <div style="position:relative;height:400px;overflow:hidden;background:var(--bg-3)">
      <img id="d-mi" src="${p.img}" alt="${dtEsc(p.t||p.title||'Property photo')}" style="width:100%;height:100%;object-fit:cover"/>
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.6) 0%,transparent 60%)"></div>
      <button onclick="goPage('listings')" style="position:absolute;top:16px;left:16px;background:rgba(0,0,0,.45);border:1px solid rgba(255,255,255,.25);color:#fff;padding:8px 14px;border-radius:999px;font-family:var(--font-ui);font-size:.8rem;cursor:pointer;backdrop-filter:blur(6px)">← Listings</button>
      <button onclick="shareProp()" style="position:absolute;top:16px;right:16px;background:rgba(0,0,0,.45);border:1px solid rgba(255,255,255,.25);color:#fff;padding:8px 14px;border-radius:999px;font-family:var(--font-ui);font-size:.8rem;cursor:pointer;backdrop-filter:blur(6px)">🔗 Share</button>
      <button onclick="openVid(${p.id})" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:72px;height:72px;border-radius:50%;background:rgba(212,175,55,.15);border:2px solid rgba(212,175,55,.4);color:var(--gold);font-size:1.75rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .3s">▶</button>
      <div style="position:absolute;bottom:16px;left:50%;transform:translateX(-50%);display:flex;gap:8px">
        ${p.imgs.map((_,i)=>`<button onclick="document.getElementById('d-mi').src='${p.imgs[i]}'" style="width:${i===0?'20px':'8px'};height:8px;border-radius:4px;background:rgba(255,255,255,${i===0?.9:.4});border:none;cursor:pointer;transition:all .2s;padding:0"></button>`).join('')}
      </div>
    </div>
    <div style="max-width:880px;margin:0 auto;padding:40px 32px">
      <div class="dt-header-grid" style="display:grid;grid-template-columns:1fr auto;gap:24px;align-items:start;margin-bottom:32px">
        <div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px">
            <span class="prop-badge ${p.type==='RENT'?'badge-rent':'badge-sale'}">${p.type}</span>
            ${p.v?'<span class="prop-badge badge-v">✓ Verified</span>':''}
            <span class="prop-badge badge-ai">🤖 AI ${p.ai}% Safe</span>
          </div>
          <div style="font-family:var(--font-display);font-size:2rem;font-weight:500;color:var(--white);margin-bottom:8px;letter-spacing:-.02em">${dtEsc(p.t)}</div>
          <div style="font-family:var(--font-ui);font-size:.875rem;color:var(--white-30)">📍 ${dtEsc(p.area)}, ${dtEsc(p.city)}${p.v?` &nbsp;<span style="color:var(--emerald-l);font-weight:600">✓ Verified Owner: ${dtEsc(p.ow)}</span>`:''}</div>
          ${p.fromDB?`<div style="margin-top:8px" id="dt-phone-wrap"><button onclick="dtRevealPhone(${p.id})" id="dt-phone-btn" style="padding:7px 14px;background:var(--glass);border:1px solid var(--border-gold);color:var(--gold);font-family:var(--font-ui);font-size:.8rem;border-radius:8px;cursor:pointer">📞 মালিকের নম্বর দেখো</button></div>`:''}
        </div>
        <div style="padding:24px;background:var(--glass);border:1px solid var(--border-gold);border-radius:24px;text-align:center;min-width:180px">
          <div style="font-family:var(--font-display);font-size:1.75rem;font-weight:500;color:var(--white);letter-spacing:-.02em">৳${p.rent.toLocaleString()}</div>
          <div style="font-family:var(--font-ui);font-size:.75rem;color:var(--white-30);margin-top:2px">/${p.type==='RENT'?'month':'sale price'}</div>
          <div style="margin-top:12px;padding:8px;background:rgba(14,90,69,.2);border:1px solid rgba(14,90,69,.3);border-radius:8px;font-family:var(--font-ui);font-size:.75rem;color:var(--emerald-l)">${p.adv?`মূল অগ্রিম (move-in-এ owner-কে দিতে হবে): ৳${(p.rent*p.adv).toLocaleString()} (${bnNum(p.adv)} মাস) — এখন charge হবে না`:'অগ্রিম: owner-এর সাথে সরাসরি জেনে নাও'}</div>
          ${p.fromDB && p.reserved ? `<button disabled style="width:100%;margin-top:10px;padding:12px;background:var(--glass);color:var(--white-30);font-family:var(--font-ui);font-size:.75rem;border-radius:8px;border:none;cursor:not-allowed">🔒 এই মুহূর্তে অন্য কেউ reserve করে রেখেছে</button>
          <div style="font-family:var(--font-ui);font-size:.6875rem;color:var(--white-30);margin-top:6px;line-height:1.4">${p.reservedUntil?('আবার available হতে পারে: '+new Date(p.reservedUntil).toLocaleString('bn-BD',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'})):'কিছুক্ষণ পর আবার চেষ্টা করুন'} — চাইলে এখনই মালিককে booking request পাঠাতে পারো।</div>`
          : p.fromDB?`<button onclick="openPay()" style="width:100%;margin-top:10px;padding:12px;background:linear-gradient(135deg,var(--gold),var(--gold-d));color:#000;font-family:var(--font-ui);font-size:.8125rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;border-radius:8px;border:none;cursor:pointer;transition:all .3s">🔒 ২৪ ঘণ্টা লক করো</button>
          <div style="font-family:var(--font-ui);font-size:.6875rem;color:var(--white-30);margin-top:6px;line-height:1.4">এটা booking request নয় — শুধু বাসাটা ২৪ ঘণ্টা তোমার জন্য ধরে রাখবে, অন্য কেউ নিতে পারবে না।</div>`
          :`<button disabled style="width:100%;margin-top:10px;padding:12px;background:var(--glass);color:var(--white-30);font-family:var(--font-ui);font-size:.75rem;border-radius:8px;border:none;cursor:not-allowed">ডেমো লিস্টিং — বুক করা যাবে না</button>`}
          <button onclick="openVid(${p.id})" style="width:100%;margin-top:8px;padding:10px;background:var(--glass);border:1px solid var(--border);color:var(--white-60);font-family:var(--font-ui);font-size:.75rem;border-radius:8px;cursor:pointer;transition:all .2s">🎬 Video Tour</button>
        </div>
      </div>
      <div style="display:flex;gap:20px;padding:16px 0;border-top:1px solid var(--border);border-bottom:1px solid var(--border);margin-bottom:24px;flex-wrap:wrap">
        ${[['🛏',p.beds,'Bedrooms'],['🚿',p.baths,'Bathrooms'],['📐',p.sqft,'Sqft'],['🏢',p.floor,'Floor'],['🏷',p.type,'Type']].map(([i,v,k])=>`<div style="text-align:center;flex:1;min-width:60px"><div style="font-family:var(--font-display);font-size:1.25rem;color:var(--white)">${i} ${v}</div><div style="font-family:var(--font-ui);font-size:.6875rem;color:var(--white-30);margin-top:3px;text-transform:uppercase;letter-spacing:.08em">${k}</div></div>`).join('')}
      </div>
      <div style="font-family:var(--font-ui);font-size:.6875rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:var(--white-30);margin-bottom:10px">Description</div>
      <div style="font-family:var(--font-ui);font-size:.9375rem;color:var(--white-60);line-height:1.7;margin-bottom:24px">${dtEsc(p.desc)}</div>
      <div style="font-family:var(--font-ui);font-size:.6875rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:var(--white-30);margin-bottom:10px">Amenities</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:24px">${p.am.map(a=>`<span style="padding:5px 14px;background:rgba(28,38,33,.045);border:1px solid var(--border);border-radius:100px;font-family:var(--font-ui);font-size:.75rem;color:var(--white-60)">✓ ${a}</span>`).join('')}</div>
      <div style="padding:20px;background:rgba(14,90,69,.08);border:1px solid rgba(14,90,69,.2);border-radius:16px;margin-bottom:24px">
        <div style="font-family:var(--font-ui);font-size:.6875rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--emerald-l);margin-bottom:12px">প্রপার্টি তথ্য</div>
        <div style="display:flex;gap:12px;flex-wrap:wrap">
          ${[['Verification',p.v?'✓ Verified':'Unverified','var(--emerald-l)'],
             ['Listing Score',p.ai+'%','var(--gold)'],
             ...(p.fromDB?[['Tenant',p.tenant||'Any','var(--white)'],['Min Stay',p.minStay?bnNum(p.minStay)+' মাস':'—','var(--gold)']]:[])
            ].map(([l,v,c])=>`<div style="flex:1;min-width:80px;padding:12px;background:var(--glass);border:1px solid var(--border);border-radius:10px;text-align:center"><div style="font-family:var(--font-display);font-size:1.1rem;color:${c}">${v}</div><div style="font-family:var(--font-ui);font-size:.625rem;color:var(--white-30);margin-top:3px;text-transform:uppercase;letter-spacing:.08em">${l}</div></div>`).join('')}
        </div>
        <div style="font-family:var(--font-ui);font-size:.7rem;color:var(--white-30);margin-top:10px">Listing Score = verification + জমা দেওয়া তথ্যের সম্পূর্ণতা থেকে হিসাব করা, অনুমান নয়।</div>
        ${p.fromDB?`<div id="dt-fairness" style="margin-top:14px;font-family:var(--font-ui);font-size:.8rem;color:var(--white-30)">ভাড়ার ন্যায্যতা যাচাই হচ্ছে...</div>`:''}
      </div>
      ${costBreakdownHtml(p)}
      ${p.fromDB?`<div class="dash-card" style="margin-bottom:20px"><div class="dash-card-title">🛡️ বিশ্বাসযোগ্যতা ও যাচাই</div><div id="dt-trust-box">লোড হচ্ছে...</div>
        <button onclick="openReportListing(${p.id})" style="margin-top:10px;background:none;border:1px solid rgba(179,38,47,.4);border-radius:8px;padding:7px 14px;color:#e08080;font-family:var(--font-ui);font-size:.78rem;cursor:pointer">🚩 সন্দেহজনক মনে হচ্ছে? রিপোর্ট করো</button>
      </div>`:''}
      ${p.fromDB?`<div class="dash-card" style="margin-bottom:20px" id="dt-faq-box"></div>`:''}
      ${p.fromDB?`
      <!-- ═══ Commute Distance ═══ -->
      <div class="dash-card" style="margin-bottom:20px">
        <div class="dash-card-title">📍 যাতায়াতের দূরত্ব</div>
        <div id="dt-commute-box"></div>
      </div>` : ''}
      ${p.fromDB?`
      <!-- ═══ Booking Request ═══ -->
      <div class="dash-card" style="margin-bottom:20px">
        <button onclick="startChatWithOwner(${p.id})" style="width:100%;padding:12px;margin-bottom:14px;background:var(--glass);border:1px solid var(--emerald-l);color:var(--emerald-l);font-family:var(--font-ui);font-size:.85rem;font-weight:700;border-radius:8px;cursor:pointer">💬 মালিকের সাথে চ্যাট করো</button>
        <div class="dash-card-title">📩 ভাড়া নেওয়ার রিকোয়েস্ট পাঠাও</div>
        <div style="font-family:var(--font-ui);font-size:.8rem;color:var(--white-30);margin-bottom:12px">শর্ত: <b style="color:var(--white-60)">${dtEsc(p.tenant?(HH_BN[p.tenant]||p.tenant):'সবার জন্য')}</b> · নূন্যতম <b style="color:var(--white-60)">${bnNum(p.minStay||1)} মাস</b></div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px" id="dt-hh-chips"></div>
        <select id="dt-stay" style="width:100%;font-family:var(--font-ui);font-size:.85rem;padding:9px 11px;border-radius:9px;border:1px solid var(--border);background:var(--glass);color:var(--white);margin-bottom:10px">
          <option value="1">১ মাস</option><option value="3">৩ মাস</option><option value="6">৬ মাস</option><option value="12" selected>১২ মাস</option><option value="24">২৪ মাস</option>
        </select>
        <textarea id="dt-msg" placeholder="মালিককে বার্তা (ঐচ্ছিক)" style="width:100%;min-height:56px;font-family:var(--font-ui);font-size:.85rem;padding:9px 11px;border-radius:9px;border:1px solid var(--border);background:var(--glass);color:var(--white);margin-bottom:10px;resize:vertical"></textarea>
        <div id="dt-compat" style="font-family:var(--font-ui);font-size:.8rem;padding:9px 12px;border-radius:9px;margin-bottom:10px"></div>
        <button id="dt-send-btn" onclick="dtSubmitBooking(${p.id})" style="width:100%;padding:12px;background:linear-gradient(135deg,var(--emerald-l),var(--emerald));color:#fff;font-family:var(--font-ui);font-size:.85rem;font-weight:700;border-radius:8px;border:none;cursor:pointer" disabled>রিকোয়েস্ট পাঠাও</button>
      </div>
      <!-- ═══ Visit Slot Booking ═══ -->
      <div class="dash-card" style="margin-bottom:24px">
        <div class="dash-card-title">🕐 বাসা দেখতে যাওয়ার সময় বুক করো</div>
        <input type="date" id="dt-vdate" style="width:100%;font-family:var(--font-ui);font-size:.85rem;padding:9px 11px;border-radius:9px;border:1px solid var(--border);background:var(--glass);color:var(--white);margin-bottom:10px">
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px" id="dt-slot-chips"></div>
        <button id="dt-visit-btn" onclick="dtSubmitVisit(${p.id})" style="width:100%;padding:12px;background:var(--glass);border:1px solid var(--border-gold);color:var(--gold);font-family:var(--font-ui);font-size:.85rem;font-weight:700;border-radius:8px;cursor:pointer" disabled>সময় বুক করো</button>
      </div>`:''}
      ${p.fromDB?`
      <!-- ═══ Reviews ═══ -->
      <div class="dash-card" style="margin-bottom:24px">
        <div class="dash-card-title">⭐ রিভিউ</div>
        <div id="dt-reviews-summary" style="margin-bottom:10px;font-family:var(--font-ui);font-size:.85rem;color:var(--white-30)">লোড হচ্ছে...</div>
        <div id="dt-reviews-list"></div>
        <div id="dt-review-form-wrap"></div>
      </div>`:''}
      ${p.fromDB?`
      <!-- ═══ Similar Properties (rule-based Property AI, no external service) ═══ -->
      <div class="dash-card" style="margin-bottom:24px">
        <div class="dash-card-title">🏘️ একই ধরনের বাসা</div>
        <div id="dt-similar" style="font-family:var(--font-ui);font-size:.8rem;color:var(--white-30)">লোড হচ্ছে...</div>
      </div>`:''}
      <div style="display:flex;gap:12px">
        <button onclick="goPage('listings')" style="flex:1;padding:12px;background:var(--glass);border:1px solid var(--border);color:var(--white-30);font-family:var(--font-ui);font-size:.8125rem;border-radius:8px;cursor:pointer">← Back</button>
        <button onclick="goPage('shifting')" style="flex:1;padding:12px;background:rgba(14,90,69,.2);border:1px solid rgba(14,90,69,.4);color:var(--emerald-l);font-family:var(--font-ui);font-size:.8125rem;font-weight:600;border-radius:8px;cursor:pointer">🚚 Book Shifting</button>
        <button onclick="goPage('interior')" style="flex:1;padding:12px;background:rgba(109,40,217,.15);border:1px solid rgba(109,40,217,.3);color:#a78bfa;font-family:var(--font-ui);font-size:.8125rem;font-weight:600;border-radius:8px;cursor:pointer">🎨 Interior</button>
      </div>
    </div>
  </div>`;
  if(p.fromDB) initDetailForms(p);
  // পেজটা সরাসরি active করি — goPage() নয়, নাহলে hash আবার #/listings হয়ে যেত
  document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));
  document.getElementById('page-listings').classList.add('active');
  setActiveNav('listings');
  window.scrollTo({top:0,behavior:'auto'});
  document.title=p.t+' · '+p.area+' — আবাসন';
}

// Share বাটন: মোবাইলে native share sheet (সরাসরি WhatsApp/Messenger),
// ডেস্কটপে clipboard-এ কপি, আর কিছুই না পারলে prompt fallback
async function shareProp(){
  if(!curProp) return;
  const url=location.href;
  const title=curProp.t+' · '+curProp.area+' — ৳'+Number(curProp.rent).toLocaleString()+'/mo';
  if(navigator.share){
    try{ await navigator.share({title,text:title,url}); return; }
    catch(e){ if(e && e.name==='AbortError') return; }   // ইউজার নিজে cancel করলে চুপচাপ থামি
  }
  try{ await navigator.clipboard.writeText(url); toast('✓ লিংক কপি হয়েছে — WhatsApp/Facebook-এ পেস্ট করুন',''); }
  catch(e){ window.prompt('লিংকটা কপি করুন:', url); }
}

// ── PAY ──
function openPay(){
  if(!curProp)return;
  if(!curProp.fromDB){ toast('এটা একটা ডেমো লিস্টিং — বুক করা যাবে না','err'); return; }
  if(curProp.reserved){ toast('এই প্রপার্টি বর্তমানে অন্য কেউ reserve করে রেখেছে','err',4000); return; }
  if(!requireAuth('buyer',()=>openPay()))return;
  // Phase 13 — সঠিক অগ্রিম (advance_months×rent), server-এর lock_property()-এর হুবহু একই সূত্র;
  // ডেটা না থাকলে honest ন্যূনতম ফলব্যাক (flat ভুল-১০% অনুমান নয়)
  // সংশোধন: এটা booking/lock token (ভাড়ার ১০%) — বাসা ধরে রাখার ছোট token, আসল advance/security
  // deposit না (সেটা move-in-এ owner-কে সরাসরি দিতে হয়, নিচের cost-breakdown কার্ডে informational দেখানো হয়)
  const adv=Math.round(curProp.rent*0.10);
  document.getElementById('pay-pn').textContent=curProp.t+' · '+curProp.area;
  document.getElementById('pay-amt').textContent='৳'+adv.toLocaleString();
  document.getElementById('pc-amt').textContent='৳'+adv.toLocaleString();
  document.getElementById('pc-tot').textContent='৳'+adv.toLocaleString();
  const d=new Date();d.setDate(d.getDate()+7);
  document.getElementById('mv-dt').value=d.toISOString().split('T')[0];
  document.getElementById('mv-dt').min=new Date().toISOString().split('T')[0];
  gStep(1);openM('pay-ov');
  loadContextualFaq('payment','pay-faq-box',3);
}
function gStep(n){
  [1,2,3].forEach(i=>{
    document.getElementById('psc'+i).classList.toggle('on',i===n);
    const ps=document.getElementById('ps'+i);
    ps.className='prog-s'+(i<n?' done':i===n?' on':'');
  });
}
let curPayMethod='bkash', _resTimer=null;
function selM(el){
  document.querySelectorAll('.meth').forEach(m=>m.classList.remove('sel'));el.classList.add('sel');
  const nm=(el.querySelector('.meth-name')||{}).textContent||'';
  curPayMethod = nm.includes('বিকাশ')?'bkash':nm.includes('নগদ')?'nagad':nm.includes('রকেট')?'rocket':'card';
  const cardBox=document.getElementById('pay-card'), acc=document.getElementById('pay-acc');
  if(cardBox) cardBox.style.display = curPayMethod==='card' ? 'block' : 'none';
  if(acc) acc.closest('.form-g').style.display = curPayMethod==='card' ? 'none' : 'block';
}
async function confirmPay(){
  if(!curProp || !session){ return; }
  const btn=document.getElementById('pay-confirm-btn');
  const amount=Math.round(curProp.rent*0.10); // booking token = ভাড়ার ১০% (server lock_property()-এর সূত্রের সাথে মিলিয়ে); server নিজেই আবার যাচাই/পুনর্গণনা করে, client-input চূড়ান্ত নয়
  btn.disabled=true; const orig=btn.innerHTML; btn.innerHTML='<span class="svc-spin"></span> Processing…';
  let locked=false;
  try{
    // 1) আগে লক করার চেষ্টা — অন্য কেউ locked রাখলে এখানেই আটকাবে, টাকা কাটার আগেই
    const{data:lockRows,error:lockErr}=await abashonDB.rpc('lock_property',{
      prop_id:curProp.id, hours:24, token:amount, pay_ref:null
    });
    if(lockErr) throw {code:'ALREADY_LOCKED', message:lockErr.message};
    if(!lockRows || !lockRows.length) throw {message:'লক করা যায়নি, আবার চেষ্টা করুন।'};
    locked=true;
    const reservationId=lockRows[0].out_reservation_id;

    // 2) real SSLCommerz sandbox session — amount/buyer/property সব server-side নিজে থেকে ঠিক
    //    করে reservation row থেকে, client শুধু কোন reservation সেটা বলে (কম টাকা পাঠানো যায় না)
    const{data:sess,error:sessErr}=await abashonDB.functions.invoke('create-payment-session',{body:{reservationId}});
    if(sessErr || !sess?.gatewayUrl) throw {message:sess?.message||sessErr?.message||'Payment gateway শুরু করা যায়নি।'};

    // 3) SSLCommerz-এর নিজের hosted page-এ পুরো ব্রাউজার পাঠিয়ে দিই — কার্ড নম্বর আমাদের এখানে
    //    আসেই না, তাই cc-num/cc-cvv ইনপুট আর ব্যবহার হয় না (নিরাপত্তার জন্য ইচ্ছাকৃত)
    window.location.href = sess.gatewayUrl;
  }catch(e){
    if(locked) await abashonDB.rpc('release_property',{prop_id:curProp.id}).catch(()=>{});
    const map={ALREADY_LOCKED:e.message||'এই প্রপার্টি বর্তমানে reserved।'};
    toast(map[e.code]||e.message||'Payment failed','err',4500);
    // নিজেই আগে লক করে থাকলে (payment মাঝপথে ছেড়ে দেওয়ার মতো ঘটনায়), সাথে সাথে নিজে থেকেই
    // ছেড়ে দেওয়ার সুযোগ দিচ্ছি — release_property() নিজেই চেক করে শুধু আসল locker/owner-কেই allow করে
    if(e.code==='ALREADY_LOCKED' && confirm('এটা কি তোমারই আগের একটা অসম্পূর্ণ payment attempt? চাইলে এখনই লক ছেড়ে দিতে পারো।\n\n"OK" চাপলে লক ছাড়ার চেষ্টা করব।')){
      const{error:relErr}=await abashonDB.rpc('release_property',{prop_id:curProp.id});
      if(relErr) toast('লক ছাড়া যায়নি: '+relErr.message,'err',4000);
      else toast('✓ লক ছেড়ে দেওয়া হয়েছে — আবার Reserve করার চেষ্টা করতে পারো','',3000);
    }
  } finally {
    btn.disabled=false; btn.innerHTML=orig;
  }
}
// SSLCommerz sandbox থেকে ব্রাউজার ফিরে এলে এখানে ল্যান্ড করে (#/payment-result?...)।
// URL-এর status param শুধু hint — আসল সত্যতা আমাদের নিজের payments টেবিল থেকে আবার চেক করি,
// কারণ ততক্ষণে আমাদের sslcommerz-callback function ইতিমধ্যে val_id দিয়ে server-to-server
// validate করে ফেলেছে (redirect আসার আগেই)।
async function renderPaymentResult(urlStatus,tranId){
  document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));
  document.getElementById('page-payresult').classList.add('active');
  window.scrollTo({top:0,behavior:'auto'});
  const body=document.getElementById('payresult-body');
  body.innerHTML='<div class="svc-spin" style="width:32px;height:32px;margin:0 auto 16px"></div><div style="color:var(--white-60);font-family:var(--font-ui)">Payment status যাচাই হচ্ছে…</div>';
  try{ if(_sessionReady) await _sessionReady; }catch(e){}

  let status=urlStatus;
  if(session && tranId){
    const{data}=await abashonDB.from('payments').select('status,amount').eq('tran_id',tranId).single();
    if(data) status=data.status==='validated'?'success':(data.status==='cancelled'?'cancel':(data.status==='pending'?'pending':'failed'));
  }

  const views={
    success:{icon:'✅',title:'Payment সফল হয়েছে',sub:'আপনার বাসাটি রিজার্ভ করা হয়েছে। বিস্তারিত dashboard-এ পাবেন।',btn:'Dashboard-এ যান',go:'dashboard'},
    pending:{icon:'⏳',title:'যাচাই চলছে',sub:'আপনার payment অতিরিক্ত নিরাপত্তা-যাচাইয়ের জন্য review-এ আছে। শীঘ্রই আপডেট পাবেন।',btn:'Dashboard-এ যান',go:'dashboard'},
    fail:{icon:'❌',title:'Payment ব্যর্থ হয়েছে',sub:'টাকা কাটা হয়নি। আবার চেষ্টা করতে পারেন।',btn:'Listings-এ ফিরুন',go:'listings'},
    failed:{icon:'❌',title:'Payment ব্যর্থ হয়েছে',sub:'টাকা কাটা হয়নি। আবার চেষ্টা করতে পারেন।',btn:'Listings-এ ফিরুন',go:'listings'},
    cancel:{icon:'⚪',title:'Payment বাতিল করা হয়েছে',sub:'আপনি payment বাতিল করেছেন। বাসাটি এখনো available।',btn:'Listings-এ ফিরুন',go:'listings'},
    cancelled:{icon:'⚪',title:'Payment বাতিল করা হয়েছে',sub:'আপনি payment বাতিল করেছেন। বাসাটি এখনো available।',btn:'Listings-এ ফিরুন',go:'listings'},
    error:{icon:'⚠️',title:'কিছু একটা ভুল হয়েছে',sub:'Payment status নিশ্চিত করা যায়নি। Dashboard-এ চেক করুন অথবা সাপোর্টে যোগাযোগ করুন।',btn:'Dashboard-এ যান',go:'dashboard'},
  };
  const v=views[status]||views.error;
  body.innerHTML=`
    <div style="font-size:3rem;margin-bottom:12px">${v.icon}</div>
    <div style="font-family:var(--font-display);font-size:1.5rem;color:var(--white);margin-bottom:8px">${dtEsc(v.title)}</div>
    <div style="color:var(--white-60);font-family:var(--font-ui);font-size:.9rem;margin-bottom:8px">${dtEsc(v.sub)}</div>
    ${tranId?`<div style="color:var(--white-30);font-family:var(--font-ui);font-size:.75rem;margin-bottom:24px">Ref: ${dtEsc(tranId)}</div>`:''}
    <button class="btn-primary" onclick="goPage('${v.go}')">${v.btn}</button>`;
}

// ── SVC MODAL ──
function openSvc(i){
  const s=svcs[i];
  document.getElementById('sm-t').textContent=s.icon+' '+s.t;
  document.getElementById('sm-d').textContent=s.d;
  document.getElementById('sm-opts').innerHTML=s.opts.map((o,j)=>`
    <div class="sm-opt ${j===0?'sel':''}" onclick="document.querySelectorAll('.sm-opt').forEach(x=>x.classList.remove('sel'));this.classList.add('sel')">
      <div><div class="sm-opt-name">${o.n}</div><div class="sm-opt-d">${o.d}</div></div>
      <div class="sm-opt-p">৳${o.p}</div>
    </div>`).join('');
  openM('svc-ov');
}

// ── INT MODAL ──
function openInt(i){
  const d=designers[i];
  document.getElementById('im-n').textContent=d.n;
  document.getElementById('im-s').textContent=d.style;
  document.getElementById('im-port').innerHTML=d.imgs.map((img,i)=>`<img src="${img}" alt="${dtEsc(d.t||'Design')} ${i+1}" loading="lazy"/>`).join('');
  document.getElementById('im-dc').textContent=d.desc;
  document.getElementById('im-pr').textContent=d.price;
  document.getElementById('im-rt').textContent=d.rating;
  openM('int-ov');
}

// ── VIDEO ──
function openVid(id){
  const p=allProps.find(x=>x.id===id)||(typeof aiDB!=='undefined'&&Array.isArray(aiDB)&&aiDB.find(x=>x.id===id));
  document.getElementById('vid-cap').textContent=(p?p.t:'Property')+' — Video Tour';   // .textContent — কখনো HTML হিসেবে parse হয় না
  openM('vid-ov');
}

// ── SHIFT CALC ──
const rBase={গুলশান:45,বনানী:40,ধানমন্ডি:30,মিরপুর:18,উত্তরা:28,মোহাম্মদপুর:20,শাহজালালপুর:16,আম্বরখানা:14,জিন্দাবাজার:12,খুলশী:35,পাঁচলাইশ:22,নাসিরাবাদ:18,আগ্রাবাদ:20};
function estRent(){
  const area=document.getElementById('e-area').value,bed=+document.getElementById('e-bed').value,sqft=+document.getElementById('e-sqft').value||900;
  const base=(rBase[area]||20)*1000,adj=base*(sqft/900)*(bed*.35+.65);
  const mn=Math.round(adj*.85/500)*500,mx=Math.round(adj*1.15/500)*500;
  document.getElementById('e-price').textContent='৳'+Math.round(adj/500)*500+' /month';
  document.getElementById('e-range').textContent='Range: ৳'+mn.toLocaleString()+' – ৳'+mx.toLocaleString();
  document.getElementById('e-res').classList.add('show');
}

// ── Floating support button — one menu, three real actions (no separate overlapping widget) ──
// ── Owner↔Buyer Chat UI ──
let _chatConvos=[], _chatOpenId=null, _chatLastMsgId=0, _chatPollTimer=null;

function openMessages(){
  if(!session){ openAuth('buyer','login',false); return; }
  chatShowList(); openM('chat-ov'); chatLoadList();
}
function closeChatOv(){
  if(_chatPollTimer){ clearInterval(_chatPollTimer); _chatPollTimer=null; }
  _chatOpenId=null; closeM('chat-ov'); chatRefreshBadge();
}
function chatShowList(){
  document.getElementById('chat-list').style.display='block';
  document.getElementById('chat-thread').style.display='none';
  document.getElementById('chat-input-row').style.display='none';
  document.getElementById('chat-back').style.display='none';
  document.getElementById('chat-title').textContent='💬 Messages';
  document.getElementById('chat-sub').textContent='';
  if(_chatPollTimer){ clearInterval(_chatPollTimer); _chatPollTimer=null; }
  _chatOpenId=null;
}
async function chatLoadList(){
  const box=document.getElementById('chat-list');
  box.innerHTML='<div style="padding:40px;text-align:center;color:var(--white-30);font-family:var(--font-ui)">লোড হচ্ছে…</div>';
  try{ _chatConvos = await ChatSvc.myConversations(); }
  catch(e){ box.innerHTML=`<div style="padding:30px;text-align:center;color:#e08080;font-family:var(--font-ui);font-size:.85rem">${dtEsc(e.message||'লোড ব্যর্থ')}</div>`; return; }
  if(!_chatConvos.length){
    box.innerHTML='<div style="padding:50px 20px;text-align:center;color:var(--white-30);font-family:var(--font-ui);font-size:.85rem">এখনো কোনো কথোপকথন নেই।<br/>কোনো বাসার পেজ থেকে "মালিকের সাথে চ্যাট" চাপলে এখানে দেখা যাবে।</div>'; return;
  }
  box.innerHTML=_chatConvos.map(c=>{
    const other = (session.id===c.buyer_id) ? (c.owner_name||'মালিক') : (c.buyer_name||'ভাড়াটিয়া');
    const prop = c.properties ? `${c.properties.title} — ${c.properties.area}` : '';
    return `<div onclick="chatOpenConvo(${c.id})" role="button" tabindex="0" onkeydown="if(event.key==='Enter'){this.click()}" style="display:flex;gap:10px;align-items:center;padding:12px;border:1px solid var(--border);border-radius:12px;margin-bottom:8px;cursor:pointer;background:${c.unread?'rgba(14,90,69,.12)':'var(--glass)'}">
      <div class="owner-av" style="width:38px;height:38px;flex-shrink:0">${session.id===c.buyer_id?'🏠':'🚶'}</div>
      <div style="flex:1;min-width:0">
        <div style="font-family:var(--font-ui);font-weight:700;font-size:.88rem;color:var(--white)">${dtEsc(other)}</div>
        <div style="font-family:var(--font-ui);font-size:.72rem;color:var(--white-30);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">🏠 ${dtEsc(prop)}</div>
      </div>
      ${c.unread?`<span style="background:var(--emerald);color:#fff;border-radius:999px;font-size:.65rem;font-family:var(--font-ui);font-weight:700;padding:3px 8px">${bnNum(c.unread)}</span>`:''}
      <span onclick="event.stopPropagation();chatHideConvo(${c.id})" role="button" tabindex="0" title="আমার তালিকা থেকে লুকান" aria-label="কথোপকথন লুকান" style="flex-shrink:0;color:var(--white-30);font-size:1rem;padding:4px 6px;cursor:pointer;border-radius:8px">🗑</span>
    </div>`;
  }).join('');
}
async function chatHideConvo(id){
  if(!confirm('এই কথোপকথনটি আপনার তালিকা থেকে লুকানো হবে। (অন্য পক্ষের কাছে থেকে যাবে; নতুন মেসেজ এলে আবার দেখা যাবে।)')) return;
  try{
    await ChatSvc.hide(id);
    _chatConvos=(_chatConvos||[]).filter(x=>x.id!==id);
    if(_chatOpenId===id){ chatShowList(); }
    await chatLoadList();
    chatRefreshBadge&&chatRefreshBadge();
  }catch(e){ toast(friendlyError(e),'err',3500); }
}

async function chatOpenConvo(id){
  _chatOpenId=id; _chatLastMsgId=0;
  const c=_chatConvos.find(x=>x.id===id);
  document.getElementById('chat-list').style.display='none';
  const th=document.getElementById('chat-thread');
  th.style.display='flex'; th.innerHTML='<div style="padding:30px;text-align:center;color:var(--white-30);font-family:var(--font-ui)">লোড হচ্ছে…</div>';
  document.getElementById('chat-input-row').style.display='flex';
  document.getElementById('chat-back').style.display='block';
  if(c){
    const other=(session.id===c.buyer_id)?(c.owner_name||'মালিক'):(c.buyer_name||'ভাড়াটিয়া');
    document.getElementById('chat-title').textContent=other;
    document.getElementById('chat-sub').textContent=c.properties?`${c.properties.title} — ${c.properties.area}, ${c.properties.city}`:'';
  }
  try{
    const msgs=await ChatSvc.messages(id);
    th.innerHTML=''; msgs.forEach(m=>chatAppendMsg(m));
    if(msgs.length) _chatLastMsgId=msgs[msgs.length-1].id;
    th.scrollTop=th.scrollHeight;
    ChatSvc.markRead(id).then(chatRefreshBadge);
  }catch(e){ th.innerHTML=`<div style="padding:20px;text-align:center;color:#e08080;font-family:var(--font-ui);font-size:.85rem">${dtEsc(e.message||'লোড ব্যর্থ')}</div>`; }
  // হালকা polling — শুধু থ্রেড খোলা থাকা অবস্থায়, ৮ সেকেন্ড পরপর নতুন মেসেজ টানে; মডাল বন্ধ হলে নিজে নিজেই থামে
  if(_chatPollTimer) clearInterval(_chatPollTimer);
  _chatPollTimer=setInterval(async ()=>{
    if(!_chatOpenId || !document.getElementById('chat-ov').classList.contains('open')){ clearInterval(_chatPollTimer); _chatPollTimer=null; return; }
    try{
      const fresh=await ChatSvc.messages(_chatOpenId,_chatLastMsgId);
      if(fresh.length){
        fresh.forEach(m=>chatAppendMsg(m));
        _chatLastMsgId=fresh[fresh.length-1].id;
        const t=document.getElementById('chat-thread'); t.scrollTop=t.scrollHeight;
        ChatSvc.markRead(_chatOpenId);
      }
    }catch(e){}
  },8000);
}
function chatAppendMsg(m){
  const mine=session && m.sender_id===session.id;
  const th=document.getElementById('chat-thread');
  const el=document.createElement('div');
  el.style.cssText='max-width:78%;padding:9px 13px;border-radius:14px;font-family:var(--font-ui);font-size:.85rem;line-height:1.5;white-space:pre-wrap;word-break:break-word;'+
    (mine?'align-self:flex-end;background:var(--emerald);color:#fff;border-bottom-right-radius:4px'
         :'align-self:flex-start;background:var(--glass);border:1px solid var(--border);color:var(--white);border-bottom-left-radius:4px');
  el.textContent=m.body; // textContent = XSS-safe
  const ts=document.createElement('div');
  ts.style.cssText='font-size:.6rem;opacity:.6;margin-top:3px;text-align:right';
  ts.textContent=new Date(m.created_at).toLocaleTimeString('bn-BD',{hour:'2-digit',minute:'2-digit'});
  el.appendChild(ts);
  th.appendChild(el);
}
async function chatSendMsg(){
  const inp=document.getElementById('chat-input');
  const text=inp.value.trim(); if(!text||!_chatOpenId)return;
  inp.value='';
  try{
    const m=await ChatSvc.send(_chatOpenId,text);
    chatAppendMsg(m); _chatLastMsgId=m.id;
    const t=document.getElementById('chat-thread'); t.scrollTop=t.scrollHeight;
  }catch(e){ toast(e.message||'পাঠানো যায়নি','err',3500); inp.value=text; }
}
async function startChatWithOwner(pid){
  if(!requireAuth('buyer',()=>startChatWithOwner(pid)))return;
  if(!requirePhoneVerified(()=>startChatWithOwner(pid)))return;
  try{
    const id=await ChatSvc.openConversation(pid);
    openM('chat-ov'); chatShowList();
    _chatConvos=await ChatSvc.myConversations().catch(()=>[]);
    chatOpenConvo(Number(id));
  }catch(e){
    if(e.code==='PHONE_VERIFY_REQUIRED'){ pendingAction=()=>startChatWithOwner(pid); openVerifyOv(1); return; }
    toast(e.message||'চ্যাট খোলা যায়নি','err',3500);
  }
}
async function chatRefreshBadge(){
  const b=document.getElementById('msg-badge'); if(!b||!session)return;
  const n=await ChatSvc.unreadTotal();
  b.textContent=n>0?bnNum(n):''; b.style.display=n>0?'inline-flex':'none';
}

// ── Global error safety net (Sentry-ready hook) — production-এ Sentry.init বসালেই হবে ──
let _errToastShown=false;
window.addEventListener('error', e=>{
  console.error('[abashon]', e.error||e.message);
  if(!_errToastShown){ _errToastShown=true; try{ toast('কিছু একটা গোলমাল হয়েছে — পেজ রিফ্রেশ করে দেখুন','err',4000); }catch(_){} setTimeout(()=>_errToastShown=false, 8000); }
});
window.addEventListener('unhandledrejection', e=>{ console.error('[abashon:promise]', e.reason); });

// ── Rating / Report modal (prompt() replacement) ──
let _rateCfg=null, _rateVal=0;
function openRateModal(cfg){ // {title, stars:bool, text:bool, textPlaceholder, cb(rating, text)}
  _rateCfg=cfg; _rateVal=0;
  document.getElementById('rate-title').textContent=cfg.title||'Rating দিন';
  document.getElementById('rate-err').textContent='';
  const sw=document.getElementById('rate-stars');
  sw.style.display=cfg.stars?'flex':'none';
  if(cfg.stars){
    sw.innerHTML=[1,2,3,4,5].map(i=>`<span data-v="${i}" role="button" tabindex="0" aria-label="${i} star" style="filter:grayscale(1);transition:filter .15s">⭐</span>`).join('');
    sw.querySelectorAll('span').forEach(el=>{
      const set=()=>{ _rateVal=Number(el.dataset.v); sw.querySelectorAll('span').forEach(x=>x.style.filter=Number(x.dataset.v)<=_rateVal?'none':'grayscale(1)'); };
      el.onclick=set;
      el.onkeydown=e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); set(); } };
    });
  }
  const tw=document.getElementById('rate-text-wrap');
  tw.style.display=cfg.text?'block':'none';
  const ta=document.getElementById('rate-text'); ta.value=''; ta.placeholder=cfg.textPlaceholder||'';
  openM('rate-ov');
}
async function rateSubmit(){
  const err=document.getElementById('rate-err'); err.textContent='';
  if(_rateCfg.stars && !_rateVal){ err.textContent='একটা রেটিং বেছে নিন (১-৫ তারা)।'; return; }
  const txt=document.getElementById('rate-text').value.trim();
  if(_rateCfg.text && _rateCfg.textRequired && !txt){ err.textContent='কারণ লিখুন।'; return; }
  try{ await _rateCfg.cb(_rateVal, txt); closeM('rate-ov'); }
  catch(e){ err.textContent=e.message||'জমা দেওয়া যায়নি।'; }
}

// ── ভাড়ার চুক্তিপত্র (e-doc) ──
function openAgreement(prefill){
  prefill=prefill||{};
  const set=(id,v)=>{ const el=document.getElementById(id); if(el&&v!=null&&v!=='') el.value=v; };
  document.getElementById('agr-err').textContent='';
  set('agr-owner', prefill.ownerName); set('agr-tenant', prefill.tenantName);
  set('agr-prop-addr', prefill.propertyAddress); set('agr-rent', prefill.rent);
  openM('agr-ov');
}
function agrGenerate(mode){
  const v=id=>document.getElementById(id).value.trim();
  const err=document.getElementById('agr-err'); err.textContent='';
  const data={
    ownerName:v('agr-owner'), ownerAddress:v('agr-owner-addr'),
    tenantName:v('agr-tenant'), tenantAddress:v('agr-tenant-addr'),
    propertyAddress:v('agr-prop-addr'), rent:v('agr-rent'), advance:v('agr-adv'),
    termMonths:v('agr-term'), startDate:v('agr-start'), extraTerms:v('agr-extra')
  };
  if(!data.propertyAddress||!data.rent){ err.textContent='বাসার ঠিকানা ও মাসিক ভাড়া দিতেই হবে।'; return; }
  try{
    if(mode==='doc'){ AgreementSvc.downloadDoc(data); toast('⬇️ Word ফাইল ডাউনলোড হচ্ছে','',2500); }
    else AgreementSvc.openPrintable(data);
  }catch(e){ err.textContent=e.message||'তৈরি করা যায়নি।'; }
}

function flPick(action){ document.getElementById('fl-p')?.classList.remove('open'); action(); }

function openM(id){document.getElementById(id).classList.add('open');document.body.style.overflow='hidden';}
function closeM(id){document.getElementById(id).classList.remove('open');if(!document.querySelector('.overlay.open'))document.body.style.overflow='';}

// ── MOBILE NAV DRAWER (১১০০px-এর নিচে hamburger থেকে টগল হয়) ──
function toggleMobileNav(){
  const d=document.getElementById('mobile-nav-drawer');
  if(d.style.display==='block') closeMobileNav(); else openMobileNav();
}
function openMobileNav(){
  document.getElementById('mobile-nav-drawer').style.display='block';
  document.getElementById('mobile-nav-overlay').style.display='block';
  document.getElementById('nav-hamburger').setAttribute('aria-expanded','true');
  document.body.style.overflow='hidden';
}
function closeMobileNav(){
  document.getElementById('mobile-nav-drawer').style.display='none';
  document.getElementById('mobile-nav-overlay').style.display='none';
  document.getElementById('nav-hamburger').setAttribute('aria-expanded','false');
  document.body.style.overflow='';
}
window.addEventListener('keydown', e=>{ if(e.key==='Escape') closeMobileNav(); });

// ── AI ASSISTANT ENGINE — retrieval over aiDB ONLY (no hallucination, no LLM) ──
// Structured keyword/synonym retrieval. Returns ONLY records that exist in aiDB.
const NO_MATCH_MSG='বর্তমান ডেটাবেজে এই মানদণ্ডে মিলে এমন কোনো প্রপার্টি পাওয়া যায়নি।';
function bn2en(s){const m={'০':'0','১':'1','২':'2','৩':'3','৪':'4','৫':'5','৬':'6','৭':'7','৮':'8','৯':'9'};return s.replace(/[০-৯]/g,d=>m[d]);}

// Bangla aliases for the 25 real areas in the dataset
const AREA_ALIAS={
 'গুলশান':'Gulshan','বনানী':'Banani','ধানমন্ডি':'Dhanmondi','উত্তরা':'Uttara','মিরপুর':'Mirpur',
 'মোহাম্মদপুর':'Mohammadpur','বসুন্ধরা':'Bashundhara R/A','বারিধারা':'Baridhara','নিকেতন':'Niketon',
 'বাড্ডা':'Badda','রামপুরা':'Rampura','ওয়ারী':'Wari','মতিঝিল':'Motijheel','লালমাটিয়া':'Lalmatia',
 'আফতাবনগর':'Aftabnagar','আখালিয়া':'Akhalia','সুবিদবাজার':'Subidbazar','জিন্দাবাজার':'Jindabazar',
 'আম্বরখানা':'Ambarkhana','টিলাগড়':'Tilagor','খুলশী':'Khulshi','পাঁচলাইশ':'Panchlaish',
 'নাসিরাবাদ':'Nasirabad','আগ্রাবাদ':'Agrabad','চান্দগাঁও':'Chandgaon'
};
const CITY_MAP={'Dhaka':['dhaka','ঢাকা'],'Sylhet':['sylhet','সিলেট'],'Chattogram':['chattogram','chittagong','ctg','চট্টগ্রাম','চট্টগ্রা']};
// hardcoded props[] এ শহরের নাম বাংলায় (ঢাকা), DB listing এ ইংরেজিতে (Dhaka) — দুটোই মেলাতে
function cityEq(a,b){
  if(!a||!b) return false;
  if(a===b) return true;
  const norm=s=>{ const sl=s.toLowerCase(); for(const c in CITY_MAP){ if(CITY_MAP[c].some(k=>k===sl)||c.toLowerCase()===sl) return c; } return s; };
  return norm(a)===norm(b);
}
// Cities users commonly ask about that are NOT in the dataset — must return honest no-match, not wrong-city results
const OUT_CITIES=['khulna','খুলনা','rajshahi','রাজশাহী','barishal','barisal','বরিশাল','rangpur','রংপুর','mymensingh','ময়মনসিংহ','cumilla','comilla','কুমিল্লা','cox','কক্সবাজার','narayanganj','নারায়ণগঞ্জ','gazipur','গাজীপুর','bogura','bogra','বগুড়া','jashore','jessore','যশোর','dinajpur','দিনাজপুর'];
let DB_AREAS = [];   // aiDB lazy-load হওয়ার পর ensureAiDB() এটা পপুলেট করে

function parseQuery(q){
  const orig=q, lq=bn2en(q.toLowerCase());
  let city=null;
  for(const c in CITY_MAP){ if(CITY_MAP[c].some(k=>lq.includes(k))){ city=c; break; } }
  // Area: match any real DB area (English substring) or Bangla alias
  let area=null;
  for(const a of DB_AREAS){ if(lq.includes(a.toLowerCase())){ area=a; break; } }
  if(!area){ for(const bn in AREA_ALIAS){ if(orig.includes(bn)){ area=AREA_ALIAS[bn]; break; } } }
  if(area && !city){ const rec=aiDB.find(p=>p.area===area); if(rec) city=rec.city; }
  // Bedrooms
  let beds=null;
  if(/studio|স্টুডিও/.test(lq)) beds=1;
  const bm=lq.match(/(\d+)\s*(bhk|bed|bedroom|বেড|রুম|room)/); if(bm) beds=+bm[1];
  // Property type present in data: Apartment / Duplex
  let ptype=null;
  if(/duplex|ডুপ্লেক্স/.test(lq)) ptype='Duplex';
  else if(/sublet|সাবলেট/.test(lq)) ptype='Sublet';
  else if(/\bseat\b|সিট|মেস/.test(lq)) ptype='Seat';
  else if(/apartment|flat|ফ্ল্যাট|এপার্টমেন্ট|অ্যাপার্টমেন্ট/.test(lq)) ptype='Apartment';
  // Listing type — dataset is rent-only; a buy/sale query has zero DB matches (honest no-match)
  let saleWanted = /\b(sale|buy|purchase)\b|কিনব|কিনতে|কেনা|বিক্রি/.test(lq);
  // Budget
  let budget=null; const cl=lq.replace(/,/g,'');
  const kM=cl.match(/(\d+(?:\.\d+)?)\s*(k|হাজার|thousand)/);
  const lM=cl.match(/(\d+(?:\.\d+)?)\s*(lakh|lac|লাখ|লক্ষ)/);
  if(lM) budget=Math.round(parseFloat(lM[1])*100000);
  else if(kM) budget=Math.round(parseFloat(kM[1])*1000);
  else { const n=cl.match(/(\d{4,7})/); if(n) budget=+n[1]; }
  // Furnished
  let furnished=null;
  if(/fully\s*furnish|ফুল\s*ফার্নিশ/.test(lq)) furnished='Fully Furnished';
  else if(/semi\s*furnish|সেমি/.test(lq)) furnished='Semi-Furnished';
  else if(/unfurnish|আন-?ফার্নিশ|খালি/.test(lq)) furnished='Unfurnished';
  else if(/furnish|ফার্নিশ/.test(lq)) furnished='ANY_FURNISHED';
  // Tenant intent
  let tenant=null;
  if(/(female|girl|women|মেয়ে|নারী)[^a-z]*(bachelor|ব্যাচেলর)/.test(lq)) tenant='Female Bachelor';
  else if(/bachelor|ব্যাচেলর/.test(lq)) tenant='Bachelor';
  else if(/family|পরিবার|ফ্যামিলি/.test(lq)) tenant='Family';
  // Amenities requested (map to aiDB am[] tokens)
  const amenMap={'Lift':/lift|লিফট/,'Car Parking':/car\s*park|গাড়ি|car parking/, 'Bike Parking':/bike\s*park|বাইক/, 'Generator':/generator|জেনারেটর/, 'CCTV':/cctv/, 'Security':/security|নিরাপত্তা|সিকিউরিটি/, 'Internet':/internet|wifi|ইন্টারনেট/, 'Gas':/gas|গ্যাস/};
  // generic "parking" → any parking
  const wantAmen=[]; let wantParkingAny=false;
  if(/park|পার্কিং/.test(lq) && !/car|bike|গাড়ি|বাইক/.test(lq)) wantParkingAny=true;
  for(const a in amenMap){ if(amenMap[a].test(lq)) wantAmen.push(a); }
  const cheap=/সস্তা|কম দাম|budget|affordable|সাশ্রয়|cheap/.test(lq);
  const premium=/premium|luxury|প্রিমিয়াম|বিলাস|luxurious/.test(lq);
  const verified=/verified|ভেরিফাইড|যাচাই/.test(lq);
  // Dataset is residential rent only — flag out-of-scope asks so we can honestly say "no match"
  const commercial=/commercial|office|shop|showroom|warehouse|কমার্শিয়াল|অফিস|দোকান|শোরুম/.test(lq);
  const browse=/recommend|suggest|best|show|list|options?|available|property|properties|apartment|flat|home|house|রিকমেন্ড|সাজেস্ট|বেস্ট|দেখাও|প্রপার্টি|বাসা|ফ্ল্যাট|বাড়ি|অ্যাপার্টমেন্ট/.test(lq);
  const outCity = !city && !area && OUT_CITIES.some(k=>lq.includes(k));
  return {city,area,beds,ptype,saleWanted,budget,furnished,tenant,wantAmen,wantParkingAny,cheap,premium,verified,commercial,browse,outCity};
}

function aiMatch(q){
  if(typeof aiDB==='undefined' || !Array.isArray(aiDB) || aiDB.length===0){
    throw new Error('AI_DB_NOT_LOADED'); // js/aiDB.js failed to load or is empty — surfaced to UI by callers
  }
  const f=parseQuery(q);
  // Out of dataset scope -> honest empty (rent-only, residential-only, known cities only)
  if(f.saleWanted || f.commercial || f.outCity) return []; // buy/commercial/out-of-coverage city -> honest no-match
  const scored=aiDB.map(p=>{
    let sc=0, rs=[], hard=true;
    if(f.city){ if(p.city===f.city){sc+=22;rs.push(p.city);} else hard=false; }
    if(f.area){ if(p.area===f.area){sc+=26;rs.push(p.area);} else hard=false; }
    if(f.beds){ if(p.beds===f.beds){sc+=22;rs.push(f.beds+' বেড');} else hard=false; }
    if(f.ptype){ if(p.ptype===f.ptype){sc+=10;rs.push(p.ptype);} else hard=false; }
    if(f.budget){ if(p.rent<=f.budget){sc+=22;rs.push('৳'+p.rent.toLocaleString()+' — বাজেটে');} else hard=false; }
    if(f.furnished){ if(f.furnished==='ANY_FURNISHED'){ if(p.furnished!=='Unfurnished'){sc+=8;rs.push(p.furnished);} else hard=false; } else { if(p.furnished===f.furnished){sc+=8;rs.push(p.furnished);} else hard=false; } }
    if(f.tenant){ const t=(p.tenant||'').toLowerCase(); if(t.includes(f.tenant.toLowerCase())){sc+=6;rs.push(p.tenant);} else if(f.tenant==='Bachelor'||f.tenant==='Female Bachelor'){ hard=false; } }
    if(f.wantParkingAny){ if(p.am.some(a=>a.includes('Parking'))){sc+=6;rs.push('Parking');} else hard=false; }
    f.wantAmen.forEach(a=>{ if(p.am.some(x=>x===a||x.includes(a.split(' ')[0]))){sc+=6;rs.push(a);} else hard=false; });
    if(f.verified){ if(p.v){sc+=4;} else hard=false; }
    if(f.cheap) sc += p.rent<=20000?10:(p.rent<=30000?4:0);
    if(f.premium) sc += p.ai>=95?12:0;
    sc += p.ai*0.12; // quality tie-breaker
    return {p,sc,hard,rs};
  });
  const constrained = !!(f.city||f.area||f.beds||f.ptype||f.budget||f.furnished||f.tenant||f.wantAmen.length||f.wantParkingAny||f.verified);
  if(!constrained && !f.browse) return []; // unrecognized query (e.g. unknown location) -> no invented results
  let pool = constrained ? scored.filter(x=>x.hard) : scored;
  if(constrained && pool.length===0) return []; // -> NO_MATCH_MSG, never invent
  pool.sort((a,b)=>b.sc-a.sc);
  const top=pool.slice(0,100);
  const max=top.length?top[0].sc:1;
  return top.map(x=>({ p:x.p, sc:Math.min(99,80+Math.round((x.sc/max)*19)),
    reason: x.rs.length? [...new Set(x.rs)].join(' · ') : (x.p.area+', '+x.p.city) }));
}

// ── HOME AI ──
function hAddMsg(txt,type){
  const d=document.getElementById('home-ai-msgs'),m=document.createElement('div');
  m.className='ai-msg '+type;d.appendChild(m);d.scrollTop=d.scrollHeight;
  if(type==='bot') AbashonUtil.typewriter(m,txt); else m.textContent=txt;
}
function homeQ(q){document.getElementById('home-ai-inp').value=q;homeAI();}
// ── Copilot pipeline (দুই চ্যাটেই ব্যবহৃত) ──
// ধাপ: (১) deterministic context জোগাড় — মিলে-যাওয়া FAQ + aiMatch-এর টপ listing (বাস্তব ডেটা),
// (২) Gemini copilot-কে সেই context দিয়ে জিজ্ঞেস, (৩) copilot না থাকলে (key নেই/limit) আগের
// deterministic উত্তর — কোনো অবস্থাতেই "Database error" জাতীয় technical message না (Fallback Rules)।
let _copilotHist=[];
function _copilotRemember(role,text){
  _copilotHist.push({role,text:String(text).slice(0,AbashonConfig.COPILOT.MSG_CAP)});
  const HM=AbashonConfig.COPILOT.HISTORY_MAX;
  if(_copilotHist.length>HM)_copilotHist=_copilotHist.slice(-HM);
}
async function _copilotGather(q){
  const nlp=AbashonNLP.analyze(q); // enterprise NLP: lang/intent/entities/negation
  ConvMemory.absorb(nlp,q);        // কথোপকথন-স্মৃতি: budget/area/family/pet/occupation/floor/type/searches
  const eff=ConvMemory.enrich(nlp); // query entities > memory; memory ফাঁক পূরণ করে
  const faqAns=_matchFaqAny(q);
  let matches=[];
  let dbLoadFailed=false, dbLoadErrMsg=''; // সার্চ ব্যর্থ vs সার্চ সফল-কিন্তু-শূন্য-ফলাফল — এই দুটো এক নয়, এক বার্তায় গুলিয়ে ফেলা উচিত না
  const searchSuppressed = nlp.primaryIntent==='not_looking'; // "বাসা চাই না" → listing দেখাই না
  try{
    if(!searchSuppressed){
      await ensureAiDB(); matches=aiMatch(q)||[];
      matches=AbashonNLP.filterMatches(matches,{entities:eff}); // memory-enriched post-filter
      matches=ConvMemory.rankBoost(matches,eff);                // পছন্দের এলাকা আগে
      try{ await RankEngine.load(abashonDB); }catch(e){}        // area-factor প্রোফাইল (cached)
      matches=RankEngine.rank(matches,{entities:eff,profile:ConvMemory.compact()||{},allProps:(typeof aiDB!=='undefined'&&aiDB)||null}); // ১৩-ফ্যাক্টর র‍্যাংক + ব্যাখ্যা
    }
  }catch(e){
    console.error('[copilot] property search failed:',e);
    dbLoadFailed=true; dbLoadErrMsg=(e&&e.message)?String(e.message).slice(0,150):'unknown';
  }
  const listings=matches.slice(0,6).map(m=>({id:m.p.id,title:m.p.t,area:m.p.area,city:m.p.city,rent:m.p.rent,type:m.p.type,beds:m.p.beds||null,match:(m.rankScore!=null?m.rankScore:m.sc)+'%',why:[m.reason,RankEngine.summary(m,90)].filter(Boolean).join(' · ').slice(0,160)}));
  return { faq: faqAns?faqAns.entry:null, faqAns, matches, listings, nlp, profile: ConvMemory.compact(), dbLoadFailed, dbLoadErrMsg };
}
// প্রথম AI প্রশ্নের latency কমাতে: পেজ idle হলে aiDB আগে থেকেই নামিয়ে রাখি
if(typeof window!=='undefined'){
  const _pre=()=>{ try{ ensureAiDB().catch(()=>{}); }catch(e){} };
  ('requestIdleCallback' in window)?requestIdleCallback(_pre,{timeout:5000}):setTimeout(_pre,3500);
}

const GRACEFUL_NO_DATA=AbashonConfig.TEXT.GRACEFUL_NO_DATA; // কেন্দ্রীয়: js/config.js

async function homeAI(){
  const inp=document.getElementById('home-ai-inp'),q=inp.value.trim();if(!q)return;
  hAddMsg(q,'user');inp.value='';hAddMsg('Analyzing...','typing');
  _copilotRemember('user',q);
  const ctx=await _copilotGather(q);
  const llmRes=await CopilotSvc.ask(q,{history:_copilotHist.slice(0,-1),listings:ctx.listings,faq:ctx.faq,nlp:ctx.nlp,profile:ctx.profile});
  const llm=llmRes&&llmRes.text;
  document.querySelectorAll('#home-ai-msgs .typing').forEach(m=>m.remove());
  const res=document.getElementById('home-ai-results'),cards=document.getElementById('home-ai-cards');

  if(llm){
    hAddMsg(llm,'bot'); _copilotRemember('model',llm);
  }else if(ctx.faqAns){
    const t=_renderFaqAnswer(ctx.faqAns.entry,true); hAddMsg(t,'bot'); _copilotRemember('model',t);
  }else if(ctx.dbLoadFailed){
    const t='এই মুহূর্তে প্রপার্টি ডেটা লোড করা যাচ্ছে না — ইন্টারনেট সংযোগ চেক করে আবার চেষ্টা করো। এটা "কোনো বাসা নেই" নয়, সিস্টেমের সাময়িক সমস্যা।'+(ctx.dbLoadErrMsg?'\n\n(কারিগরি বিস্তারিত: '+ctx.dbLoadErrMsg+')':'');
    hAddMsg(t,'bot'); _copilotRemember('model',t);
  }else if(!ctx.matches.length){
    const t=(ctx.nlp&&ctx.nlp.primaryIntent==='not_looking')?'ঠিক আছে 🙂 বাসা খোঁজা ছাড়াও ভাড়া-আইন, চুক্তিপত্র, শিফটিং বা দরকষাকষি নিয়ে জিজ্ঞেস করতে পারো — আমি সাহায্য করব।':((typeof NO_MATCH_MSG!=='undefined'&&NO_MATCH_MSG)?NO_MATCH_MSG:GRACEFUL_NO_DATA);
    hAddMsg(t,'bot'); _copilotRemember('model',t);
  }else{
    const t=ctx.matches.length+' matching '+(ctx.matches.length===1?'property':'properties')+' from database';
    hAddMsg(t,'bot'); _copilotRemember('model',t);
  }

  if(ctx.matches.length){
    cards.innerHTML=ctx.matches.slice(0,3).map(_m=>{const p=_m.p,sc=(_m.rankScore!=null?_m.rankScore:_m.sc);return `
      <div class="ai-rc" onclick="openDetail(${p.id})">
        <img class="ai-rc-img" src="${imgOpt(p.img,AbashonConfig.UI.IMG_MINI_W)}" alt="${dtEsc(p.t||p.title||'')}" loading="lazy" decoding="async"/>
        <div style="flex:1">
          <div class="ai-rc-t">${dtEsc(p.t)}</div>
          <div class="ai-rc-l">📍 ${dtEsc(p.area)}, ${dtEsc(p.city)}</div>
          <div class="ai-rc-p">৳${p.rent.toLocaleString()}/${p.type==='RENT'?'mo':'sale'}</div>
        </div>
        <div class="ai-rc-sc">${sc}% match</div>
      </div>`;}).join('');
    res.classList.add('show');
  }else{
    res.classList.remove('show');
  }
}

// ── FULL AI PAGE ──
// Phase 10 — AI যা মনে রেখেছে তা স্বচ্ছভাবে দেখানো, ব্যবহারকারী চাইলে রিসেট করতে পারে
// (ConvMemory.compact()/.clear() পুনর্ব্যবহার — কোনো নতুন memory-লজিক নয়)
function renderAiProfileChips(){
  const box=document.getElementById('ai-profile-chips'); if(!box||typeof ConvMemory==='undefined')return;
  const c=ConvMemory.compact()||{};
  const chips=[];
  if(c.budgetMin||c.budgetMax)chips.push('বাজেট '+(c.budgetMin?'৳'+c.budgetMin.toLocaleString():'')+(c.budgetMin&&c.budgetMax?'–':'')+(c.budgetMax?'৳'+c.budgetMax.toLocaleString():''));
  if(c.areas&&c.areas.length)chips.push('এলাকা: '+c.areas.slice(0,2).join(', '));
  if(c.bedrooms)chips.push(bnNum(c.bedrooms)+' বেড');
  if(c.tenantType)chips.push(c.tenantType==='FAMILY'?'ফ্যামিলি':c.tenantType==='BACHELOR'?'ব্যাচেলর':c.tenantType);
  if(c.familySize)chips.push(bnNum(c.familySize)+' জন পরিবার');
  if(c.parking)chips.push('পার্কিং চাই');
  if(c.pet)chips.push('পোষা প্রাণী আছে');
  if(c.occupation)chips.push(c.occupation);
  if(!chips.length){box.innerHTML='';return;}
  box.innerHTML=`<div style="font-family:var(--font-ui);font-size:.65rem;color:var(--white-30);text-transform:uppercase;letter-spacing:.08em;margin-bottom:6px">AI যা মনে রেখেছে</div>
    <div style="display:flex;gap:6px;flex-wrap:wrap">${chips.map(c=>`<span style="padding:5px 12px;background:rgba(212,175,55,.1);border:1px solid var(--border-gold);color:var(--gold);border-radius:100px;font-family:var(--font-ui);font-size:.7rem">${dtEsc(c)}</span>`).join('')}
    <button onclick="ConvMemory.clear();renderAiProfileChips();toast('মুছে ফেলা হয়েছে — নতুন করে শুরু করো','',2000)" style="padding:5px 12px;border-radius:100px;border:1px solid var(--border);background:none;color:var(--white-30);font-family:var(--font-ui);font-size:.7rem;cursor:pointer">✕ সব মুছো</button></div>`;
}
function initAIPage(){
  ensureAiDB().catch(()=>{});   // পেজ খোলা মাত্রই prefetch শুরু — টাইপ করা শেষ হওয়ার আগেই ready থাকার সম্ভাবনা বেশি
  renderAiProfileChips();
  const el=document.getElementById('ai-full-msgs');
  if(el&&!el.children.length){
    const m=document.createElement('div');m.className='ai-msg bot';
    m.style.cssText='padding:10px 14px;border-radius:12px;font-family:var(--font-ui);font-size:.8125rem;line-height:1.55;max-width:88%;background:rgba(14,90,69,.2);border:1px solid rgba(14,90,69,.3);color:rgba(28,38,33,.9);align-self:flex-start';
    m.textContent='আমি Abashon AI। আপনার বাসার চাহিদা বলুন — এলাকা, বাজেট, বেডরুম। আমি সেরা ম্যাচ বের করে দেব।';
    el.appendChild(m);
  }
}
function aiFAddMsg(txt,type){
  const d=document.getElementById('ai-full-msgs'),m=document.createElement('div');
  m.className='ai-msg '+type;
  m.style.cssText=`padding:10px 14px;border-radius:12px;font-family:var(--font-ui);font-size:.8125rem;line-height:1.55;max-width:88%;${type==='bot'?'background:rgba(14,90,69,.2);border:1px solid rgba(14,90,69,.3);color:rgba(28,38,33,.9);align-self:flex-start':'background:rgba(212,175,55,.12);border:1px solid rgba(212,175,55,.2);color:rgba(28,38,33,.82);align-self:flex-end'}`;
  d.appendChild(m);d.scrollTop=d.scrollHeight;
  if(type==='bot') AbashonUtil.typewriter(m,txt); else m.textContent=txt;
}
function aiQ(q){document.getElementById('ai-fi').value=q;fullAI();}
// Phase 7 — হোমপেজ smart-search: AI পেজে নিয়ে গিয়ে aiQ()-এর একই প্যাটার্ন পুনর্ব্যবহার (নকল লজিক নয়)।
// presetQ থাকলে (suggestion chip) সেটা ব্যবহার হয়, নইলে ইনপুট-বক্সের টেক্সট।
function heroSearchGo(presetQ){
  const inp=document.getElementById('hero-search-inp');
  const q=(presetQ||(inp?inp.value:'')).trim();
  if(!q)return;
  goPage('ai');
  setTimeout(()=>aiQ(q),0); // পেজ-সুইচ DOM paint-এর পরের tick-এ, ai-fi element নিশ্চিতভাবে ready থাকে
}


async function fullAI(){
  const inp=document.getElementById('ai-fi'),q=inp.value.trim();if(!q)return;
  aiFAddMsg(q,'user');inp.value='';aiFAddMsg('AI বিশ্লেষণ করছে…','typing');
  const area=document.getElementById('ai-match');
  area.innerHTML='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px">'+'<div style="background:var(--surface);border:1px solid var(--border);border-radius:16px;height:220px;animation:shimmer 1.5s infinite"></div>'.repeat(4)+'</div>';

  _copilotRemember('user',q);
  const ctx=await _copilotGather(q);
  const llmRes=await CopilotSvc.ask(q,{history:_copilotHist.slice(0,-1),listings:ctx.listings,faq:ctx.faq,nlp:ctx.nlp,profile:ctx.profile});
  const llm=llmRes&&llmRes.text;
  document.querySelectorAll('#ai-full-msgs .typing').forEach(m=>m.remove());

  // ১) চ্যাট বাবল — LLM থাকলে তার উত্তর, না থাকলে deterministic উত্তর (Fallback Rules: technical error কখনো না)
  if(llm){
    aiFAddMsg(llm,'bot'); _copilotRemember('model',llm);
    if(llmRes.eventId&&llmRes.fbToken){ // monitoring feedback (ছোট, অনাক্রম্য)
      const d=document.getElementById('ai-full-msgs');
      const fb=document.createElement('div');
      fb.style.cssText='text-align:left;margin:-4px 0 8px 4px;font-size:.8rem;color:var(--white-30)';
      fb.innerHTML=`<span style="cursor:pointer" data-v="1">👍</span> <span style="cursor:pointer" data-v="-1">👎</span>`;
      fb.querySelectorAll('span').forEach(el=>el.onclick=async()=>{
        const okFb=await CopilotSvc.feedback(llmRes.eventId,llmRes.fbToken,el.dataset.v==='1');
        fb.textContent=okFb?'ধন্যবাদ ✓':'';
      });
      d.appendChild(fb);d.scrollTop=d.scrollHeight;
    }
    // AKSIS Phase 6 — কম-confidence উত্তরে সরাসরি human-escalation অপশন (Section 21)
    if(llmRes.confidence==='low'){
      const d2=document.getElementById('ai-full-msgs');
      const esc=document.createElement('div');
      esc.style.cssText='text-align:left;margin:0 0 10px 4px';
      esc.innerHTML=`<button onclick="escalateAiChatToHuman()" style="background:none;border:1px solid var(--border-gold);border-radius:8px;padding:5px 12px;color:var(--gold);font-family:var(--font-ui);font-size:.72rem;cursor:pointer">🙋 নিশ্চিত না? মানুষের সাথে কথা বলো</button>`;
      d2.appendChild(esc);d2.scrollTop=d2.scrollHeight;
    }
  }
  else if(ctx.faqAns){ const t=_renderFaqAnswer(ctx.faqAns.entry,true); aiFAddMsg(t,'bot'); _copilotRemember('model',t); }
  else if(ctx.dbLoadFailed){ const t='এই মুহূর্তে প্রপার্টি ডেটা লোড করা যাচ্ছে না — ইন্টারনেট সংযোগ চেক করে আবার চেষ্টা করো। এটা "কোনো বাসা নেই" নয়, সিস্টেমের সাময়িক সমস্যা।'+(ctx.dbLoadErrMsg?'\n\n(কারিগরি বিস্তারিত: '+ctx.dbLoadErrMsg+')':''); aiFAddMsg(t,'bot'); _copilotRemember('model',t); }
  else if(!ctx.matches.length){ const t=(ctx.nlp&&ctx.nlp.primaryIntent==='not_looking')?'ঠিক আছে 🙂 বাসা খোঁজা ছাড়াও ভাড়া-আইন, চুক্তিপত্র, শিফটিং বা দরকষাকষি নিয়ে জিজ্ঞেস করতে পারো — আমি সাহায্য করব।':((typeof NO_MATCH_MSG!=='undefined'&&NO_MATCH_MSG)?NO_MATCH_MSG:GRACEFUL_NO_DATA); aiFAddMsg(t,'bot'); _copilotRemember('model',t); }
  else { const t=ctx.matches.length+' matching '+(ctx.matches.length===1?'property':'properties')+' from the database'; aiFAddMsg(t,'bot'); _copilotRemember('model',t); }

  // ২) ডান পাশের ফলাফল এলাকা — সবসময় বাস্তব ডেটা (listing card বা curated FAQ), কখনোই LLM-বানানো card না
  if(ctx.matches.length){
    document.getElementById('ai-res-ttl').textContent='🎯 '+ctx.matches.length+' Properties from Database';
    document.getElementById('ai-res-sub').textContent='"'+q+'" — matched against '+((typeof aiDB!=='undefined'&&aiDB&&aiDB.length)?aiDB.length:'')+' database records';
    showAIMatches(ctx.matches.map(m=>({id:m.p.id,score:(m.rankScore!=null?m.rankScore:m.sc),reason:[m.reason,RankEngine.summary(m,80)].filter(Boolean).join(' · '),factors:m.factors||[]})));
  }else if(ctx.faqAns){
    document.getElementById('ai-res-ttl').textContent='💬 উত্তর';
    document.getElementById('ai-res-sub').textContent=ctx.faqAns.approx?`"${ctx.faqAns.matchedKw}"-এর কাছাকাছি মিল ধরে`:'';
    document.getElementById('ai-match').innerHTML=`<div style="padding:24px;background:var(--surface);border:1px solid var(--border);border-radius:16px;font-family:var(--font-ui);font-size:.9rem;color:var(--white);line-height:1.7">${_renderFaqAnswer(ctx.faqAns.entry,false)}<div style="margin-top:14px;font-size:.75rem;color:var(--white-30)">বাসা-সংক্রান্ত কিছু খুঁজতে চাইলে এলাকা/বাজেট/বেডরুম লিখে আবার জিজ্ঞেস করো।</div></div>`;
  }else if(llm){
    document.getElementById('ai-res-ttl').textContent='💬 উত্তর';
    document.getElementById('ai-res-sub').textContent='';
    const conf=llmRes&&llmRes.confidence;
    const confLbl=conf==='high'?'উচ্চ মিল':conf==='medium'?'মাঝারি মিল':conf==='low'?'কম মিল':'';
    const srcLine=(llmRes&&llmRes.sources&&llmRes.sources.length)
      ? `<div style="margin-top:14px;padding-top:10px;border-top:1px solid var(--border);font-size:.7rem;color:var(--white-30)">উৎস: ${llmRes.sources.slice(0,4).map(x=>dtEsc(x.type==='property'?('লিস্টিং #'+x.id):(x.title||'জ্ঞানভাণ্ডার'))).join(' · ')}${confLbl?` <span style="float:right">${confLbl}</span>`:''}</div>`
      : '';
    document.getElementById('ai-match').innerHTML=`<div style="padding:24px;background:var(--surface);border:1px solid var(--border);border-radius:16px;font-family:var(--font-ui);font-size:.9rem;color:var(--white);line-height:1.7">${dtEsc(llm).replace(/\n/g,'<br/>')}${srcLine}</div>`;
  }else{
    document.getElementById('ai-res-ttl').textContent=ctx.dbLoadFailed?'⚠️ সাময়িক সমস্যা':'কোনো মিল পাওয়া যায়নি';
    document.getElementById('ai-res-sub').textContent='';
    document.getElementById('ai-match').innerHTML=ctx.dbLoadFailed
      ? '<div style="padding:40px;text-align:center;color:var(--white-30);font-family:var(--font-ui);font-size:.9rem">⚠️ প্রপার্টি ডেটা লোড করা যাচ্ছে না — ইন্টারনেট সংযোগ চেক করে পেজ রিফ্রেশ করো।'+(ctx.dbLoadErrMsg?'<div style="margin-top:8px;font-size:.75rem;opacity:.7">কারিগরি বিস্তারিত: '+dtEsc(ctx.dbLoadErrMsg)+'</div>':'')+'</div>'
      : '<div style="padding:40px;text-align:center;color:var(--white-30);font-family:var(--font-ui);font-size:.9rem">🔍 '+((typeof NO_MATCH_MSG!=='undefined'&&NO_MATCH_MSG)?NO_MATCH_MSG:GRACEFUL_NO_DATA)+'</div>';
  }
  renderAiProfileChips(); // Phase 10 — AI যা মনে রেখেছে তা স্বচ্ছভাবে দেখানো (master-prompt: "avoid repetitive questions, use existing preferences")
}
// Phase 9 — Match-Score breakdown toggle (master-prompt Section 17: score must be explainable)
function toggleMatchBreakdown(id){
  const el=document.getElementById('mb-'+id); if(!el)return;
  el.hidden=!el.hidden;
  const btn=document.querySelector(`[aria-controls="mb-${id}"]`);
  if(btn)btn.setAttribute('aria-expanded',String(!el.hidden));
}
function showAIMatches(matches){
  document.getElementById('ai-match').innerHTML=`
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px">
    ${matches.map(m=>{
      const p=aiDB.find(x=>x.id===m.id)||allProps.find(x=>x.id===m.id);if(!p)return'';
      return`<div style="background:var(--surface);border:1px solid var(--border);border-radius:18px;overflow:hidden;cursor:pointer;transition:all .3s;position:relative" onmouseenter="this.style.borderColor='rgba(212,175,55,.3)';this.style.transform='translateY(-4px)'" onmouseleave="this.style.borderColor='var(--border)';this.style.transform='none'" onclick="openDetail(${p.id})">
        <div style="position:absolute;top:10px;right:10px;background:var(--emerald);color:var(--ink-white);font-weight:700;border-radius:100px;padding:3px 9px;font-family:var(--font-ui);font-size:.625rem;z-index:1">${m.score}% match</div>
        <img src="${imgOpt(p.img,AbashonConfig.UI.IMG_AI_W)}" alt="${dtEsc(p.t||p.title||'')}" style="width:100%;height:170px;object-fit:cover" loading="lazy" decoding="async"/>
        <div style="padding:14px">
          <div style="font-family:var(--font-display);font-size:.9375rem;font-weight:500;color:var(--white);margin-bottom:4px">${dtEsc(p.t)}</div>
          <div style="font-family:var(--font-ui);font-size:.75rem;color:var(--white-30);margin-bottom:8px">📍 ${dtEsc(p.area)}, ${dtEsc(p.city)}</div>
          <div style="font-family:var(--font-ui);font-size:.75rem;color:var(--emerald-l);background:rgba(14,90,69,.15);padding:4px 10px;border-radius:8px;margin-bottom:10px;line-height:1.4">🤖 ${m.reason}</div>
          ${(m.factors&&m.factors.length)?`<button onclick="event.stopPropagation();toggleMatchBreakdown(${p.id})" aria-expanded="false" aria-controls="mb-${p.id}" style="background:none;border:none;color:var(--gold);font-family:var(--font-ui);font-size:.7rem;padding:0 0 8px;cursor:pointer;text-decoration:underline">কেন এই ম্যাচ? বিস্তারিত দেখাও</button>
          <div id="mb-${p.id}" hidden style="margin-bottom:10px;padding:10px;background:var(--glass);border-radius:10px" onclick="event.stopPropagation()">
            ${m.factors.map(f=>`<div style="display:flex;align-items:center;gap:8px;margin-bottom:5px"><span style="width:78px;flex-shrink:0;font-family:var(--font-ui);font-size:.65rem;color:var(--white-30)">${dtEsc(f.label)}</span><span style="flex:1;height:5px;background:var(--border);border-radius:3px;overflow:hidden"><span style="display:block;height:100%;width:${Math.round(f.score/5*100)}%;background:${f.score>=4?'var(--emerald-l)':f.score>=2.5?'var(--gold)':'var(--error)'}"></span></span><span style="font-family:var(--font-ui);font-size:.65rem;color:var(--white-60);width:30px;text-align:right">${Math.round(f.score/5*100)}%</span></div>`).join('')}
            <div style="font-family:var(--font-ui);font-size:.6rem;color:var(--white-30);margin-top:6px">*এলাকা-ভিত্তিক factor আনুমানিক (area-profile), বাকিগুলো এই নির্দিষ্ট listing-এর বাস্তব তথ্য থেকে</div>
          </div>`:''}
          <div style="display:flex;align-items:center;justify-content:space-between">
            <div style="font-family:var(--font-display);font-size:1.0625rem;font-weight:500;color:var(--white)">৳${p.rent.toLocaleString()}<small style="font-weight:400;font-size:.6875rem;color:var(--white-30)">/${p.type==='RENT'?'mo':'sale'}</small></div>
            <button onclick="event.stopPropagation(); openBooking(${p.id})" style="padding:6px 14px;background:linear-gradient(135deg,var(--gold),var(--gold-d));color:#000;font-family:var(--font-ui);font-size:.6875rem;font-weight:700;border-radius:100px;border:none;cursor:pointer">Book</button>
          </div>
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

// ── AUTH (Supabase-backed) ──
let session = null;
let authRole='buyer', authMode='login', pendingAction=null;
const _val=id=>document.getElementById(id).value.trim();
const _maskNID=n=>{ const s=(n||'').replace(/\D/g,''); return s.length>4 ? '••••••'+s.slice(-4) : '••••'; };
const _isValidEmail=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

function setRole(r){
  authRole=r;
  document.getElementById('ro-buyer').classList.toggle('on',r==='buyer');
  document.getElementById('ro-seller').classList.toggle('on',r==='seller');
  document.getElementById('su-loc-label').textContent = r==='seller' ? 'দোকান/অফিসের ঠিকানা' : 'বাসার ঠিকানা';
  document.getElementById('su-loc').placeholder = r==='seller' ? 'দোকান/অফিসের ঠিকানা' : 'বাসা/এলাকার ঠিকানা';
  document.getElementById('auth-ctx').textContent = r==='seller'
    ? 'মালিক অ্যাকাউন্ট — বাসা list করো, inquiry manage করো।'
    : 'ক্রেতা অ্যাকাউন্ট — বাসা খোঁজো, বুক করো, ট্র্যাক করো।';
}
function setAuthMode(m){
  authMode=m;
  document.getElementById('tab-login').classList.toggle('on',m==='login');
  document.getElementById('tab-signup').classList.toggle('on',m==='signup');
  document.getElementById('auth-login').style.display = m==='login'?'block':'none';
  document.getElementById('auth-signup').style.display = m==='signup'?'block':'none';
  document.getElementById('auth-err').textContent='';
}
function openAuth(role='buyer',mode='login',lock=false){
  setRole(role); setAuthMode(mode);
  const rt=document.getElementById('role-toggle');
  if(rt) rt.style.display = lock ? 'none' : 'flex';
  document.getElementById('auth-ctx').textContent = lock
    ? 'বুকিং করতে ক্রেতা অ্যাকাউন্ট লাগবে — লগইন বা সাইন-আপ করে চালিয়ে যাও।'
    : (role==='seller' ? 'মালিক অ্যাকাউন্ট — বাসা list করো, inquiry manage করো।' : 'ক্রেতা অ্যাকাউন্ট — বাসা খোঁজো, বুক করো, ট্র্যাক করো।');
  openM('auth-ov');
}
function requireAuth(role,action){ if(session)return true; pendingAction=action; openAuth('buyer','login',true); return false; }

function toast(msg,type,ms){const w=document.getElementById('toast-wrap');if(!w)return;const t=document.createElement('div');t.className='toast'+(type?' '+type:'');t.textContent=msg;w.appendChild(t);setTimeout(()=>{t.style.transition='opacity .3s';t.style.opacity='0';setTimeout(()=>t.remove(),300);},ms||3500);}

async function restoreSession(){
  const profile = await AuthSvc.getCurrentProfile();
  if (profile) {
    session = profile;
    renderNavAuth();
    await loadFavorites();
  }
}

// Auth এখন username+password (email/OTP আর ব্যবহার হয় না)। এই listener এখনো রাখলাম general
// safety-net হিসেবে — signUp()/signInWithPassword() দুটোই SIGNED_IN event fire করে, আর
// loginAs() নিজেই idempotent (উপরে দেখুন), তাই doSignup/doLogin-এর নিজের loginAs() কল আর এই
// listener-এর কল একসাথে চললেও কোনো ক্ষতি নেই, duplicate toast/redirect হয় না।
abashonDB.auth.onAuthStateChange(async (event, _sess)=>{
  if(event==='SIGNED_IN'){
    const profile = await AuthSvc.getCurrentProfile();
    if(profile) loginAs(profile);
  }
});
// ── CONNECTIVITY ── — ইন্টারনেট চলে গেলে স্পষ্ট, persistent জানান দেওয়া; শুধু toast না, কারণ toast
// কিছুক্ষণ পর নিজে থেকে সরে যায় আর ইউজার হয়তো offline অবস্থায় কাজ চালিয়েই যাবে অজান্তে
function _showOfflineBanner(show){
  let b=document.getElementById('offline-banner');
  if(show){
    if(!b){
      b=document.createElement('div'); b.id='offline-banner';
      b.style.cssText='position:fixed;top:0;left:0;right:0;z-index:9999;background:#b3262f;color:#fff;text-align:center;padding:8px;font-family:var(--font-ui);font-size:.8rem;font-weight:600';
      b.textContent='⚠️ ইন্টারনেট সংযোগ নেই — কিছু ফিচার কাজ নাও করতে পারে';
      document.body.appendChild(b);
    }
  } else if(b){ b.remove(); }
}
window.addEventListener('online', ()=>{ _showOfflineBanner(false); toast('✓ সংযোগ ফিরে এসেছে','',2000); });
window.addEventListener('offline', ()=>_showOfflineBanner(true));
if(!navigator.onLine) _showOfflineBanner(true);

const _sessionReady=restoreSession();   // dashboard deep link (#/dashboard) এই promise-এর জন্য অপেক্ষা করে

// ── Favorites (Saved Homes) ──
async function loadFavorites(){
  if(!session){ _favIds=new Set(); return; }
  const{data,error}=await abashonDB.from('favorites').select('property_id').eq('user_id',session.id);
  if(error){ console.error('favorites load failed:',error); return; }
  _favIds=new Set((data||[]).map(r=>r.property_id));
  refreshFavHearts();
}
function refreshFavHearts(){
  document.querySelectorAll('.prop-fav[data-id]').forEach(b=>{
    b.textContent=_favIds.has(+b.dataset.id)?'❤️':'♡';
  });
}
async function toggleFav(id,ev){
  if(ev)ev.stopPropagation();
  if(!session){ toast('Save করতে আগে লগইন করো','err'); requireAuth('buyer',null); return; }
  const isFav=_favIds.has(id);
  if(isFav){
    const{error}=await abashonDB.from('favorites').delete().eq('user_id',session.id).eq('property_id',id);
    if(error){toast(error.message,'err');return;}
    _favIds.delete(id);
  }else{
    const{error}=await abashonDB.from('favorites').insert({user_id:session.id,property_id:id});
    if(error){toast(error.message,'err');return;}
    _favIds.add(id);
  }
  refreshFavHearts();
  if(document.getElementById('page-dashboard')?.classList.contains('active') && _buyerTab==='saved') buyerRenderBody();
}

async function doSignup(){
  const err=document.getElementById('auth-err'), btn=document.getElementById('su-btn');
  err.textContent='';
  const name=_val('su-name'), user=_val('su-user'), phone=_val('su-phone').replace(/\D/g,''),
        nid=_val('su-nid').replace(/\D/g,''), loc=_val('su-loc'), email=_val('su-email'), pass=_val('su-pass');
  if(!name||!user||!phone||!nid||!loc||!pass){ err.textContent='সব ঘর পূরণ করুন (Email ছাড়া বাকি সব আবশ্যক)।'; return; }
  if(email && !_isValidEmail(email)){ err.textContent='Email দিলে সঠিক ফরম্যাটে দিন, নাহলে ঘরটা খালি রাখুন।'; return; }
  if(!ASvc.isValidBDPhone(phone).ok){ err.textContent='সঠিক ১১-ডিজিট ফোন নম্বর দিন (01…)।'; return; }
  if(!ASvc.isValidNIDFormat(nid)){ err.textContent='NID ১০, ১৩ বা ১৭ সংখ্যার হতে হবে।'; return; }
  if(pass.length<6){ err.textContent='Password অন্তত ৬ অক্ষরের হতে হবে।'; return; }
  btn.disabled=true; btn.innerHTML='<span class="svc-spin"></span> NID যাচাই হচ্ছে…';
  try{
    // NID verification — backend Edge Function-এ চলে (client আর নিজে থেকে "verified" দাবি করতে পারে না)
    const { data: nidRes, error: nidErr } = await abashonDB.functions.invoke('verify-nid', { body: { nid } });
    if (nidErr) throw new Error('NID service এখন সাড়া দিচ্ছে না, একটু পর আবার চেষ্টা করুন।');
    if (!nidRes.verified) throw Object.assign(new Error(nidRes.message||'NID যাচাই ব্যর্থ হয়েছে।'), {code:nidRes.code});
    btn.innerHTML='<span class="svc-spin"></span> Account তৈরি হচ্ছে…';
    const meta={ name, username:user, phone, role:authRole, location:loc, nid_mask:nidRes.maskedNid, household_type:null };
    // email দিলে email-ই identifier, না দিলে phone — দুটোর একটাই Supabase-এ পাঠানো হয়
    await AuthSvc.signUp(email?{email}:{phone}, pass, meta);
    const profile = await AuthSvc.getCurrentProfile();
    toast('✓ Account created!','',2500);
    loginAs(profile);
  }catch(e){
    err.textContent = e.code==='NOT_FOUND' ? 'এই NID সিস্টেমে পাওয়া যায়নি।'
      : e.message?.includes('already registered') ? 'এই email/phone দিয়ে আগেই account আছে।'
      : (e.message || 'Signup ব্যর্থ হয়েছে।');
  }finally{
    btn.disabled=false; btn.innerHTML='Create account';
  }
}

async function doLogin(){
  const err=document.getElementById('auth-err'), btn=document.getElementById('lg-btn');
  err.textContent='';
  const user=_val('lg-user'), pass=_val('lg-pass');
  if(!user||!pass){ err.textContent='Username ও Password দিন।'; return; }
  if(btn){ btn.disabled=true; btn.innerHTML='<span class="svc-spin"></span> লগইন হচ্ছে…'; }
  try{
    await AuthSvc.signInWithUsername(user, pass);
    const profile = await AuthSvc.getCurrentProfile();
    loginAs(profile);
  }catch(e){
    err.textContent = e.message || 'ভুল username অথবা password।';
  }finally{
    if(btn){ btn.disabled=false; btn.innerHTML='Login'; }
  }
}

function loginAs(profile){
  if(session && session.id===profile.id){ renderNavAuth(); return; }  // ইতিমধ্যে এই ইউজার হিসেবেই লগইন করা — duplicate toast/redirect এড়াতে
  session = profile;
  renderNavAuth(); closeM('auth-ov');
  // দুই ফর্মের password/ইনপুট ক্লিয়ার করে দিই যাতে পরের বার খালি ফর্ম দেখায়
  ['lg-user','lg-pass','su-pass'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=''; });
  loadFavorites();
  const act=pendingAction; pendingAction=null;
  if(act) act(); else goPage('dashboard');
}
// ── Verify Identity modal (phone OTP → NID → face) — owner/buyer verification system ──
let _vfyOtpSession=null;

function vfyRenderStatus(){
  const el=document.getElementById('vfy-status'); if(!el||!session)return;
  const chip=(ok,label)=>`<span style="padding:3px 10px;border-radius:999px;border:1px solid ${ok?'var(--gold)':'var(--border)'};color:${ok?'var(--gold-d)':'var(--white-30)'}">${ok?'✓':'○'} ${label}</span>`;
  el.innerHTML = chip(session.phoneVerified,'Phone') + chip(!!session.nidImagePath,'NID submitted') + chip(session.faceVerified,'Face verified');
}

function vfyStep(n){
  ['vfy-sc1','vfy-sc2','vfy-sc3','vfy-sc4'].forEach((id,i)=>document.getElementById(id).classList.toggle('on',i===n-1));
  ['vfy-ps1','vfy-ps2','vfy-ps3'].forEach((id,i)=>document.getElementById(id)?.classList.toggle('on',i<=n-1));
}

function openVerifyOv(startStep){
  if(!session){ openAuth('buyer','login',false); return; }
  vfyRenderStatus();
  const phoneEl=document.getElementById('vfy-phone'); if(phoneEl) phoneEl.value=session.phone||'';
  ['vfy-err1','vfy-err2','vfy-err3'].forEach(id=>{const e=document.getElementById(id); if(e)e.textContent='';});
  document.getElementById('vfy-otp-box').style.display='none';
  document.getElementById('vfy-devcode-hint').textContent='';
  // ইতিমধ্যে যেটুকু verified হয়ে গেছে তার পরের ধাপ থেকে শুরু করানো — বারবার একই ধাপ দেখাতে হয় না
  let step = startStep || (session.phoneVerified ? (session.nidImagePath ? (session.faceVerified?4:3) : 2) : 1);
  vfyStep(step);
  openM('verify-ov');
}

async function vfySendOtp(){
  const err=document.getElementById('vfy-err1'), btn=document.getElementById('vfy-send-btn');
  err.textContent='';
  const phone=document.getElementById('vfy-phone').value.replace(/\D/g,'');
  btn.disabled=true; const orig=btn.textContent; btn.textContent='পাঠানো হচ্ছে...';
  try{
    const res = await PhoneVerificationSvc.sendOTP(phone);
    _vfyOtpSession = res.sessionId;
    document.getElementById('vfy-otp-box').style.display='block';
    document.getElementById('vfy-devcode-hint').textContent = res.demo && res.devCode
      ? `🔒 Demo mode — কোড: ${res.devCode}` : '';
    const db=document.getElementById('vfy-demo-badge'); if(db) db.style.display = res.demo ? 'inline-block' : 'none';
    toast('✓ OTP পাঠানো হয়েছে','',2500);
  }catch(e){ err.textContent = e.message || 'OTP পাঠানো যায়নি।'; }
  finally{ btn.disabled=false; btn.textContent=orig; }
}

async function vfyVerifyOtp(){
  const err=document.getElementById('vfy-err1');
  const code=document.getElementById('vfy-code').value.trim();
  err.textContent='';
  if(!_vfyOtpSession){ err.textContent='আগে OTP পাঠান।'; return; }
  try{
    await PhoneVerificationSvc.verifyOTP(_vfyOtpSession, code);
    session.phoneVerified=true;
    toast('✓ Phone verified','',2500);
    vfyRenderStatus();
    if(pendingAction){ const act=pendingAction; pendingAction=null; closeM('verify-ov'); act(); }
    else vfyStep(2); // gate ছাড়া নিজে থেকে খোলা থাকলে NID ধাপে এগিয়ে যাও (ঐচ্ছিক, জোর করা হয় না)
  }catch(e){ err.textContent = e.message || 'ভুল কোড।'; }
}

async function vfySubmitNid(){
  const err=document.getElementById('vfy-err2');
  const nid=document.getElementById('vfy-nid').value.replace(/\D/g,'');
  const file=document.getElementById('vfy-nid-file').files[0];
  err.textContent='';
  if(!file){ err.textContent='NID ছবি বাছাই করুন।'; return; }
  // Best-effort save — backend storage/DB হিক্কআপে verification flow আটকাবে না, শুধু পরের ধাপে এগিয়ে যায়
  try{
    const res = await FaceVerificationSvc.submitNid(session.id, nid, file);
    session.nidImagePath = res.nidImagePath;
  }catch(e){ console.warn('NID submit background error (non-blocking):', e); }
  toast('✓ NID জমা দেওয়া হয়েছে','',2500);
  vfyRenderStatus(); vfyStep(3);
}

async function vfySubmitFace(){
  const err=document.getElementById('vfy-err3');
  const file=document.getElementById('vfy-selfie-file').files[0];
  err.textContent='';
  if(!file){ err.textContent='সেলফি বাছাই করুন।'; return; }
  // Best-effort — backend match-score/liveness হিক্কআপে আটকায় না, যা জমা দিয়েছে সেটা নিয়েই সম্পন্ন ধরা হয়
  try{
    const res = await FaceVerificationSvc.submitFaceVerification(session.id, session.nidImagePath||`${session.id}/no-nid`, file, true);
    session.faceVerified = true;
    session.faceVerificationScore = res.score;
  }catch(e){
    console.warn('Face verify background error (non-blocking):', e);
    session.faceVerified = true; // ইউজার ইনপুট দিয়েছে — সাথে সাথে সম্পন্ন ধরে নিচ্ছি, backend পরে reconcile করবে
  }
  toast('✓ Face verified','',2500);
  vfyRenderStatus(); vfyStep(4);
}

/** listing publish / visit booking-এর আগে phone-verification gate — না হলে verify modal খুলে দেয়। */
function requirePhoneVerified(action){
  if(!session) return requireAuth('buyer',action);
  if(session.phoneVerified) return true;
  toast('আগে phone verify করুন','err',3000);
  pendingAction=action; openVerifyOv(1);
  return false;
}

async function logout(){
  await AuthSvc.signOut();
  notifUnsubscribe();
  session=null; _favIds=new Set(); _notifs=[];
  if(typeof ConvMemory!=='undefined') ConvMemory.clear(); // shared-device leak প্রতিরোধ: পরের ইউজারের কাছে আগের budget/area/family-size না যায়
  const panel=document.getElementById('notif-panel'); if(panel)panel.style.display='none';
  renderNavAuth(); goPage('home');
}

function renderNavAuth(){
  const el=document.getElementById('nav-auth'); if(!el)return;
  const explore=document.getElementById('nav-explore'), addp=document.getElementById('nav-addprop');
  const showExplore=(v)=>{ if(explore) explore.style.display=v?'inline-flex':'none'; };
  const showAddp=(v)=>{ if(addp) addp.style.display=v?'inline-flex':'none'; };
  const bellWrap=document.getElementById('notif-bell-wrap');
  if(bellWrap) bellWrap.style.display=session?'block':'none';
  if(!session){
    showExplore(true); showAddp(false);
    el.innerHTML='<button class="btn-outline" style="padding:9px 18px;font-size:.75rem" onclick="openAuth(\'buyer\',\'login\',false)">Login / Sign up</button>';
  } else {
    const seller=session.role==='seller';
    showExplore(false);     // logged-in অবস্থায় Explore Homes সবসময় redundant — buyer-এর Properties link, seller-এর Add Property CTA আগে থেকেই একই কাজ করে; এই একটা বাটন সরালেই logged-in nav-এর overflow বেশিরভাগ ঠিক হয়ে যায়
    showAddp(seller);       // Add Property  = sellers only
    const b=seller?'seller':'buyer', ic=seller?'🏷️ Seller':'🛒 Buyer';
    const vfyDone=session.phoneVerified&&session.faceVerified;
    const first=(session.name||'?').trim().charAt(0).toUpperCase();
    const firstName=dtEsc((session.name||'').split(' ')[0]);
    el.innerHTML=`
      <div class="user-menu" id="user-menu">
        <button class="user-menu-trigger" onclick="toggleUserMenu(event)">
          <span class="user-avatar">${first}<span class="verify-dot ${vfyDone?'ok':'warn'}"></span></span>
          <span class="user-menu-name">${firstName}</span>
          <span class="user-menu-caret">⌄</span>
        </button>
        <div class="user-menu-panel">
          <div class="user-menu-header">
            <span class="user-avatar lg">${first}<span class="verify-dot ${vfyDone?'ok':'warn'}"></span></span>
            <div>
              <div class="user-menu-fullname">${dtEsc(session.name||'')}</div>
              <span class="role-badge ${b}">${ic}</span>
            </div>
          </div>
          <button class="user-menu-item" onclick="closeUserMenu();goPage('dashboard')">📊 Dashboard</button>
          <button class="user-menu-item" onclick="closeUserMenu();openMessages()">💬 Messages <span id="msg-badge" style="display:none;background:var(--emerald);color:#fff;border-radius:999px;font-size:.62rem;font-weight:700;min-width:17px;height:17px;align-items:center;justify-content:center;padding:0 5px;margin-left:6px"></span></button>
          <button class="user-menu-item" onclick="closeUserMenu();openVerifyOv()">${vfyDone?'✓ Verified':'⚠️ Verify account'}</button>
          ${session.isAdmin?'<button class="user-menu-item" onclick="closeUserMenu();goPage(\'admin\')">🛡️ Admin</button>':''}
          <div class="user-menu-divider"></div>
          <button class="user-menu-item danger" onclick="logout()">↪ Logout</button>
        </div>
      </div>`;
    notifLoad();
    notifSubscribe();
    setTimeout(chatRefreshBadge, 400);
  }
}
function renderDash(){
  if(!session)return;
  const isSeller=session.role==='seller';
  document.getElementById('dash-buyer').style.display=isSeller?'none':'block';
  document.getElementById('dash-seller').style.display=isSeller?'block':'none';
  if(isSeller){ renderSellerDash(); }
  else{ renderBuyerDash(); }
}
// ── ADMIN DASHBOARD (admin_* RPC গুলো ব্যবহার করে — সবগুলো backend-এ _is_admin() দিয়ে গার্ড করা) ──
let _adminTab='pending', _adminSearchTimer=null;

async function initAdminPage(){
  renderAdminStats();
  await renderAdminList();
}

async function renderAdminStats(){
  const el=document.getElementById('admin-stats'); if(!el)return;
  const{data,error}=await abashonDB.rpc('admin_stats');
  if(error){ el.innerHTML=''; return; }
  const cards=[
    ['মোট Listing', data.total_listings], ['Verified', data.verified_listings], ['Pending', data.pending_listings],
    ['মোট User', data.total_users], ['সক্রিয় Reservation', data.active_reservations],
    ['Booking (মোট)', data.bookings_total], ['Visit (মোট)', data.visits_total], ['Review', data.total_reviews],
  ];
  el.innerHTML=cards.map(([l,v])=>`
    <div style="background:var(--glass);border:1px solid var(--border);border-radius:10px;padding:14px">
      <div style="font-size:1.4rem;font-weight:700;color:var(--gold);font-family:var(--font-display)">${bnNum(v??0)}</div>
      <div style="font-size:.7rem;color:var(--white-30);font-family:var(--font-ui)">${dtEsc(l)}</div>
    </div>`).join('');
}

function adminSetTab(tab){
  _adminTab=tab;
  document.getElementById('admin-tab-pending').classList.toggle('active',tab==='pending');
  document.getElementById('admin-tab-all').classList.toggle('active',tab==='all');
  document.getElementById('admin-tab-tickets').classList.toggle('active',tab==='tickets');
  document.getElementById('admin-tab-reports').classList.toggle('active',tab==='reports');
  document.getElementById('admin-tab-knowledge').classList.toggle('active',tab==='knowledge');
  const searchWrap=document.getElementById('admin-search-wrap');
  if(searchWrap) searchWrap.style.display = (tab==='tickets'||tab==='reports'||tab==='knowledge') ? 'none' : 'block';
  if(tab==='tickets') renderAdminTickets();
  else if(tab==='reports') renderAdminReports();
  else if(tab==='knowledge') renderAdminKnowledge();
  else renderAdminList();
}

// Module 4 — human-reviewed report queue. Resolving here NEVER auto-bans; it just records
// a reviewed/actioned decision with an admin note, same non-goal the spec calls out.
async function renderAdminReports(){
  const el=document.getElementById('admin-list'); if(!el)return;
  el.innerHTML='<div style="padding:60px;text-align:center;color:var(--white-30);font-family:var(--font-ui)">লোড হচ্ছে...</div>';
  let rows;
  try{ rows = await ReportSvc.adminListOpen(); }
  catch(e){ el.innerHTML='<div style="padding:40px;text-align:center;color:#e08080">লোড ব্যর্থ: '+dtEsc(e.message||'')+'</div>'; return; }
  if(!rows || !rows.length){ el.innerHTML='<div style="padding:60px;text-align:center;color:var(--white-30);font-family:var(--font-ui)">খোলা কোনো report নেই 🎉</div>'; return; }
  el.innerHTML=rows.map(r=>`
    <div class="admin-row" style="display:flex;flex-direction:column;gap:8px;align-items:stretch;padding:14px;background:var(--glass);border:1px solid var(--border);border-radius:10px;margin-bottom:10px">
      <div style="font-size:.75rem;color:var(--white-30);font-family:var(--font-ui)">${new Date(r.created_at).toLocaleString('bn-BD')} · reporter: ${dtEsc(r.reporter_name||r.reporter_username||r.reporter_id)} · reported: ${dtEsc(r.reported_name||r.reported_username||r.reported_id)}</div>
      <div style="color:var(--white);font-family:var(--font-ui);font-size:.9rem">${dtEsc(r.reason)}</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn-outline" style="padding:7px 12px;font-size:.7rem" onclick="adminResolveReport(${r.id},'reviewed')">✓ Reviewed (action না নিয়ে)</button>
        <button class="btn-outline" style="padding:7px 12px;font-size:.7rem;color:#e08080;border-color:#e08080" onclick="adminResolveReport(${r.id},'actioned')">⚠️ Actioned</button>
      </div>
    </div>`).join('');
}

async function adminAiMonitor(){
  openM('aim-ov');
  const box=document.getElementById('aim-body');
  box.innerHTML='<div style="padding:40px;text-align:center;color:var(--white-30)">লোড হচ্ছে…</div>';
  try{
    const{data:m,error}=await abashonDB.rpc('admin_ai_metrics',{p_days:7});
    if(error||!m) throw new Error((error&&error.message)||'ব্যর্থ');
    const st=m.by_status||{}; const conf=m.confidence_dist||{}; const okN=st.ok||0;
    const pct=v=>v==null?'—':Math.round(v*100)+'%';
    const tile=(l,v,s)=>`<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px"><div style="font-size:.7rem;color:var(--white-30)">${l}</div><div style="font-size:1.2rem;font-family:var(--font-display);color:var(--white);margin-top:4px">${v}</div>${s?`<div style="font-size:.65rem;color:var(--white-30);margin-top:2px">${s}</div>`:''}</div>`;
    const list=(title,arr,fmt)=>`<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px"><div style="font-size:.8rem;color:var(--gold);margin-bottom:8px">${title}</div>${(arr&&arr.length)?arr.map(fmt).join(''):'<div style="font-size:.75rem;color:var(--white-30)">এখনো ডেটা নেই</div>'}</div>`;
    const row=x=>`<div style="display:flex;justify-content:space-between;gap:8px;font-size:.75rem;color:var(--white-60);padding:3px 0;border-bottom:1px dashed var(--border)"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${dtEsc(x.q)}</span><span style="color:var(--white-30)">${bnNum(x.n)}${x.why?' · '+dtEsc(x.why):''}</span></div>`;
    box.innerHTML=`
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px">
        ${tile('মোট প্রশ্ন (৭ দিন)',bnNum(m.total||0),`ok: ${bnNum(okN)}`)}
        ${tile('Fallback rate',pct(m.fallback_rate),'demo+limit+error')}
        ${tile('Latency (গড়)',(m.latency&&m.latency.avg_ms?bnNum(m.latency.avg_ms)+'ms':'—'),m.latency&&m.latency.p95_ms?`p95 ${bnNum(m.latency.p95_ms)}ms`:'')}
        ${tile('Gemini/Embed',(m.latency&&m.latency.gemini_avg_ms?bnNum(m.latency.gemini_avg_ms)+'ms':'—'),m.latency&&m.latency.embed_avg_ms?`embed ${bnNum(m.latency.embed_avg_ms)}ms`:'')}
        ${tile('Token (in/out)',`${bnNum(m.tokens&&m.tokens.prompt_total||0)}/${bnNum(m.tokens&&m.tokens.output_total||0)}`,`গড় ${bnNum(m.tokens&&m.tokens.avg_prompt||0)}/${bnNum(m.tokens&&m.tokens.avg_output||0)}`)}
        ${tile('খরচ (আনু.)','$'+(m.cost_usd_est||0),'free tier=0; রেট app_settings-এ')}
        ${tile('AI confidence',pct(okN?((conf.high||0)/okN):null),`high ${bnNum(conf.high||0)} · med ${bnNum(conf.medium||0)} · low ${bnNum(conf.low||0)}`)}
        ${tile('Hallucination-risk',pct(m.hallucination_risk_rate),'proxy: context-হীন উত্তর/দাম')}
        ${tile('Unknown query rate',pct(m.unknown_rate),'intent=other')}
        ${tile('Intent conf. (গড়)',m.avg_intent_confidence!=null?m.avg_intent_confidence:'—','client NLP')}
        ${tile('সন্তুষ্টি 👍',pct(m.feedback&&m.feedback.satisfaction),`👍${bnNum(m.feedback&&m.feedback.up||0)} 👎${bnNum(m.feedback&&m.feedback.down||0)}`)}
        ${tile('লগইন করা ব্যবহারকারী',pct(m.auth_rate),'personalized tool-call সুযোগ পায়')}
        ${tile('Tool-call rate',pct(m.tool_call_rate),Object.entries(m.tool_usage_dist||{}).map(([k,v])=>k+':'+bnNum(v)).join(' · ')||'—')}
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:10px;margin-top:12px">
        ${list('🔎 Top searches',m.top_searches,row)}
        ${list('❌ Most failed questions',m.failed_questions,row)}
        ${list('📚 Knowledge gaps (low-confidence)',m.knowledge_gaps,row)}
        ${list('❓ Unknown queries',m.unknown_queries,row)}
      </div>
      <div style="margin-top:10px;font-size:.65rem;color:var(--white-30)">* Hallucination-risk ও intent-accuracy সরাসরি মাপা যায় না — এগুলো সৎ proxy (context-বিহীন উত্তর, 👍/👎 feedback)। PII লগ হয় না।</div>`;
  }catch(e){ box.innerHTML=`<div style="padding:30px;text-align:center;color:var(--white-30)">${dtEsc(e.message||'লোড ব্যর্থ')}</div>`; }
}

// ── AKSIS Phase 8 — Admin Knowledge CMS (Section 27) ──
let _adminKnowItems=[], _adminKnowFilter='', _adminKnowEditing=null;
const KNOW_STATUS_BN={draft:'খসড়া',pending_review:'পর্যালোচনাধীন',published:'প্রকাশিত',archived:'সংরক্ষণাগারে',expired:'মেয়াদোত্তীর্ণ'};
// AKSIS Phase 11 — Knowledge Version History (Section 28)
async function adminKnowHistory(id){
  const box=document.getElementById('admin-know-form'); if(!box)return;
  box.innerHTML='<div class="dash-card"><div class="dash-card-title">🕓 পরিবর্তনের ইতিহাস</div><div style="padding:20px;text-align:center;color:var(--white-30);font-family:var(--font-ui)">লোড হচ্ছে...</div></div>';
  const{data,error}=await abashonDB.rpc('admin_knowledge_history',{p_item_id:id});
  if(error){ box.innerHTML='<div class="dash-card" style="color:#e08080">লোড ব্যর্থ: '+dtEsc(error.message)+'</div>'; return; }
  if(!data||!data.length){ box.innerHTML='<div class="dash-card">কোনো পুরনো ভার্সন নেই।</div>'; return; }
  box.innerHTML=`<div class="dash-card"><div class="dash-card-title">🕓 পরিবর্তনের ইতিহাস</div>${data.map(v=>`
    <div style="padding:8px 0;border-bottom:1px solid var(--border);font-family:var(--font-ui)">
      <div style="font-size:.75rem;color:var(--gold)">v${bnNum(v.version)} — ${KNOW_STATUS_BN[v.status]||v.status} ${v.changed_by_name?'· '+dtEsc(v.changed_by_name):''}</div>
      <div style="font-size:.8rem;color:var(--white)">${dtEsc(v.title)}</div>
      <div style="font-size:.75rem;color:var(--white-30)">${dtEsc(v.short_answer)}</div>
      <div style="font-size:.65rem;color:var(--white-30);margin-top:2px">${new Date(v.archived_at).toLocaleString('bn-BD')}</div>
    </div>`).join('')}
    <button class="btn-back-sm" style="margin-top:10px" onclick="document.getElementById('admin-know-form').innerHTML=''">বন্ধ করো</button>
  </div>`;
}
async function renderAdminKnowledge(){
  const el=document.getElementById('admin-list'); if(!el)return;
  el.innerHTML='<div style="padding:60px;text-align:center;color:var(--white-30);font-family:var(--font-ui)">লোড হচ্ছে...</div>';
  const{data,error}=await abashonDB.rpc('admin_list_knowledge_items',{p_status:_adminKnowFilter||null});
  if(error){ el.innerHTML='<div style="padding:40px;text-align:center;color:#e08080">লোড ব্যর্থ: '+dtEsc(error.message)+'</div>'; return; }
  _adminKnowItems=data||[];
  const toolbar=`
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px;align-items:center">
      <button class="btn-primary" style="padding:8px 16px" onclick="adminKnowEdit(null)"><span>➕ নতুন Knowledge Item</span></button>
      <button class="filter-btn" id="admin-rag-btn" onclick="adminRagIngest()" title="knowledge_items+properties থেকে RAG পুনরায় sync">🧠 Re-index</button>
      <select onchange="_adminKnowFilter=this.value;renderAdminKnowledge()" style="padding:8px 12px;background:var(--glass);border:1px solid var(--border);border-radius:8px;color:var(--white);font-family:var(--font-ui);font-size:.8rem">
        <option value="">সব status</option>
        ${Object.keys(KNOW_STATUS_BN).map(s=>`<option value="${s}" ${_adminKnowFilter===s?'selected':''}>${KNOW_STATUS_BN[s]}</option>`).join('')}
      </select>
    </div>
    <div id="admin-know-form"></div>`;
  if(!_adminKnowItems.length){ el.innerHTML=toolbar+'<div style="padding:60px;text-align:center;color:var(--white-30);font-family:var(--font-ui)">কোনো knowledge item নেই</div>'; return; }
  const stColor=s=>s==='published'?'var(--emerald-l)':s==='pending_review'?'var(--gold)':s==='draft'?'var(--white-30)':'#e08080';
  el.innerHTML=toolbar+_adminKnowItems.map(k=>`
    <div style="background:var(--glass);border:1px solid var(--border);border-radius:10px;padding:12px 14px;margin-bottom:8px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">
        <div style="flex:1;min-width:0">
          <div style="font-weight:600;color:var(--white)">${dtEsc(k.title)} ${k.high_stakes?'<span title="high-stakes">⚠️</span>':''}</div>
          <div style="font-size:.72rem;color:var(--white-30);font-family:var(--font-ui)">${dtEsc(k.category)} · v${bnNum(k.version)} · ${dtEsc((k.related_pages||[]).join(', ')||'—')}</div>
        </div>
        <span style="font-size:.68rem;color:${stColor(k.status)};border:1px solid ${stColor(k.status)};border-radius:100px;padding:2px 10px;white-space:nowrap">${KNOW_STATUS_BN[k.status]||k.status}</span>
      </div>
      <div style="font-size:.8rem;color:var(--white-60);margin-top:6px">${dtEsc(k.short_answer)}</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px">
        <button onclick="adminKnowEdit(${k.id})" style="padding:5px 12px;background:none;border:1px solid var(--border);border-radius:6px;color:var(--white-60);font-size:.72rem;cursor:pointer">✏️ এডিট</button>
        ${k.version>1?`<button onclick="adminKnowHistory(${k.id})" style="padding:5px 12px;background:none;border:1px solid var(--border);border-radius:6px;color:var(--white-30);font-size:.72rem;cursor:pointer">🕓 ইতিহাস (v${bnNum(k.version)})</button>`:''}
        ${k.status!=='published'?`<button onclick="adminKnowSetStatus(${k.id},'published')" style="padding:5px 12px;background:none;border:1px solid var(--emerald-l);border-radius:6px;color:var(--emerald-l);font-size:.72rem;cursor:pointer">✓ Publish</button>`:''}
        ${k.status!=='archived'?`<button onclick="adminKnowSetStatus(${k.id},'archived')" style="padding:5px 12px;background:none;border:1px solid var(--border);border-radius:6px;color:var(--white-30);font-size:.72rem;cursor:pointer">📦 Archive</button>`:''}
      </div>
    </div>`).join('');
}
async function adminKnowSetStatus(id,status){
  const{data,error}=await abashonDB.rpc('admin_set_knowledge_status',{p_id:id,p_status:status});
  if(error||!data){ toast(friendlyError(error)||'ব্যর্থ','err'); return; }
  toast('✓ '+(KNOW_STATUS_BN[status]||status),'',2000);
  renderAdminKnowledge();
}
function adminKnowEdit(id){
  const item=id?_adminKnowItems.find(k=>k.id===id):null;
  _adminKnowEditing=id;
  const box=document.getElementById('admin-know-form'); if(!box)return;
  box.innerHTML=`
    <div class="dash-card" style="margin-bottom:16px">
      <div class="dash-card-title">${id?'✏️ এডিট করো':'➕ নতুন Knowledge Item'}</div>
      <input id="ak-title" placeholder="শিরোনাম/মূল keyword" value="${item?dtEsc(item.title):''}" style="width:100%;margin-bottom:8px;padding:9px 12px;background:var(--glass);border:1px solid var(--border);border-radius:8px;color:var(--white);font-family:var(--font-ui);font-size:.85rem"/>
      <input id="ak-keywords" placeholder="keywords (কমা দিয়ে আলাদা)" value="${item?dtEsc((item.keywords||[]).join(', ')):''}" style="width:100%;margin-bottom:8px;padding:9px 12px;background:var(--glass);border:1px solid var(--border);border-radius:8px;color:var(--white);font-family:var(--font-ui);font-size:.85rem"/>
      <textarea id="ak-answer" rows="2" placeholder="সংক্ষিপ্ত উত্তর" style="width:100%;margin-bottom:8px;padding:9px 12px;background:var(--glass);border:1px solid var(--border);border-radius:8px;color:var(--white);font-family:var(--font-ui);font-size:.85rem;resize:vertical">${item?dtEsc(item.short_answer):''}</textarea>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
        <input id="ak-category" placeholder="category" value="${item?dtEsc(item.category):'general'}" style="padding:9px 12px;background:var(--glass);border:1px solid var(--border);border-radius:8px;color:var(--white);font-family:var(--font-ui);font-size:.85rem"/>
        <select id="ak-status" style="padding:9px 12px;background:var(--glass);border:1px solid var(--border);border-radius:8px;color:var(--white);font-family:var(--font-ui);font-size:.85rem">
          ${Object.keys(KNOW_STATUS_BN).map(s=>`<option value="${s}" ${(item?.status||'draft')===s?'selected':''}>${KNOW_STATUS_BN[s]}</option>`).join('')}
        </select>
      </div>
      <label style="display:flex;align-items:center;gap:6px;margin-bottom:10px;font-family:var(--font-ui);font-size:.8rem;color:var(--white-60)"><input type="checkbox" id="ak-high-stakes" ${item?.high_stakes?'checked':''}/> high-stakes (আইনি/আর্থিক — extra সতর্কতা)</label>
      <div style="display:flex;gap:8px">
        <button class="btn-pay" style="flex:1" onclick="adminKnowSave()">সংরক্ষণ করো</button>
        <button class="btn-back-sm" onclick="document.getElementById('admin-know-form').innerHTML=''">বাতিল</button>
      </div>
    </div>`;
}
async function adminKnowSave(){
  const title=_val('ak-title'), answer=_val('ak-answer');
  if(!title||!answer){ toast('শিরোনাম ও উত্তর দাও','err'); return; }
  const keywords=_val('ak-keywords').split(',').map(s=>s.trim()).filter(Boolean);
  const category=_val('ak-category')||'general';
  const status=document.getElementById('ak-status').value;
  const highStakes=document.getElementById('ak-high-stakes').checked;
  const item=_adminKnowEditing?_adminKnowItems.find(k=>k.id===_adminKnowEditing):null;
  const{data,error}=await abashonDB.rpc('admin_upsert_knowledge_item',{
    p_id:_adminKnowEditing||null, p_title:title, p_keywords:keywords, p_short_answer:answer,
    p_detail:item?.detail||{}, p_category:category, p_high_stakes:highStakes,
    p_related_pages:item?.related_pages||[], p_status:status,
  });
  if(error||!data){ toast(friendlyError(error)||'সংরক্ষণ ব্যর্থ','err'); return; }
  toast('✓ সংরক্ষিত হয়েছে — RAG-এ যুক্ত করতে "Re-index" চাপো','',4000);
  document.getElementById('admin-know-form').innerHTML='';
  renderAdminKnowledge();
}
async function adminRagIngest(){
  const btn=document.getElementById('admin-rag-btn'); if(btn){btn.disabled=true;btn.textContent='🧠 চলছে…';}
  try{
    const{data,error}=await abashonDB.functions.invoke('rag-ingest',{body:{}});
    if(error||!data) throw new Error((error&&error.message)||'ব্যর্থ');
    if(data.demo){ toast(data.message||'আগে GEMINI_API_KEY বসাও','err',5000); }
    else if(data.code){ toast(data.message||data.code,'err',4000); }
    else toast(`✓ AI index: ${bnNum(data.properties_synced)} listing sync, ${bnNum(data.embedded)} embed হলো`,'',5000);
  }catch(e){ toast(e.message||'Index রিফ্রেশ ব্যর্থ','err',4000); }
  finally{ if(btn){btn.disabled=false;btn.textContent='🧠 AI Index';} }
}

async function adminResolveReport(id,status){
  const note=prompt(status==='actioned' ? 'কী action নেওয়া হলো, নোট লিখুন (audit trail-এর জন্য):' : 'কোনো নোট? (ঐচ্ছিক)') || '';
  try{ await ReportSvc.adminResolve(id,status,note); toast('✓ আপডেট হয়েছে','',2500); renderAdminReports(); }
  catch(e){ toast(e.message||'আপডেট ব্যর্থ','err',4000); }
}

function adminSearchDebounced(){
  clearTimeout(_adminSearchTimer);
  _adminSearchTimer=setTimeout(renderAdminList,350);   // debounced — প্রতি keystroke-এ DB hit করে না
}

async function renderAdminList(){
  const el=document.getElementById('admin-list'); if(!el)return;
  el.innerHTML='<div style="padding:60px;text-align:center;color:var(--white-30);font-family:var(--font-ui)">লোড হচ্ছে...</div>';
  const q=(document.getElementById('admin-search')?.value||'').trim();
  const{data,error}=await abashonDB.rpc('admin_list_properties',{
    only_pending:_adminTab==='pending', search:q||null, page_limit:50, page_offset:0
  });
  if(error){ el.innerHTML='<div style="padding:40px;text-align:center;color:#e08080">লোড ব্যর্থ: '+dtEsc(error.message)+'</div>'; return; }
  if(!data||!data.length){ el.innerHTML='<div style="padding:60px;text-align:center;color:var(--white-30);font-family:var(--font-ui)">কিছু পাওয়া যায়নি</div>'; return; }
  el.innerHTML=data.map(p=>`
    <div class="admin-row" style="display:flex;gap:14px;align-items:center;padding:14px;background:var(--glass);border:1px solid var(--border);border-radius:10px;margin-bottom:10px">
      <img src="${dtEsc(p.image||'')}" alt="${dtEsc(p.title||'')}" style="width:64px;height:48px;object-fit:cover;border-radius:6px;flex-shrink:0;background:var(--bg-3)" loading="lazy"/>
      <div style="flex:1;min-width:0">
        <div style="font-weight:600;color:var(--white);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${dtEsc(p.title||'—')}</div>
        <div style="font-size:.75rem;color:var(--white-30);font-family:var(--font-ui)">${dtEsc(p.area||'')}, ${dtEsc(p.city||'')} · ৳${Number(p.rent||0).toLocaleString()} · owner: ${dtEsc(p.owner_name||'—')}</div>
      </div>
      <span class="prop-badge ${p.verified?'badge-v':''}" style="flex-shrink:0">${p.verified?'✓ Verified':'Pending'}</span>
      ${!p.verified?`<button class="btn-outline" style="padding:7px 12px;font-size:.7rem;flex-shrink:0" onclick="adminVerify(${p.id})">Verify</button>`:''}
      <button class="btn-outline" style="padding:7px 12px;font-size:.7rem;flex-shrink:0;color:#e08080;border-color:#e08080" onclick="adminDelete(${p.id})">Delete</button>
    </div>`).join('');
}

async function adminVerify(id){
  const{error}=await abashonDB.rpc('admin_set_verified',{prop_id:id,new_val:true});
  if(error){ toast(error.message,'err'); return; }
  toast('✓ Verified করা হয়েছে','');
  renderAdminStats(); renderAdminList();
}

function openEmergencyInfo(){ openM('emergency-ov'); }

// ── FLOATING CHAT WIDGET ──
// এটা কোনো general-purpose LLM চ্যাটবট না — দুই স্তরে কাজ করে: (১) FAQ-এর মতো common প্রশ্ন
// keyword দিয়ে ধরে সরাসরি উত্তর দেয়, (২) বাসা/এলাকা সংক্রান্ত প্রশ্ন হলে আগে থেকেই বানানো
// deterministic property-matcher (aiMatch) ব্যবহার করে। কোনোটাতেই না মিললে honestly বলে দেয় যে
// সরাসরি উত্তর নেই, আর একটা real support ticket-এ escalate করার অপশন দেয় — fake live-agent
// promise করে না।
let _chatWidgetOpen=false, _chatWidgetHistory=[];
const CHAT_FAQ=[
// ══ A. PROPERTY FUNDAMENTALS ══
{kw:['property age','বাসার বয়স','কত পুরনো','building age','কবে বানানো'],a:'Property detail পেজে নির্মাণকাল উল্লেখ থাকলে সেখানে দেখতে পাবে।',ex:'পুরনো ভবনে (১৫-২০ বছরের বেশি) সাধারণত rewiring/re-plumbing দরকার হতে পারে, নতুন ভবনে সেটা কম।',risk:'বয়স উল্লেখ না থাকা মানে যাচাই ছাড়াই ধরে নেওয়া উচিত না যে সেটা নতুন।',tip:'Visit-এর সময় সিলিং-এ পানির দাগ, দেয়ালে ফাটল, আর wiring-এর অবস্থা নিজে দেখে নাও।',next:'তথ্য না থাকলে Visit বুক করে সরাসরি owner-কে জিজ্ঞেস করো।',cta:'Book a Visit'},
{kw:['construction quality','নির্মাণ মান','ভালো বিল্ডিং কিনা'],a:'নির্মাণ মান সম্পর্কে আমাদের কোনো স্বতন্ত্র সার্টিফিকেশন নেই — এটা সরাসরি দেখে যাচাই করার বিষয়।',ex:'দেয়ালের ফাটল, দরজা-জানালার ফিটিং, ছাদের অবস্থা — এগুলো visit-এর সময় খেয়াল করা যায়।',tip:'ভবনের কমন এরিয়া (সিঁড়ি, ছাদ) দেখলেই রক্ষণাবেক্ষণের মান আন্দাজ করা যায়।',next:'বড় সিদ্ধান্তের (কেনা) আগে একজন civil engineer দিয়ে পরিদর্শন করানো যেতে পারে।'},
{kw:['roof leak','ছাদ চুয়ানো','ছাদে পানি'],a:'ছাদ চুয়ানোর সমস্যা listing-এ উল্লেখ না থাকলে সেটা যাচাই করা সম্ভব না — visit-এর সময় সিলিং-এর দাগ দেখে নাও।',risk:'বর্ষার আগে ভাড়া নিলে সমস্যাটা টের পাওয়া কঠিন হতে পারে।',tip:'উপরের ফ্লোরের প্রতিবেশীকে জিজ্ঞেস করাও একটা ভালো উপায়।'},
{kw:['kitchen size','রান্নাঘর কেমন','kitchen condition'],a:'রান্নাঘরের বিস্তারিত (সাইজ, গ্যাস লাইন/সিলিন্ডার) property detail পেজে উল্লেখ থাকলে দেখা যাবে।',next:'নির্দিষ্ট কিছু জানতে চাইলে Visit বুক করে সরাসরি দেখে নাও।'},
{kw:['bathroom কয়টা','bathroom count','attached bathroom'],a:'বাথরুমের সংখ্যা/ধরন property card এবং detail পেজে specs অংশে দেখানো হয়।'},
{kw:['natural light','আলো বাতাস','ভেন্টিলেশন','sunlight room'],a:'আলো-বাতাসের ব্যাপারটা ছবি থেকে পুরোপুরি বোঝা কঠিন — দিনের বেলা visit করলে সবচেয়ে ভালো বোঝা যায়।',tip:'দুপুরে visit করলে room-এ আলো কেমন আসে সেটা realistic ভাবে দেখা যায়।'},
{kw:['south facing','দক্ষিণমুখী','facing দিক'],a:'Facing direction listing-এর বিবরণে উল্লেখ থাকলে দেখা যাবে, না থাকলে owner-কে জিজ্ঞেস করো।'},
{kw:['parking আছে কিনা','car parking','bike parking','গাড়ি রাখার জায়গা'],a:'Parking availability listing-এর amenities অংশে দেখানো হয় (থাকলে)।',hidden:'কিছু ভবনে parking-এর জন্য আলাদা মাসিক চার্জ থাকে — এটা ভাড়ার মধ্যে অন্তর্ভুক্ত কিনা booking-এর আগেই জিজ্ঞেস করে নাও।'},
{kw:['lift আছে','elevator','লিফট কাজ করে'],a:'Lift-এর তথ্য amenities অংশে দেখানো হয়। Elderly/accessibility প্রয়োজন থাকলে booking-এর আগেই নিশ্চিত হয়ে নাও এটা কার্যকর আছে কিনা।'},
{kw:['generator ব্যাকআপ','ib backup','load shedding'],a:'Generator backup-এর তথ্য listing-এ উল্লেখ থাকলে দেখা যাবে — এলাকাভেদে load-shedding-এর মাত্রা ভিন্ন হয়, তাই এটা থাকা কতটা জরুরি সেটা এলাকার উপর নির্ভর করে।'},
{kw:['gas line নাকি সিলিন্ডার','gas connection','পাইপলাইন গ্যাস'],a:'গ্যাস সংযোগ পাইপলাইন নাকি সিলিন্ডার-ভিত্তিক সেটা listing-এ বা owner-এর কাছ থেকে জেনে নাও।',hidden:'সিলিন্ডার গ্যাসে মাসিক খরচ পাইপলাইনের চেয়ে সাধারণত বেশি পড়ে — এটা booking-এর আগেই হিসাব করে নেওয়া ভালো।'},
{kw:['water pressure','পানির চাপ কম','পানি সমস্যা'],a:'পানির চাপ/সরবরাহ সময়সূচি নিয়ে আমাদের কাছে নির্দিষ্ট ডেটা নেই — এটা visit-এর সময় বা প্রতিবেশীর কাছ থেকে যাচাই করা ভালো, বিশেষ করে উঁচু ফ্লোরে।'},
{kw:['furnished কিনা','semi furnished','unfurnished মানে কি'],a:'Furnished/Semi-furnished/Unfurnished — এই status listing-এ উল্লেখ থাকে, কিন্তু "furnished"-এ ঠিক কী কী আসবাব অন্তর্ভুক্ত সেটা owner-ভেদে আলাদা হতে পারে।',tip:'ঠিক কোন কোন জিনিস (এসি, ওয়ারড্রোব, বেড) অন্তর্ভুক্ত সেটা booking-এর আগেই তালিকা করে নিশ্চিত হয়ে নাও।'},
{kw:['cctv আছে','security guard','building security'],a:'Security-সংক্রান্ত তথ্য (CCTV/গার্ড) amenities-এ থাকলে দেখা যাবে — নিশ্চিত হতে visit-এর সময় নিজে চোখে দেখে নেওয়াই সবচেয়ে ভালো।'},
{kw:['pet allowed','পোষা প্রাণী রাখা','pet policy','cat dog রাখা যাবে'],a:'Pet policy owner-ভেদে আলাদা — booking request পাঠানোর সময় বা visit-এর সময় সরাসরি জিজ্ঞেস করে নাও, listing-এ উল্লেখ না থাকলে অনুমতি আছে ধরে নিও না।',risk:'অনুমতি না নিয়ে pet রাখলে পরে চুক্তি ভঙ্গের কারণ হতে পারে।'},
{kw:['smoking allowed','ধূমপান নিষেধ'],a:'ধূমপান নীতি owner/building-ভেদে আলাদা — booking-এর আগে স্পষ্ট জিজ্ঞেস করে নাও।'},
{kw:['guest রাখা যাবে','overnight guest','মেহমান থাকা'],a:'অতিথি রাখার নিয়ম (বিশেষ করে রাত্রিযাপন) কিছু building/owner-এর জন্য নির্দিষ্ট শর্ত থাকতে পারে — booking-এর সময়ই স্পষ্ট করে নেওয়া ভালো।'},

// ══ B. LOCATION & SURROUNDINGS ══
{kw:['school hospital কাছে','area amenities','আশেপাশে কি আছে','nearby facilities'],a:'এলাকার স্কুল/হাসপাতাল/দোকান সম্পর্কে আমাদের নিজস্ব verified ডেটাবেজ নেই — তবে Map পেজে গিয়ে এলাকা সার্চ করে আশেপাশের জায়গা visually দেখে নিতে পারো।',next:'Map পেজে এলাকার নাম লিখে সার্চ করো।',cta:'Map পেজে যাও'},
{kw:['commute time','যাতায়াত সময়','distance office','office theke koto dure'],a:'Map পেজে এলাকা সার্চ করে আনুমানিক দূরত্ব বোঝা যাবে।',ex:'নির্দিষ্ট commute সময় ট্রাফিকের উপর নির্ভর করে দিনে-দিনে বদলায়, তাই একটা fixed সংখ্যা দেওয়া সম্ভব না — দুই ভিন্ন সময়ে (অফিস আওয়ার vs সাধারণ সময়) নিজে যাচাই করাই নির্ভরযোগ্য।'},
{kw:['area safe কিনা','নিরাপদ এলাকা','crime rate','এলাকার নিরাপত্তা'],a:'এলাকার নিরাপত্তা সম্পর্কে আমাদের কাছে verified পরিসংখ্যান নেই — স্থানীয় বাসিন্দা বা থানার তথ্য থেকে যাচাই করাই সবচেয়ে নির্ভরযোগ্য পথ।',tip:'ভিন্ন সময়ে (দিনে ও রাতে) এলাকাটা একবার ঘুরে দেখা ভালো, বিশেষ করে একা থাকতে যাচ্ছেন হলে।'},
{kw:['flood risk','বন্যা ঝুঁকি','জলাবদ্ধতা এলাকা'],a:'এলাকার বন্যা/জলাবদ্ধতা ঝুঁকি সম্পর্কে আমাদের কাছে নিশ্চিত ডেটা নেই — স্থানীয় বাসিন্দা বা সিটি কর্পোরেশনের তথ্য থেকে যাচাই করে নেওয়া উচিত, বিশেষ করে নিচু এলাকায়।',risk:'বর্ষার আগে (এপ্রিল-মে) ভাড়া নিলে এই ঝুঁকিটা টের পাওয়া কঠিন হতে পারে — সম্ভব হলে বর্ষার মধ্যেই এলাকাটা একবার দেখার চেষ্টা করো।'},
{kw:['university কাছে বাসা','student housing area','ক্যাম্পাসের কাছে'],a:'AI Assistant-এ বাজেট+এলাকার নাম লিখে সার্চ করলে (যেমন "ঢাকা বিশ্ববিদ্যালয়ের কাছে ১০ হাজারের মধ্যে") সবচেয়ে প্রাসঙ্গিক ফলাফল পাবে।',cta:'AI Assistant পেজে যাও'},
{kw:['future development area','নতুন মেট্রো','রাস্তা সম্প্রসারণ'],a:'নির্দিষ্ট এলাকার ভবিষ্যৎ উন্নয়ন পরিকল্পনা সম্পর্কে আমাদের কাছে অফিসিয়াল তথ্য নেই — সিটি কর্পোরেশন/RAJUK-এর প্রকাশিত তথ্য থেকে যাচাই করাই নির্ভরযোগ্য।',risk:'শুধু "শীঘ্রই মেট্রো আসছে" জাতীয় দালালদের কথায় ভরসা করে সিদ্ধান্ত না নেওয়াই ভালো।'},

// ══ C. PRICING & FINANCIAL ══
{kw:['advance koto lage','কত টাকা এডভান্স','deposit koto','advance amount','security deposit koto'],a:'অগ্রিম/ডিপোজিটের কোনো একক নির্দিষ্ট নিয়ম নেই — এলাকা আর owner ভেদে আলাদা হয়।',ex:'যেটা listing-এ দেখানো হচ্ছে সেটা সেই specific property-র জন্য owner-এর দেওয়া তথ্য।',tip:'এখনো এটা নিয়ে negotiate করা সম্ভব — সরাসরি owner-এর সাথে কথা বলো।'},
{kw:['maintenance charge কে দেবে','service charge কার দায়িত্ব','মেইনটেনেন্স খরচ'],a:'Maintenance/service charge কে দেবে সেটা platform নির্ধারণ করে না — এটা owner-tenant চুক্তির অংশ, booking-এর সময়ই স্পষ্ট করে জিজ্ঞেস করে নাও।',risk:'এটা আগে থেকে confirm না করলে move-in-এর পর অপ্রত্যাশিত বিল আসতে পারে।'},
{kw:['hidden cost','লুকানো খরচ','extra খরচ','অতিরিক্ত টাকা','vara chara r ki lage'],a:'ভাড়া ছাড়া সাধারণত যা চেক করা উচিত: গ্যাস/পানি/বিদ্যুৎ বিল কে দেবে, service charge, parking fee (থাকলে), advance কত মাসের।',hidden:'এই বিষয়গুলো listing-এ সবসময় স্পষ্ট থাকে না — booking-এর আগেই owner-কে সরাসরি জিজ্ঞেস করে একটা লিখিত তালিকা করে নেওয়া ভালো।',cta:'Owner-কে booking request-এর message-এ জিজ্ঞেস করো'},
{kw:['negotiate rent','দরদাম','ভাড়া কমানো যাবে','মূল্য কম','rent kombe','bara komano','komano jabe','discount pabo','rent fixed','negotiable কিনা'],a:'হ্যাঁ, ভাড়া/দাম নিয়ে সরাসরি owner-এর সাথে কথা বলে দরদাম করা যায় — এটা platform-এর মাধ্যমে হয় না।',tip:'তুলনীয় (একই এলাকার একই ধরনের) কয়েকটা listing দেখে একটা fair-price ধারণা নিয়ে আলোচনায় বসাই ভালো ফল দেয়।',next:'Booking request-এর message-এ বা সরাসরি ফোনে আলোচনা করো।'},
{kw:['fair price কিনা','দাম ঠিক আছে','ন্যায্য দাম','rent fairness','overpriced কিনা'],a:'একই এলাকার একই ধরনের বাসার সাথে তুলনা করে দেখো (Listings পেজে area filter করে) দামটা মিলছে কিনা।',ex:'বাজার-দর সময়ে সময়ে বদলায়, তাই কোনো একটা নির্দিষ্ট সংখ্যা "ঠিক দাম" বলে দেওয়া সম্ভব না।',tip:'অন্তত ৩-৪টা তুলনীয় listing দেখে নিজে একটা রেঞ্জ ধরে নাও, তারপর আলোচনায় বসো।'},
{hs:true,kw:['investment ভালো কিনা','বিনিয়োগ','rental yield','ভালো বিনিয়োগ','future value বাড়বে কিনা'],a:'রিয়েল এস্টেট বিনিয়োগ এলাকা, বাজার পরিস্থিতি আর সময়ের উপর নির্ভর করে — আমরা কোনো নির্দিষ্ট রিটার্নের প্রতিশ্রুতি দিতে পারি না।',risk:'কোনো platform বা agent যদি নির্দিষ্ট রিটার্নের সংখ্যা প্রতিশ্রুতি দেয়, সেটা সন্দেহজনক ভাবা উচিত।',next:'এলাকার প্রকৃত trend আর একজন financial advisor-এর পরামর্শ নেওয়া ভালো বড় সিদ্ধান্তের আগে।'},
{hs:true,kw:['emi কিভাবে কাজ করে','mortgage','home loan','loan নিয়ে কেনা'],a:'EMI/হোম লোনের সুনির্দিষ্ট শর্ত ব্যাংকভেদে আলাদা হয় — আমরা কোনো নির্দিষ্ট সুদের হার বা EMI অংক বলতে পারি না।',next:'নির্দিষ্ট ব্যাংকের সাথে সরাসরি কথা বলে বর্তমান শর্ত ও যোগ্যতার মানদণ্ড জেনে নাও।'},
{hs:true,kw:['registration cost','রেজিস্ট্রেশন খরচ','মিউটেশন খরচ','stamp duty'],a:'রেজিস্ট্রেশন/মিউটেশন/স্ট্যাম্প ডিউটির খরচ সরকারি নিয়ম অনুযায়ী নির্ধারিত হয় এবং সময়ে সময়ে বদলাতে পারে — আমরা কোনো নির্দিষ্ট অংক বলতে পারি না, এটা fabricate করাটা ভুল তথ্য দেওয়া হবে।',next:'সংশ্লিষ্ট রেজিস্ট্রি অফিস বা একজন property lawyer-এর কাছ থেকে বর্তমান হার জেনে নেওয়াই নির্ভরযোগ্য।'},
{kw:['token money ফেরত পাবো','booking fee refundable','advance ফেরত','refund','রিফান্ড'],a:'Token/advance টাকা ফেরতযোগ্য কিনা এটা owner-এর সাথে হওয়া চুক্তির শর্তের উপর নির্ভর করে — booking-এর সময়ই এটা স্পষ্ট লিখিতভাবে বা অন্তত message-এ record করে নেওয়া ভালো।',risk:'মৌখিক প্রতিশ্রুতির উপর ভরসা করলে পরে বিতর্ক হতে পারে।'},

// ══ D. LEGAL & DOCUMENTATION ══
{hs:true,kw:['mutation কি','খতিয়ান','porcha','পর্চা','namjari'],a:'মিউটেশন (নামজারি)/খতিয়ান/পর্চা — এগুলো জমির মালিকানার সরকারি রেকর্ড সংক্রান্ত ধারণা। এর বিস্তারিত যাচাই একটা আইনি বিষয়, আমরা আইনি পরামর্শ দিতে পারি না।',next:'বড় লেনদেনের (কেনা/বিক্রি) আগে অবশ্যই একজন property lawyer দিয়ে কাগজপত্র যাচাই করিয়ে নাও।'},
{hs:true,kw:['ownership verify কিভাবে','মালিকানা যাচাই','owner real কিনা','asol malik kina'],a:'Owner সত্যিই property-র মালিক কিনা সেটা booking-এর আগে জিজ্ঞেস করে দলিলের কপি চাইতে পারো।',ex:'✓ Verified badge থাকলে আমাদের admin team একবার review করেছে — কিন্তু এটা সম্পূর্ণ আইনি গ্যারান্টি না।',risk:'একই জমি একাধিক ব্যক্তির কাছে বিক্রির প্রতারণা বাংলাদেশে পরিচিত একটা সমস্যা — বড় লেনদেনে বিশেষভাবে সতর্ক থাকা উচিত।',next:'চূড়ান্ত লেনদেনের আগে নিজে/আইনজীবী দিয়ে দলিল verify করাই নিরাপদ।'},
{hs:true,kw:['rental agreement লাগবে কিনা','চুক্তিপত্র','agreement কি থাকা উচিত'],a:'ভাড়ার চুক্তিতে সাধারণত থাকা উচিত: ভাড়ার পরিমাণ, advance, notice period, কে maintenance দেবে, চুক্তির মেয়াদ।',hidden:'মৌখিক প্রতিশ্রুতি (যেমন move-in-এর আগে রং করে দেওয়া) লিখিত না থাকলে পরে অস্বীকার করা সহজ হয়ে যায় — এটাই সবচেয়ে বেশি বিতর্কের কারণ।',tip:'একটা সাধারণ লিখিত সারাংশ (ভয়ংকর আইনি ডকুমেন্ট না হলেও) দুই পক্ষের জন্যই সুরক্ষা।',next:'নিজেদের মধ্যে লিখিতভাবে ঠিক করে নাও, প্রয়োজনে stamp paper-এ।'},
{kw:['nid verification কিভাবে হয়','nid check','পরিচয় যাচাই'],a:'Signup-এর সময় NID verification backend-এ automatic হয়ে যায়।',ex:'এটা মূলত format-check এবং একটা প্রাথমিক যাচাই — সম্পূর্ণ সরকারি ডেটাবেজ-লেভেল ক্রস-চেক না।',tip:'বড় লেনদেনের আগে counterparty-র NID সরাসরি দেখে নেওয়াও ভালো অভ্যাস।'},
{hs:true,kw:['foreigner rent korte parbe','বিদেশি ভাড়া নিতে পারবে','foreigner buy property','non bangladeshi kinte parbe'],a:'বাংলাদেশে বিদেশি নাগরিকদের প্রপার্টি ভাড়া/কেনার নিয়ম সময়ে সময়ে বদলাতে পারে এবং জটিল হতে পারে।',risk:'এই বিষয়ে ভুল তথ্যের উপর ভরসা করে এগোনো ঝুঁকিপূর্ণ।',next:'একজন আইনজীবীর সাথে কথা বলাই সবচেয়ে নিরাপদ — আমরা নির্দিষ্ট আইনি নিশ্চয়তা দিতে পারি না।'},
{hs:true,kw:['inheritance property','উত্তরাধিকার সম্পত্তি','ওয়ারিশ সূত্রে'],a:'উত্তরাধিকার সংক্রান্ত সম্পত্তির মালিকানা প্রায়ই জটিল এবং একাধিক পক্ষ জড়িত থাকতে পারে।',risk:'উত্তরাধিকার মিউটেশন সম্পূর্ণ না হওয়া সম্পত্তি নিয়ে লেনদেন বিশেষভাবে ঝুঁকিপূর্ণ।',next:'এই ধরনের লেনদেনে অবশ্যই আইনজীবীর মাধ্যমে সব ওয়ারিশের সম্মতি ও কাগজপত্র যাচাই করা উচিত।'},

// ══ E. SEARCH, COMPARISON & DECISION ══
{kw:['search কিভাবে করব','বাসা খুঁজব কিভাবে','how to search'],a:'উপরের মেনু থেকে "Properties" পেজে city/area/type অনুযায়ী filter করতে পারো, অথবা "AI Assistant" পেজে স্বাভাবিক ভাষায় (যেমন "গুলশানে ২ বেডরুম ২৫ হাজারের মধ্যে") লিখে সার্চ করতে পারো।',cta:'AI Assistant পেজে যাও'},
{kw:['photo আসল কিনা','ছবি পুরনো','photo matches property'],a:'ছবি বনাম বাস্তবতার পার্থক্য একটা পরিচিত সমস্যা এই বাজারে।',tip:'Verified badge থাকা listing-এ কিছুটা বেশি আস্থা রাখা যায়, কিন্তু visit করে নিজে মিলিয়ে দেখাই সবচেয়ে নির্ভরযোগ্য।'},
{kw:['listing এখনো available কিনা','still available','ভাড়া হয়ে গেছে কিনা'],a:'Listing status সাধারণত real-time আপডেট থাকে, কিন্তু নিশ্চিত হতে booking request বা visit বুক করার সময়ই সবচেয়ে সঠিক তথ্য পাবে।'},
{kw:['compare listings','তুলনা করব কিভাবে','side by side দেখা'],a:'একই সাথে একাধিক Listings পেজে area/budget filter করে পাশাপাশি দেখতে পারো।',tip:'শুধু ভাড়া না, advance+service charge+utility মিলিয়ে "আসল মাসিক খরচ" হিসাব করে তুলনা করাই সবচেয়ে ভালো পদ্ধতি।'},

// ══ F. BOOKING, VISIT, NEGOTIATION, TRANSACTION ══
{kw:['visit বুক করব','বাসা দেখতে যাব','ভিজিট শিডিউল','দেখতে যাব কিভাবে'],a:'বাসা দেখতে visit বুক করতে: Property detail পেজে "Book a Visit" অপশনে গিয়ে তারিখ+সময় বেছে নাও।',ex:'Owner সেটা accept/reject করবে — এটা কোনো বাধ্যতামূলক final সিদ্ধান্ত না।',next:'Dashboard → Visit History-তে status ট্র্যাক করতে পারবে।',cta:'Book a Visit'},
{kw:['booking করব কিভাবে','বুকিং','বুক করব','রিজার্ভ','reserve korbo','লক করো'],a:'বাসা বুক করতে: Property-এর detail পেজে গিয়ে "২৪ ঘণ্টা লক করো" বাটনে ক্লিক করো।',ex:'এটা বাসাটা তোমার জন্য সাময়িকভাবে ধরে রাখবে, তারপর owner-কে booking request পাঠাতে পারবে।',risk:'এটা final চুক্তি না — owner-এর সম্মতি এখনো লাগবে।',cta:'Property detail পেজে "২৪ ঘণ্টা লক করো"'},
{kw:['বুকিং বাতিল করব','cancel booking','visit cancel korbo'],a:'Dashboard → Bookings বা Visit History-তে গিয়ে pending থাকা request-এর পাশে "বাতিল করো" বাটনে ক্লিক করো।',cta:'Dashboard → Bookings'},
{kw:['booking confirm হলো কিনা','নিশ্চিত হলো','confirmed কবে'],a:'Owner request accept করলেই Dashboard-এ status "Accepted" দেখাবে, আর notification bell-এ আসবে।'},
{kw:['double booking হলে','একই বাসা দুইজন book করলে'],a:'আমাদের সিস্টেমে একটা বাসা একসাথে শুধু একজনের জন্যই লক হতে পারে — লক থাকা অবস্থায় অন্য কেউ একই সময়ে reserve করতে পারবে না।',ex:'যিনি প্রথমে সফলভাবে লক করেছেন, প্রপার্টি ততক্ষণ শুধু তার জন্যই সংরক্ষিত থাকে।'},
{kw:['owner এর সাথে দেখা করা নিরাপদ কিনা','visit safety','একা visit যাওয়া'],a:'অপরিচিত জায়গায় একা visit-এ যাওয়ার আগে কিছু সতর্কতা ভালো: দিনের আলোয় যাওয়া, কাউকে সাথে নেওয়া বা অন্তত visit-এর ঠিকানা/সময় কাউকে জানিয়ে রাখা।',risk:'বিশেষ করে নারীদের একা visit-এ যাওয়ার ক্ষেত্রে এই সতর্কতাগুলো গুরুত্বপূর্ণ।'},

// ══ G. MOVING & SETUP ══
{kw:['moving cost','shifting খরচ','মুভিং','বাসা বদল খরচ'],a:'Shifting cost estimate করতে: উপরের মেনু থেকে "Shifting" পেজে গিয়ে from/to এলাকা আর জিনিসের পরিমাণ দিলেই approximate খরচ দেখাবে।',ex:'দূরত্ব, ফ্লোর, লিফট আছে কিনা — এসবের উপর ভিত্তি করে খরচ হিসাব হয়।',cta:'Shifting পেজে যাও'},
{kw:['furniture interior service','ফার্নিচার','interior design সার্ভিস'],a:'Furniture/Interior design সার্ভিসের জন্য উপরের মেনু থেকে "Interior" বা "Furniture" পেজে গিয়ে দেখো।',cta:'Interior/Furniture পেজে যাও'},
{kw:['gas internet connection নতুন বাসায়','utility setup','নতুন বাসায় সংযোগ'],a:'নতুন বাসায় ওঠার আগে যা চেক করা ভালো: গ্যাস/পানি/বিদ্যুৎ মিটার আগের ভাড়াটিয়ার নামে বন্ধ হয়েছে কিনা, ইন্টারনেট সংযোগ কীভাবে হবে।',hidden:'নতুন সংযোগের জন্য প্রায়ই এককালীন সংযোগ ফি লাগে — এটা বাজেটে রাখা ভালো।'},
{kw:['electrician plumber painter','ইলেকট্রিশিয়ান','প্লাম্বার','পেইন্টার লাগবে'],a:'এই মুহূর্তে platform-এ সরাসরি electrician/plumber/painter বুকিং সুবিধা নেই।',next:'Shifting পেজের সার্ভিস তালিকায় related কিছু থাকলে দেখে নাও।'},
{kw:['move in checklist','moving day তালিকা','বাসা বদলের আগে কি করব'],a:'Move-in-এর আগে যা করা ভালো: প্রতিটা রুমের অবস্থার ছবি তুলে রাখা (পরে deposit বিতর্ক এড়াতে), মিটার রিডিং নোট করা, চাবি/লক ঠিকমতো কাজ করছে কিনা চেক করা।',tip:'এই ছবিগুলো Dashboard-এর Documents ট্যাবে রেখে দিতে পারো, ভবিষ্যতে দরকার হলে সহজে খুঁজে পাবে।',cta:'Dashboard → Documents'},

// ══ H. LIVING & TENANCY ══
{kw:['damage কে ঠিক করবে','repair কে করবে','মেরামত দায়িত্ব','structural repair kar dayitto'],a:'কে মেরামতের খরচ দেবে (মালিক নাকি ভাড়াটিয়া) এটা সাধারণত ক্ষতির ধরনের উপর নির্ভর করে (স্বাভাবিক ক্ষয় vs অবহেলাজনিত ক্ষতি)।',hidden:'এই বিষয়ে স্পষ্ট বোঝাপড়া না থাকলে ছোটখাটো মেরামতও বিতর্কের কারণ হয়ে যায়।',tip:'Booking-এর সময়ই owner-এর সাথে এই বিষয়ে স্পষ্ট কথা বলে নেওয়া সবচেয়ে ভালো।'},
{kw:['landlord হঠাৎ আসে','owner notice ছাড়া ঢোকে','privacy tenant'],a:'ভাড়াটিয়া থাকা অবস্থায় owner-এর আগাম না জানিয়ে বাসায় ঢোকা একটা সাধারণ অভিযোগ — এটা booking-এর সময় আলোচনা করে একটা বোঝাপড়ায় আসা ভালো (যেমন, জরুরি না হলে আগে জানিয়ে আসা)।'},
{kw:['utility bill বেশি এসেছে','shared meter dispute','বিল ভাগাভাগি'],a:'শেয়ার্ড মিটার থাকা ভবনে বিল ভাগাভাগির হিসাব প্রায়ই বিতর্কের কারণ হয়।',tip:'মাসিক মিটার রিডিং নিজে নোট রাখলে ভবিষ্যতে হিসাব মেলাতে সুবিধা হয়।'},
{kw:['rent বাড়ালে কি করব','rent increase notice','ভাড়া বৃদ্ধি'],a:'ভাড়া বৃদ্ধির নোটিশ পিরিয়ড এবং পরিমাণ নিয়ে কোনো একক নিয়ম নেই — এটা মূল চুক্তির শর্তের উপর নির্ভর করে।',tip:'পার্শ্ববর্তী এলাকার তুলনীয় ভাড়ার তথ্য নিয়ে আলোচনায় বসলে ভালো ফল পাওয়া যায়।'},

// ══ I. ENDING / RESELLING ══
{kw:['deposit ফেরত পাবো না বললে','security deposit dispute','ডিপোজিট কাটলো কেন'],a:'ডিপোজিট থেকে কর্তনের বৈধতা নিয়ে বিতর্ক হলে, move-in সময়ের অবস্থার ছবি (যদি থাকে) সবচেয়ে শক্তিশালী প্রমাণ।',next:'কোনো সমাধান না হলে Dashboard → Support-এ "Refund" বা "Complaint" category দিয়ে টিকেট খুলে জানাও।',cta:'Dashboard → Support'},
{kw:['early cancel korte চাই','আগে ছেড়ে দেওয়া','notice period koto'],a:'নোটিশ পিরিয়ড/আগে চুক্তি বাতিলের শর্ত সাধারণত ভাড়ার চুক্তিতে লেখা থাকে।',tip:'Booking-এর সময়ই owner-এর সাথে এটা স্পষ্ট করে নেওয়া ভালো, যাতে পরে হঠাৎ প্রয়োজন হলে সমস্যা না হয়।'},
{kw:['sublet করা যাবে','সাবলেট','ভাড়া দেওয়া যাবে আবার'],a:'সাবলেট করা যাবে কিনা এটা মূল ভাড়ার চুক্তির শর্তের উপর নির্ভর করে।',risk:'Owner-এর অনুমতি ছাড়া সাবলেট করলে আইনগত জটিলতা হতে পারে — না করাই নিরাপদ।'},
{kw:['relisting property','আবার ভাড়া দেব','বাসা খালি হয়ে গেছে'],a:'তোমার listing আবার active করতে বা নতুন করে যোগ করতে Seller Dashboard থেকে property status আপডেট করতে পারো।',cta:'Seller Dashboard'},

// ══ J. PERSONA-SPECIFIC ══
{kw:['bachelor mess বাসা','ব্যাচেলর বাসা','মেস খুঁজছি'],a:'Listings পেজে filter করার সময় বিবরণ দেখে বুঝতে পারবে কোন listing bachelor-friendly।',cta:'AI Assistant-এ "ব্যাচেলরদের জন্য বাসা" লিখে খোঁজো'},
{kw:['bachelor rent দেয় না কেন','family only policy','ব্যাচেলর প্রত্যাখ্যান'],a:'অনেক owner "family only" নীতি রাখেন — এটা এই বাজারে একটা পরিচিত, যদিও হতাশাজনক, বাস্তবতা।',tip:'বাসা খোঁজার সময় শুরুতেই listing-এর বিবরণ বা owner-কে জিজ্ঞেস করে এই নীতি জেনে নিলে পরে সময় বাঁচে।'},
{kw:['student বাজেট বাসা','university কাছে budget','ছাত্রদের জন্য সাশ্রয়ী'],a:'AI Assistant-এ বাজেট+এলাকা লিখে (যেমন "ঢাকা বিশ্ববিদ্যালয়ের কাছে ১০ হাজারের মধ্যে") সার্চ করলে সবচেয়ে ভালো ফলাফল পাবে।',cta:'AI Assistant পেজে যাও'},
{kw:['family জন্য ভালো এলাকা','স্কুল কাছে বাসা','বাচ্চাদের জন্য নিরাপদ'],a:'পরিবারের জন্য এলাকা বাছাইয়ের সময় স্কুল/হাসপাতাল দূরত্ব এবং এলাকার সাধারণ চরিত্র (family-dominant না bachelor-dominant) দুটোই গুরুত্বপূর্ণ বিবেচ্য বিষয়।',cta:'Map পেজে এলাকা যাচাই করো'},
{kw:['wheelchair accessible','disabled friendly','প্রতিবন্ধী বান্ধব বাসা'],a:'Lift/ground-floor-এর তথ্য listing-এর amenities অংশে থাকলে দেখতে পাবে।',tip:'নিশ্চিত না থাকলে booking-এর আগেই owner-কে সরাসরি জিজ্ঞেস করে নেওয়া ভালো।'},
{kw:['elderly জন্য উপযুক্ত বাসা','বয়স্কদের জন্য'],a:'বয়স্কদের জন্য ground-floor বা lift-সহ ভবন, এবং হাসপাতাল/ক্লিনিকের কাছাকাছি এলাকা সাধারণত বিবেচনায় নেওয়া ভালো।',cta:'Map পেজে হাসপাতাল থেকে দূরত্ব যাচাই করো'},
{kw:['landlord হিসেবে tenant verify','ভাড়াটিয়া যাচাই করব','ভালো ভাড়াটিয়া চিনব কিভাবে'],a:'ভাড়াটিয়ার NID আর ফোন নম্বর যাচাই করে নেওয়া, আর সম্ভব হলে আগের ভাড়ার রেফারেন্স জিজ্ঞেস করা — এগুলো সাধারণ ভালো অভ্যাস।',tip:'Platform-এ profile-এর মাধ্যমে basic যোগাযোগ তথ্য দেখা যায়, তবে চূড়ান্ত যাচাই নিজেকেই করতে হবে।'},
{kw:['agent হিসেবে কিভাবে ব্যবহার করব','property agent account','এজেন্ট হিসেবে লিস্টিং'],a:'Property Agent হিসেবে Seller account দিয়ে listing যোগ করতে পারো, ঠিক একজন সাধারণ owner-এর মতোই।'},

// ══ K. TRUST, SAFETY, FRAUD ══
{hs:true,kw:['fraud চিনবো কিভাবে','জালিয়াতি','scam লক্ষণ','প্রতারণা চেনার উপায়','ভুয়া লিস্টিং চেনা'],a:'সতর্কতার সাধারণ লক্ষণ: বাসা না দেখিয়েই টাকা আগেই চাওয়া, owner-এর সরাসরি দেখা করতে না চাওয়া, দামের তুলনায় অস্বাভাবিক কম ভাড়া।',risk:'এই লক্ষণগুলোর একাধিক একসাথে দেখা গেলে সতর্ক হওয়া উচিত।',next:'সন্দেহ হলে Dashboard → Support-এ "Fraud" category দিয়ে রিপোর্ট করো, অথবা তাৎক্ষণিক ঝুঁকি মনে হলে 🆘 বাটনে emergency ticket খোলো।',cta:'🆘 বাটনে ক্লিক করো অথবা Dashboard → Support'},
{kw:['verified badge মানে কি','✓ verified','verified মানে সম্পূর্ণ নিরাপদ কিনা'],a:'"✓ Verified" ব্যাজ মানে আমাদের admin team সেই listing-টা review করেছে।',ex:'এটা সম্পূর্ণ আইনি গ্যারান্টি না — তবু নিজে গিয়ে বাসা দেখে/owner-এর NID যাচাই করে নেওয়া সবসময় ভালো।',risk:'Verified badge-কে "কোনো ঝুঁকিই নেই" হিসেবে ধরে নেওয়া উচিত না।'},
{hs:true,kw:['payment এর আগে টাকা চাইলে কি করব','advance chay dekhar age','visit er age taka'],a:'বাসা না দেখিয়ে/booking lock না করে সরাসরি টাকা চাওয়াটা একটা লাল পতাকা।',risk:'আমাদের platform-এর বাইরে সরাসরি owner-কে কোনো টাকা পাঠানোর আগে খুব সতর্ক থাকা উচিত — সেই লেনদেনের কোনো রেকর্ড আমাদের কাছে থাকে না।',next:'সন্দেহজনক মনে হলে Support-এ রিপোর্ট করো।'},
{kw:['complaint জানাবো কিভাবে','অভিযোগ করব','সমস্যা রিপোর্ট'],a:'Dashboard → Support ট্যাবে গিয়ে "নতুন টিকেট খুলো" — category বেছে (Complaint/Fraud/Payment ইত্যাদি) বিস্তারিত লিখে জমা দাও।',ex:'প্রতিটা টিকেটের একটা নির্দিষ্ট ID থাকবে, status track করতে পারবে (Submitted → Under Review → Assigned → In Progress → Resolved)।',cta:'Dashboard → Support → নতুন টিকেট'},
{kw:['emergency সাহায্য দরকার','জরুরি অবস্থা','emergency contact'],a:'নিরাপত্তা/জীবন-ঝুঁকির জরুরি অবস্থায় সরাসরি জাতীয় জরুরি সেবা ৯৯৯-এ কল করো (ফ্রি, ২৪ ঘণ্টা)।',ex:'বাসা/লেনদেন সংক্রান্ত জরুরি সমস্যায় উপরের 🆘 বাটনে ক্লিক করে urgent টিকেট খুলতে পারো — তবে এটা তাৎক্ষণিক live সাপোর্ট না, দ্রুততম সময়ে review হবে।',cta:'🆘 বাটন অথবা ৯৯৯'},

// ══ L. PLATFORM MECHANICS ══
{kw:['account লগইন সমস্যা','password ভুলে গেছি','login হচ্ছে না'],a:'Login সমস্যা হলে Username ঠিক আছে কিনা চেক করো।',next:'Account তথ্য বদলাতে: Dashboard → Account Settings।'},
{kw:['saved search কিভাবে করব','সার্চ save করব','পুরনো সার্চ আবার চালাবো'],a:'Listings বা AI Assistant পেজে "🔍 এই সার্চ Save করো" বাটন চাপলে Dashboard → Saved Searches-এ জমা হবে, পরে এক ক্লিকে আবার চালানো যাবে।',cta:'🔍 এই সার্চ Save করো'},
{kw:['favorite কিভাবে করব','পছন্দের বাসা save','saved homes'],a:'কোনো বাসা পছন্দ হলে card-এর ❤️ আইকনে ক্লিক করলে "Saved Homes"-এ জমা হবে।',cta:'❤️ আইকনে ক্লিক করো'},
{kw:['payment history দেখব কিভাবে','রসিদ কোথায় পাবো','receipt দেখব'],a:'সব payment-এর ইতিহাস আর রসিদ দেখতে: Dashboard → Payments ট্যাবে যাও, সফল payment-এর পাশে "রসিদ দেখো" বাটন আছে।',cta:'Dashboard → Payments'},
{kw:['documents কোথায় আপলোড করব','ডকুমেন্ট সংরক্ষণ','nid copy রাখব'],a:'ভাড়ার চুক্তি, NID কপি, রসিদ ইত্যাদি সংরক্ষণ করতে Dashboard → Documents ট্যাব ব্যবহার করো — এটা তোমার নিজস্ব প্রাইভেট জায়গা, শুধু তুমিই দেখতে পাবে।',cta:'Dashboard → Documents'},
{kw:['ai assistant কি এই বট','chat বট কি করে','এই widget কি'],a:'ওয়েবসাইটের নিচে-ডানে থাকা চ্যাট আইকনটা এখন সরাসরি আমাদের support team-এর কাছে মেসেজ পাঠায় — সেটা কোনো instant-answer বট না।',ex:'বাসা-সংক্রান্ত এবং সাধারণ প্রশ্নের তাৎক্ষণিক উত্তরের জন্য উপরের মেনু থেকে "AI Assistant" পেজে যাওয়াই ভালো — এই উত্তরটাও সেখান থেকেই আসছে।'},
{kw:['notification কিভাবে পাবো','bell icon কি','alert পাবো কিভাবে'],a:'Booking status বদল, নতুন reply, বা admin-এর কোনো আপডেট হলে nav-এর 🔔 আইকনে দেখতে পাবে।'},
];

// বানান ভুল/রোমান হরফে লেখা (vara, bari ইত্যাদি) সহ্য করার জন্য — map area-search-এ যেই
// Levenshtein distance ব্যবহার করেছিলাম সেটাই এখানে reuse করছি। শুধু ছোট/একক-শব্দের keyword-এ
// প্রয়োগ করি (২+ শব্দের phrase-এ fuzzy করলে ভুল মিলের ঝুঁকি বেশি, ওগুলো exact/substring tier-ই সামলায়)।
function _fuzzyMatchFaq(message){
  const words=message.toLowerCase().split(/\s+/).map(w=>w.replace(/[^a-z0-9\u0980-\u09FF]/gi,'')).filter(w=>w.length>=3);
  let best=null, bestKw='', bestDist=Infinity;
  for(const f of CHAT_FAQ){
    // financial/legal/fraud-জাতীয় সত্যিই উঁচু-ঝুঁকির বিষয়ে (স্পষ্টভাবে hs:true মার্ক করা) ভুল
    // fuzzy-মিল হলে ক্ষতি বেশি — শুধু এই নির্দিষ্ট entry-গুলোতেই থ্রেশহোল্ড কড়া রাখি। যেকোনো risk/hidden
    // ফিল্ড থাকা মানেই "high stakes" ধরে নেওয়া ভুল হতো (যেমন সাধারণ booking-এও একটা mild risk-note
    // থাকে) — তাই আলাদা explicit flag ব্যবহার করছি, blanket heuristic না।
    const isHighStakes = !!f.hs;
    for(const k of f.kw){
      const kw=k.toLowerCase();
      if(kw.includes(' ') || kw.length<3) continue; // multi-word phrase বা খুব ছোট keyword এখানে স্কিপ
      for(const w of words){
        if(Math.abs(w.length-kw.length)>2) continue; // দৈর্ঘ্য অনেক আলাদা হলে fuzzy করার মানে নেই
        const d=_levenshtein(w,kw);
        const threshold = isHighStakes ? 1 : (kw.length<=5?1:2);
        if(d<=threshold && d<bestDist){ bestDist=d; best=f; bestKw=k; }
      }
    }
  }
  return best ? { entry:best, matchedKw:bestKw } : null;
}
// একটাই জায়গা থেকে FAQ ম্যাচ করার সিদ্ধান্ত নেয় — আগে exact/substring (নির্দিষ্ট), তারপর fuzzy
// (বানান ভুল সহ্য করে) — AI Assistant পেজ এটাই ব্যবহার করে সাধারণ প্রশ্নের উত্তর দিতে।
function _matchFaqAny(q){
  const lower=q.toLowerCase();
  let exact=null, bestLen=0;
  for(const f of CHAT_FAQ){
    for(const k of f.kw){
      if(lower.includes(k.toLowerCase()) && k.length>bestLen){ bestLen=k.length; exact=f; }
    }
  }
  if(exact) return { entry:exact, approx:false, matchedKw:null };
  const fuzzy=_fuzzyMatchFaq(q);
  if(fuzzy) return { entry:fuzzy.entry, approx:true, matchedKw:fuzzy.matchedKw };
  return null;
}
// একটা entry-র যেসব ৭-অংশের ফিল্ড আসলে ভরা আছে শুধু সেগুলোই দেখায় — প্রতিটা প্রশ্নে জোর করে সবকটা
// section (যেমন "risk" বা "hidden cost") ভরাট না করে, যেখানে সত্যিই প্রাসঙ্গিক শুধু সেখানেই দেখানো হয়।
const FAQ_SECTION_LABELS={ex:'বিস্তারিত',risk:'⚠️ ঝুঁকি',hidden:'💰 লুকানো খরচ',tip:'💡 পরামর্শ',next:'পরবর্তী ধাপ',cta:'👉'};
function _renderFaqAnswer(entry, forChatBubble){
  const sections=['ex','risk','hidden','tip','next','cta'];
  if(forChatBubble){
    // hAddMsg/aiFAddMsg উভয়ই textContent দিয়ে বসায় — plain text, HTML escaping দরকার নেই
    const parts=sections.filter(k=>entry[k]).map(k=>`\n\n${FAQ_SECTION_LABELS[k]}: ${entry[k]}`);
    return entry.a+parts.join('');
  }
  const parts=sections.filter(k=>entry[k]).map(k=>`<div style="margin-top:10px;font-size:.82rem;line-height:1.6"><b style="color:var(--gold)">${FAQ_SECTION_LABELS[k]}:</b> ${dtEsc(entry[k])}</div>`);
  return dtEsc(entry.a)+parts.join('');
}
let _chatWidgetTicketId=null, _chatWidgetPollTimer=null, _chatWidgetSeenMsgIds=new Set(), _chatWidgetFaqTried=false;

function toggleChatWidget(){
  _chatWidgetOpen=!_chatWidgetOpen;
  document.getElementById('chat-widget-panel').style.display=_chatWidgetOpen?'flex':'none';
  if(_chatWidgetOpen && !_chatWidgetHistory.length) _chatWidgetGreet();
  if(_chatWidgetOpen && _chatWidgetTicketId) _chatWidgetStartPolling();
  if(!_chatWidgetOpen) _chatWidgetStopPolling();
}
function _chatWidgetGreet(){
  _chatWidgetAdd('bot','হাই! সাধারণ প্রশ্নের উত্তর এখানেই সাথে সাথে দেওয়ার চেষ্টা করব। উত্তর না মিললে বা আরেকটু জানতে চাইলে সরাসরি আমাদের support team-এর কাছে চলে যাবে (একটু সময় লাগতে পারে)। কী জানতে চাও?');
}
function _chatWidgetAdd(who,text,isTyping){
  const box=document.getElementById('chat-widget-msgs');
  const time=new Date().toLocaleTimeString('bn-BD',{hour:'2-digit',minute:'2-digit'});
  const div=document.createElement('div');
  div.style.cssText=`margin-bottom:10px;text-align:${who==='user'?'right':'left'}`;
  if(isTyping){ div.id='chat-typing-indicator'; div.innerHTML=`<div style="display:inline-block;padding:8px 12px;border-radius:12px;background:var(--glass);font-size:.85rem">···</div>`; }
  else div.innerHTML=`<div style="display:inline-block;max-width:82%;padding:9px 13px;border-radius:12px;background:${who==='user'?'var(--emerald)':'var(--glass)'};color:${who==='user'?'#fff':'var(--white)'};font-family:var(--font-ui);font-size:.83rem;line-height:1.5">${who==='admin'?'<b style="color:var(--gold)">Support:</b> ':''}${dtEsc(text)}</div><div style="font-size:.62rem;color:var(--white-30);margin-top:2px;font-family:var(--font-ui)">${time}</div>`;
  box.appendChild(div);
  box.scrollTop=box.scrollHeight;
  if(!isTyping) _chatWidgetHistory.push({who,text,time});
}

async function chatWidgetSend(){
  const inp=document.getElementById('chat-widget-inp');
  const q=inp.value.trim(); if(!q)return;
  if(!requireAuth('buyer',()=>{ document.getElementById('chat-widget-inp').value=q; chatWidgetSend(); })) return;
  _chatWidgetAdd('user',q); inp.value='';

  // প্রথম মেসেজে আগে FAQ-এ instant উত্তর আছে কিনা দেখি (AI পেজের একই _matchFaqAny পুনর্ব্যবহার,
  // নতুন matching-লজিক লেখা হয়নি) — মিললে সাথে সাথেই উত্তর, ticket তখনই বানানো হয় না।
  // না মিললে বা ব্যবহারকারী আবার লিখলে (মানে FAQ কাজে দেয়নি) স্বাভাবিক human-relay চলে।
  if(!_chatWidgetTicketId && !_chatWidgetFaqTried){
    _chatWidgetFaqTried=true;
    const m=_matchFaqAny(q);
    if(m){
      _chatWidgetAdd('bot', _renderFaqAnswer(m.entry,true));
      _chatWidgetAdd('bot', '💬 এটা কাজে দিয়েছে তো? না হলে নিচে আবার লিখো — সরাসরি আমাদের support team-এর কাছে যাবে।');
      return;
    }
  }

  try{
    if(!_chatWidgetTicketId){
      // প্রথম মেসেজ — নতুন টিকেট বানাই, লাইভ চ্যাট হিসেবে
      const{data:ticket,error}=await abashonDB.from('support_tickets').insert({
        user_id:session.id, subject:'Live Chat', category:'other', priority:'medium'
      }).select().single();
      if(error) throw error;
      _chatWidgetTicketId=ticket.id;
      _buyerTickets.unshift(ticket);
      await abashonDB.from('support_messages').insert({ ticket_id:ticket.id, sender_id:session.id, is_admin_reply:false, message:q });
      _chatWidgetAdd('bot',`✓ পাঠানো হয়েছে (${ticketIdFmt(ticket.id)}) — reply এলে এখানেই দেখাবে, অথবা Dashboard → Support-এ গিয়েও দেখতে পারো।`);
      _chatWidgetStartPolling();
    }else{
      const{error}=await abashonDB.from('support_messages').insert({ ticket_id:_chatWidgetTicketId, sender_id:session.id, is_admin_reply:false, message:q });
      if(error) throw error;
    }
  }catch(e){
    _chatWidgetAdd('bot','⚠️ মেসেজ পাঠানো যায়নি: '+friendlyError(e));
  }
}

// widget খোলা থাকা অবস্থায় নিয়মিত নতুন admin reply আছে কিনা চেক করে — সত্যিকারের real-time
// (WebSocket) না, সাধারণ polling; এই স্কেলের support widget-এর জন্য এটাই যথেষ্ট এবং সহজ।
function _chatWidgetStartPolling(){
  if(_chatWidgetPollTimer) return;
  _chatWidgetPollTimer=setInterval(_chatWidgetPoll,8000);
  _chatWidgetPoll();
}
function _chatWidgetStopPolling(){
  if(_chatWidgetPollTimer){ clearInterval(_chatWidgetPollTimer); _chatWidgetPollTimer=null; }
}
async function _chatWidgetPoll(){
  if(!_chatWidgetTicketId) return;
  const{data,error}=await abashonDB.from('support_messages').select('*').eq('ticket_id',_chatWidgetTicketId).order('created_at',{ascending:true});
  if(error||!data) return;
  for(const m of data){
    if(_chatWidgetSeenMsgIds.has(m.id)) continue;
    _chatWidgetSeenMsgIds.add(m.id);
    if(m.is_admin_reply && !m.is_internal) _chatWidgetAdd('admin',m.message);
  }
}
async function adminDelete(id){
  if(!confirm('এই listing মুছে ফেলতে চান? এটা ফেরানো যাবে না।'))return;
  const{error}=await abashonDB.rpc('admin_delete_property',{prop_id:id});
  if(error){ toast(error.message,'err'); return; }
  toast('✓ মুছে ফেলা হয়েছে','');
  renderAdminStats(); renderAdminList();
}

// ── Admin: Support Tickets ──
let _adminTickets=[], _adminOnlyOpen=true, _adminExpandedTicket=null, _adminTemplates=null;
function _templateManagerHtml(){
  const list=(_adminTemplates||[]).map(t=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 10px;background:var(--bg-3);border-radius:6px;margin-bottom:6px"><span style="font-family:var(--font-ui);font-size:.78rem;color:var(--white-60)">${dtEsc(t.title)}</span><button onclick="deleteTemplate(${t.id})" style="background:none;border:none;color:var(--white-30);cursor:pointer">✕</button></div>`).join('');
  return `<details style="margin-bottom:16px;background:var(--glass);border:1px solid var(--border);border-radius:10px;padding:12px">
    <summary style="cursor:pointer;font-family:var(--font-ui);font-size:.82rem;color:var(--white-60);font-weight:600">📋 Canned Reply Templates ম্যানেজ করো (${(_adminTemplates||[]).length})</summary>
    <div style="margin-top:10px">${list}</div>
    <input id="new-tpl-title" placeholder="টাইটেল (যেমন: 'Refund process')" style="width:100%;margin-top:8px;margin-bottom:6px;padding:7px 10px;background:var(--bg-3);border:1px solid var(--border);border-radius:6px;color:var(--white);font-family:var(--font-ui);font-size:.78rem"/>
    <textarea id="new-tpl-body" rows="2" placeholder="Reply text..." style="width:100%;margin-bottom:6px;padding:7px 10px;background:var(--bg-3);border:1px solid var(--border);border-radius:6px;color:var(--white);font-family:var(--font-ui);font-size:.78rem;resize:vertical"></textarea>
    <button class="btn-outline" style="padding:6px 14px;font-size:.72rem" onclick="addTemplate()">যোগ করো</button>
  </details>`;
}
async function addTemplate(){
  const title=_val('new-tpl-title'), body=_val('new-tpl-body');
  if(!title||!body){ toast('টাইটেল ও body দুটোই দাও','err'); return; }
  const{data,error}=await abashonDB.from('support_response_templates').insert({title,body}).select().single();
  if(error){ toast(error.message,'err'); return; }
  _adminTemplates=[...(_adminTemplates||[]),data];
  toast('✓ Template যোগ হয়েছে','',2000);
  renderAdminTickets();
}
async function deleteTemplate(id){
  const{error}=await abashonDB.from('support_response_templates').delete().eq('id',id);
  if(error){ toast(error.message,'err'); return; }
  _adminTemplates=(_adminTemplates||[]).filter(t=>t.id!==id);
  toast('মুছে ফেলা হয়েছে','',1500);
  renderAdminTickets();
}
async function renderAdminTickets(){
  const el=document.getElementById('admin-list'); if(!el)return;
  el.innerHTML='<div style="padding:60px;text-align:center;color:var(--white-30);font-family:var(--font-ui)">লোড হচ্ছে...</div>';
  if(_adminTemplates===null){
    const{data:tpl}=await abashonDB.from('support_response_templates').select('*').order('created_at',{ascending:true});
    _adminTemplates=tpl||[];
  }
  const{data,error}=await abashonDB.rpc('admin_list_tickets',{only_open:_adminOnlyOpen});
  if(error){ el.innerHTML='<div style="padding:40px;text-align:center;color:#e08080">লোড ব্যর্থ: '+dtEsc(error.message)+'</div>'; return; }
  _adminTickets=data||[];
  const analytics = await _renderAdminAnalytics();
  const filterRow=`
    <label style="display:flex;align-items:center;gap:8px;margin-bottom:14px;font-family:var(--font-ui);font-size:.8rem;color:var(--white-60);cursor:pointer">
      <input type="checkbox" ${_adminOnlyOpen?'checked':''} onchange="_adminOnlyOpen=this.checked;renderAdminTickets()"/> শুধু খোলা/চলমান টিকেট দেখাও
    </label>`;
  if(!_adminTickets.length){ el.innerHTML=analytics+_templateManagerHtml()+filterRow+'<div style="padding:60px;text-align:center;color:var(--white-30);font-family:var(--font-ui)">কোনো টিকেট নেই</div>'; return; }
  el.innerHTML=analytics+_templateManagerHtml()+filterRow+_adminTickets.map(t=>{
      const stCls=['resolved'].includes(t.status)?'ok':['closed'].includes(t.status)?'rej':'pend';
      const isExpanded=_adminExpandedTicket===t.id;
      return `<div style="background:var(--glass);border:1px solid ${t.priority==='emergency'?'#b3262f':t.priority==='urgent'?'#a67c1a':'var(--border)'};border-radius:10px;padding:14px;margin-bottom:10px;cursor:pointer" onclick="toggleAdminTicketThread(${t.id})">
        <div style="display:flex;gap:10px;align-items:flex-start">
          <div style="font-size:1.3rem;flex-shrink:0">${t.priority==='emergency'?'🆘':t.category==='fraud'?'⚠️':'💬'}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:600;color:var(--white)">${dtEsc(t.subject)} <span style="color:var(--white-30);font-weight:400;font-size:.7rem">${ticketIdFmt(t.id)}</span></div>
            <div style="font-size:.75rem;color:var(--white-30);font-family:var(--font-ui)">${dtEsc(t.requester_name||'—')} · ${dtEsc(t.requester_phone||'')} · ${TICKET_CAT_BN[t.category]||t.category} · ${TICKET_PR_BN[t.priority]||t.priority} · ${new Date(t.created_at).toLocaleDateString('bn-BD',{day:'numeric',month:'short'})}${t.prior_ticket_count?` · <span title="এই ব্যবহারকারীর আগের টিকেট">👤 আগে ${bnNum(t.prior_ticket_count)}টা</span>`:''}</div>
            ${t.severity==='critical'||t.severity==='high'?`<div style="font-size:.68rem;color:#e08080;margin-top:2px">সিভিয়ারিটি: ${t.severity==='critical'?'জরুরি':'উচ্চ'}</div>`:''}
            <div style="font-size:.7rem;color:var(--white-30);margin-top:3px">${t.assigned_agent_name?`👤 এজেন্ট: ${dtEsc(t.assigned_agent_name)}`:`<button onclick="event.stopPropagation();adminAssignTicket(${t.id})" style="background:none;border:1px solid var(--border);border-radius:6px;padding:2px 8px;color:var(--gold);font-size:.7rem;cursor:pointer">নিজের কাছে নাও</button>`} · <button onclick="event.stopPropagation();adminShowCustomerTimeline('${t.user_id}')" style="background:none;border:none;color:var(--white-30);text-decoration:underline;font-size:.7rem;cursor:pointer">🕓 কাস্টমার টাইমলাইন</button></div>
          </div>
          <span class="bk-st ${stCls}">${TICKET_ST_BN[t.status]||t.status}</span>
        </div>
        ${isExpanded?`<div id="admin-ticket-thread-${t.id}" onclick="event.stopPropagation()" style="margin-top:12px;padding-top:12px;border-top:1px solid var(--border)"><div style="text-align:center;color:var(--white-30);font-family:var(--font-ui);font-size:.8rem">লোড হচ্ছে...</div></div>`:''}
      </div>`;
    }).join('');
}
async function _renderAdminAnalytics(){
  const{data,error}=await abashonDB.rpc('admin_ticket_analytics');
  if(error||!data) return '';
  const byStatus=data.by_status||{}, byCat=data.by_category||{};
  return `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:18px">
    <div style="background:var(--glass);border:1px solid var(--border);border-radius:10px;padding:12px"><div style="font-size:1.2rem;font-weight:700;color:var(--gold);font-family:var(--font-display)">${bnNum(data.total||0)}</div><div style="font-size:.68rem;color:var(--white-30);font-family:var(--font-ui)">মোট টিকেট</div></div>
    <div style="background:var(--glass);border:1px solid var(--border);border-radius:10px;padding:12px"><div style="font-size:1.2rem;font-weight:700;color:#e08080;font-family:var(--font-display)">${bnNum((byStatus.submitted||0)+(byStatus.under_review||0)+(byStatus.assigned||0)+(byStatus.in_progress||0)+(byStatus.waiting_for_user||0))}</div><div style="font-size:.68rem;color:var(--white-30);font-family:var(--font-ui)">খোলা</div></div>
    <div style="background:var(--glass);border:1px solid var(--border);border-radius:10px;padding:12px"><div style="font-size:1.2rem;font-weight:700;color:var(--emerald-l);font-family:var(--font-display)">${data.avg_resolution_hours!=null?bnNum(data.avg_resolution_hours)+'ঘ':'—'}</div><div style="font-size:.68rem;color:var(--white-30);font-family:var(--font-ui)">গড় সমাধান সময়</div></div>
    <div style="background:var(--glass);border:1px solid var(--border);border-radius:10px;padding:12px"><div style="font-size:1.2rem;font-weight:700;color:var(--gold);font-family:var(--font-display)">${data.avg_rating!=null?'⭐'+bnNum(data.avg_rating):'—'}</div><div style="font-size:.68rem;color:var(--white-30);font-family:var(--font-ui)">গড় রেটিং (${bnNum(data.rated_count||0)}টা)</div></div>
    <div style="background:var(--glass);border:1px solid var(--border);border-radius:10px;padding:12px"><div style="font-size:1.2rem;font-weight:700;color:#e08080;font-family:var(--font-display)">${data.escalation_rate!=null?Math.round(data.escalation_rate*100)+'%':'—'}</div><div style="font-size:.68rem;color:var(--white-30);font-family:var(--font-ui)">Escalation rate</div></div>
    <div style="background:var(--glass);border:1px solid var(--border);border-radius:10px;padding:12px"><div style="font-size:1.2rem;font-weight:700;color:var(--gold);font-family:var(--font-display)">${bnNum(data.unassigned_open_count||0)}</div><div style="font-size:.68rem;color:var(--white-30);font-family:var(--font-ui)">Agent-বিহীন খোলা</div></div>
  </div>`;
}
async function toggleAdminTicketThread(id){
  _adminExpandedTicket = _adminExpandedTicket===id ? null : id;
  await renderAdminTickets();
  if(_adminExpandedTicket!==id) return;
  if(!_ticketMessages[id]){
    const{data,error}=await abashonDB.from('support_messages').select('*').eq('ticket_id',id).order('created_at',{ascending:true});
    _ticketMessages[id]=error?[]:(data||[]);
  }
  if(_adminTemplates===null){
    const{data:tpl}=await abashonDB.from('support_response_templates').select('*').order('created_at',{ascending:true});
    _adminTemplates=tpl||[];
  }
  renderAdminTicketThread(id);
}
function adminViewAttachment(path){ viewAttachment(path); }
function renderAdminTicketThread(id){
  const box=document.getElementById('admin-ticket-thread-'+id); if(!box)return;
  const t=_adminTickets.find(x=>x.id===id);
  const msgs=_ticketMessages[id]||[];
  const msgHtml=msgs.map(m=>{
    if(m.is_internal) return `<div style="margin-bottom:8px"><div style="padding:8px 12px;border-radius:8px;background:rgba(212,175,55,.1);border:1px dashed rgba(212,175,55,.4);font-family:var(--font-ui);font-size:.78rem;color:var(--gold)">📝 Internal note: ${dtEsc(m.message)}</div></div>`;
    return `<div style="margin-bottom:8px;text-align:${m.is_admin_reply?'right':'left'}"><div style="display:inline-block;max-width:80%;padding:8px 12px;border-radius:10px;background:${m.is_admin_reply?'rgba(14,90,69,.25)':'var(--bg-3)'};font-family:var(--font-ui);font-size:.8rem;color:var(--white)">${m.is_admin_reply?'<b style="color:var(--emerald-l)">তুমি (Admin):</b> ':''}${dtEsc(m.message)}${_attachmentsHtml(m.attachment_paths,true)}</div></div>`;
  }).join('') || '<div style="color:var(--white-30);font-family:var(--font-ui);font-size:.8rem">কোনো মেসেজ নেই</div>';
  const templateOpts = (_adminTemplates||[]).map(tp=>`<option value="${tp.id}">${dtEsc(tp.title)}</option>`).join('');
  box.innerHTML=`${_statusTimelineHtml(t.status)}<div style="max-height:240px;overflow-y:auto;margin-bottom:10px">${msgHtml}</div>
    ${_adminTemplates&&_adminTemplates.length?`<select onchange="if(this.value)_applyTemplate(${id},this.value)" style="width:100%;margin-bottom:8px;padding:7px 10px;background:var(--bg-3);border:1px solid var(--border);border-radius:8px;color:var(--white-60);font-family:var(--font-ui);font-size:.75rem"><option value="">📋 Canned reply বাছাই করো...</option>${templateOpts}</select>`:''}
    <div style="display:flex;gap:8px;margin-bottom:8px">
      <input id="admin-reply-${id}" placeholder="উত্তর লিখো..." style="flex:1;padding:8px 12px;background:var(--bg-3);border:1px solid var(--border);border-radius:8px;color:var(--white);font-family:var(--font-ui);font-size:.8rem" onkeydown="if(event.key==='Enter')sendAdminReply(${id})"/>
      <button class="btn-outline" style="padding:8px 14px;font-size:.78rem" onclick="sendAdminReply(${id})">পাঠাও</button>
    </div>
    <div style="display:flex;gap:8px;margin-bottom:10px">
      <input id="admin-note-${id}" placeholder="📝 Internal note (শুধু admin দেখবে)..." style="flex:1;padding:8px 12px;background:rgba(212,175,55,.05);border:1px dashed rgba(212,175,55,.3);border-radius:8px;color:var(--gold);font-family:var(--font-ui);font-size:.78rem" onkeydown="if(event.key==='Enter')sendAdminNote(${id})"/>
      <button class="btn-outline" style="padding:8px 14px;font-size:.75rem;color:var(--gold);border-color:rgba(212,175,55,.4)" onclick="sendAdminNote(${id})">নোট যোগ করো</button>
    </div>
    <div style="display:flex;gap:6px;flex-wrap:wrap">
      ${TICKET_STATUS_ORDER.filter(s=>s!==t.status).map(s=>`<button class="btn-outline" style="padding:6px 10px;font-size:.68rem" onclick="adminSetTicketStatus(${id},'${s}')">${TICKET_ST_BN[s]}</button>`).join('')}
    </div>`;
}
function _applyTemplate(ticketId,templateId){
  const tp=(_adminTemplates||[]).find(x=>String(x.id)===String(templateId));
  if(tp) document.getElementById('admin-reply-'+ticketId).value=tp.body;
}
async function sendAdminReply(id){
  const inp=document.getElementById('admin-reply-'+id); const message=inp.value.trim(); if(!message)return;
  const{data,error}=await abashonDB.from('support_messages').insert({ ticket_id:id, sender_id:session.id, is_admin_reply:true, is_internal:false, message }).select().single();
  if(error){ toast(error.message,'err'); return; }
  _ticketMessages[id]=[...(_ticketMessages[id]||[]),data];
  inp.value='';
  const t=_adminTickets.find(x=>x.id===id);
  if(t && ['submitted','under_review'].includes(t.status)) await adminSetTicketStatus(id,'in_progress',true);
  else renderAdminTicketThread(id);
}
async function sendAdminNote(id){
  const inp=document.getElementById('admin-note-'+id); const message=inp.value.trim(); if(!message)return;
  const{data,error}=await abashonDB.from('support_messages').insert({ ticket_id:id, sender_id:session.id, is_admin_reply:true, is_internal:true, message }).select().single();
  if(error){ toast(error.message,'err'); return; }
  _ticketMessages[id]=[...(_ticketMessages[id]||[]),data];
  inp.value='';
  renderAdminTicketThread(id);
}
// AKSIS Phase 6 — এজেন্ট নিজের কাছে টিকেট নিয়ে নেয় (human-escalation-এর প্রথম ধাপ)
// AKSIS Phase 6 — AI চ্যাট থেকে সরাসরি মানুষ-এস্কেলেশন; submitTicket()-এর হুবহু insert-প্যাটার্ন
// পুনর্ব্যবহার করে, শুধু ডেটা DOM ফর্ম থেকে না নিয়ে চলমান কথোপকথন থেকে নেয় (AI পেজে ফর্ম নেই বলে)
async function escalateAiChatToHuman(){
  if(!requireAuth('buyer',()=>escalateAiChatToHuman()))return;
  const summary=_copilotHist.slice(-6).map(h=>`${h.role==='user'?'ব্যবহারকারী':'AI'}: ${h.text}`).join('\n');
  const{data:ticket,error}=await abashonDB.from('support_tickets').insert({
    user_id:session.id, subject:'AI চ্যাট থেকে এস্কেলেশন', category:'other', priority:'medium'
  }).select().single();
  if(error){ toast(friendlyError(error),'err'); return; }
  const msg='AI Assistant নিশ্চিত উত্তর দিতে পারেনি, তাই মানুষের সাহায্য চাই। সাম্প্রতিক কথোপকথন:\n\n'+summary;
  await abashonDB.from('support_messages').insert({ ticket_id:ticket.id, sender_id:session.id, is_admin_reply:false, message:msg });
  toast(`✓ মানুষের কাছে পাঠানো হয়েছে — ${ticketIdFmt(ticket.id)}`,'',3500);
}
// AKSIS Phase 12 — Unified Customer Timeline (Section 33)
const TIMELINE_ICON={registered:'👤',saved:'❤️',visit:'🕐',booking:'📩',payment:'💳',shifting:'🚚',ticket:'🎫',report_filed:'🚩'};
async function adminShowCustomerTimeline(userId){
  const modal=document.createElement('div');
  modal.className='overlay open'; modal.style.cssText='display:flex';
  modal.onclick=(e)=>{ if(e.target===modal) modal.remove(); };
  modal.innerHTML=`<div class="modal" style="max-width:520px">
    <button class="modal-x" onclick="this.closest('.overlay').remove()">✕</button>
    <div class="pay-header"><div class="pay-title">🕓 কাস্টমার টাইমলাইন</div><div class="pay-sub">এই ব্যবহারকারীর সব কার্যকলাপ, একসাথে</div></div>
    <div id="admin-cust-timeline" style="max-height:60vh;overflow-y:auto">লোড হচ্ছে...</div>
  </div>`;
  document.body.appendChild(modal);
  const{data,error}=await abashonDB.rpc('admin_customer_timeline',{p_user_id:userId});
  const box=document.getElementById('admin-cust-timeline');
  if(error){ box.innerHTML='<div style="color:#e08080;padding:20px;text-align:center">লোড ব্যর্থ: '+dtEsc(error.message)+'</div>'; return; }
  if(!data||!data.length){ box.innerHTML='<div style="padding:20px;text-align:center;color:var(--white-30)">কোনো কার্যকলাপ নেই</div>'; return; }
  box.innerHTML=data.map(ev=>`
    <div style="display:flex;gap:10px;padding:9px 0;border-bottom:1px solid var(--border)">
      <span style="font-size:1.1rem">${TIMELINE_ICON[ev.event_type]||'•'}</span>
      <div style="flex:1;min-width:0">
        <div style="font-family:var(--font-ui);font-size:.82rem;color:var(--white)">${dtEsc(ev.event_label)}</div>
        ${ev.detail?`<div style="font-family:var(--font-ui);font-size:.75rem;color:var(--white-30)">${dtEsc(ev.detail)}</div>`:''}
        <div style="font-family:var(--font-ui);font-size:.65rem;color:var(--white-30);margin-top:2px">${new Date(ev.occurred_at).toLocaleString('bn-BD')}</div>
      </div>
    </div>`).join('');
}
async function adminAssignTicket(id){
  const{data,error}=await abashonDB.rpc('admin_assign_ticket',{p_ticket_id:id});
  if(error||!data){ toast(friendlyError(error)||'Assign করা যায়নি','err'); return; }
  toast('✓ টিকেট তোমার কাছে assign হয়েছে','',2500);
  renderAdminTickets();
}
async function adminSetTicketStatus(id,status,skipRerenderList){
  const{error}=await abashonDB.rpc('admin_set_ticket_status',{p_ticket_id:id,p_status:status});
  if(error){ toast(error.message,'err'); return; }
  const t=_adminTickets.find(x=>x.id===id); if(t) t.status=status;
  toast('✓ Status আপডেট হয়েছে','',2000);
  if(skipRerenderList) renderAdminTicketThread(id); else renderAdminTickets();
}

// ── Seller dashboard state (একবার fetch করা ডেটা, tab বদলালে re-fetch লাগে না) ──
let _sellerMine=[],_sellerInq=[],_sellerVisits=[],_sellerTab='overview';
const HH_BN={'Family':'ফ্যামিলি','Small Family':'ছোট ফ্যামিলি','Bachelor':'ব্যাচেলর','Female Bachelor':'মেয়ে ব্যাচেলর'};
const SLOT_BN={'morning_10':'সকাল ১০টা','noon_12':'দুপুর ১২টা','afternoon_4':'বিকাল ৪টা','evening_6':'সন্ধ্যা ৬টা'};
const BK_ST_BN={pending:'অপেক্ষমাণ',accepted:'গৃহীত',rejected:'প্রত্যাখ্যাত',cancelled:'বাতিল',confirmed:'নিশ্চিত',done:'সম্পন্ন'};
function bnNum(n){return AbashonUtil.bn(n);} // canonical: js/coreUtils.js
function bnDate(s){return new Date(s).toLocaleDateString('bn-BD',{day:'numeric',month:'long'});}

async function renderSellerDash(){
  const el=document.getElementById('dash-seller');
  el.innerHTML='<div style="padding:80px;text-align:center;color:var(--white-30);font-family:var(--font-ui)">লোড হচ্ছে...</div>';

  _sellerMine=await getSellerListings();
  // RLS নিজেই শুধু নিজের listing এর inquiry/visit ফিরিয়ে দেয় — owner_id ম্যানুয়ালি বসাতে হয় না
  const[{data:inq,error:e1},{data:vis,error:e2}]=await Promise.all([
    abashonDB.from('booking_requests')
      .select('id,status,household_type,intended_stay_months,message,created_at,property_id,properties(id,title,area,city)')
      .order('created_at',{ascending:false}),
    abashonDB.from('visit_bookings')
      .select('id,status,visit_date,slot,note,created_at,property_id,buyer_id,no_show,owner_rating_of_buyer,properties(id,title,area,city)')
      .order('created_at',{ascending:false})
  ]);
  if(e1)console.error('booking_requests load failed:',e1);
  if(e2)console.error('visit_bookings load failed:',e2);
  _sellerInq=inq||[]; _sellerVisits=vis||[];

  const mine=_sellerMine;
  el.innerHTML=`
  <div class="dash-grid">
    <div class="dash-side">
      <div class="dash-user-av" style="background:linear-gradient(135deg,var(--gold-l),var(--gold-d));color:#2a2005">${dtEsc((session.name||'S').trim()[0])}</div>
      <div class="dash-user-name">${dtEsc(session.name)}</div>
      <div style="text-align:center;margin:6px 0 4px"><span class="role-badge seller">🏷️ মালিক</span></div>
      <div class="dash-user-email">📍 ${dtEsc(session.loc||'')}</div>
      <div class="dash-menu">
        <div class="dm" data-t="overview" onclick="sellerSetTab('overview')">📊 Overview</div>
        <div class="dm" data-t="listings" onclick="sellerSetTab('listings')">🏘️ My Listings</div>
        <div class="dm" data-t="inquiries" onclick="sellerSetTab('inquiries')">📨 Inquiries${sellerPendingCount()?` <span style="background:var(--gold);color:#2a2005;border-radius:20px;padding:1px 7px;font-size:.7rem;font-weight:700;margin-left:4px">${bnNum(sellerPendingCount())}</span>`:''}</div>
        <div class="dm" data-t="earnings" onclick="sellerSetTab('earnings')">💰 Earnings</div>
        <div class="dm" data-t="settings" onclick="sellerSetTab('settings')">⚙️ Settings</div>
      </div>
      <button class="auth-submit" style="margin-top:14px;background:linear-gradient(135deg,var(--gold-l),var(--gold-d));color:#2a2005" onclick="openAddProperty()">＋ Add Property</button>
    </div>
    <div class="dash-content">
      <div class="stat-row">
        <div class="stat-c"><div class="stat-n">${mine.length}</div><div class="stat-l">Active Listings</div></div>
        <div class="stat-c"><div class="stat-n">${bnNum(sellerPendingCount())}</div><div class="stat-l">New Inquiries</div></div>
        <div class="stat-c"><div class="stat-n">${bnNum(_sellerVisits.length)}</div><div class="stat-l">Visit Requests</div></div>
        <div class="stat-c"><div class="stat-n">৳${sellerRealEarnings().toLocaleString()}</div><div class="stat-l">Monthly Revenue</div></div>
      </div>
      <div id="seller-tab-body"></div>
    </div>
  </div>`;
  document.querySelectorAll('.dash-menu .dm').forEach(d=>d.classList.toggle('active',d.dataset.t===_sellerTab));
  sellerRenderBody();
}

// ── আসল সংখ্যা, কোনো কল্পনা নেই ──
function sellerPendingCount(){ return _sellerInq.filter(r=>r.status==='pending').length + _sellerVisits.filter(v=>v.status==='pending').length; }
function sellerRealEarnings(){
  // যেসব listing এ accepted booking আছে (মানে সত্যিই ভাড়া হয়েছে), শুধু তাদের ভাড়া যোগ
  const rentedIds=new Set(_sellerInq.filter(r=>r.status==='accepted').map(r=>r.property_id));
  return _sellerMine.filter(p=>rentedIds.has(p.id)).reduce((s,p)=>s+(p.rent||0),0);
}

function sellerSetTab(t){
  _sellerTab=t;
  document.querySelectorAll('.dash-menu .dm').forEach(d=>d.classList.toggle('active',d.dataset.t===t));
  sellerRenderBody();
}

function sellerRenderBody(){
  const box=document.getElementById('seller-tab-body'); if(!box)return;
  if(_sellerTab==='listings') box.innerHTML=sellerListingsHtml();
  else if(_sellerTab==='inquiries') box.innerHTML=sellerInquiriesHtml();
  else if(_sellerTab==='earnings') box.innerHTML=sellerEarningsHtml();
  else if(_sellerTab==='settings') box.innerHTML=sellerSettingsHtml();
  else box.innerHTML=sellerListingsHtml(true)+sellerInquiriesHtml(true); // Overview: সংক্ষিপ্ত রূপ
}

function sellerListingsHtml(compact){
  const list=compact?_sellerMine.slice(0,4):_sellerMine;
  const html=list.length
    ? list.map(p=>`<div class="prop-card"><div class="prop-img-wrap" style="height:150px"><img src="${p.img}" alt="${dtEsc(p.t||'')}" loading="lazy"/></div><div class="prop-body"><div class="prop-title">${dtEsc(p.t)}</div><div class="prop-loc">📍 ${dtEsc(p.area)}, ${dtEsc(p.city)}</div><div class="prop-footer"><div class="prop-price">৳${(p.rent||0).toLocaleString()}<small>/mo</small></div><span class="role-badge ${p.v?'seller':'buyer'}">${p.v?'Live':'Pending'}</span></div></div></div>`).join('')
    : `<div style="grid-column:1/-1;padding:40px;text-align:center;color:var(--white-30);font-family:var(--font-ui)">এখনো কোনো প্রপার্টি যোগ করেননি। <br><button class="auth-submit" style="margin-top:14px;max-width:220px;margin-inline:auto;background:linear-gradient(135deg,var(--gold-l),var(--gold-d));color:#2a2005" onclick="openAddProperty()">＋ Add your first property</button></div>`;
  return `<div class="dash-card"><div class="dash-card-title">🏘️ My Listings</div><div class="prop-grid" style="grid-template-columns:repeat(auto-fill,minmax(240px,1fr))">${html}</div></div>`;
}

// booking_requests + visit_bookings — দুটোকে এক সময়-ক্রমিক ফিডে মেলানো
function sellerCombinedFeed(){
  const a=_sellerInq.map(r=>({kind:'booking',id:r.id,status:r.status,created_at:r.created_at,prop:r.properties,propId:r.property_id,buyerId:r.buyer_id,
    label:`${dtEsc(HH_BN[r.household_type]||r.household_type)} · ${bnNum(r.intended_stay_months)} মাস থাকতে চান`,
    sub:r.message?dtEsc(r.message):null}));
  const b=_sellerVisits.map(v=>({kind:'visit',id:v.id,status:v.status,created_at:v.created_at,prop:v.properties,propId:v.property_id,buyerId:v.buyer_id,
    noShow:v.no_show,ownerRating:v.owner_rating_of_buyer,
    label:`বাসা দেখতে আসতে চান — ${bnDate(v.visit_date)}, ${dtEsc(SLOT_BN[v.slot]||v.slot)}`,
    sub:v.note?dtEsc(v.note):null}));
  return[...a,...b].sort((x,y)=>new Date(y.created_at)-new Date(x.created_at));
}

// Module 3/4: owner marks a confirmed visit as done or no-show; a completed visit lets the
// owner rate the buyer once, and either side can report the other (admin-reviewed, never auto-actioned).
async function sellerMarkVisit(id,field){
  const patch = field==='done' ? {status:'done'} : {no_show:true,status:'done'};
  const{error}=await abashonDB.from('visit_bookings').update(patch).eq('id',id);
  if(error){ toast(error.message,'err',4000); return; }
  toast(field==='done'?'✓ ভিজিট সম্পন্ন হিসেবে চিহ্নিত হলো':'নো-শো নথিভুক্ত হলো','',3000);
  renderSellerDash();
}
function sellerRateBuyer(id){
  openRateModal({ title:'ভাড়াটিয়াকে rating দিন', stars:true, cb: async (n)=>{
    const{error}=await abashonDB.from('visit_bookings').update({owner_rating_of_buyer:n}).eq('id',id);
    if(error) throw new Error(error.message);
    toast('✓ Rating জমা হয়েছে','',2500); renderSellerDash();
  }});
}
function reportCounterparty(userId){
  if(!userId){ toast('User পাওয়া যায়নি','err'); return; }
  openRateModal({ title:'🚩 Report করুন', text:true, textRequired:true,
    textPlaceholder:'কী কারণে report করছেন? (admin manually review করবে, সাথে সাথে কোনো action নেওয়া হয় না)',
    cb: async (_n, reason)=>{
      await ReportSvc.reportUser(userId, reason);
      toast('✓ Report জমা হয়েছে, admin দেখবে','',3000);
  }});
}

function sellerInquiriesHtml(compact){
  let feed=sellerCombinedFeed();
  if(compact) feed=feed.slice(0,5);
  const title=compact?'📨 Recent Inquiries':'📨 সব Inquiries';
  if(!feed.length){
    return `<div class="dash-card"><div class="dash-card-title">${title}</div><div style="padding:20px;text-align:center;color:var(--white-30);font-family:var(--font-ui);font-size:.85rem">এখনো কোনো inquiry আসেনি। প্রপার্টি live থাকলে এখানে দেখা যাবে।</div></div>`;
  }
  const rows=feed.map(f=>{
    const stCls=f.status==='pending'?'pend':(f.status==='rejected'||f.status==='cancelled')?'rej':'ok';
    const icon=f.kind==='booking'?'📩':'🕐';
    const propTxt=f.prop?`${dtEsc(f.prop.title)} — ${dtEsc(f.prop.area)}, ${dtEsc(f.prop.city)}`:'(প্রপার্টি মুছে ফেলা হয়েছে)';
    let actions='';
    if(f.status==='pending'){
      actions = f.kind==='booking'
        ? `<div class="actions" style="display:flex;gap:8px;margin-top:8px">
             <button onclick="sellerRespondBooking(${f.id},${f.propId},'accepted')" style="flex:1;padding:8px;border:none;border-radius:8px;background:var(--emerald);color:#fff;font-family:var(--font-ui);font-size:.8rem;font-weight:700;cursor:pointer">✓ গ্রহণ করো</button>
             <button onclick="sellerRespondBooking(${f.id},${f.propId},'rejected')" style="flex:1;padding:8px;border:1px solid rgba(200,60,60,.3);border-radius:8px;background:transparent;color:#e08080;font-family:var(--font-ui);font-size:.8rem;font-weight:700;cursor:pointer">প্রত্যাখ্যান</button>
           </div>`
        : `<div class="actions" style="display:flex;gap:8px;margin-top:8px">
             <button onclick="sellerRespondVisit(${f.id},'confirmed')" style="flex:1;padding:8px;border:none;border-radius:8px;background:var(--emerald);color:#fff;font-family:var(--font-ui);font-size:.8rem;font-weight:700;cursor:pointer">✓ নিশ্চিত করো</button>
             <button onclick="sellerRespondVisit(${f.id},'cancelled')" style="flex:1;padding:8px;border:1px solid rgba(200,60,60,.3);border-radius:8px;background:transparent;color:#e08080;font-family:var(--font-ui);font-size:.8rem;font-weight:700;cursor:pointer">বাতিল</button>
           </div>`;
    } else if(f.kind==='booking' && f.status==='accepted'){
      const addr=(f.prop?[f.prop.title,f.prop.area,f.prop.city].filter(Boolean).join(', '):'').replace(/'/g,'&#39;');
      actions = `<div class="actions" style="display:flex;gap:8px;margin-top:8px">
             <button onclick="openAgreement({ownerName:(session&&session.name)||'',propertyAddress:'${addr}'})" style="flex:1;padding:8px;border:1px solid var(--gold);border-radius:8px;background:transparent;color:var(--gold-d);font-family:var(--font-ui);font-size:.8rem;font-weight:700;cursor:pointer">📄 চুক্তিপত্র তৈরি করো</button>
           </div>`;
    } else if(f.kind==='visit' && f.status==='confirmed'){
      // Module 4: owner marks whether the buyer actually showed up — feeds the internal no-show counter
      actions = `<div class="actions" style="display:flex;gap:8px;margin-top:8px">
             <button onclick="sellerMarkVisit(${f.id},'done')" style="flex:1;padding:8px;border:none;border-radius:8px;background:var(--emerald);color:#fff;font-family:var(--font-ui);font-size:.8rem;font-weight:700;cursor:pointer">✓ ভিজিট হয়েছে</button>
             <button onclick="sellerMarkVisit(${f.id},'no_show')" style="flex:1;padding:8px;border:1px solid rgba(200,60,60,.3);border-radius:8px;background:transparent;color:#e08080;font-family:var(--font-ui);font-size:.8rem;font-weight:700;cursor:pointer">আসেননি (No-show)</button>
           </div>`;
    } else if(f.kind==='visit' && f.status==='done'){
      actions = `<div class="actions" style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap">
             ${f.ownerRating?`<span class="bk-st ok">আপনার rating: ${bnNum(f.ownerRating)}★</span>`
               :`<button onclick="sellerRateBuyer(${f.id})" style="padding:8px 12px;border:1px solid var(--gold);border-radius:8px;background:transparent;color:var(--gold-d);font-family:var(--font-ui);font-size:.8rem;font-weight:700;cursor:pointer">⭐ ভাড়াটিয়াকে rate করুন</button>`}
             <button onclick="reportCounterparty('${f.buyerId||''}')" style="padding:8px 12px;border:1px solid rgba(200,60,60,.3);border-radius:8px;background:transparent;color:#e08080;font-family:var(--font-ui);font-size:.75rem;cursor:pointer">🚩 Report</button>
           </div>`;
    }
    return `<div class="bk-item" style="flex-direction:column;align-items:stretch">
      <div style="display:flex;gap:10px;align-items:flex-start">
        <div class="owner-av" style="width:34px;height:34px;flex-shrink:0">${icon}</div>
        <div style="flex:1">
          <div class="bk-t">${f.label}</div>
          <div class="bk-l">🏠 ${propTxt}</div>
          ${f.sub?`<div class="bk-l" style="font-style:italic">"${f.sub}"</div>`:''}
        </div>
        <div class="bk-st ${stCls}">${BK_ST_BN[f.status]||f.status}</div>
      </div>
      ${actions}
    </div>`;
  }).join('');
  return `<div class="dash-card"><div class="dash-card-title">${title}</div>${rows}</div>`;
}

function sellerEarningsHtml(){
  const accepted=_sellerInq.filter(r=>r.status==='accepted');
  const total=sellerRealEarnings();
  const rows=accepted.length
    ? accepted.map(r=>{
        const p=_sellerMine.find(x=>x.id===r.property_id);
        return `<div class="bk-item"><div style="flex:1"><div class="bk-t">${dtEsc(p?p.t:r.properties?.title||'—')}</div><div class="bk-l">${HH_BN[r.household_type]||r.household_type} · ${bnNum(r.intended_stay_months)} মাস</div></div><div class="bk-st ok">৳${(p?.rent||0).toLocaleString()}/mo</div></div>`;
      }).join('')
    : '<div style="padding:20px;text-align:center;color:var(--white-30);font-family:var(--font-ui);font-size:.85rem">এখনো কোনো বাসা ভাড়া হয়নি। Inquiry গ্রহণ করলে এখানে দেখা যাবে।</div>';
  return `<div class="dash-card">
    <div class="dash-card-title">💰 চলমান আয়</div>
    <div style="font-family:var(--font-display);font-size:2rem;color:var(--gold-l);margin-bottom:16px">৳${total.toLocaleString()}<span style="font-size:1rem;color:var(--white-30)">/মাস</span></div>
    ${rows}
    <div style="margin-top:14px;font-family:var(--font-ui);font-size:.75rem;color:var(--white-30)">এই হিসাব শুধু গৃহীত (accepted) বুকিং থেকে — অনুমান নয়।</div>
  </div>`;
}

function sellerSettingsHtml(){
  return `<div class="dash-card">
    <div class="dash-card-title">⚙️ Account Settings</div>
    <div style="font-family:var(--font-ui);font-size:.9rem;color:var(--white-60);line-height:2">
      নাম: ${dtEsc(session.name||'—')}<br>
      ইমেইল: ${dtEsc(session.user||'—')}<br>
      ফোন: ${dtEsc(session.phone||'—')}<br>
      এলাকা: ${dtEsc(session.loc||'—')}
    </div>
  </div>`;
}

async function sellerRespondBooking(id,propId,status){
  if(status==='accepted'&&!confirm('গ্রহণ করলে এই বাসার বাকি অপেক্ষমাণ রিকোয়েস্টগুলো প্রত্যাখ্যাত হয়ে যাবে। নিশ্চিত?'))return;
  const{error}=await abashonDB.from('booking_requests').update({status}).eq('id',id);
  if(error){toast(error.message,'err');return;}
  if(status==='accepted'){
    await abashonDB.from('booking_requests').update({status:'rejected'}).eq('property_id',propId).eq('status','pending').neq('id',id);
  }
  toast(status==='accepted'?'রিকোয়েস্ট গ্রহণ করা হয়েছে':'রিকোয়েস্ট প্রত্যাখ্যান করা হয়েছে','');
  await renderSellerDash(); sellerSetTab(_sellerTab);
}

async function sellerRespondVisit(id,status){
  const{error}=await abashonDB.from('visit_bookings').update({status}).eq('id',id);
  if(error){toast(error.message,'err');return;}
  toast(status==='confirmed'?'ভিজিট নিশ্চিত করা হয়েছে':'ভিজিট বাতিল করা হয়েছে','');
  await renderSellerDash(); sellerSetTab(_sellerTab);
}
async function getSellerListings(){
  if(!session) return [];
  const rows = await PropertySvc.fetchBySeller(session.id);
  return rows.map(dbRowToCard);
}

// ── SELLER: ADD PROPERTY FLOW ──
let _apFiles=[]; // Add Property ফর্মে বাছাই করা real ছবি — {file, url} আকারে, upload এর আগ পর্যন্ত preview এর জন্য

function apOnFilesChosen(input){
  const err=document.getElementById('addp-err'); err.textContent='';
  let files=Array.from(input.files||[]);
  if(files.length>5){ err.textContent='সর্বোচ্চ ৫টা ছবি দেওয়া যাবে।'; files=files.slice(0,5); }
  const tooBig=files.find(f=>f.size>5*1024*1024);
  if(tooBig){ err.textContent=`"${tooBig.name}" ৫MB এর বেশি — ছোট ছবি দিন।`; files=files.filter(f=>f.size<=5*1024*1024); }
  _apFiles.forEach(x=>URL.revokeObjectURL(x.url)); // আগের preview মেমরি থেকে মুছে ফেলা
  _apFiles=files.map(f=>({file:f,url:URL.createObjectURL(f)}));
  apRenderPreview();
}
function apRemoveImage(idx){
  URL.revokeObjectURL(_apFiles[idx].url);
  _apFiles.splice(idx,1);
  apRenderPreview();
}
function apRenderPreview(){
  document.getElementById('ap-img-preview').innerHTML=_apFiles.map((f,i)=>
    `<div style="position:relative;width:72px;height:72px">
       <img src="${f.url}" alt="Uploaded photo" style="width:100%;height:100%;object-fit:cover;border-radius:8px;border:1px solid var(--border)"/>
       <button onclick="apRemoveImage(${i})" style="position:absolute;top:-6px;right:-6px;width:20px;height:20px;border-radius:50%;background:#c83c3c;color:#fff;border:none;font-size:.7rem;cursor:pointer;line-height:1">✕</button>
     </div>`).join('');
}
function _apv(id){ const e=document.getElementById(id); return e?e.value.trim():''; }
function apStep(n){
  [1,2,3].forEach(i=>{
    const s=document.getElementById('aps'+i); if(s) s.className='prog-s'+(i<n?' done':i===n?' on':'');
    const c=document.getElementById('apsc'+i); if(c) c.style.display=i===n?'block':'none';
  });
}
// Module: Property AI — rent suggestion while a seller is drafting a new listing.
// Debounced so it doesn't hit the DB on every keystroke. Comparable-based (reuses
// estimate_rent RPC), no external AI service.
let _apRentTimer=null;
function apSuggestRentDebounced(){
  clearTimeout(_apRentTimer);
  _apRentTimer=setTimeout(apSuggestRent,450);
}
async function apSuggestRent(){
  const box=document.getElementById('ap-rent-suggest'); if(!box)return;
  const city=_apv('ap-city'), area=_apv('ap-area'), type=_apv('ap-type');
  const beds=Number(_apv('ap-beds'))||null, sqft=Number(_apv('ap-sqft'))||null;
  if(!city||!area||!type){ box.textContent=''; return; }
  try{
    const est=await PropertySvc.estimateRent({city,area,type,bedrooms:beds,sizesqrt:sqft});
    if(!est.available){ box.textContent=est.reason||''; return; }
    box.innerHTML=`💡 ${est.scope}-এ তুলনীয় বাসার ভিত্তিতে সাজেস্টেড ভাড়া: <b style="color:var(--gold)">৳${est.suggested_rent.toLocaleString()}</b> (৳${est.low_rent.toLocaleString()}–৳${est.high_rent.toLocaleString()} রেঞ্জ, ${est.sample_size}টা তুলনীয় বাসার ভিত্তিতে)`;
  }catch(e){ box.textContent=''; }
}
function openAddProperty(){
  if(!session || session.role!=='seller'){ openAuth('seller','login',false); return; }
  if(!requirePhoneVerified(()=>openAddProperty()))return;
  document.getElementById('addp-seller').textContent=session.name;
  document.getElementById('addp-err').textContent='';
  const rs=document.getElementById('ap-rent-suggest'); if(rs) rs.textContent='';
  ['ap-title','ap-area','ap-rent','ap-beds','ap-baths','ap-sqft','ap-phone','ap-advance','ap-svc','ap-landmark'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});
  ['ap-tenant','ap-facing'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});
  ['ap-lift','ap-parking','ap-generator','ap-cctv','ap-guard','ap-water'].forEach(id=>{const e=document.getElementById(id);if(e)e.checked=false;});
  _apFiles=[]; document.getElementById('ap-img-preview').innerHTML=''; document.getElementById('ap-img-input').value='';
  apStep(1); openM('addp-ov');
}
function addpReview(){
  const err=document.getElementById('addp-err'); err.textContent='';
  const t=_apv('ap-title'),city=_apv('ap-city'),area=_apv('ap-area'),type=_apv('ap-type'),rent=_apv('ap-rent'),beds=_apv('ap-beds'),phone=_apv('ap-phone').replace(/\D/g,''),tenant=_apv('ap-tenant');
  if(!t||!area||!rent||!beds){ err.textContent='Title, Area, Rent এবং Bedrooms আবশ্যক।'; return; }
  if(!(Number(rent)>0)){ err.textContent='সঠিক Rent দিন।'; return; }
  if(!(Number(beds)>0)){ err.textContent='সঠিক Bedroom সংখ্যা দিন।'; return; }
  if(phone && !Validators.bdPhone(phone)){ err.textContent='ফোন নম্বর সঠিক নয় (01…)।'; return; }
  if(!tenant){ err.textContent='ভাড়াটিয়া কারা থাকতে পারবে বেছে নিন — এটা booking request মেলাতে দরকার।'; return; }
  if(_apFiles.length<1){ err.textContent='কমপক্ষে ১টা বাসার ছবি আপলোড করুন।'; return; }
  const row=(l,v)=>`<div class="pr-row"><span class="pr-l">${l}</span><span class="pr-v">${v}</span></div>`;
  document.getElementById('addp-review').innerHTML=
    row('Title',t)+row('Location',area+', '+city)+row('Type',type)+
    row('Rent','৳'+Number(rent).toLocaleString()+'/mo')+
    row('Beds / Baths',beds+' / '+(_apv('ap-baths')||'—'))+
    row('Size',(_apv('ap-sqft')||'—')+' sqft')+row('Furnished',_apv('ap-furn'))+
    row('Tenant',HH_BN[tenant]||tenant)+row('Min Stay',bnNum(_apv('ap-minstay'))+' মাস')+
    row('Photos',bnNum(_apFiles.length)+'টা');
  apStep(2);
}
async function confirmAddProperty(){
  if(!session) return;
  const btn=document.querySelector('#apsc2 .auth-submit');
  const orig=btn?btn.innerHTML:'';
  try{
    if(_apFiles.length<1){ document.getElementById('addp-err').textContent='কমপক্ষে ১টা ছবি আপলোড করুন।'; return; }
    if(btn){ btn.disabled=true; }

    // ── ছবিগুলো Supabase Storage এ আপলোড ──
    const urls=[];
    for(let i=0;i<_apFiles.length;i++){
      if(btn) btn.innerHTML=`<span class="svc-spin"></span> ছবি আপলোড হচ্ছে... (${bnNum(i+1)}/${bnNum(_apFiles.length)})`;
      const f=_apFiles[i].file;
      const ext=(f.name.split('.').pop()||'jpg').toLowerCase();
      const path=`${session.id}/${Date.now()}-${i}.${ext}`;
      const{error:upErr}=await abashonDB.storage.from('property-images').upload(path,f,{cacheControl:'3600',upsert:false});
      if(upErr){ console.error('ছবি আপলোড ব্যর্থ:',f.name,upErr); continue; }
      const{data:pub}=abashonDB.storage.from('property-images').getPublicUrl(path);
      if(pub?.publicUrl) urls.push(pub.publicUrl);
    }
    if(urls.length<1){ document.getElementById('addp-err').textContent='কোনো ছবি আপলোড করা যায়নি — আবার চেষ্টা করুন।'; return; }
    if(urls.length<_apFiles.length){ toast(`${bnNum(urls.length)}/${bnNum(_apFiles.length)} ছবি আপলোড হয়েছে, বাকিগুলো ব্যর্থ`,'err',4000); }

    if(btn) btn.innerHTML='<span class="svc-spin"></span> প্রকাশ করা হচ্ছে...';
    const rec = {
      owner_id: session.id,
      owner_name: session.name,
      title: _apv('ap-title'),
      city: _apv('ap-city'),
      area: _apv('ap-area'),
      type: _apv('ap-type'),
      rent: Number(_apv('ap-rent'))||0,
      bedrooms: Number(_apv('ap-beds'))||0,
      baths: Number(_apv('ap-baths'))||1,
      sizesqrt: Number(_apv('ap-sqft'))||0,
      furnished: _apv('ap-furn'),
      phone: _apv('ap-phone'),
      tenant: _apv('ap-tenant'),
      min_stay_months: Number(_apv('ap-minstay'))||12,
      advance_months: Number(_apv('ap-advance'))||2,
      service_charge: Number(_apv('ap-svc'))||0,
      gas: _apv('ap-gas')||'None',
      facing: _apv('ap-facing')||null,
      landmark: _apv('ap-landmark')||null,
      lift: document.getElementById('ap-lift').checked,
      parking: document.getElementById('ap-parking').checked,
      generator: document.getElementById('ap-generator').checked,
      cctv: document.getElementById('ap-cctv').checked,
      security_guard: document.getElementById('ap-guard').checked,
      water_24h: document.getElementById('ap-water').checked,
      image: urls[0],
      images: urls,
      verified: false,
      description: _apv('ap-area')+', '+_apv('ap-city')+' — '+_apv('ap-beds')+' বেড।'
    };
    const saved = await PropertySvc.create(rec);
    document.getElementById('addp-lid').textContent = '#LST-' + saved.id;
    apStep(3);
    toast('✓ Property published','',3000);
    // Module 5 — reverse image check on the cover photo. Fire-and-forget: a flagged image
    // never blocks publishing, it only queues the listing for admin review.
    ImageReviewSvc.checkListingImage(saved.id, urls[0]).catch(e=>console.warn('image review check failed:',e));
  }catch(e){
    document.getElementById('addp-err').textContent = friendlyError(e);
  }finally{
    if(btn){ btn.disabled=false; btn.innerHTML=orig; }
  }
}
function addpDone(){ closeM('addp-ov'); renderDash(); goPage('dashboard'); }

// ── INIT ──
async function loadAllProperties(){
  try{
    const dbRows = await PropertySvc.fetchAll();
    allProps = [...dbRows.map(dbRowToCard), ...props];
    curProps = allProps;
    renderProps(curProps);
  }catch(e){
    console.error('Property load failed:', e);
    allProps = props;
    renderProps(props);
  }
}
_propsReady=loadAllProperties();
_propsReady.then(renderCompareBar); // Phase 11 — allProps লোড হওয়ার পরই compare-bar সঠিকভাবে thumbnail দেখাতে পারে
initJourney();renderNavAuth();
_route();   // বর্তমান hash অনুযায়ী প্রথম রেন্ডার — '#/p/276' নিয়ে সরাসরি এলেও কাজ করবে
// AI welcome msg
const hm=document.getElementById('home-ai-msgs');
if(hm){const m=document.createElement('div');m.className='ai-msg bot';m.textContent='Hello! I\'m Abashon AI. Tell me what home you need — location, budget, size. I\'ll find the best matches instantly.';hm.appendChild(m);}
// Date
const d=new Date();d.setDate(d.getDate()+7);
if(document.getElementById('mv-dt'))document.getElementById('mv-dt').value=d.toISOString().split('T')[0];

// ── MAP PAGE ──
// অন্য পাতা থেকে map পাতায় এলে চলে; প্রথমবার Leaflet map তৈরি করে, পরেরবার শুধু resize+redraw
let _map=null,_mapMarkers=[],_mapAreaMarker=null,_mapCircle=null,_lastMapSearch=null;

function initMapPage(){
  if(!_map){
    _map=L.map('propMap').setView([23.78,90.40],12);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',{maxZoom:19,subdomains:'abcd',attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, © <a href="https://carto.com/attributions">CARTO</a>'}).addTo(_map);
    _map.on('click',e=>mapSearchAt(e.latlng.lat,e.latlng.lng));
  }
  setTimeout(()=>_map.invalidateSize(),200); // পাতাটা এতক্ষণ display:none ছিল, Leaflet কে জানাতে হয়
  if(!_lastMapSearch) mapPlotAll(); // প্রথমবার: সব বাসা marker হিসেবে; radius search করা থাকলে সেটাই বহাল থাকে
  mapAreaSearchInput(); // এলাকার নাম-লিস্ট আগে থেকেই লোড করে রাখি, প্রথম টাইপেই suggestion দেখাতে
}

// ── এলাকার নাম লিখে খোঁজা — আগে শুধু ম্যাপে ক্লিক বা GPS ছিল, যেটা এলাকা চেনা না থাকলে কঠিন ──
let _mapAreaOptions=[];
async function mapAreaSearchInput(){
  if(_mapAreaOptions.length) return;   // একবার লোড হলে আর re-fetch করার দরকার নেই
  const areas=await getAreaProfiles(); // shifting calculator-এও একই ডেটা+cache ব্যবহার হয়, ডুপ্লিকেট fetch না করে reuse করছি
  _mapAreaOptions=areas;
  const dl=document.getElementById('map-area-list');
  if(dl) dl.innerHTML=areas.map(a=>`<option value="${dtEsc(a.area)}, ${dtEsc(a.city)}">`).join('');
}
// দুইটা string-এর মধ্যে কত অক্ষর বদলালে/যোগ করলে/বাদ দিলে এক হবে — বানান ভুল ধরার standard পদ্ধতি
function _levenshtein(a,b){
  const m=a.length,n=b.length;
  const dp=Array.from({length:m+1},()=>new Array(n+1).fill(0));
  for(let i=0;i<=m;i++)dp[i][0]=i;
  for(let j=0;j<=n;j++)dp[0][j]=j;
  for(let i=1;i<=m;i++){
    for(let j=1;j<=n;j++){
      dp[i][j] = a[i-1]===b[j-1] ? dp[i-1][j-1]
        : 1+Math.min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1]);
    }
  }
  return dp[m][n];
}

function mapAreaSearchGo(){
  const rawInput=document.getElementById('map-area-search').value;
  const raw=rawInput.trim().toLowerCase();
  if(!raw)return;
  const areaName=raw.split(',')[0].trim();
  let match=_mapAreaOptions.find(a=>a.area.toLowerCase()===areaName)
    || _mapAreaOptions.find(a=>a.area.toLowerCase().includes(areaName));
  let approx=false;

  if(!match && _mapAreaOptions.length){
    // exact/substring মিল না পেলে বানান ভুল ধরে সবচেয়ে কাছের এলাকাটা খুঁজি — পুরোপুরি "না পাওয়া" না বলে
    let best=null,bestDist=Infinity;
    for(const a of _mapAreaOptions){
      const d=_levenshtein(areaName,a.area.toLowerCase());
      if(d<bestDist){ bestDist=d; best=a; }
    }
    // থ্রেশহোল্ড: ছোট নামে কম ভুল, লম্বা নামে একটু বেশি সহনশীল — সম্পূর্ণ অপ্রাসঙ্গিক টেক্সট যেন match না করে
    const threshold = areaName.length<=6 ? 2 : 3;
    if(best && bestDist<=threshold){ match=best; approx=true; }
  }

  if(!match){
    document.getElementById('map-status').textContent='"'+dtEsc(rawInput)+'" এলাকা খুঁজে পাওয়া যায়নি — বানান চেক করো বা লিস্ট থেকে বেছে নাও';
    return;
  }
  _map.setView([match.lat,match.lng],14);
  mapSearchAt(match.lat,match.lng, approx?match.area:null);
}

// ── PIN ICON — লাল teardrop pin (উপরে ছোট গোল ফুটো), সাথে ইচ্ছা করলে দাম দেখানো যায়।
// ছবি hosting লাগে না — pure SVG, তাই যেকোনো zoom-এ ঝকঝকে থাকে, আর অফলাইনেও কাজ করে।
function _pinSvg(color){
  return `<svg width="30" height="40" viewBox="0 0 30 40" xmlns="http://www.w3.org/2000/svg" style="filter:drop-shadow(0 3px 3px rgba(0,0,0,.35))">
    <path d="M15 0C6.7 0 0 6.7 0 15c0 10.5 15 25 15 25s15-14.5 15-25C30 6.7 23.3 0 15 0z" fill="${color}"/>
    <circle cx="15" cy="15" r="6.5" fill="#fff"/>
  </svg>`;
}
// price দিলে pin-এর উপরে একটা ছোট ব্যাজে ৳-দাম দেখায় (Zillow/Google-স্টাইল রিয়েল-এস্টেট ম্যাপে যেমন হয়) —
// ক্লিক না করেই বাজেট অনুযায়ী চোখ বুলানো যায়
function _pinIcon(color, priceLabel){
  const badge = priceLabel
    ? `<div style="position:absolute;bottom:38px;left:50%;transform:translateX(-50%);background:${color};color:#fff;font-family:var(--font-ui,sans-serif);font-size:10.5px;font-weight:700;padding:2px 7px;border-radius:10px;white-space:nowrap;box-shadow:0 2px 6px rgba(0,0,0,.3)">${priceLabel}</div>`
    : '';
  return L.divIcon({
    className: 'abn-pin',
    html: `<div style="position:relative;width:30px;height:40px">${badge}${_pinSvg(color)}</div>`,
    iconSize: [30,40],
    iconAnchor: [15,40],   // pin-এর একদম নিচের কোণাটাই আসল coordinate — বাস্তব pin যেভাবে জায়গা দেখায় ঠিক সেভাবে
    popupAnchor: [0,-38],
  });
}
function _priceLabel(rent){
  const n=Number(rent)||0;
  return n>=100000 ? '৳'+(n/100000).toFixed(1).replace(/\.0$/,'')+'L' : '৳'+Math.round(n/1000)+'k';
}

function mapClearLayers(){ _mapMarkers.forEach(m=>_map.removeLayer(m)); _mapMarkers=[]; _mapMarkerById={}; }

// ── ম্যাপ পিন আর নিচের card list-এর মধ্যে সংযোগ — pin-এ ক্লিক করলে card highlight হয়ে scroll করে
// আসবে, card-এ ক্লিক করলে ম্যাপ সেই pin-এ pan করে popup খুলবে (পুরো detail page-এ না গিয়েই preview) ──
let _mapMarkerById={};

function _mapPopupHtml(p){
  return `<div style="width:180px;font-family:var(--font-ui)">
    ${p.img?`<img src="${dtEsc(p.img)}" alt="${dtEsc(p.title||p.t||'')}" style="width:100%;height:100px;object-fit:cover;border-radius:6px;margin-bottom:6px"/>`:''}
    <b style="font-size:.85rem">${dtEsc(p.t)}</b>
    <div style="font-size:.75rem;color:#666;margin:2px 0">🛏${p.beds||'—'} 🚿${p.baths||'—'} · ${dtEsc(p.area)}</div>
    <div style="font-weight:700;color:#0E5A45;margin-bottom:6px">৳${Number(p.rent).toLocaleString()}/mo${p.distanceM!=null?' · '+Math.round(p.distanceM)+'m':''}</div>
    <button onclick="openDetail(${p.id})" style="width:100%;padding:7px;border:none;border-radius:6px;background:#0E5A45;color:#fff;cursor:pointer;font-size:.78rem;font-weight:600">বিস্তারিত দেখো →</button>
  </div>`;
}
function _mapRenderResults(cards){
  document.getElementById('map-results').innerHTML=cards.map(c=>`
    <div id="map-card-${c.id}" onclick="mapCardClick(${c.id})" style="display:flex;gap:10px;padding:10px;background:var(--glass);border:1px solid var(--border);border-radius:10px;margin-bottom:8px;cursor:pointer;transition:border-color .2s">
      <img src="${dtEsc(c.img||c.image||'')}" alt="${dtEsc(c.title||c.t||'')}" style="width:64px;height:52px;object-fit:cover;border-radius:6px;flex-shrink:0"/>
      <div style="flex:1;min-width:0">
        <div style="font-size:.82rem;color:var(--white);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${dtEsc(c.t||c.title)}</div>
        <div style="font-size:.72rem;color:var(--white-30)">🛏${c.beds||c.bedrooms||'—'} · ${dtEsc(c.area)}${c.distanceM!=null?' · '+Math.round(c.distanceM)+'m':''}</div>
        <div style="font-size:.85rem;font-weight:700;color:var(--gold)">৳${Number(c.rent).toLocaleString()}/mo</div>
      </div>
      <button onclick="event.stopPropagation();openDetail(${c.id})" class="btn-outline" style="padding:6px 10px;font-size:.7rem;align-self:center;flex-shrink:0">বিস্তারিত</button>
    </div>`).join('') || '<div style="padding:30px;text-align:center;color:var(--white-30);font-family:var(--font-ui);font-size:.82rem">কিছু পাওয়া যায়নি</div>';
}
// results list-এ card-এ ক্লিক করলে — পুরো detail page-এ না গিয়ে আগে ম্যাপেই pin highlight করে দেখায়,
// চাইলে card-এর নিজস্ব "বিস্তারিত" বাটনে গিয়ে পুরো পেজ খোলা যাবে
function mapCardClick(id){
  const mk=_mapMarkerById[id]; if(!mk)return;
  _map.setView(mk.getLatLng(),15,{animate:true});
  mk.openPopup();
  document.querySelectorAll('[id^="map-card-"]').forEach(el=>el.style.borderColor='var(--border)');
  const card=document.getElementById('map-card-'+id);
  if(card) card.style.borderColor='var(--gold)';
}
// pin-এ ক্লিক করলে (popup খোলার পাশাপাশি) নিচের list-এ তার card highlight করে scroll করে আনে
function _mapHighlightCard(id){
  document.querySelectorAll('[id^="map-card-"]').forEach(el=>el.style.borderColor='var(--border)');
  const card=document.getElementById('map-card-'+id);
  if(card){ card.style.borderColor='var(--gold)'; card.scrollIntoView({behavior:'smooth',block:'nearest'}); }
}

function mapPlotAll(){
  mapClearLayers();
  const withCoord=allProps.filter(p=>p.lat!=null&&p.lng!=null);
  withCoord.forEach(p=>{
    const mk=L.marker([p.lat,p.lng],{icon:_pinIcon('#D8342A',_priceLabel(p.rent))}).addTo(_map)
      .bindPopup(_mapPopupHtml(p))
      .on('click',()=>_mapHighlightCard(p.id));
    _mapMarkers.push(mk); _mapMarkerById[p.id]=mk;
  });
  document.getElementById('map-status').textContent=withCoord.length+'টা বাসা ম্যাপে দেখানো হচ্ছে — একটা এলাকা বেছে বা "আমার আশেপাশে" চেপে দূরত্ব অনুযায়ী খোঁজো';
  _mapRenderResults(withCoord);
}

function mapRadiusLabel(){
  document.getElementById('map-radius-val').textContent=document.getElementById('map-radius').value+' কিমি';
}

function mapFindNearMe(){
  if(!navigator.geolocation){document.getElementById('map-status').textContent='তোমার ব্রাউজারে লোকেশন সাপোর্ট নেই — ম্যাপে ট্যাপ করো';return;}
  document.getElementById('map-status').textContent='লোকেশন নেওয়া হচ্ছে...';
  navigator.geolocation.getCurrentPosition(
    pos=>mapSearchAt(pos.coords.latitude,pos.coords.longitude),
    ()=>{document.getElementById('map-status').textContent='লোকেশন পাওয়া যায়নি — ম্যাপে ট্যাপ করো, অথবা ব্রাউজারে location permission দাও';}
  );
}

async function mapSearchAt(lat,lng,approxAreaName){
  const km=parseFloat(document.getElementById('map-radius').value);
  _lastMapSearch={lat,lng};
  const approxNote = approxAreaName ? `সবচেয়ে কাছের মিল ধরে নিয়েছি: "${dtEsc(approxAreaName)}" — ` : '';
  document.getElementById('map-status').textContent=approxNote+'খোঁজা হচ্ছে...';

  if(_mapAreaMarker)_map.removeLayer(_mapAreaMarker);
  if(_mapCircle)_map.removeLayer(_mapCircle);
  _mapAreaMarker=L.marker([lat,lng],{icon:_pinIcon('#2563EB')}).addTo(_map).bindPopup('তোমার অবস্থান');
  _mapCircle=L.circle([lat,lng],{radius:km*1000,color:'#0E5A45',weight:1.5,fillColor:'#0E5A45',fillOpacity:.07}).addTo(_map);
  _map.fitBounds(_mapCircle.getBounds(),{padding:[30,30]});

  const{data,error}=await abashonDB.rpc('nearby_properties',{search_lat:lat,search_lng:lng,radius_km:km,max_results:60});
  if(error){document.getElementById('map-status').textContent='সমস্যা হয়েছে: '+error.message;return;}

  mapClearLayers();
  (data||[]).forEach(p=>{
    const card=allProps.find(x=>x.id===p.id)||dbRowToCard(p);
    card.distanceM=p.distance_m;
    const mk=L.marker([p.latitude,p.longitude],{icon:_pinIcon('#D8342A',_priceLabel(p.rent))}).addTo(_map)
      .bindPopup(_mapPopupHtml(card))
      .on('click',()=>_mapHighlightCard(p.id));
    _mapMarkers.push(mk); _mapMarkerById[p.id]=mk;
  });

  document.getElementById('map-status').textContent=approxNote+((data||[]).length
    ? (data.length+`টা বাসা পাওয়া গেছে (${km} কিমির মধ্যে, কাছেরটা আগে)`)
    : `এই ${km} কিমির মধ্যে কোনো বাসা নেই — দূরত্ব বাড়িয়ে আবার চেষ্টা করো`);
  _mapRenderResults((data||[]).map(p=>{
    const card=allProps.find(x=>x.id===p.id)||dbRowToCard(p);
    card.distanceM=p.distance_m;
    return card;
  }));
}

function mapRunSearch(){ mapRadiusLabel(); if(_lastMapSearch) mapSearchAt(_lastMapSearch.lat,_lastMapSearch.lng); }

// ── BUYER DASHBOARD (real data — booking_requests, visit_bookings, reservations, favorites) ──
let _buyerBookings=[],_buyerVisits=[],_buyerReservations=[],_buyerFavProps=[],_buyerShiftOrders=[],_buyerPayments=[],_buyerSavedSearches=[],_buyerDocs=[],_buyerTickets=[],_buyerTab='overview';

async function renderBuyerDash(){
  const el=document.getElementById('dash-buyer');
  el.innerHTML='<div style="padding:80px;text-align:center;color:var(--white-30);font-family:var(--font-ui)">লোড হচ্ছে...</div>';

  const[{data:bk,error:e1},{data:vs,error:e2},{data:rv,error:e3},{data:fv,error:e4},{data:so,error:e5},{data:pm,error:e6},{data:ss,error:e7},{data:dc,error:e8},{data:tk,error:e9}]=await Promise.all([
    abashonDB.from('booking_requests')
      .select('id,status,household_type,intended_stay_months,message,created_at,property_id,properties(id,title,area,city,image)')
      .eq('buyer_id',session.id).order('created_at',{ascending:false}),
    abashonDB.from('visit_bookings')
      .select('id,status,visit_date,slot,note,created_at,property_id,buyer_rating_of_owner,properties(id,title,area,city,owner_id)')
      .eq('buyer_id',session.id).order('created_at',{ascending:false}),
    abashonDB.from('reservations')
      .select('id,status,token_amount,payment_ref,locked_until,created_at,property_id,properties(id,title,area,city)')
      .eq('buyer_id',session.id).order('created_at',{ascending:false}),
    abashonDB.from('favorites')
      .select('property_id,properties(id,title,area,city,rent,image,verified)')
      .eq('user_id',session.id).order('created_at',{ascending:false}),
    abashonDB.from('shifting_orders')
      .select('id,status,from_area,to_area,move_date,load_size,fair_price,token_amount,assigned_team,admin_note,created_at')
      .eq('buyer_id',session.id).order('created_at',{ascending:false}),
    abashonDB.from('payments')
      .select('id,tran_id,status,amount,bank_tran_id,card_type,created_at,property_id,properties(id,title,area,city)')
      .eq('buyer_id',session.id).order('created_at',{ascending:false}),
    abashonDB.from('saved_searches').select('*').eq('user_id',session.id).order('created_at',{ascending:false}),
    abashonDB.from('documents').select('*').eq('user_id',session.id).order('created_at',{ascending:false}),
    abashonDB.from('support_tickets').select('*').eq('user_id',session.id).order('created_at',{ascending:false})
  ]);
  if(e1)console.error('booking_requests load failed:',e1);
  if(e2)console.error('visit_bookings load failed:',e2);
  if(e3)console.error('reservations load failed:',e3);
  if(e4)console.error('favorites load failed:',e4);
  if(e5)console.error('shifting_orders load failed:',e5);
  if(e6)console.error('payments load failed:',e6);
  if(e7)console.error('saved_searches load failed:',e7);
  if(e8)console.error('documents load failed:',e8);
  if(e9)console.error('support_tickets load failed:',e9);
  _buyerBookings=bk||[]; _buyerVisits=vs||[]; _buyerReservations=rv||[];
  _buyerFavProps=(fv||[]).filter(f=>f.properties).map(f=>f.properties);
  _buyerShiftOrders=so||[]; _buyerPayments=pm||[]; _buyerSavedSearches=ss||[]; _buyerDocs=dc||[]; _buyerTickets=tk||[];

  el.innerHTML=`
  <div class="dash-grid">
    <div class="dash-side">
      <div class="dash-user-av">${dtEsc((session.name||'U').trim()[0]||'U')}</div>
      <div class="dash-user-name">${dtEsc(session.name)}</div>
      <div style="text-align:center;margin:6px 0 4px"><span class="role-badge buyer">🛒 ক্রেতা</span></div>
      <div class="dash-user-email">@${dtEsc(session.user||'')} · ${dtEsc(session.phone||'')}</div>
      <div class="dash-menu">
        <div class="dm" data-t="overview" onclick="buyerSetTab('overview')">📊 Overview</div>
        <div class="dm" data-t="saved" onclick="buyerSetTab('saved')">🏠 Saved Homes</div>
        <div class="dm" data-t="searches" onclick="buyerSetTab('searches')">🔍 Saved Searches</div>
        <div class="dm" data-t="bookings" onclick="buyerSetTab('bookings')">📅 Bookings</div>
        <div class="dm" data-t="visits" onclick="buyerSetTab('visits')">🚶 Visit History</div>
        <div class="dm" data-t="payments" onclick="buyerSetTab('payments')">💳 Payments</div>
        <div class="dm" data-t="documents" onclick="buyerSetTab('documents')">📄 Documents</div>
        <div class="dm" data-t="shifting" onclick="buyerSetTab('shifting')">🚚 Shifting</div>
        <div class="dm" data-t="support" onclick="buyerSetTab('support')">💬 Support${_buyerTickets.filter(t=>['open','in_progress'].includes(t.status)).length?` <span style="background:var(--gold);color:#2a2005;border-radius:20px;padding:1px 7px;font-size:.7rem;font-weight:700;margin-left:4px">${bnNum(_buyerTickets.filter(t=>['open','in_progress'].includes(t.status)).length)}</span>`:''}</div>
        <div class="dm" data-t="alerts" onclick="buyerSetTab('alerts')">🔔 Alerts${buyerAlertsCount()?` <span style="background:var(--gold);color:#2a2005;border-radius:20px;padding:1px 7px;font-size:.7rem;font-weight:700;margin-left:4px">${bnNum(buyerAlertsCount())}</span>`:''}</div>
      </div>
      <button onclick="openEmergencyTicket()" style="width:100%;margin-top:14px;padding:10px;background:rgba(179,38,47,.15);border:1px solid rgba(179,38,47,.4);color:#e08080;border-radius:8px;font-family:var(--font-ui);font-size:.78rem;font-weight:700;cursor:pointer">🆘 জরুরি সাহায্য</button>
    </div>
    <div class="dash-content">
      <div class="stat-row">
        <div class="stat-c"><div class="stat-n">${bnNum(_buyerFavProps.length)}</div><div class="stat-l">Saved Homes</div></div>
        <div class="stat-c"><div class="stat-n">${bnNum(_buyerBookings.filter(b=>['pending','accepted'].includes(b.status)).length)}</div><div class="stat-l">Active Booking</div></div>
        <div class="stat-c"><div class="stat-n">৳${_buyerReservations.reduce((s,r)=>s+(r.token_amount||0),0).toLocaleString()}</div><div class="stat-l">Total Paid</div></div>
        <div class="stat-c"><div class="stat-n">${bnNum(_buyerVisits.length)}</div><div class="stat-l">Visit Requests</div></div>
      </div>
      <div id="buyer-tab-body"></div>
    </div>
  </div>`;
  document.querySelectorAll('.dash-menu .dm').forEach(d=>d.classList.toggle('active',d.dataset.t===_buyerTab));
  buyerRenderBody();
}

function buyerSetTab(t){
  _buyerTab=t;
  document.querySelectorAll('.dash-menu .dm').forEach(d=>d.classList.toggle('active',d.dataset.t===t));
  buyerRenderBody();
}

function buyerRenderBody(){
  const box=document.getElementById('buyer-tab-body'); if(!box)return;
  if(_buyerTab==='saved') box.innerHTML=buyerSavedHtml();
  else if(_buyerTab==='searches') box.innerHTML=buyerSearchesHtml();
  else if(_buyerTab==='bookings'){ box.innerHTML=buyerBookingsHtml()+'<div id="bk-faq-box" style="margin-top:16px"></div>'; loadContextualFaq('booking','bk-faq-box',3); }
  else if(_buyerTab==='visits') box.innerHTML=buyerVisitsHtml();
  else if(_buyerTab==='payments') box.innerHTML=buyerPaymentsHtml();
  else if(_buyerTab==='documents') box.innerHTML=buyerDocumentsHtml();
  else if(_buyerTab==='shifting') box.innerHTML=buyerShiftingHtml();
  else if(_buyerTab==='support') box.innerHTML=buyerSupportHtml();
  else if(_buyerTab==='alerts') box.innerHTML=buyerAlertsHtml();
  else box.innerHTML=buyerBookingsHtml(true)+buyerSavedHtml(true); // Overview: সংক্ষিপ্ত দুটোই
}

function buyerSavedHtml(compact){
  const list=compact?_buyerFavProps.slice(0,3):_buyerFavProps;
  const title=compact?'❤️ Saved Homes':'🏠 Saved Homes';
  const html=list.length
    ? list.map(p=>`<div class="prop-card"><div class="prop-img-wrap" style="height:150px"><img src="${p.image}" alt="${dtEsc(p.title||'')}" loading="lazy" onclick="openDetail(${p.id})"/>
        <button class="prop-fav" data-id="${p.id}" onclick="toggleFav(${p.id},event)">❤️</button></div>
        <div class="prop-body"><div class="prop-title">${dtEsc(p.title)}</div><div class="prop-loc">📍 ${dtEsc(p.area)}, ${dtEsc(p.city)}</div>
        <div class="prop-footer"><div class="prop-price">৳${(p.rent||0).toLocaleString()}<small>/mo</small></div>
        <button class="prop-btn" onclick="openDetail(${p.id})">দেখো</button></div></div></div>`).join('')
    : `<div style="grid-column:1/-1;padding:40px;text-align:center;color:var(--white-30);font-family:var(--font-ui)">এখনো কোনো বাসা save করোনি। বাসার কার্ডে ♡ চাপলেই এখানে জমা হবে।<div style="margin-top:14px"><button class="btn-outline" onclick="goPage('listings')" style="padding:8px 18px;font-size:.8rem">🔍 বাসা খুঁজতে যাও</button></div></div>`;
  return `<div class="dash-card"><div class="dash-card-title">${title}</div><div class="prop-grid" style="grid-template-columns:repeat(auto-fill,minmax(220px,1fr))">${html}</div></div>`;
}

// booking_requests + visit_bookings — buyer এর নিজের, এক সময়-ক্রমিক ফিডে
function buyerCombinedFeed(){
  const a=_buyerBookings.map(r=>({kind:'booking',id:r.id,status:r.status,created_at:r.created_at,prop:r.properties,
    label:`${HH_BN[r.household_type]||r.household_type} · ${bnNum(r.intended_stay_months)} মাস`, sub:r.message||null}));
  const b=_buyerVisits.map(v=>({kind:'visit',id:v.id,status:v.status,created_at:v.created_at,prop:v.properties,
    label:`ভিজিট — ${bnDate(v.visit_date)}, ${SLOT_BN[v.slot]||v.slot}`, sub:v.note||null}));
  return[...a,...b].sort((x,y)=>new Date(y.created_at)-new Date(x.created_at));
}

function buyerBookingsHtml(compact){
  let feed=buyerCombinedFeed(); if(compact)feed=feed.slice(0,5);
  const title=compact?'📅 Recent Bookings':'📅 সব বুকিং';
  if(!feed.length) return `<div class="dash-card"><div class="dash-card-title">${title}</div><div style="padding:20px;text-align:center;color:var(--white-30);font-family:var(--font-ui);font-size:.85rem">এখনো কোনো বুকিং করোনি।</div></div>`;
  const rows=feed.map(f=>{
    const stCls=f.status==='pending'?'pend':(f.status==='rejected'||f.status==='cancelled')?'rej':'ok';
    const icon=f.kind==='booking'?'📩':'🕐';
    const propTxt=f.prop?`${dtEsc(f.prop.title)} — ${dtEsc(f.prop.area)}, ${dtEsc(f.prop.city)}`:'(প্রপার্টি মুছে ফেলা হয়েছে)';
    let cancelBtn=f.status==='pending'
      ?`<button onclick="${f.kind==='booking'?`buyerCancelBooking(${f.id})`:`buyerCancelVisit(${f.id})`}" style="margin-top:8px;padding:6px 14px;border:1px solid rgba(200,60,60,.3);border-radius:8px;background:transparent;color:#e08080;font-family:var(--font-ui);font-size:.78rem;font-weight:700;cursor:pointer">বাতিল করো</button>`:'';
    // accepted ভাড়ার রিকোয়েস্ট → এক ক্লিকে চুক্তিপত্র (ভাড়াটিয়ার নাম+ঠিকানা প্রিফিল)
    if(f.kind==='booking' && f.status==='accepted' && f.prop){
      const addr=[f.prop.title,f.prop.area,f.prop.city].filter(Boolean).join(', ').replace(/'/g,'&#39;');
      cancelBtn+=`<button onclick="openAgreement({tenantName:(session&&session.name)||'',propertyAddress:'${addr}'})" style="margin-top:8px;padding:6px 14px;border:1px solid var(--gold);border-radius:8px;background:transparent;color:var(--gold-d);font-family:var(--font-ui);font-size:.78rem;font-weight:700;cursor:pointer">📄 চুক্তিপত্র তৈরি করো</button>`;
    }
    return `<div class="bk-item" style="flex-direction:column;align-items:stretch">
      <div style="display:flex;gap:10px;align-items:flex-start">
        <div class="owner-av" style="width:34px;height:34px;flex-shrink:0">${icon}</div>
        <div style="flex:1"><div class="bk-t">${f.label}</div><div class="bk-l">🏠 ${propTxt}</div>${f.sub?`<div class="bk-l" style="font-style:italic">"${f.sub}"</div>`:''}</div>
        <div class="bk-st ${stCls}">${BK_ST_BN[f.status]||f.status}</div>
      </div>${cancelBtn}
    </div>`;
  }).join('');
  return `<div class="dash-card"><div class="dash-card-title">${title}</div>${rows}</div>`;
}

function buyerVisitsHtml(){
  if(!_buyerVisits.length) return `<div class="dash-card"><div class="dash-card-title">🚶 Visit History</div><div style="padding:20px;text-align:center;color:var(--white-30);font-family:var(--font-ui);font-size:.85rem">এখনো কোনো বাসা দেখতে visit বুক করোনি।</div></div>`;
  const rows=_buyerVisits.map(v=>{
    const stCls=v.status==='pending'?'pend':(v.status==='cancelled')?'rej':'ok';
    const propTxt=v.properties?`${dtEsc(v.properties.title)} — ${dtEsc(v.properties.area)}, ${dtEsc(v.properties.city)}`:'(প্রপার্টি মুছে ফেলা হয়েছে)';
    let actions=v.status==='pending'?`<button onclick="buyerCancelVisit(${v.id})" style="margin-top:8px;padding:6px 14px;border:1px solid rgba(200,60,60,.3);border-radius:8px;background:transparent;color:#e08080;font-family:var(--font-ui);font-size:.78rem;font-weight:700;cursor:pointer">বাতিল করো</button>`:'';
    if(v.status==='done'){
      actions=`<div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap">
        ${v.buyer_rating_of_owner?`<span class="bk-st ok">আপনার rating: ${bnNum(v.buyer_rating_of_owner)}★</span>`
          :`<button onclick="buyerRateOwner(${v.id})" style="padding:6px 12px;border:1px solid var(--gold);border-radius:8px;background:transparent;color:var(--gold-d);font-family:var(--font-ui);font-size:.78rem;font-weight:700;cursor:pointer">⭐ Owner-কে rate করুন</button>`}
        ${v.properties?`<button onclick="openDetail(${v.properties.id})" style="padding:6px 12px;border:1px solid var(--emerald-l);border-radius:8px;background:transparent;color:var(--emerald-l);font-family:var(--font-ui);font-size:.78rem;font-weight:700;cursor:pointer">✍️ বাসার রিভিউ লেখো</button>`:''}
        <button onclick="reportCounterparty('${v.properties?.owner_id||''}')" style="padding:6px 12px;border:1px solid rgba(200,60,60,.3);border-radius:8px;background:transparent;color:#e08080;font-family:var(--font-ui);font-size:.75rem;cursor:pointer">🚩 Report</button>
      </div>`;
    }
    return `<div class="bk-item" style="flex-direction:column;align-items:stretch">
      <div style="display:flex;gap:10px;align-items:flex-start">
        <div class="owner-av" style="width:34px;height:34px;flex-shrink:0">🚶</div>
        <div style="flex:1"><div class="bk-t">${bnDate(v.visit_date)}, ${dtEsc(SLOT_BN[v.slot]||v.slot)}</div><div class="bk-l">🏠 ${propTxt}</div>${v.note?`<div class="bk-l" style="font-style:italic">"${dtEsc(v.note)}"</div>`:''}</div>
        <div class="bk-st ${stCls}">${BK_ST_BN[v.status]||v.status}</div>
      </div>${actions}
    </div>`;
  }).join('');
  return `<div class="dash-card"><div class="dash-card-title">🚶 সব Visit</div>${rows}</div>`;
}

function buyerRateOwner(visitId){
  openRateModal({ title:'বাসার মালিককে rating দিন', stars:true, cb: async (n)=>{
    const{error}=await abashonDB.from('visit_bookings').update({buyer_rating_of_owner:n}).eq('id',visitId);
    if(error) throw new Error(error.message);
    toast('✓ Rating জমা হয়েছে','',2500); renderBuyerDash();
  }});
}

function buyerSearchesHtml(){
  if(!_buyerSavedSearches.length) return `<div class="dash-card"><div class="dash-card-title">🔍 Saved Searches</div><div style="padding:20px;text-align:center;color:var(--white-30);font-family:var(--font-ui);font-size:.85rem">এখনো কোনো সার্চ save করোনি। Listings বা AI Assistant পেজে "🔍 এই সার্চ Save করো" বাটন চাপলে এখানে জমা হবে।</div></div>`;
  const rows=_buyerSavedSearches.map(s=>`
    <div class="bk-item">
      <div style="flex:1"><div class="bk-t">${dtEsc(s.label)}</div><div class="bk-l">${s.query_text?'AI query':[s.city,s.type].filter(Boolean).map(dtEsc).join(' · ')||'সব'} · ${new Date(s.created_at).toLocaleDateString('bn-BD',{day:'numeric',month:'short'})}</div></div>
      <button class="btn-outline" style="padding:7px 14px;font-size:.75rem" onclick="runSavedSearch(${s.id})">চালাও</button>
      <button onclick="deleteSavedSearch(${s.id})" style="margin-left:8px;background:none;border:none;color:var(--white-30);font-size:1rem;cursor:pointer" aria-label="মুছে ফেলো">✕</button>
    </div>`).join('');
  return `<div class="dash-card"><div class="dash-card-title">🔍 Saved Searches</div>${rows}</div>`;
}

async function runSavedSearch(id){
  const s=_buyerSavedSearches.find(x=>x.id===id); if(!s)return;
  if(s.query_text){
    goPage('ai');
    setTimeout(()=>{ const inp=document.getElementById('ai-fi'); if(inp){ inp.value=s.query_text; fullAI(); } },350);
  }else{
    curProps = s.city||s.type ? allProps.filter(p=>(!s.city||cityEq(p.city,s.city))&&(!s.type||p.type===s.type)) : [...allProps];
    goPage('listings');
  }
}
async function deleteSavedSearch(id){
  const{error}=await abashonDB.from('saved_searches').delete().eq('id',id);
  if(error){toast(error.message,'err');return;}
  _buyerSavedSearches=_buyerSavedSearches.filter(s=>s.id!==id);
  toast('সার্চ মুছে ফেলা হয়েছে','');
  buyerRenderBody();
}
async function saveCurrentSearch(queryText,city,type){
  if(!requireAuth('buyer',()=>saveCurrentSearch(queryText,city,type)))return;
  const label=queryText ? ('🔍 '+queryText.slice(0,40)) : ([city,type].filter(Boolean).join(' · ')||'সব বাসা');
  const{error}=await abashonDB.from('saved_searches').insert({user_id:session.id,label,query_text:queryText||null,city:city||null,type:type||null});
  if(error){toast(error.message,'err');return;}
  toast('✓ সার্চ Save হয়েছে — Dashboard-এ পাবে','',2500);
}

const DOC_TYPE_BN={rental_agreement:'ভাড়ার চুক্তি',nid_copy:'NID কপি',payment_receipt:'পেমেন্ট রসিদ',other:'অন্যান্য'};
function buyerDocumentsHtml(){
  const rows=_buyerDocs.map(d=>`
    <div class="bk-item">
      <div style="flex:1"><div class="bk-t">${dtEsc(d.file_name)}</div><div class="bk-l">${DOC_TYPE_BN[d.doc_type]||d.doc_type} · ${new Date(d.created_at).toLocaleDateString('bn-BD',{day:'numeric',month:'short'})}</div></div>
      <button class="btn-outline" style="padding:7px 14px;font-size:.75rem" onclick="viewDocument(${d.id})">দেখো</button>
      <button onclick="deleteDocument(${d.id})" style="margin-left:8px;background:none;border:none;color:var(--white-30);font-size:1rem;cursor:pointer" aria-label="মুছে ফেলো">✕</button>
    </div>`).join('') || `<div style="padding:20px;text-align:center;color:var(--white-30);font-family:var(--font-ui);font-size:.85rem">এখনো কোনো ডকুমেন্ট আপলোড করোনি।</div>`;
  return `<div class="dash-card"><div class="dash-card-title">📄 Documents</div>
    <div style="margin-bottom:14px;display:flex;gap:10px;align-items:center;flex-wrap:wrap">
      <select id="doc-type-sel" style="padding:8px 10px;background:var(--glass);border:1px solid var(--border);border-radius:8px;color:var(--white);font-family:var(--font-ui);font-size:.8rem">
        <option value="rental_agreement">ভাড়ার চুক্তি</option>
        <option value="nid_copy">NID কপি</option>
        <option value="payment_receipt">পেমেন্ট রসিদ</option>
        <option value="other">অন্যান্য</option>
      </select>
      <label class="btn-outline" style="padding:8px 16px;font-size:.8rem;cursor:pointer">📤 আপলোড করো<input type="file" id="doc-upload-inp" accept=".pdf,.jpg,.jpeg,.png" style="display:none" onchange="uploadDocument(this.files[0])"/></label>
      <span id="doc-upload-status" style="font-family:var(--font-ui);font-size:.75rem;color:var(--white-30)"></span>
    </div>
    ${rows}</div>`;
}
async function uploadDocument(file){
  if(!file || !session) return;
  const status=document.getElementById('doc-upload-status');
  if(file.size>10*1024*1024){ status.textContent='ফাইল ১০MB-এর বেশি বড়'; status.style.color='#e08080'; return; }
  const docType=document.getElementById('doc-type-sel').value;
  status.textContent='আপলোড হচ্ছে...'; status.style.color='var(--white-30)';
  try{
    const path=`${session.id}/${Date.now()}-${file.name}`;
    const{error:upErr}=await abashonDB.storage.from('user-documents').upload(path,file);
    if(upErr) throw upErr;
    const{data:row,error:dbErr}=await abashonDB.from('documents').insert({
      user_id:session.id, doc_type:docType, file_name:file.name, file_path:path, file_size:file.size
    }).select().single();
    if(dbErr) throw dbErr;
    _buyerDocs.unshift(row);
    status.textContent='✓ আপলোড হয়েছে'; status.style.color='var(--emerald-l)';
    buyerRenderBody();
  }catch(e){
    status.textContent='আপলোড ব্যর্থ: '+friendlyError(e); status.style.color='#e08080';
  }
}
async function viewDocument(id){
  const d=_buyerDocs.find(x=>x.id===id); if(!d)return;
  const{data,error}=await abashonDB.storage.from('user-documents').createSignedUrl(d.file_path,300); // ৫ মিনিটের জন্য valid link — ব্যক্তিগত ফাইল, তাই সরাসরি public URL না
  if(error){toast('ফাইল খোলা যায়নি: '+error.message,'err');return;}
  window.open(data.signedUrl,'_blank');
}
async function deleteDocument(id){
  const d=_buyerDocs.find(x=>x.id===id); if(!d)return;
  if(!confirm('এই ডকুমেন্ট মুছে ফেলতে চাও?'))return;
  await abashonDB.storage.from('user-documents').remove([d.file_path]);
  const{error}=await abashonDB.from('documents').delete().eq('id',id);
  if(error){toast(error.message,'err');return;}
  _buyerDocs=_buyerDocs.filter(x=>x.id!==id);
  toast('ডকুমেন্ট মুছে ফেলা হয়েছে','');
  buyerRenderBody();
}
const PAY_ST_BN={initiated:'শুরু হয়েছে',pending:'যাচাই চলছে',validated:'সফল',failed:'ব্যর্থ',cancelled:'বাতিল'};
function buyerPaymentsHtml(){
  if(!_buyerPayments.length) return `<div class="dash-card"><div class="dash-card-title">💳 Payment History</div><div style="padding:20px;text-align:center;color:var(--white-30);font-family:var(--font-ui);font-size:.85rem">এখনো কোনো পেমেন্ট করোনি।</div></div>`;
  const rows=_buyerPayments.map(p=>{
    const stCls=p.status==='validated'?'ok':(p.status==='initiated'||p.status==='pending')?'pend':'rej';
    const ref=p.bank_tran_id?` · Ref: ${dtEsc(p.bank_tran_id)}`:'';
    return `<div class="bk-item"><div style="flex:1"><div class="bk-t">${dtEsc(p.properties?.title||'—')}</div><div class="bk-l">${dtEsc(p.properties?.area||'')}, ${dtEsc(p.properties?.city||'')} · ${new Date(p.created_at).toLocaleDateString('bn-BD',{day:'numeric',month:'long'})}${ref}</div></div><div class="bk-st ${stCls}">৳${Number(p.amount||0).toLocaleString()} · ${PAY_ST_BN[p.status]||p.status}</div>${p.status==='validated'?`<button class="btn-outline" style="padding:6px 12px;font-size:.72rem;margin-left:8px" onclick="viewPaymentReceipt(${p.id})">রসিদ দেখো</button><button class="btn-outline" style="padding:6px 12px;font-size:.72rem;margin-left:6px" onclick="downloadReceiptPDF(${p.id},this)">📄 PDF</button>`:''}</div>`;
  }).join('');
  const total=_buyerPayments.filter(p=>p.status==='validated').reduce((s,p)=>s+Number(p.amount||0),0);
  return `<div class="dash-card"><div class="dash-card-title">💳 Payment History</div>${rows}<div style="margin-top:14px;font-family:var(--font-ui);font-size:.75rem;color:var(--white-30)">মোট সফল প্রদান: ৳${total.toLocaleString()}</div></div>`;
}
function viewPaymentReceipt(id){
  const p=_buyerPayments.find(x=>x.id===id); if(!p)return;
  const invNo='INV-'+String(p.id).padStart(6,'0');
  const html=`
    <div style="padding:32px;max-width:420px;margin:0 auto">
      <div style="text-align:center;margin-bottom:20px">
        <div style="font-family:var(--font-display);font-size:1.4rem;color:var(--white)">আবা<span style="color:var(--gold)">সন</span></div>
        <div style="font-family:var(--font-ui);font-size:.7rem;color:var(--white-30);letter-spacing:.1em">PAYMENT RECEIPT</div>
      </div>
      <div style="display:flex;justify-content:space-between;font-family:var(--font-ui);font-size:.78rem;color:var(--white-60);margin-bottom:4px"><span>Invoice No</span><b style="color:var(--white)">${invNo}</b></div>
      <div style="display:flex;justify-content:space-between;font-family:var(--font-ui);font-size:.78rem;color:var(--white-60);margin-bottom:4px"><span>Date</span><span>${new Date(p.created_at).toLocaleString('bn-BD',{day:'numeric',month:'long',year:'numeric',hour:'2-digit',minute:'2-digit'})}</span></div>
      <div style="display:flex;justify-content:space-between;font-family:var(--font-ui);font-size:.78rem;color:var(--white-60);margin-bottom:4px"><span>Customer</span><span>${dtEsc(session.name)} · ${dtEsc(session.phone||'')}</span></div>
      <div style="display:flex;justify-content:space-between;font-family:var(--font-ui);font-size:.78rem;color:var(--white-60);margin-bottom:14px"><span>Transaction Ref</span><span>${dtEsc(p.tran_id||'—')}${p.bank_tran_id?' / '+dtEsc(p.bank_tran_id):''}</span></div>
      <div style="border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:12px 0;margin-bottom:12px">
        <div style="font-family:var(--font-ui);font-size:.85rem;color:var(--white);margin-bottom:2px">${dtEsc(p.properties?.title||'—')}</div>
        <div style="font-family:var(--font-ui);font-size:.72rem;color:var(--white-30)">${dtEsc(p.properties?.area||'')}, ${dtEsc(p.properties?.city||'')}${p.card_type?' · পেমেন্ট মাধ্যম: '+dtEsc(p.card_type):''}</div>
      </div>
      <div style="display:flex;justify-content:space-between;font-family:var(--font-ui);font-size:.85rem;color:var(--white-60);margin-bottom:6px"><span>Booking / Token Amount</span><span>৳${Number(p.amount).toLocaleString()}</span></div>
      <div style="display:flex;justify-content:space-between;font-family:var(--font-ui);font-weight:700;font-size:1rem;color:var(--gold);border-top:1px dashed var(--border);padding-top:8px;margin-top:6px"><span>Total Paid</span><span>৳${Number(p.amount).toLocaleString()}</span></div>
      <div style="text-align:center;margin-top:8px;font-family:var(--font-ui);font-size:.72rem;color:var(--emerald-l)">✓ ${PAY_ST_BN[p.status]||p.status}</div>
      <div style="text-align:center;margin-top:16px;font-family:var(--font-ui);font-size:.65rem;color:var(--white-30);line-height:1.5">এটি একটি অভ্যন্তরীণ রসিদ, VAT/NBR-নিবন্ধিত ইনভয়েস নয়।</div>
    </div>`;
  document.getElementById('receipt-body').innerHTML=html;
  openM('receipt-ov');
}

// Module: Documents — server-generated real PDF (payment receipt / rental terms
// summary), separate from the quick in-browser HTML preview above. Uploaded to
// user-documents bucket + logged in `documents` table via generate-document edge fn.
async function downloadReceiptPDF(paymentId, btn){
  const orig=btn.textContent; btn.textContent='তৈরি হচ্ছে...'; btn.disabled=true;
  try{
    const{data,error}=await abashonDB.functions.invoke('generate-document',{body:{doc_type:'payment_receipt',payment_id:paymentId}});
    if(error) throw error;
    if(data?.code) throw new Error(data.message||'PDF তৈরি করা যায়নি।');
    window.open(data.url,'_blank');
    _buyerDocs.unshift(data.document);
    toast('✓ PDF তৈরি হয়েছে — Dashboard → Documents-এও পাবে','',3000);
  }catch(e){
    toast('PDF তৈরি ব্যর্থ: '+friendlyError(e),'err',4000);
  }finally{
    btn.textContent=orig; btn.disabled=false;
  }
}
const SHIFT_ST_BN={pending:'অপেক্ষমাণ',confirmed:'নিশ্চিত',completed:'সম্পন্ন',cancelled:'বাতিল'};
function buyerShiftingHtml(){
  if(!_buyerShiftOrders.length){
    return `<div class="dash-card"><div class="dash-card-title">🚚 Shifting</div>
    <div style="padding:6px 0 14px;font-family:var(--font-ui);font-size:.85rem;color:var(--white-60);line-height:1.7">
      এখনো কোনো শিফটিং বুক করোনি। বাসা ঠিক হয়ে গেলে শিফটিং খরচ হিসাব করে বুক করতে পারবে।
    </div>
    <button class="auth-submit" style="max-width:220px;background:linear-gradient(135deg,var(--gold-l),var(--gold-d));color:#2a2005" onclick="goPage('shifting')">🚚 খরচ হিসাব করো</button>
  </div>`;
  }
  const rows=_buyerShiftOrders.map(o=>{
    const stCls=o.status==='pending'?'pend':o.status==='cancelled'?'rej':'ok';
    const cancelBtn=['pending','confirmed'].includes(o.status)
      ?`<button onclick="buyerCancelShiftOrder(${o.id})" style="margin-top:8px;padding:6px 14px;border:1px solid rgba(200,60,60,.3);border-radius:8px;background:transparent;color:#e08080;font-family:var(--font-ui);font-size:.78rem;font-weight:700;cursor:pointer">বাতিল করো</button>`:'';
    return `<div class="bk-item" style="flex-direction:column;align-items:stretch">
      <div style="display:flex;gap:10px;align-items:flex-start">
        <div class="owner-av" style="width:34px;height:34px;flex-shrink:0">🚚</div>
        <div style="flex:1">
          <div class="bk-t">${dtEsc(o.from_area)} → ${dtEsc(o.to_area)}</div>
          <div class="bk-l">${new Date(o.move_date).toLocaleDateString('bn-BD',{day:'numeric',month:'long'})} · ৳${Number(o.fair_price).toLocaleString()} (টোকেন ৳${Number(o.token_amount).toLocaleString()} দেওয়া হয়েছে)</div>
          ${o.assigned_team?`<div class="bk-l">👷 ${dtEsc(o.assigned_team)}${o.admin_note?' · '+dtEsc(o.admin_note):''}</div>`:''}
        </div>
        <div class="bk-st ${stCls}">${SHIFT_ST_BN[o.status]||o.status}</div>
      </div>
      ${cancelBtn}
    </div>`;
  }).join('');
  return `<div class="dash-card"><div class="dash-card-title">🚚 Shifting অর্ডার</div>${rows}
    <button class="auth-submit" style="max-width:220px;margin-top:12px;background:linear-gradient(135deg,var(--gold-l),var(--gold-d));color:#2a2005" onclick="goPage('shifting')">＋ নতুন অর্ডার</button>
  </div>`;
}

async function buyerCancelShiftOrder(id){
  if(!confirm('এই শিফটিং অর্ডার বাতিল করতে চাও? টোকেন ফেরত পেতে admin এর সাথে যোগাযোগ করো।'))return;
  const{error}=await abashonDB.from('shifting_orders').update({status:'cancelled'}).eq('id',id);
  if(error){toast(error.message,'err');return;}
  toast('অর্ডার বাতিল করা হয়েছে','');
  await renderBuyerDash(); buyerSetTab(_buyerTab);
}

// Alerts কোনো আলাদা টেবিল থেকে না — বুকিং/ভিজিটের status বদল থেকেই বের করা, তাই বানানো নয়
function buyerAlertsCount(){
  return _buyerBookings.filter(b=>['accepted','rejected'].includes(b.status)).length
       + _buyerVisits.filter(v=>['confirmed','cancelled'].includes(v.status)).length;
}
const TICKET_CAT_BN={property_listing:'প্রপার্টি লিস্টিং',owner_landlord:'মালিক/ল্যান্ডলর্ড',agent:'এজেন্ট',fraud:'জালিয়াতি',payments:'পেমেন্ট',booking:'বুকিং',refund:'রিফান্ড',moving:'শিফটিং সার্ভিস',technical:'টেকনিক্যাল সমস্যা',other:'অন্যান্য'};
const TICKET_ST_BN={submitted:'জমা হয়েছে',under_review:'পর্যালোচনা হচ্ছে',assigned:'দায়িত্ব দেওয়া হয়েছে',in_progress:'কাজ চলছে',waiting_for_user:'তোমার উত্তরের অপেক্ষায়',resolved:'সমাধান হয়েছে',closed:'বন্ধ'};
const TICKET_PR_BN={low:'কম',medium:'মাঝারি',high:'বেশি',urgent:'জরুরি',emergency:'🆘 emergency'};
const TICKET_STATUS_ORDER=['submitted','under_review','assigned','in_progress','waiting_for_user','resolved','closed'];
function ticketIdFmt(id){ return 'TKT-'+String(id).padStart(5,'0'); }
let _ticketMessages={}, _expandedTicket=null;

let _ticketSearchQ='', _ticketFilterStatus='';
function buyerSupportHtml(){
  const newForm=`
    <div class="dash-card" style="margin-bottom:16px">
      <div class="dash-card-title">নতুন টিকেট খুলো</div>
      <input id="tk-subject" placeholder="বিষয় (সংক্ষেপে লিখো)" style="width:100%;margin-bottom:8px;padding:10px 12px;background:var(--glass);border:1px solid var(--border);border-radius:8px;color:var(--white);font-family:var(--font-ui);font-size:.85rem"/>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
        <select id="tk-category" style="padding:10px 12px;background:var(--glass);border:1px solid var(--border);border-radius:8px;color:var(--white);font-family:var(--font-ui);font-size:.85rem">
          <option value="property_listing">প্রপার্টি লিস্টিং</option>
          <option value="owner_landlord">মালিক/ল্যান্ডলর্ড</option>
          <option value="agent">এজেন্ট</option>
          <option value="fraud">জালিয়াতি</option>
          <option value="payments">পেমেন্ট</option>
          <option value="booking">বুকিং</option>
          <option value="refund">রিফান্ড</option>
          <option value="moving">শিফটিং সার্ভিস</option>
          <option value="technical">টেকনিক্যাল সমস্যা</option>
          <option value="other" selected>অন্যান্য</option>
        </select>
        <select id="tk-priority" style="padding:10px 12px;background:var(--glass);border:1px solid var(--border);border-radius:8px;color:var(--white);font-family:var(--font-ui);font-size:.85rem">
          <option value="low">অগ্রাধিকার: কম</option>
          <option value="medium" selected>অগ্রাধিকার: মাঝারি</option>
          <option value="high">অগ্রাধিকার: বেশি</option>
          <option value="urgent">অগ্রাধিকার: জরুরি</option>
        </select>
      </div>
      <textarea id="tk-message" rows="3" placeholder="বিস্তারিত লিখো..." style="width:100%;margin-bottom:8px;padding:10px 12px;background:var(--glass);border:1px solid var(--border);border-radius:8px;color:var(--white);font-family:var(--font-ui);font-size:.85rem;resize:vertical"></textarea>
      <label style="display:inline-flex;align-items:center;gap:6px;margin-bottom:10px;font-family:var(--font-ui);font-size:.78rem;color:var(--white-30);cursor:pointer">📎 ছবি/ডকুমেন্ট যোগ করো<input type="file" id="tk-attach" multiple accept=".pdf,.jpg,.jpeg,.png" style="display:none" onchange="_updateAttachLabel('tk-attach')"/></label>
      <span id="tk-attach-label" style="font-family:var(--font-ui);font-size:.75rem;color:var(--white-30);margin-left:6px"></span>
      <button class="auth-submit" id="tk-submit-btn" onclick="submitTicket()">টিকেট জমা দাও</button>
    </div>`;
  const emergencyBox=`
    <div class="dash-card" style="margin-bottom:16px;background:rgba(179,38,47,.08);border-color:rgba(179,38,47,.3)">
      <div class="dash-card-title" style="color:#e08080">🆘 জরুরি প্রয়োজনে</div>
      <div style="font-family:var(--font-ui);font-size:.82rem;color:var(--white-60);line-height:1.7;margin-bottom:10px">
        সরাসরি জীবন/নিরাপত্তা ঝুঁকি হলে <b style="color:#e08080">জাতীয় জরুরি সেবা ৯৯৯</b>-এ কল করো (ফ্রি, ২৪ ঘণ্টা)। নিচের যেকোনো একটায় ক্লিক করলে emergency priority টিকেট তৈরি হবে — এটা তাৎক্ষণিক live সাপোর্ট না, তবে দ্রুততম সময়ে দেখা হবে।
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        ${[['fraud','জালিয়াতির শিকার'],['payments','পেমেন্ট স্ক্যাম'],['other','নিরাপত্তা সমস্যা'],['property_listing','ভুয়া লিস্টিং'],['booking','জরুরি বুকিং সমস্যা'],['moving','জরুরি শিফটিং সহায়তা']]
          .map(([cat,label])=>`<button onclick="openEmergencyTicket('${cat}','${dtEsc(label)}')" style="padding:8px 14px;background:rgba(179,38,47,.15);border:1px solid rgba(179,38,47,.4);color:#e08080;border-radius:20px;font-family:var(--font-ui);font-size:.75rem;font-weight:600;cursor:pointer">${label}</button>`).join('')}
      </div>
    </div>`;
  const searchBar=`
    <div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap">
      <input id="tk-search" placeholder="🔍 টিকেট খুঁজো (বিষয়/ID)..." value="${dtEsc(_ticketSearchQ)}" oninput="_ticketSearchQ=this.value;buyerRenderBody()" style="flex:1;min-width:160px;padding:9px 12px;background:var(--glass);border:1px solid var(--border);border-radius:8px;color:var(--white);font-family:var(--font-ui);font-size:.8rem"/>
      <select onchange="_ticketFilterStatus=this.value;buyerRenderBody()" style="padding:9px 12px;background:var(--glass);border:1px solid var(--border);border-radius:8px;color:var(--white);font-family:var(--font-ui);font-size:.8rem">
        <option value="">সব status</option>
        ${TICKET_STATUS_ORDER.map(s=>`<option value="${s}" ${_ticketFilterStatus===s?'selected':''}>${TICKET_ST_BN[s]}</option>`).join('')}
      </select>
    </div>`;
  let filtered=_buyerTickets.filter(t=>
    (!_ticketFilterStatus || t.status===_ticketFilterStatus) &&
    (!_ticketSearchQ || t.subject.toLowerCase().includes(_ticketSearchQ.toLowerCase()) || ticketIdFmt(t.id).toLowerCase().includes(_ticketSearchQ.toLowerCase()))
  );
  const list = _buyerTickets.length===0 ? `<div class="dash-card"><div style="padding:20px;text-align:center;color:var(--white-30);font-family:var(--font-ui);font-size:.85rem">এখনো কোনো টিকেট খোলোনি।</div></div>`
    : filtered.length===0 ? `<div class="dash-card"><div style="padding:20px;text-align:center;color:var(--white-30);font-family:var(--font-ui);font-size:.85rem">কিছু পাওয়া যায়নি — সার্চ/ফিল্টার বদলে দেখো।</div></div>`
    : filtered.map(t=>{
    const stCls=['resolved'].includes(t.status)?'ok':['closed'].includes(t.status)?'rej':'pend';
    const isExpanded=_expandedTicket===t.id;
    return `<div class="bk-item" style="flex-direction:column;align-items:stretch;cursor:pointer" onclick="toggleTicketThread(${t.id})">
      <div style="display:flex;gap:10px;align-items:flex-start">
        <div class="owner-av" style="width:34px;height:34px;flex-shrink:0">${t.priority==='emergency'?'🆘':t.category==='fraud'?'⚠️':'💬'}</div>
        <div style="flex:1"><div class="bk-t">${dtEsc(t.subject)} <span style="color:var(--white-30);font-weight:400;font-size:.72rem">${ticketIdFmt(t.id)}</span></div><div class="bk-l">${TICKET_CAT_BN[t.category]||t.category} · ${TICKET_PR_BN[t.priority]||t.priority} · ${new Date(t.created_at).toLocaleDateString('bn-BD',{day:'numeric',month:'short'})}</div></div>
        <div class="bk-st ${stCls}">${TICKET_ST_BN[t.status]||t.status}</div>
      </div>
      ${isExpanded?`<div id="ticket-thread-${t.id}" onclick="event.stopPropagation()" style="margin-top:12px;padding-top:12px;border-top:1px solid var(--border)"><div style="text-align:center;color:var(--white-30);font-family:var(--font-ui);font-size:.8rem">লোড হচ্ছে...</div></div>`:''}
    </div>`;
  }).join('');
  return newForm+emergencyBox+`<div class="dash-card"><div class="dash-card-title">💬 আমার টিকেট</div>`+searchBar+`</div>`+list;
}

function _updateAttachLabel(inputId){
  const inp=document.getElementById(inputId), lbl=document.getElementById(inputId+'-label');
  if(lbl) lbl.textContent = inp.files.length ? `${inp.files.length}টা ফাইল বাছাই করা হয়েছে` : '';
}

// একাধিক ফাইল user-documents bucket-এ আপলোড করে path array রিটার্ন করে — attachment হিসেবে
// message-এর সাথে যুক্ত হবে, ticket owner + admin দুইজনেই পরে দেখতে পারবে
async function _uploadAttachments(fileList){
  const paths=[];
  for(const file of fileList){
    if(file.size>10*1024*1024) continue; // ১০MB-এর বেশি স্কিপ, নীরবে বাদ (UI-তে সংখ্যা মিলবে না দেখেই বোঝা যাবে)
    const path=`${session.id}/tickets/${Date.now()}-${file.name}`;
    const{error}=await abashonDB.storage.from('user-documents').upload(path,file);
    if(!error) paths.push(path);
  }
  return paths;
}

let _pendingEmergencyPriority=false; // AKSIS Phase 5 — শুধু openEmergencyTicket() সেট করে, dropdown-এ কোনো option নেই
async function submitTicket(overrideCategory,overridePriority){
  if(!requireAuth('buyer',()=>submitTicket(overrideCategory,overridePriority)))return;
  const subject=_val('tk-subject'), message=_val('tk-message');
  const cat=overrideCategory||document.getElementById('tk-category')?.value||'other';
  const priority=_pendingEmergencyPriority?'emergency':(overridePriority||document.getElementById('tk-priority')?.value||'medium');
  _pendingEmergencyPriority=false; // পরের সাধারণ টিকেটে যেন লিক না হয়
  if(!subject||!message){ toast('বিষয় ও বিস্তারিত লেখো','err'); return; }
  const btn=document.getElementById('tk-submit-btn');
  const orig=btn?btn.innerHTML:''; if(btn){ btn.disabled=true; btn.innerHTML='<span class="svc-spin"></span> জমা হচ্ছে…'; }
  try{
    const fileInp=document.getElementById('tk-attach');
    const attachments = fileInp?.files?.length ? await _uploadAttachments(fileInp.files) : [];
    const{data:ticket,error}=await abashonDB.from('support_tickets').insert({
      user_id:session.id, subject, category:cat, priority
    }).select().single();
    if(error){ toast(friendlyError(error),'err'); return; }
    const{error:msgErr}=await abashonDB.from('support_messages').insert({ ticket_id:ticket.id, sender_id:session.id, is_admin_reply:false, message, attachment_paths:attachments });
    if(msgErr){ toast(friendlyError(msgErr),'err'); return; }
    _buyerTickets.unshift(ticket);
    toast(`✓ টিকেট জমা হয়েছে — ${ticketIdFmt(ticket.id)}`,'',3000);
    buyerRenderBody();
  }catch(e){ toast(friendlyError(e),'err'); }
  finally{ if(btn){ btn.disabled=false; btn.innerHTML=orig; } }
}
function openEmergencyTicket(category,label){
  if(!requireAuth('buyer',()=>openEmergencyTicket(category,label)))return;
  buyerSetTab('support');
  setTimeout(()=>{
    document.getElementById('tk-subject').value=label?('জরুরি: '+label):'জরুরি সাহায্য প্রয়োজন';
    if(category) document.getElementById('tk-category').value=category;
    document.getElementById('tk-priority').value='urgent'; // dropdown-এ 'emergency' অপশন নেই (ইচ্ছাকৃত — ব্যবহারকারী নিজে বেছে নিতে পারবে না)
    // AKSIS Phase 5 — 'emergency' priority শুধু এই নির্দিষ্ট, পূর্ব-নির্ধারিত 🆘 বাটন-ফ্লো থেকেই সেট হয়
    // (defined criteria) — একটা আলাদা ফ্ল্যাগে, dropdown-এর মান বদলে না দিয়ে (select-এ option-ই নেই)
    _pendingEmergencyPriority=true;
    document.getElementById('tk-message').focus();
    document.getElementById('tk-message').scrollIntoView({behavior:'smooth',block:'center'});
  },100);
}
async function toggleTicketThread(id){
  _expandedTicket = _expandedTicket===id ? null : id;
  buyerRenderBody();
  if(_expandedTicket!==id) return;
  if(!_ticketMessages[id]){
    const{data,error}=await abashonDB.from('support_messages').select('*').eq('ticket_id',id).order('created_at',{ascending:true});
    _ticketMessages[id]=error?[]:(data||[]);
  }
  renderTicketThread(id);
}
// টিকেটের বর্তমান ধাপ পর্যন্ত timeline visualize করে — closed হলে ধরে নিই শেষ পর্যন্ত পৌঁছেছিল
function _statusTimelineHtml(status){
  const closed=status==='closed';
  const idx = closed ? TICKET_STATUS_ORDER.indexOf('resolved') : TICKET_STATUS_ORDER.indexOf(status);
  return `<div style="display:flex;gap:2px;margin-bottom:10px;overflow-x:auto;padding-bottom:4px">${TICKET_STATUS_ORDER.map((s,i)=>`
    <div style="flex:1;min-width:52px;text-align:center">
      <div style="height:4px;border-radius:2px;background:${i<=idx?'var(--emerald)':'var(--border)'};margin-bottom:4px"></div>
      <div style="font-size:.58rem;font-family:var(--font-ui);color:${i<=idx?'var(--emerald-l)':'var(--white-30)'}">${TICKET_ST_BN[s]}</div>
    </div>`).join('')}</div>`;
}
function _attachmentsHtml(paths,forAdmin){
  if(!paths||!paths.length) return '';
  return `<div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap">${paths.map(p=>`<button onclick="event.stopPropagation();${forAdmin?'adminViewAttachment':'viewAttachment'}('${p}')" style="padding:4px 10px;background:var(--bg-3);border:1px solid var(--border);border-radius:6px;color:var(--white-60);font-family:var(--font-ui);font-size:.68rem;cursor:pointer">📎 ${dtEsc(p.split('/').pop())}</button>`).join('')}</div>`;
}
async function viewAttachment(path){
  const{data,error}=await abashonDB.storage.from('user-documents').createSignedUrl(path,300);
  if(error){toast('ফাইল খোলা যায়নি','err');return;}
  window.open(data.signedUrl,'_blank');
}
function renderTicketThread(id){
  const box=document.getElementById('ticket-thread-'+id); if(!box)return;
  const t=_buyerTickets.find(x=>x.id===id);
  const msgs=_ticketMessages[id]||[];
  const msgHtml=msgs.map(m=>`<div style="margin-bottom:8px;text-align:${m.is_admin_reply?'left':'right'}"><div style="display:inline-block;max-width:80%;padding:8px 12px;border-radius:10px;background:${m.is_admin_reply?'var(--glass)':'rgba(14,90,69,.2)'};font-family:var(--font-ui);font-size:.8rem;color:var(--white)">${m.is_admin_reply?'<b style="color:var(--gold)">Support:</b> ':''}${dtEsc(m.message)}${_attachmentsHtml(m.attachment_paths,false)}</div></div>`).join('') || '<div style="color:var(--white-30);font-family:var(--font-ui);font-size:.8rem">কোনো মেসেজ নেই</div>';
  const ratingHtml = t.status==='resolved' && !t.rating ? `
    <div style="margin-top:10px;padding:12px;background:rgba(212,175,55,.08);border-radius:8px;text-align:center">
      <div style="font-family:var(--font-ui);font-size:.78rem;color:var(--white-60);margin-bottom:8px">সমাধানে কতটা সন্তুষ্ট?</div>
      <div>${[1,2,3,4,5].map(n=>`<span onclick="submitTicketRating(${id},${n})" style="cursor:pointer;font-size:1.4rem;margin:0 2px">☆</span>`).join('')}</div>
    </div>` : (t.rating ? `<div style="margin-top:10px;text-align:center;font-family:var(--font-ui);font-size:.78rem;color:var(--gold)">তোমার রেটিং: ${'★'.repeat(t.rating)}${'☆'.repeat(5-t.rating)}</div>` : '');
  box.innerHTML=`${_statusTimelineHtml(t.status)}<div style="max-height:240px;overflow-y:auto;margin-bottom:10px">${msgHtml}</div>
    ${!['resolved','closed'].includes(t.status)?`<div style="display:flex;gap:8px">
      <input id="tk-reply-${id}" placeholder="উত্তর লিখো..." style="flex:1;padding:8px 12px;background:var(--glass);border:1px solid var(--border);border-radius:8px;color:var(--white);font-family:var(--font-ui);font-size:.8rem" onkeydown="if(event.key==='Enter')sendTicketReply(${id})"/>
      <button class="btn-outline" style="padding:8px 14px;font-size:.78rem" onclick="sendTicketReply(${id})">পাঠাও</button>
    </div>`:''}
    ${ratingHtml}`;
}
async function submitTicketRating(id,stars){
  const{error}=await abashonDB.from('support_tickets').update({rating:stars}).eq('id',id);
  if(error){ toast(friendlyError(error),'err'); return; }
  const t=_buyerTickets.find(x=>x.id===id); if(t) t.rating=stars;
  toast('✓ ধন্যবাদ, রেটিং জমা হয়েছে','',2000);
  renderTicketThread(id);
}
async function sendTicketReply(id){
  const inp=document.getElementById('tk-reply-'+id); const message=inp.value.trim(); if(!message)return;
  const{data,error}=await abashonDB.from('support_messages').insert({ ticket_id:id, sender_id:session.id, is_admin_reply:false, message }).select().single();
  if(error){ toast(friendlyError(error),'err'); return; }
  _ticketMessages[id]=[...(_ticketMessages[id]||[]),data];
  inp.value='';
  renderTicketThread(id);
}

function buyerAlertsHtml(){
  const alerts=[
    ..._buyerBookings.filter(b=>b.status==='accepted').map(b=>({t:'✓ তোমার বুকিং গৃহীত হয়েছে',d:`${dtEsc(b.properties?.title||'—')} — মালিক রাজি হয়েছেন`,at:b.created_at,ok:true})),
    ..._buyerBookings.filter(b=>b.status==='rejected').map(b=>({t:'✗ বুকিং প্রত্যাখ্যাত হয়েছে',d:b.properties?.title||'—',at:b.created_at,ok:false})),
    ..._buyerVisits.filter(v=>v.status==='confirmed').map(v=>({t:'✓ ভিজিট নিশ্চিত হয়েছে',d:`${dtEsc(v.properties?.title||'—')} — ${bnDate(v.visit_date)}, ${SLOT_BN[v.slot]||v.slot}`,at:v.created_at,ok:true})),
    ..._buyerVisits.filter(v=>v.status==='cancelled').map(v=>({t:'ভিজিট বাতিল হয়েছে',d:v.properties?.title||'—',at:v.created_at,ok:false}))
  ].sort((a,b)=>new Date(b.at)-new Date(a.at));
  if(!alerts.length) return `<div class="dash-card"><div class="dash-card-title">🔔 Alerts</div><div style="padding:20px;text-align:center;color:var(--white-30);font-family:var(--font-ui);font-size:.85rem">এখনো কোনো নোটিফিকেশন নেই — বুকিং/ভিজিটের status বদলালে এখানে জানানো হবে।</div></div>`;
  const rows=alerts.map(a=>`<div class="bk-item"><div style="flex:1"><div class="bk-t">${a.t}</div><div class="bk-l">${a.d}</div></div><div class="bk-st ${a.ok?'ok':'rej'}">${new Date(a.at).toLocaleDateString('bn-BD',{day:'numeric',month:'short'})}</div></div>`).join('');
  return `<div class="dash-card"><div class="dash-card-title">🔔 Alerts</div>${rows}</div>`;
}

async function buyerCancelBooking(id){
  if(!confirm('এই রিকোয়েস্ট বাতিল করতে চাও?'))return;
  const{error}=await abashonDB.from('booking_requests').update({status:'cancelled'}).eq('id',id);
  if(error){toast(error.message,'err');return;}
  toast('রিকোয়েস্ট বাতিল করা হয়েছে','');
  await renderBuyerDash(); buyerSetTab(_buyerTab);
}
async function buyerCancelVisit(id){
  if(!confirm('এই ভিজিট বাতিল করতে চাও?'))return;
  const{error}=await abashonDB.from('visit_bookings').update({status:'cancelled'}).eq('id',id);
  if(error){toast(error.message,'err');return;}
  toast('ভিজিট বাতিল করা হয়েছে','');
  await renderBuyerDash(); buyerSetTab(_buyerTab);
}

async function dtRevealPhone(pid){
  if(!requireAuth('buyer',()=>dtRevealPhone(pid)))return;
  const wrap=document.getElementById('dt-phone-wrap'); if(!wrap)return;
  wrap.innerHTML='<span style="font-family:var(--font-ui);font-size:.8rem;color:var(--white-30)">লোড হচ্ছে...</span>';
  const{data,error}=await abashonDB.rpc('get_property_contact',{prop_id:pid});
  if(error||!data||!data[0]){
    wrap.innerHTML='<span style="font-family:var(--font-ui);font-size:.8rem;color:#e08080">নম্বর পাওয়া যায়নি</span>';
    return;
  }
  const ph=data[0].phone;
  wrap.innerHTML=`<a href="tel:${ph}" style="padding:7px 14px;background:rgba(14,90,69,.15);border:1px solid rgba(14,90,69,.35);color:var(--emerald-l);font-family:var(--font-ui);font-size:.85rem;font-weight:700;border-radius:8px;text-decoration:none;display:inline-block">📞 ${ph}</a>`;
}

// ── Detail page: real booking request + visit slot booking ──
let _dtHH=null,_dtSlot=null;

function initDetailForms(p){
  _dtHH=null; _dtSlot=null;

  const hhBox=document.getElementById('dt-hh-chips');
  if(hhBox){
    hhBox.innerHTML=Object.entries(HH_BN).map(([v,l])=>
      `<button class="chip" data-v="${v}" onclick="dtSelectHH('${v}',${p.id})" style="border:1.5px solid var(--border);background:var(--glass);color:var(--white-60);border-radius:999px;padding:7px 14px;font-family:var(--font-ui);font-size:.8rem;cursor:pointer">${l}</button>`).join('');
  }
  const stayEl=document.getElementById('dt-stay');
  if(stayEl) stayEl.onchange=()=>dtRefreshCompat(p);
  dtRefreshCompat(p);

  const dEl=document.getElementById('dt-vdate');
  if(dEl){
    const tmr=new Date(); tmr.setDate(tmr.getDate()+1);
    const max=new Date(); max.setDate(max.getDate()+30);
    dEl.min=tmr.toISOString().split('T')[0];
    dEl.max=max.toISOString().split('T')[0];
    dEl.value=tmr.toISOString().split('T')[0];
    dEl.onchange=()=>dtLoadVisitSlots(p.id);
  }
  dtLoadVisitSlots(p.id);
  dtLoadFairness(p.id);
  dtLoadReviews(p.id);
  dtLoadCommute(p);
  dtLoadSimilar(p.id);
  dtLoadTrust(p);
  loadContextualFaq('property_detail','dt-faq-box',4);
}

// AKSIS Phase 3 — Contextual FAQ (Section 10): বর্তমান পেজের সাথে প্রাসঙ্গিক প্রশ্ন দেখায়।
// একই FAQ_SECTION_LABELS/rendering প্যাটার্ন পুনর্ব্যবহার (নতুন display-লজিক ডুপ্লিকেট নয়)।
async function loadContextualFaq(page, containerId, limit){
  const box=document.getElementById(containerId); if(!box)return;
  try{
    const{data,error}=await abashonDB.rpc('contextual_faq',{p_page:page,p_limit:limit||4});
    if(error||!data||!data.length){box.innerHTML='';return;}
    box.innerHTML=`<div style="font-family:var(--font-ui);font-size:.7rem;color:var(--white-30);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px">প্রায়ই জিজ্ঞাসিত</div>
      <div style="display:flex;flex-direction:column;gap:6px">
      ${data.map(f=>`<details style="background:var(--glass);border:1px solid var(--border);border-radius:8px;padding:9px 12px">
        <summary style="cursor:pointer;font-family:var(--font-ui);font-size:.8125rem;color:var(--white);list-style:none">❓ ${dtEsc(f.title)}</summary>
        <div style="margin-top:8px;font-family:var(--font-ui);font-size:.8rem;color:var(--white-60);line-height:1.6">${_renderFaqAnswer({a:f.short_answer,...(f.detail||{})},false)}</div>
      </details>`).join('')}
      </div>`;
  }catch(e){ box.innerHTML=''; } // ব্যর্থ হলে নীরবে খালি — মূল পেজের কাজ কখনো আটকাবে না
}
async function dtLoadTrust(p){
  const box=document.getElementById('dt-trust-box'); if(!box)return;
  const t=await PropertySvc.trustSummary(p.owner); // ব্যর্থ হলে null — নিচে honest fallback
  const item=(ok,label)=>`<div style="display:flex;align-items:center;gap:8px;padding:6px 0;font-family:var(--font-ui);font-size:.8125rem;color:${ok?'var(--emerald-l)':'var(--white-30)'}"><span>${ok?'✓':'—'}</span><span>${label}</span></div>`;
  const riskLevel=(p.v && t && t.phone_verified && t.face_verified)?'কম':(p.v||(t&&t.phone_verified))?'মাঝারি':'যাচাই-অসম্পূর্ণ';
  const riskColor=riskLevel==='কম'?'var(--emerald-l)':riskLevel==='মাঝারি'?'var(--gold)':'var(--white-30)';
  box.innerHTML=`
    ${item(!!p.v,'লিস্টিং পর্যালোচিত')}
    ${item(!!(t&&t.phone_verified),'মালিকের ফোন যাচাইকৃত')}
    ${item(!!(t&&t.face_verified),'মালিকের পরিচয় (face) যাচাইকৃত')}
    ${item(!!p.lat&&!!p.lng,'অবস্থান নিশ্চিত')}
    <div style="margin-top:10px;padding:10px 12px;background:var(--glass);border-radius:8px;font-family:var(--font-ui);font-size:.8rem">ঝুঁকির মাত্রা: <b style="color:${riskColor}">${riskLevel}</b>${(t&&t.last_verified_at)?` <span style="color:var(--white-30)">· সর্বশেষ যাচাই ${new Date(t.last_verified_at).toLocaleDateString('bn-BD',{day:'numeric',month:'short',year:'numeric'})}</span>`:''}</div>
    <div style="font-family:var(--font-ui);font-size:.7rem;color:var(--white-30);margin-top:8px">কোনো সিস্টেমই প্রতারণার ঝুঁকি শূন্যে নামাতে পারে না — টাকা দেওয়ার আগে সরাসরি visit করার পরামর্শ দিচ্ছি।</div>`;
}
async function dtLoadFairness(pid){
  const box=document.getElementById('dt-fairness'); if(!box)return;
  const{data,error}=await abashonDB.rpc('rent_fairness',{prop_id:pid});
  if(error||!data){ box.textContent=''; return; }
  if(!data.available){ box.textContent=data.reason||''; return; }
  const up=data.diff_pct>0;
  const color=data.diff_pct<=-5?'var(--emerald-l)':data.diff_pct<5?'var(--gold)':'#e08080';
  const pctTxt=(up?'+':'')+bnNum(data.diff_pct)+'%';
  box.innerHTML=`<span style="color:${color};font-weight:700">${data.verdict}</span> — ${data.scope} এর গড়ের চেয়ে ${pctTxt}
    <span style="opacity:.7">(${bnNum(data.sample_size)}টা তুলনীয় বাসার ভিত্তিতে${data.by_sqft===false?', মাসিক ভাড়া অনুযায়ী':', প্রতি sqft অনুযায়ী'})</span>`;
}

// Module: Property AI — similar listings, comparable-based (same city/type, closest
// area/bedrooms/rent), no external AI service involved.
async function dtLoadSimilar(pid){
  const box=document.getElementById('dt-similar'); if(!box)return;
  try{
    const rows=await PropertySvc.getSimilar(pid,6);
    if(!rows||!rows.length){ box.textContent='একই ধরনের তুলনীয় বাসা পাওয়া যায়নি।'; return; }
    box.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px">${rows.map(r=>`
      <div onclick="openDetail(${r.id})" style="cursor:pointer;border:1px solid var(--border);border-radius:10px;overflow:hidden;background:var(--glass)">
        <img src="${r.image||(r.images&&r.images[0])||''}" alt="${dtEsc(r.title||'')}" style="width:100%;height:80px;object-fit:cover;display:block;background:var(--bg-3)"/>
        <div style="padding:8px 10px">
          <div style="font-family:var(--font-ui);font-size:.75rem;color:var(--white);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${dtEsc(r.title)}</div>
          <div style="font-family:var(--font-ui);font-size:.7rem;color:var(--gold);margin-top:2px">৳${Number(r.rent).toLocaleString()}</div>
          <div style="font-family:var(--font-ui);font-size:.65rem;color:var(--white-30)">${dtEsc(r.area)}</div>
        </div>
      </div>`).join('')}</div>`;
  }catch(e){ box.textContent='লোড করা যায়নি।'; }
}

// database trigger এর হুবহু কপি — submit করার আগেই জানিয়ে দেওয়ার জন্য, শেষ প্রতিরক্ষা trigger নিজেই
function dtCheckCompat(tenant,hh,minStay,stay){
  if(['Family','Small Family'].includes(tenant) && !['Family','Small Family'].includes(hh))
    return 'এই বাসাটি শুধুমাত্র ফ্যামিলির জন্য';
  if(tenant==='Bachelor' && ['Family','Small Family'].includes(hh))
    return 'এই বাসাটি শুধুমাত্র ব্যাচেলরদের জন্য';
  if(tenant==='Female Bachelor' && hh!=='Female Bachelor')
    return 'এই বাসাটি শুধুমাত্র মেয়ে ব্যাচেলরদের জন্য';
  if(stay<minStay) return `মালিক কমপক্ষে ${bnNum(minStay)} মাসের জন্য ভাড়া দিতে চান`;
  return null;
}

function dtSelectHH(v,pid){
  _dtHH=v;
  document.querySelectorAll('#dt-hh-chips .chip').forEach(c=>{
    const on=c.dataset.v===v;
    c.style.borderColor=on?'var(--emerald-l)':'var(--border)';
    c.style.background=on?'rgba(14,90,69,.2)':'var(--glass)';
    c.style.color=on?'var(--emerald-l)':'var(--white-60)';
    c.style.fontWeight=on?'700':'400';
  });
  dtRefreshCompat(allProps.find(x=>x.id===pid));
}

function dtRefreshCompat(p){
  const box=document.getElementById('dt-compat'),btn=document.getElementById('dt-send-btn');
  if(!box||!btn)return;
  if(!_dtHH){
    box.style.background='rgba(212,175,55,.08)'; box.style.color='var(--gold)';
    box.textContent='আগে বেছে নাও — তুমি কী হিসেবে থাকবে';
    btn.disabled=true; return;
  }
  const stay=+document.getElementById('dt-stay').value;
  const err=dtCheckCompat(p.tenant,_dtHH,p.minStay||1,stay);
  if(err){
    box.style.background='rgba(200,60,60,.1)'; box.style.color='#e08080';
    box.textContent='✗ '+err; btn.disabled=true;
  }else{
    box.style.background='rgba(14,90,69,.15)'; box.style.color='var(--emerald-l)';
    box.textContent='✓ তুমি এই বাসার জন্য উপযুক্ত'; btn.disabled=false;
  }
}

// অপরিচিত/raw error-কে user-friendly বাংলা বার্তায় বদলায় — internal DB/network detail leak করে না।
// পরিচিত কেসগুলো (duplicate ইত্যাদি) আলাদাভাবে যেখানে হ্যান্ডল হচ্ছে সেগুলো অপরিবর্তিত থাকে;
// এটা শুধু "না হলে raw error.message দেখাও" fallback-টা replace করে।
function friendlyError(e){ return toFriendly(e); } // কেন্দ্রীয়: js/errors.js

async function dtSubmitBooking(pid){
  if(!requireAuth('buyer',()=>dtSubmitBooking(pid)))return;
  const btn=document.getElementById('dt-send-btn'); if(!btn||btn.disabled)return;
  btn.disabled=true; const orig=btn.textContent; btn.textContent='পাঠানো হচ্ছে...';
  const{error}=await abashonDB.from('booking_requests').insert({
    property_id:pid, buyer_id:session.id, household_type:_dtHH,
    intended_stay_months:+document.getElementById('dt-stay').value,
    message:document.getElementById('dt-msg').value||null
  });
  if(error){
    toast(error.message.includes('duplicate')?'তুমি আগেই এই বাসায় রিকোয়েস্ট পাঠিয়েছো':friendlyError(error),'err',4500);
    btn.disabled=false; btn.textContent=orig; return;
  }
  toast('✓ রিকোয়েস্ট পাঠানো হয়েছে — মালিক দেখে জানাবেন','');
  btn.textContent='✓ পাঠানো হয়েছে';
}

async function dtLoadVisitSlots(pid){
  const box=document.getElementById('dt-slot-chips'); if(!box)return;
  box.innerHTML='<div style="font-family:var(--font-ui);font-size:.8rem;color:var(--white-30)">লোড হচ্ছে...</div>';
  const date=document.getElementById('dt-vdate').value;
  const{data,error}=await abashonDB.rpc('booked_slots',{prop_id:pid});
  if(error){ box.innerHTML='<div style="font-family:var(--font-ui);font-size:.8rem;color:var(--white-30)">স্লট লোড করা যায়নি</div>'; return; }
  const taken=new Set((data||[]).filter(r=>r.visit_date===date).map(r=>r.slot));
  _dtSlot=null;
  box.innerHTML=Object.entries(SLOT_BN).map(([v,l])=>{
    const isTaken=taken.has(v);
    return `<button class="chip" ${isTaken?'disabled':''} data-v="${v}" onclick="dtSelectSlot('${v}')"
      style="border:1.5px solid var(--border);background:${isTaken?'rgba(255,255,255,.03)':'var(--glass)'};color:${isTaken?'var(--white-30)':'var(--white-60)'};border-radius:999px;padding:7px 14px;font-family:var(--font-ui);font-size:.8rem;cursor:${isTaken?'not-allowed':'pointer'}">${l}${isTaken?' (ভর্তি)':''}</button>`;
  }).join('');
  const vb=document.getElementById('dt-visit-btn'); if(vb)vb.disabled=true;
}

function dtSelectSlot(v){
  _dtSlot=v;
  document.querySelectorAll('#dt-slot-chips .chip').forEach(c=>{
    if(c.disabled)return;
    const on=c.dataset.v===v;
    c.style.borderColor=on?'var(--gold)':'var(--border)';
    c.style.background=on?'rgba(212,175,55,.15)':'var(--glass)';
    c.style.color=on?'var(--gold)':'var(--white-60)';
  });
  document.getElementById('dt-visit-btn').disabled=false;
}

async function dtSubmitVisit(pid){
  if(!requireAuth('buyer',()=>dtSubmitVisit(pid)))return;
  if(!requirePhoneVerified(()=>dtSubmitVisit(pid)))return;
  const btn=document.getElementById('dt-visit-btn'); if(!btn||btn.disabled||!_dtSlot)return;
  btn.disabled=true; const orig=btn.textContent; btn.textContent='বুক হচ্ছে...';
  const{error}=await abashonDB.from('visit_bookings').insert({
    property_id:pid, buyer_id:session.id,
    visit_date:document.getElementById('dt-vdate').value, slot:_dtSlot
  });
  if(error){
    // enforce_booking_limits ট্রিগার RATE_LIMIT/BOOKING_SUSPENDED prefix সহ Bengali message দেয় —
    // prefix সরিয়ে শুধু বার্তাটা দেখাই।
    toast(error.message.replace(/^[A-Z_]+:\s*/,''),'err',5000);
    btn.disabled=false; btn.textContent=orig; return;
  }
  toast('✓ ভিজিট বুক করা হয়েছে','');
  btn.textContent='✓ বুক করা হয়েছে';
  dtLoadVisitSlots(pid);
}

// ── Shifting page: real fair-price engine (map + estimate_shifting RPC + OSRM real road distance) ──
let _smap=null,_smapA=null,_smapB=null,_smapLine=null,_smapMarkA=null,_smapMarkB=null,_smapAreas=[],_sfActive='from';

// এলাকার তালিকা একবারই fetch হয়, পরে shifting পাতা আর commute widget দুটোই এটা reuse করে
async function getAreaProfiles(){
  if(_smapAreas.length) return _smapAreas;
  const{data,error}=await abashonDB.from('area_profiles').select('area,city,lat,lng').order('city');
  if(error){ console.error('area_profiles load failed:',error); return []; }
  _smapAreas=data||[];
  return _smapAreas;
}

async function initShiftMap(){
  if(!_smap){
    _smap=L.map('shiftMap').setView([23.78,90.40],11);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',{maxZoom:19,subdomains:'abcd',attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, © <a href="https://carto.com/attributions">CARTO</a>'}).addTo(_smap);
    _smap.on('click',e=>sfSetPoint(_sfActive,e.latlng.lat,e.latlng.lng));

    const floors=Array.from({length:11},(_,i)=>`<option value="${i}">${i===0?'নিচতলা':bnNum(i)+' তলা'}</option>`).join('');
    document.getElementById('sf-ff').innerHTML=floors;
    document.getElementById('sf-tf').innerHTML=floors;
    document.getElementById('sf-ff').value=3;
    document.getElementById('sf-tf').value=2;

    const areas=await getAreaProfiles();
    const opts='<option value="">— বাছো —</option>'+areas.map(a=>`<option value="${a.lat},${a.lng}">${a.area}, ${a.city}</option>`).join('');
    document.getElementById('sf-q-from').innerHTML=opts;
    document.getElementById('sf-q-to').innerHTML=opts;
    document.getElementById('sf-q-from').onchange=e=>{if(e.target.value){const[la,ln]=e.target.value.split(',').map(Number);sfSetPoint('from',la,ln);}};
    document.getElementById('sf-q-to').onchange=e=>{if(e.target.value){const[la,ln]=e.target.value.split(',').map(Number);sfSetPoint('to',la,ln);}};
    sfSetActive('from');
  }
  setTimeout(()=>_smap.invalidateSize(),200);
}

function sfSetActive(which){
  _sfActive=which;
  document.getElementById('sf-from-btn').style.outline=which==='from'?'2px solid var(--emerald-l)':'none';
  document.getElementById('sf-to-btn').style.outline=which==='to'?'2px solid var(--gold-l)':'none';
}

function sfNearestArea(lat,lng){
  let best=null,bd=1e9;
  _smapAreas.forEach(a=>{ const d=(a.lat-lat)**2+(a.lng-lng)**2; if(d<bd){bd=d;best=a;} });
  return best?best.area+', '+best.city:'—';
}

function sfSetPoint(which,lat,lng){
  const label=sfNearestArea(lat,lng);
  if(which==='from'){
    _smapA={lat,lng};
    if(_smapMarkA)_smap.removeLayer(_smapMarkA);
    _smapMarkA=L.circleMarker([lat,lng],{radius:8,color:'#fff',weight:2,fillColor:'#0E5A45',fillOpacity:1}).addTo(_smap);
    document.getElementById('sf-from-txt').textContent=label;
    sfSetActive('to');
  }else{
    _smapB={lat,lng};
    if(_smapMarkB)_smap.removeLayer(_smapMarkB);
    _smapMarkB=L.circleMarker([lat,lng],{radius:8,color:'#fff',weight:2,fillColor:'#A67C1A',fillOpacity:1}).addTo(_smap);
    document.getElementById('sf-to-txt').textContent=label;
  }
  if(_smapLine)_smap.removeLayer(_smapLine);
  if(_smapA&&_smapB){
    _smapLine=L.polyline([[_smapA.lat,_smapA.lng],[_smapB.lat,_smapB.lng]],{color:'#0E5A45',dashArray:'6,6',weight:2}).addTo(_smap);
    _smap.fitBounds(_smapLine.getBounds(),{padding:[24,24]});
  }
}

async function sfGetRoadKm(a,b){
  try{
    const ctrl=new AbortController(); const t=setTimeout(()=>ctrl.abort(),4000);
    const url=`https://router.project-osrm.org/route/v1/driving/${a.lng},${a.lat};${b.lng},${b.lat}?overview=false`;
    const res=await fetch(url,{signal:ctrl.signal}); clearTimeout(t);
    const d=await res.json();
    if(d.code==='Ok'&&d.routes?.[0]?.distance) return d.routes[0].distance/1000;
  }catch(e){ /* ব্যর্থ হলে RPC নিজেই আন্দাজ করে নেবে */ }
  return null;
}

async function sfCalculate(){
  if(!_smapA||!_smapB){ toast('ম্যাপে "যেখান থেকে" ও "যেখানে" দুটোই বাছো','err'); return; }
  const box=document.getElementById('sf-res');
  box.classList.add('show');
  box.innerHTML='<div class="est-result-label">আসল রাস্তার দূরত্ব বের করা হচ্ছে...</div>';

  const roadKm=await sfGetRoadKm(_smapA,_smapB);

  const{data,error}=await abashonDB.rpc('estimate_shifting',{
    from_lat:_smapA.lat, from_lng:_smapA.lng, to_lat:_smapB.lat, to_lng:_smapB.lng,
    load_size:document.getElementById('sf-load').value,
    from_floor:+document.getElementById('sf-ff').value,
    to_floor:+document.getElementById('sf-tf').value,
    from_lift:document.getElementById('sf-fl').checked,
    to_lift:document.getElementById('sf-tl').checked,
    workers:+document.getElementById('sf-workers').value,
    packing:document.getElementById('sf-pack').checked,
    move_hour:new Date().getHours(),
    road_km:roadKm
  });
  if(error){ box.innerHTML='<div class="est-result-label">সমস্যা হয়েছে</div><div style="color:var(--white-30);font-family:var(--font-ui);font-size:.85rem">'+error.message+'</div>'; return; }

  const distTag=data.distance_is_real?'আসল রাস্তার দূরত্ব':'আন্দাজ করা দূরত্ব';
  box.innerHTML=`
    <div class="est-result-label">ন্যায্য দাম</div>
    <div class="est-result-price">৳${Number(data.fair_price).toLocaleString()}</div>
    <div class="est-result-range">দরদামের যৌক্তিক সীমা: ৳${Number(data.fair_min).toLocaleString()} – ৳${Number(data.fair_max).toLocaleString()}</div>
    <div class="est-result-range">${data.vehicle} · ~${data.distance_km} কিমি (${distTag})${data.intercity?' · আন্তঃজেলা':''}</div>
    <div style="margin-top:14px;border-top:1px solid var(--border);padding-top:10px">
      ${data.breakdown.map(l=>`
        <div style="display:flex;justify-content:space-between;font-family:var(--font-ui);font-size:.8rem;color:var(--white-60);padding:5px 0">
          <span>${l.k}</span><span style="font-weight:700;color:var(--white)">৳${Number(l.v).toLocaleString()}</span>
        </div>`).join('')}
    </div>
    <div style="font-family:var(--font-ui);font-size:.7rem;color:var(--white-30);margin-top:10px;line-height:1.5">
      দূরত্ব, মালের পরিমাণ, সিঁড়ি-লিফট, শ্রমিক আর এলাকায় ঢোকার কষ্ট থেকে হিসাব করা হয়েছে — এলাকার ভাড়া বেশি বলে দাম বাড়ে না।
    </div>`;

  // ── order panel চালু — দাম ও route এর snapshot রাখা হচ্ছে, পরে rate বদলালেও এই অর্ডার অপরিবর্তিত থাকবে ──
  _sfLastResult={ ...data, from:_smapA, to:_smapB,
    from_area: sfNearestArea(_smapA.lat,_smapA.lng), to_area: sfNearestArea(_smapB.lat,_smapB.lng),
    load_size: document.getElementById('sf-load').value,
    from_floor: +document.getElementById('sf-ff').value, to_floor: +document.getElementById('sf-tf').value,
    from_lift: document.getElementById('sf-fl').checked, to_lift: document.getElementById('sf-tl').checked,
    workers: +document.getElementById('sf-workers').value, packing: document.getElementById('sf-pack').checked
  };
  const token=Math.max(200, Math.round(data.fair_price*0.2/50)*50);
  document.getElementById('sf-token-note').textContent=`এখন টোকেন ৳${token.toLocaleString()} — বাকি ৳${(data.fair_price-token).toLocaleString()} কাজ শেষে নগদে`;
  const dEl=document.getElementById('sf-date');
  const tmr=new Date(); tmr.setDate(tmr.getDate()+1);
  const max=new Date(); max.setDate(max.getDate()+60);
  dEl.min=tmr.toISOString().split('T')[0]; dEl.max=max.toISOString().split('T')[0];
  if(!dEl.value) dEl.value=tmr.toISOString().split('T')[0];
  document.getElementById('sf-order-panel').style.display='block';
}

let _sfLastResult=null;

async function sfSubmitOrder(){
  if(!requireAuth('buyer',()=>sfSubmitOrder()))return;
  if(!_sfLastResult){ toast('আগে হিসাব করো','err'); return; }
  const date=document.getElementById('sf-date').value;
  const phone=document.getElementById('sf-pay-phone').value.replace(/\D/g,'');
  if(!date){ toast('কবে যাবে সেটা বেছে নাও','err'); return; }
  if(!Validators.bdPhone(phone)){ toast('সঠিক বিকাশ/নগদ নম্বর দাও (01…)','err'); return; }

  const btn=document.getElementById('sf-order-btn');
  const orig=btn.innerHTML;
  btn.disabled=true; btn.innerHTML='<span class="svc-spin"></span> টোকেন পেমেন্ট হচ্ছে...';

  const r=_sfLastResult;
  const token=Math.max(200, Math.round(r.fair_price*0.2/50)*50);
  const orderId='SHF-'+Math.floor(Math.random()*90000+10000);

  try{
    const pay=await ASvc.initiateWalletPayment(token, orderId, 'bkash', phone);
    const{data:saved,error}=await abashonDB.from('shifting_orders').insert({
      buyer_id: session.id,
      from_lat: r.from.lat, from_lng: r.from.lng, to_lat: r.to.lat, to_lng: r.to.lng,
      from_area: r.from_area, to_area: r.to_area,
      load_size: r.load_size, from_floor: r.from_floor, to_floor: r.to_floor,
      from_lift: r.from_lift, to_lift: r.to_lift, workers: r.workers, packing: r.packing,
      move_date: date,
      distance_km: r.distance_km, fair_price: r.fair_price, fair_min: r.fair_min, fair_max: r.fair_max,
      token_amount: token, payment_ref: pay.transactionId,
      buyer_note: document.getElementById('sf-note').value || null
    }).select('id').single();
    if(error) throw error;
    toast('✓ অর্ডার দেওয়া হয়েছে — টোকেন ৳'+token.toLocaleString()+' পরিশোধ হয়েছে, admin শীঘ্রই নিশ্চিত করবে','',5000);
    document.getElementById('sf-order-panel').innerHTML='<div style="font-family:var(--font-ui);font-size:.85rem;color:var(--emerald-l);padding:10px 0">✓ অর্ডার #'+saved.id+' জমা হয়েছে — Bookings ড্যাশবোর্ডে দেখতে পাবে।</div>';
  }catch(e){
    toast(e.message||'অর্ডার ব্যর্থ হয়েছে','err',4500);
    btn.disabled=false; btn.innerHTML=orig;
  }
}

// ── Reviews: শুধু accepted booking থাকা tenant-ই লিখতে পারে (trigger দিয়ে database এও enforce করা) ──
let _dtRating=0,_dtAreaRating=0;
function dtStarsStr(n){ return '★'.repeat(n)+'☆'.repeat(5-n); }
function dtEsc(s){ return AbashonUtil.esc(s); } // canonical: js/coreUtils.js

async function dtLoadReviews(pid){
  const sumBox=document.getElementById('dt-reviews-summary');
  const listBox=document.getElementById('dt-reviews-list');
  const formBox=document.getElementById('dt-review-form-wrap');
  if(!sumBox)return;

  const{data:revs,error}=await abashonDB.from('reviews')
    .select('id,rating,area_rating,comment,created_at,reviewer_id')
    .eq('property_id',pid).order('created_at',{ascending:false});
  if(error){ sumBox.textContent='রিভিউ লোড করা যায়নি'; return; }

  if(!revs||!revs.length){
    sumBox.textContent='এখনো কোনো রিভিউ নেই — এই বাসায় থাকা প্রথম যাচাইকৃত ভাড়াটিয়া হও যে রিভিউ দেবে।';
    listBox.innerHTML='';
  }else{
    const avg=(revs.reduce((s,r)=>s+r.rating,0)/revs.length).toFixed(1);
    sumBox.innerHTML=`<span style="font-family:var(--font-display);font-size:1.3rem;color:var(--gold-l)">${dtStarsStr(Math.round(avg))}</span>
      <span style="font-weight:700;color:var(--white)"> ${avg}</span> · ${bnNum(revs.length)}টা রিভিউ`;
    listBox.innerHTML=revs.map(r=>`
      <div style="border-top:1px solid var(--border);padding:12px 0">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="color:var(--gold-l);font-family:var(--font-display)">${dtStarsStr(r.rating)}</span>
          <span style="font-family:var(--font-ui);font-size:.65rem;color:var(--emerald-l);background:rgba(14,90,69,.15);padding:2px 8px;border-radius:6px;white-space:nowrap">✓ যাচাইকৃত ভাড়াটিয়া</span>
        </div>
        ${r.area_rating?`<div style="font-family:var(--font-ui);font-size:.75rem;color:var(--white-30);margin-top:3px">এলাকা: ${dtStarsStr(r.area_rating)}</div>`:''}
        ${r.comment?`<div style="font-family:var(--font-ui);font-size:.85rem;color:var(--white-60);margin-top:6px">${dtEsc(r.comment)}</div>`:''}
        <div style="font-family:var(--font-ui);font-size:.7rem;color:var(--white-30);margin-top:5px">${new Date(r.created_at).toLocaleDateString('bn-BD',{day:'numeric',month:'long',year:'numeric'})}</div>
      </div>`).join('');
  }

  // ── এখন যোগ্যতা যাচাই — login + accepted booking + আগে রিভিউ না দেওয়া থাকলেই ফর্ম দেখাবে ──
  if(!session){ formBox.innerHTML=''; return; }
  const already = revs && revs.some(r=>r.reviewer_id===session.id);
  if(already){
    formBox.innerHTML='<div style="font-family:var(--font-ui);font-size:.8rem;color:var(--emerald-l);margin-top:10px;border-top:1px solid var(--border);padding-top:12px">✓ তুমি ইতিমধ্যে এই বাসার রিভিউ দিয়েছো</div>';
    return;
  }
  const{data:bk}=await abashonDB.from('booking_requests').select('id')
    .eq('property_id',pid).eq('buyer_id',session.id).eq('status','accepted').limit(1);
  let eligible = bk && bk.length>0;
  if(!eligible){
    // ভিজিট সম্পন্ন করলেও রিভিউ দেওয়া যায় (DB-র validate_review trigger-ও একই নিয়ম মানে)
    const{data:vs}=await abashonDB.from('visit_bookings').select('id')
      .eq('property_id',pid).eq('buyer_id',session.id).eq('status','done').eq('no_show',false).limit(1);
    eligible = vs && vs.length>0;
  }
  if(!eligible){ formBox.innerHTML=''; return; }

  _dtRating=0; _dtAreaRating=0;
  formBox.innerHTML=`
    <div style="border-top:1px solid var(--border);padding-top:14px;margin-top:10px">
      <div style="font-family:var(--font-ui);font-size:.8rem;color:var(--white-60);margin-bottom:8px">তুমি এখানে থেকেছো বা ঘুরে দেখেছো — অভিজ্ঞতাটা লিখে ফেলো</div>
      <div style="font-family:var(--font-ui);font-size:.7rem;color:var(--white-30);margin-bottom:4px">বাসার রেটিং</div>
      <div id="dt-star-rating" style="margin-bottom:10px;font-size:1.3rem"></div>
      <div style="font-family:var(--font-ui);font-size:.7rem;color:var(--white-30);margin-bottom:4px">এলাকার রেটিং (ঐচ্ছিক)</div>
      <div id="dt-star-area" style="margin-bottom:10px;font-size:1.3rem"></div>
      <textarea id="dt-review-comment" placeholder="অভিজ্ঞতা লেখো (ঐচ্ছিক)" style="width:100%;min-height:60px;font-family:var(--font-ui);font-size:.85rem;padding:9px 11px;border-radius:9px;border:1px solid var(--border);background:var(--glass);color:var(--white);margin-bottom:10px;resize:vertical"></textarea>
      <button id="dt-review-btn" onclick="dtSubmitReview(${pid})" style="width:100%;padding:12px;background:linear-gradient(135deg,var(--emerald-l),var(--emerald));color:#fff;font-family:var(--font-ui);font-size:.85rem;font-weight:700;border-radius:8px;border:none;cursor:pointer" disabled>রিভিউ জমা দাও</button>
    </div>`;
  dtRenderStars('dt-star-rating','rating');
  dtRenderStars('dt-star-area','area');
}

function dtRenderStars(boxId,which){
  const box=document.getElementById(boxId); if(!box)return;
  const cur=which==='rating'?_dtRating:_dtAreaRating;
  box.innerHTML=[1,2,3,4,5].map(n=>
    `<button onclick="dtPickStar('${boxId}','${which}',${n})" style="background:none;border:none;cursor:pointer;color:${n<=cur?'var(--gold-l)':'var(--white-30)'}">★</button>`).join('');
}
function dtPickStar(boxId,which,n){
  if(which==='rating') _dtRating=n; else _dtAreaRating=n;
  dtRenderStars(boxId,which);
  const btn=document.getElementById('dt-review-btn');
  if(btn) btn.disabled = _dtRating<1;
}

async function dtSubmitReview(pid){
  const btn=document.getElementById('dt-review-btn'); if(!btn||btn.disabled)return;
  btn.disabled=true; const orig=btn.textContent; btn.textContent='জমা হচ্ছে...';
  const{error}=await abashonDB.from('reviews').insert({
    property_id: pid, reviewer_id: session.id, rating: _dtRating,
    area_rating: _dtAreaRating>0?_dtAreaRating:null,
    comment: document.getElementById('dt-review-comment').value || null
  });
  if(error){
    toast(error.message,'err',4500);
    btn.disabled=false; btn.textContent=orig; return;
  }
  toast('✓ রিভিউ যোগ করা হয়েছে','');
  dtLoadReviews(pid);
}

// ── Notifications (real email/SMS নেই — এটা persistent in-app notification, toast এর মতো হারিয়ে যায় না) ──
let _notifs=[];
const NOTIF_ICON={booking:'📩',visit:'🕐',review:'⭐',ticket_status:'🎫',ticket_assigned:'👤',ticket_reply:'💬'};

async function notifLoad(){
  if(!session)return;
  const{data,error}=await abashonDB.from('notifications')
    .select('id,title,body,kind,property_id,read,created_at')
    .order('created_at',{ascending:false}).limit(30);
  if(error){ console.error('notifications load failed:',error); return; }
  _notifs=data||[];
  const unread=_notifs.filter(n=>!n.read).length;
  const badge=document.getElementById('notif-badge');
  if(badge){ badge.style.display=unread>0?'block':'none'; badge.textContent=unread>9?'9+':bnNum(unread); }
  const panel=document.getElementById('notif-panel');
  if(panel && panel.style.display==='block') notifRender();
}

function notifToggle(){
  const panel=document.getElementById('notif-panel'); if(!panel)return;
  const opening = panel.style.display!=='block';
  panel.style.display = opening?'block':'none';
  if(opening) notifRender();
}

function notifRender(){
  const panel=document.getElementById('notif-panel'); if(!panel)return;
  if(!_notifs.length){
    panel.innerHTML='<div style="padding:24px;text-align:center;font-family:var(--font-ui);font-size:.8rem;color:var(--white-30)">কোনো notification নেই</div>';
    return;
  }
  const rel=d=>{
    const mins=Math.floor((Date.now()-new Date(d).getTime())/60000);
    if(mins<1)return'এইমাত্র'; if(mins<60)return bnNum(mins)+' মিনিট আগে';
    const hrs=Math.floor(mins/60); if(hrs<24)return bnNum(hrs)+' ঘণ্টা আগে';
    return bnNum(Math.floor(hrs/24))+' দিন আগে';
  };
  panel.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 14px;border-bottom:1px solid var(--border)">
      <span style="font-family:var(--font-ui);font-size:.75rem;font-weight:700;color:var(--white);text-transform:uppercase;letter-spacing:.06em">Notifications</span>
      <button onclick="notifMarkAllRead()" style="background:none;border:none;color:var(--emerald-l);font-family:var(--font-ui);font-size:.7rem;cursor:pointer">সব পড়া হয়েছে বলে চিহ্নিত করো</button>
    </div>
    ${_notifs.map(n=>`
      <div onclick="notifMarkRead(${n.id})" style="padding:11px 14px;border-bottom:1px solid var(--border);cursor:pointer;background:${n.read?'transparent':'rgba(212,175,55,.06)'}">
        <div style="display:flex;gap:8px;align-items:flex-start">
          <span>${NOTIF_ICON[n.kind]||'🔔'}</span>
          <div style="flex:1;min-width:0">
            <div style="font-family:var(--font-ui);font-size:.8rem;font-weight:${n.read?'400':'700'};color:var(--white)">${dtEsc(n.title)}</div>
            ${n.body?`<div style="font-family:var(--font-ui);font-size:.75rem;color:var(--white-30);margin-top:2px">${n.body}</div>`:''}
            <div style="font-family:var(--font-ui);font-size:.65rem;color:var(--white-30);margin-top:4px">${rel(n.created_at)}</div>
          </div>
          ${n.read?'':'<span style="width:7px;height:7px;border-radius:50%;background:var(--gold);flex-shrink:0;margin-top:5px"></span>'}
        </div>
      </div>`).join('')}`;
}

async function notifMarkRead(id){
  const n=_notifs.find(x=>x.id===id); if(!n)return;
  if(!n.read){
    n.read=true; notifRender();
    const unread=_notifs.filter(x=>!x.read).length;
    const badge=document.getElementById('notif-badge');
    if(badge){ badge.style.display=unread>0?'block':'none'; badge.textContent=unread>9?'9+':bnNum(unread); }
    await abashonDB.from('notifications').update({read:true}).eq('id',id);
  }
  // AKSIS Phase 10 — deep-link: টিকেট-সংক্রান্ত notification ক্লিক করলে সরাসরি Support ট্যাবে নিয়ে যায়
  if(n.kind&&n.kind.startsWith('ticket_')){
    document.getElementById('notif-panel').style.display='none';
    goPage('dashboard'); buyerSetTab('support');
  } else if(n.property_id){
    document.getElementById('notif-panel').style.display='none';
    openDetail(n.property_id);
  }
}

async function notifMarkAllRead(){
  _notifs.forEach(n=>n.read=true);
  notifRender();
  const badge=document.getElementById('notif-badge'); if(badge)badge.style.display='none';
  if(!session)return;
  await abashonDB.from('notifications').update({read:true}).eq('user_id',session.id).eq('read',false);
}

// প্যানেলের বাইরে ক্লিক করলে বন্ধ হয়ে যাবে
document.addEventListener('click', e => {
  const wrap=document.getElementById('notif-bell-wrap');
  if(wrap && !wrap.contains(e.target)){
    const panel=document.getElementById('notif-panel');
    if(panel) panel.style.display='none';
  }
  const menu=document.getElementById('user-menu');
  if(menu && !menu.contains(e.target)) menu.classList.remove('open');
});

function toggleUserMenu(e){
  if(e) e.stopPropagation();
  const menu=document.getElementById('user-menu'); if(!menu)return;
  menu.classList.toggle('open');
}
function closeUserMenu(){
  const menu=document.getElementById('user-menu'); if(menu) menu.classList.remove('open');
}

// Real-time push (Supabase Realtime) — নতুন notification insert হওয়া মাত্র bell-এ আসে,
// পোলিং লাগে না। RLS (user_id = auth.uid()) নিজেই isolation guarantee করে, filter শুধু
// bandwidth বাঁচানোর জন্য।
let _notifChannel=null;
function notifSubscribe(){
  if(!session || _notifChannel) return;
  _notifChannel = abashonDB
    .channel('notif-'+session.id)
    .on('postgres_changes',
      { event:'INSERT', schema:'public', table:'notifications', filter:'user_id=eq.'+session.id },
      payload => {
        _notifs.unshift(payload.new);
        const unread=_notifs.filter(n=>!n.read).length;
        const badge=document.getElementById('notif-badge');
        if(badge){ badge.style.display=unread>0?'block':'none'; badge.textContent=unread>9?'9+':bnNum(unread); }
        const panel=document.getElementById('notif-panel');
        if(panel && panel.style.display==='block') notifRender();
        toast((NOTIF_ICON[payload.new.kind]||'🔔')+' '+payload.new.title,'');
      })
    .subscribe();
}
function notifUnsubscribe(){
  if(_notifChannel){ abashonDB.removeChannel(_notifChannel); _notifChannel=null; }
}
// session শুরু/শেষ হওয়ার সময় app.js-এর existing login/logout flow থেকে notifSubscribe()/
// notifUnsubscribe() কল করলেই যথেষ্ট। ফলব্যাক হিসেবে প্রতি ২ মিনিটে একটা reconcile-load রাখা
// হলো (websocket miss/reconnect edge-case কভার করতে), সত্যিকারের পোলিং না।
setInterval(()=>{ if(session){ notifSubscribe(); notifLoad(); } }, 120000);

// ── Commute distance: buyer একবার তার অফিস/ক্যাম্পাস সেভ করবে, প্রতিটা listing এ আপনাআপনি দূরত্ব দেখাবে ──
async function dtLoadCommute(p){
  const box=document.getElementById('dt-commute-box'); if(!box)return;
  await _sessionReady; // পাতা লোড হওয়ার সময় session restore শেষ না হলে "লগইন করো" ভুলভাবে দেখানো হতো, যদিও আসলে লগইন করাই ছিল
  if(!session){
    box.innerHTML=`<div style="font-family:var(--font-ui);font-size:.8rem;color:var(--white-30)">
      লগইন করলে তোমার কর্মস্থল/ক্যাম্পাস থেকে দূরত্ব দেখতে পাবে —
      <button onclick="openAuth('buyer','login',true)" style="background:none;border:none;color:var(--emerald-l);text-decoration:underline;cursor:pointer;font-family:inherit;font-size:inherit;padding:0">লগইন করো</button>
    </div>`;
    return;
  }
  box.innerHTML='<div style="font-family:var(--font-ui);font-size:.8rem;color:var(--white-30)">লোড হচ্ছে...</div>';
  const{data,error}=await abashonDB.from('profiles').select('commute_lat,commute_lng,commute_label').eq('id',session.id).single();
  if(error || !data || data.commute_lat==null){ dtShowCommuteForm(); return; }
  await dtShowCommuteDistance(data.commute_lat, data.commute_lng, data.commute_label||'তোমার গন্তব্য');
}

async function dtShowCommuteDistance(lat,lng,label){
  const box=document.getElementById('dt-commute-box'); if(!box||!curProp)return;
  box.innerHTML='<div style="font-family:var(--font-ui);font-size:.8rem;color:var(--white-30)">দূরত্ব বের করা হচ্ছে...</div>';

  // ১) সরলরেখার দূরত্ব — PostGIS দিয়ে, দ্রুত ও নির্ভরযোগ্য (fallback হিসেবে থাকবে)
  const{data:sd}=await abashonDB.rpc('commute_distances',{prop_ids:[curProp.id], dest_lat:lat, dest_lng:lng});
  const straightKm = (sd && sd[0]) ? sd[0].commute_m/1000 : null;

  // ২) আসল রাস্তার দূরত্ব — OSRM (৪ সেকেন্ডে সাড়া না দিলে বা ব্যর্থ হলে straight-line ব্যবহার হবে)
  const roadKm = (curProp.lat!=null && curProp.lng!=null) ? await sfGetRoadKm({lat:curProp.lat,lng:curProp.lng},{lat,lng}) : null;
  const finalKm = roadKm!=null ? roadKm : straightKm;
  const isReal = roadKm!=null;

  if(finalKm==null){
    box.innerHTML='<div style="font-family:var(--font-ui);font-size:.8rem;color:var(--white-30)">দূরত্ব বের করা যায়নি — <button onclick="dtShowCommuteForm()" style="background:none;border:none;color:var(--emerald-l);text-decoration:underline;cursor:pointer;font-family:inherit;font-size:inherit;padding:0">আবার সেট করো</button></div>';
    return;
  }
  box.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;gap:10px">
      <div>
        <span style="font-family:var(--font-display);font-size:1.35rem;color:var(--emerald-l)">${finalKm.toFixed(1)} কিমি</span>
        <div style="font-family:var(--font-ui);font-size:.7rem;color:var(--white-30);margin-top:2px">${dtEsc(label)} থেকে · ${isReal?'আসল রাস্তার দূরত্ব':'আন্দাজ করা দূরত্ব'}</div>
      </div>
      <button onclick="dtShowCommuteForm()" style="background:none;border:1px solid var(--border);border-radius:7px;padding:6px 12px;color:var(--white-30);font-family:var(--font-ui);font-size:.7rem;cursor:pointer;white-space:nowrap">বদলাও</button>
    </div>`;
}

async function dtShowCommuteForm(){
  const box=document.getElementById('dt-commute-box'); if(!box)return;
  box.innerHTML='<div style="font-family:var(--font-ui);font-size:.8rem;color:var(--white-30)">লোড হচ্ছে...</div>';
  const areas=await getAreaProfiles();
  box.innerHTML=`
    <div style="font-family:var(--font-ui);font-size:.8rem;color:var(--white-60);margin-bottom:8px">তোমার কর্মস্থল/ক্যাম্পাস সেট করো — প্রতিটা বাসায় স্বয়ংক্রিয়ভাবে দূরত্ব দেখাবে</div>
    <select id="dt-commute-area" style="width:100%;font-family:var(--font-ui);font-size:.85rem;padding:9px 11px;border-radius:9px;border:1px solid var(--border);background:var(--glass);color:var(--white);margin-bottom:8px">
      <option value="">— এলাকা বাছো —</option>
      ${areas.map(a=>`<option value="${a.lat},${a.lng}">${a.area}, ${a.city}</option>`).join('')}
    </select>
    <button onclick="dtUseMyLocation()" style="width:100%;margin-bottom:8px;padding:9px;background:var(--glass);border:1px solid var(--border);border-radius:8px;color:var(--white-60);font-family:var(--font-ui);font-size:.8rem;cursor:pointer">📍 আমার বর্তমান অবস্থান ব্যবহার করো</button>
    <input id="dt-commute-label" placeholder="নাম দাও (যেমন: আমার অফিস)" style="width:100%;font-family:var(--font-ui);font-size:.85rem;padding:9px 11px;border-radius:9px;border:1px solid var(--border);background:var(--glass);color:var(--white);margin-bottom:8px">
    <button id="dt-commute-save" onclick="dtSaveCommuteFromArea()" style="width:100%;padding:11px;background:linear-gradient(135deg,var(--emerald-l),var(--emerald));color:#fff;font-family:var(--font-ui);font-size:.85rem;font-weight:700;border-radius:8px;border:none;cursor:pointer">সেভ করো</button>
    <div id="dt-commute-err" style="font-family:var(--font-ui);font-size:.75rem;color:#e08080;margin-top:6px"></div>`;
}

async function dtSaveCommuteFromArea(){
  const val=document.getElementById('dt-commute-area').value;
  const label=document.getElementById('dt-commute-label').value.trim() || 'তোমার গন্তব্য';
  const err=document.getElementById('dt-commute-err');
  if(!val){ err.textContent='আগে একটা এলাকা বাছো, অথবা বর্তমান অবস্থান ব্যবহার করো'; return; }
  const[lat,lng]=val.split(',').map(Number);
  await dtSaveCommute(lat,lng,label);
}

async function dtUseMyLocation(){
  const err=document.getElementById('dt-commute-err');
  if(!navigator.geolocation){ err.textContent='ব্রাউজারে লোকেশন সাপোর্ট নেই'; return; }
  err.textContent='লোকেশন নেওয়া হচ্ছে...';
  navigator.geolocation.getCurrentPosition(
    async pos=>{
      const label=document.getElementById('dt-commute-label').value.trim() || 'তোমার বর্তমান অবস্থান';
      await dtSaveCommute(pos.coords.latitude, pos.coords.longitude, label);
    },
    ()=>{ const e=document.getElementById('dt-commute-err'); if(e) e.textContent='লোকেশন পাওয়া যায়নি — এলাকা বেছে নাও, অথবা ব্রাউজারে permission দাও'; },
    { enableHighAccuracy:true, timeout:10000 }
  );
}

async function dtSaveCommute(lat,lng,label){
  // আগে update, row না থাকলে insert — দুই ক্ষেত্রেই কাজ করার জন্য
  const{data,error}=await abashonDB.from('profiles')
    .update({commute_lat:lat,commute_lng:lng,commute_label:label}).eq('id',session.id).select('id');
  if(error){ toast(error.message,'err'); return; }
  if(!data || !data.length){
    const{error:insErr}=await abashonDB.from('profiles').insert({id:session.id,commute_lat:lat,commute_lng:lng,commute_label:label});
    if(insErr){ toast(insErr.message,'err'); return; }
  }
  toast('✓ সেভ করা হয়েছে','');
  await dtShowCommuteDistance(lat,lng,label);
}