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
  {icon:'🚛',t:'Truck Service',d:'পিকআপ থেকে ফুল ট্রাক।',opts:[{n:'Pickup Truck (1 ton)',d:'Small load',p:1000},{n:'Mini Truck (2 ton)',d:'Medium load',p:1500},{n:'Full Truck (5 ton)',d:'Full house',p:2500}]},
  {icon:'👷',t:'Labor Service',d:'প্রশিক্ষিত লেবার।',opts:[{n:'Basic (2 workers, 4hr)',d:'Light work',p:500},{n:'Standard (4 workers, 4hr)',d:'Normal move',p:1000},{n:'Premium (4 workers, full day)',d:'Large house',p:1500}]},
  {icon:'📦',t:'Packing Service',d:'নিরাপদে প্যাকিং।',opts:[{n:'Basic Packing',d:'General items',p:500},{n:'Standard',d:'Electronics',p:800},{n:'Premium',d:'Fragile items',p:1200}]},
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

let curProp=null,curProps=[...props];





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
  const labels={home:'হোম',listings:'Properties',ai:'AI Assistant',shifting:'Shifting',interior:'Interior',furniture:'Furniture',about:'About',dashboard:'Dashboard'};
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.toggle('active', a.dataset.p===p));
  if(cur) cur.textContent = labels[p]||'';
}
function goPage(p){
  if(p==='dashboard' && !session){ openAuth('seller','login'); return; }
  document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));
  document.getElementById('page-'+p).classList.add('active');
  setActiveNav(p);
  window.scrollTo({top:0,behavior:'smooth'});
  if(p==='listings')renderProps(curProps);
  if(p==='shifting')renderSvcs();
  if(p==='interior')renderDesigners();
  if(p==='furniture')renderFurs();
  if(p==='dashboard'){renderDash();}
  if(p==='ai')initAIPage();
  setTimeout(()=>{document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el=>ro.observe(el));},100);
}
function filterCityGo(c){curProps=props.filter(p=>p.city===c);goPage('listings');}
function initCounters(){document.querySelectorAll('.counter').forEach(el=>{el.textContent='0';cro.observe(el);});}

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
      <img src="${p.img}" alt="${p.t}" loading="lazy"/>
      <div class="prop-badges">
        <span class="prop-badge ${p.type==='RENT'?'badge-rent':'badge-sale'}">${p.type==='RENT'?'Rent':'Sale'}</span>
        ${p.v?'<span class="prop-badge badge-v">✓ Verified</span>':''}
        <span class="prop-badge badge-ai">🤖 ${p.ai}%</span>
      </div>
      <button class="prop-fav" onclick="event.stopPropagation();this.textContent=this.textContent==='♡'?'❤️':'♡'">♡</button>
      <button class="vid-tag" onclick="event.stopPropagation();openVid('${p.t}')">▶ Video</button>
      <div class="ai-score">🛡️ ${p.ai}% Safe</div>
    </div>
    <div class="prop-body">
      <div class="prop-title">${p.t}</div>
      <div class="prop-loc">📍 ${p.area}, ${p.city}</div>
      <div class="prop-specs">
        <span class="prop-spec">🛏 ${p.beds}</span>
        <span class="prop-spec">🚿 ${p.baths}</span>
        <span class="prop-spec">📐 ${p.sqft}sqft</span>
        <span class="prop-spec">🏢 ${p.floor}</span>
      </div>
      <div class="prop-footer">
        <div class="prop-price">৳${p.rent.toLocaleString()} <small>/${p.type==='RENT'?'mo':'sale'}</small></div>
        <button class="prop-btn" onclick="event.stopPropagation();openDetail(${p.id})">Book</button>
      </div>
      <div class="prop-owner">
        <div class="owner-av">${p.oi}</div>
        <span class="owner-nm">${p.ow}</span>
        ${p.v?'<span class="owner-v">✓ Verified</span>':''}
      </div>
    </div>
  </div>`;
}

function renderProps(list,gid='pgrid'){
  const g=document.getElementById(gid);if(!g)return;
  if(!list||!list.length){g.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:64px;color:var(--white-30)"><div style="font-size:3rem;margin-bottom:16px">🔍</div><div style="font-family:var(--font-display);font-size:1.25rem;color:var(--white-60)">No properties found</div></div>';return;}
  g.innerHTML=list.map(p=>pCard(p)).join('');
}
function renderSvcs(){
  const g=document.getElementById('svc-grid');if(!g)return;
  g.innerHTML=svcs.map((s,i)=>`
    <div class="svc-card" onclick="openSvc(${i})">
      <div class="svc-icon">${s.icon}</div>
      <div class="svc-title">${s.t}</div>
      <div class="svc-desc">${s.d}</div>
      <div class="svc-price-row">
        <div class="svc-price">৳${s.opts[0].p}+</div>
        <div class="svc-arrow">→</div>
      </div>
    </div>`).join('');
}
function renderDesigners(){
  const g=document.getElementById('int-grid');if(!g)return;
  g.innerHTML=designers.map((d,i)=>`
    <div class="int-card" onclick="openInt(${i})">
      <img class="int-img" src="${d.imgs[0]}" loading="lazy"/>
      <div class="int-body">
        <div class="int-verified">✓ Verified Designer</div>
        <div class="int-name">${d.n}</div>
        <div class="int-style">${d.style}</div>
        <div class="int-footer">
          <div class="int-rating">${d.rating}</div>
          <div class="int-price">${d.price}</div>
        </div>
      </div>
    </div>`).join('');
}
function renderFurs(){
  const g=document.getElementById('fur-grid');if(!g)return;
  g.innerHTML=furs.map(f=>`
    <div class="fur-card">
      <img class="fur-img" src="${f.img}" loading="lazy"/>
      <div class="fur-body">
        <div class="fur-type">${f.t}</div>
        <div class="fur-name">${f.n}</div>
        <div class="fur-prices"><span class="fur-price">৳${f.p.toLocaleString()}</span><span class="fur-old">৳${f.old.toLocaleString()}</span></div>
      </div>
    </div>`).join('');
}
function renderSaved(){
  const g=document.getElementById('saved-grid');if(!g)return;
  g.innerHTML=props.slice(0,3).map(p=>pCard(p)).join('');
}

// ── FILTERS ──
function fPill(el,f){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  curProps=f?props.filter(p=>p.city===f||p.type===f):props;
  renderProps(curProps);
}
function sortP(v){let l=[...curProps];if(v==='low')l.sort((a,b)=>a.rent-b.rent);else if(v==='high')l.sort((a,b)=>b.rent-a.rent);renderProps(l);}

// ── DETAIL ──
function openDetail(id){
  const p=props.find(x=>x.id===id)||(typeof aiDB!=='undefined'&&aiDB.find(x=>x.id===id));curProp=p;
  document.getElementById('page-listings').innerHTML=`
  <div style="background:var(--bg);min-height:100vh;padding-bottom:80px">
    <div style="position:relative;height:400px;overflow:hidden;background:var(--bg-3)">
      <img id="d-mi" src="${p.img}" style="width:100%;height:100%;object-fit:cover"/>
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.6) 0%,transparent 60%)"></div>
      <button onclick="openVid('${p.t}')" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:72px;height:72px;border-radius:50%;background:rgba(212,175,55,.15);border:2px solid rgba(212,175,55,.4);color:var(--gold);font-size:1.75rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .3s">▶</button>
      <div style="position:absolute;bottom:16px;left:50%;transform:translateX(-50%);display:flex;gap:8px">
        ${p.imgs.map((_,i)=>`<button onclick="document.getElementById('d-mi').src='${p.imgs[i]}'" style="width:${i===0?'20px':'8px'};height:8px;border-radius:4px;background:rgba(255,255,255,${i===0?.9:.4});border:none;cursor:pointer;transition:all .2s;padding:0"></button>`).join('')}
      </div>
    </div>
    <div style="max-width:880px;margin:0 auto;padding:40px 32px">
      <div style="display:grid;grid-template-columns:1fr auto;gap:24px;align-items:start;margin-bottom:32px">
        <div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px">
            <span class="prop-badge ${p.type==='RENT'?'badge-rent':'badge-sale'}">${p.type}</span>
            ${p.v?'<span class="prop-badge badge-v">✓ Verified</span>':''}
            <span class="prop-badge badge-ai">🤖 AI ${p.ai}% Safe</span>
          </div>
          <div style="font-family:var(--font-display);font-size:2rem;font-weight:500;color:var(--white);margin-bottom:8px;letter-spacing:-.02em">${p.t}</div>
          <div style="font-family:var(--font-ui);font-size:.875rem;color:var(--white-30)">📍 ${p.area}, ${p.city}${p.v?` &nbsp;<span style="color:var(--emerald-l);font-weight:600">✓ Verified Owner: ${p.ow}</span>`:''}</div>
        </div>
        <div style="padding:24px;background:var(--glass);border:1px solid var(--border-gold);border-radius:24px;text-align:center;min-width:180px">
          <div style="font-family:var(--font-display);font-size:1.75rem;font-weight:500;color:var(--white);letter-spacing:-.02em">৳${p.rent.toLocaleString()}</div>
          <div style="font-family:var(--font-ui);font-size:.75rem;color:var(--white-30);margin-top:2px">/${p.type==='RENT'?'month':'sale price'}</div>
          <div style="margin-top:12px;padding:8px;background:rgba(14,90,69,.2);border:1px solid rgba(14,90,69,.3);border-radius:8px;font-family:var(--font-ui);font-size:.75rem;color:var(--emerald-l)">Advance: ৳${Math.round(p.rent*.1).toLocaleString()} (10%)</div>
          <button onclick="openPay()" style="width:100%;margin-top:10px;padding:12px;background:linear-gradient(135deg,var(--gold),var(--gold-d));color:#000;font-family:var(--font-ui);font-size:.8125rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;border-radius:8px;border:none;cursor:pointer;transition:all .3s">📅 Book Now</button>
          <button onclick="openVid('${p.t}')" style="width:100%;margin-top:8px;padding:10px;background:var(--glass);border:1px solid var(--border);color:var(--white-60);font-family:var(--font-ui);font-size:.75rem;border-radius:8px;cursor:pointer;transition:all .2s">🎬 Video Tour</button>
        </div>
      </div>
      <div style="display:flex;gap:20px;padding:16px 0;border-top:1px solid var(--border);border-bottom:1px solid var(--border);margin-bottom:24px;flex-wrap:wrap">
        ${[['🛏',p.beds,'Bedrooms'],['🚿',p.baths,'Bathrooms'],['📐',p.sqft,'Sqft'],['🏢',p.floor,'Floor'],['🏷',p.type,'Type']].map(([i,v,k])=>`<div style="text-align:center;flex:1;min-width:60px"><div style="font-family:var(--font-display);font-size:1.25rem;color:var(--white)">${i} ${v}</div><div style="font-family:var(--font-ui);font-size:.6875rem;color:var(--white-30);margin-top:3px;text-transform:uppercase;letter-spacing:.08em">${k}</div></div>`).join('')}
      </div>
      <div style="font-family:var(--font-ui);font-size:.6875rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:var(--white-30);margin-bottom:10px">Description</div>
      <div style="font-family:var(--font-ui);font-size:.9375rem;color:var(--white-60);line-height:1.7;margin-bottom:24px">${p.desc}</div>
      <div style="font-family:var(--font-ui);font-size:.6875rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:var(--white-30);margin-bottom:10px">Amenities</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:24px">${p.am.map(a=>`<span style="padding:5px 14px;background:rgba(28,38,33,.045);border:1px solid var(--border);border-radius:100px;font-family:var(--font-ui);font-size:.75rem;color:var(--white-60)">✓ ${a}</span>`).join('')}</div>
      <div style="padding:20px;background:rgba(14,90,69,.08);border:1px solid rgba(14,90,69,.2);border-radius:16px;margin-bottom:24px">
        <div style="font-family:var(--font-ui);font-size:.6875rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--emerald-l);margin-bottom:12px">🤖 AI Analysis</div>
        <div style="display:flex;gap:12px;flex-wrap:wrap">
          ${[['Fraud Safe',p.ai+'%','var(--emerald-l)'],['Price Rating','A+','var(--gold)'],['Trust Level',p.v?'High':'Mid','var(--white)'],['Location','Good','var(--gold)']].map(([l,v,c])=>`<div style="flex:1;min-width:80px;padding:12px;background:var(--glass);border:1px solid var(--border);border-radius:10px;text-align:center"><div style="font-family:var(--font-display);font-size:1.25rem;color:${c}">${v}</div><div style="font-family:var(--font-ui);font-size:.625rem;color:var(--white-30);margin-top:3px;text-transform:uppercase;letter-spacing:.08em">${l}</div></div>`).join('')}
        </div>
      </div>
      <div style="display:flex;gap:12px">
        <button onclick="goPage('listings')" style="flex:1;padding:12px;background:var(--glass);border:1px solid var(--border);color:var(--white-30);font-family:var(--font-ui);font-size:.8125rem;border-radius:8px;cursor:pointer">← Back</button>
        <button onclick="goPage('shifting')" style="flex:1;padding:12px;background:rgba(14,90,69,.2);border:1px solid rgba(14,90,69,.4);color:var(--emerald-l);font-family:var(--font-ui);font-size:.8125rem;font-weight:600;border-radius:8px;cursor:pointer">🚚 Book Shifting</button>
        <button onclick="goPage('interior')" style="flex:1;padding:12px;background:rgba(109,40,217,.15);border:1px solid rgba(109,40,217,.3);color:#a78bfa;font-family:var(--font-ui);font-size:.8125rem;font-weight:600;border-radius:8px;cursor:pointer">🎨 Interior</button>
      </div>
    </div>
  </div>`;
  goPage('listings');
}

// ── PAY ──
function openPay(){
  if(!curProp)return;
  if(!requireAuth('buyer',()=>openPay()))return;
  const adv=Math.round(curProp.rent*.1);
  document.getElementById('pay-pn').textContent=curProp.t+' · '+curProp.area;
  document.getElementById('pay-amt').textContent='৳'+adv.toLocaleString();
  document.getElementById('pc-amt').textContent='৳'+adv.toLocaleString();
  document.getElementById('pc-tot').textContent='৳'+adv.toLocaleString();
  const d=new Date();d.setDate(d.getDate()+7);
  document.getElementById('mv-dt').value=d.toISOString().split('T')[0];
  document.getElementById('mv-dt').min=new Date().toISOString().split('T')[0];
  gStep(1);openM('pay-ov');
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
  const amount=Math.round(curProp.rent*0.1);
  const orderId='ABN-'+Math.floor(Math.random()*90000+10000);
  btn.disabled=true; const orig=btn.innerHTML; btn.innerHTML='<span class="svc-spin"></span> Processing…';
  try{
    // 1) Reserve the property (24h lock) — fails if already reserved by someone else
    const lock=await ASvc.lockProperty(curProp.id, session.user);
    // 2) Take the token payment through the correct rail
    let pay;
    if(curPayMethod==='card'){
      const num=_val('cc-num'), exp=_val('cc-exp'), cvv=_val('cc-cvv');
      const [mm,yy]=exp.split(/[\/\-\s]/);
      pay=await ASvc.initiatePayment(amount, orderId, {number:num,month:mm,year:yy,cvv});
    } else {
      const msisdn=_val('pay-acc');
      pay=await ASvc.initiateWalletPayment(amount, orderId, curPayMethod, msisdn);
    }
    // 3) Show confirmation with real mock txn + live reservation countdown
    document.getElementById('ref-id').textContent='#'+orderId;
    document.getElementById('ref-txn').textContent=pay.transactionId;
    document.getElementById('ref-pd').textContent='৳'+amount.toLocaleString();
    startResCountdown(lock.lockedUntil);
    gStep(3);
    toast('✓ Payment successful — property reserved','',3500);
  }catch(e){
    const map={ALREADY_LOCKED:'এই প্রপার্টি বর্তমানে reserved। Waiting list-এ যোগ দিন।',CARD_DECLINED:'কার্ড declined (শেষ 0002 = test decline)।',INVALID_INPUT:e.message,TIMEOUT:'Gateway timed out — আবার চেষ্টা করুন।'};
    toast(map[e.code]||e.message||'Payment failed','err',4500);
  } finally {
    btn.disabled=false; btn.innerHTML=orig;
  }
}
function startResCountdown(until){
  const el=document.getElementById('ref-timer'); if(_resTimer)clearInterval(_resTimer);
  const tick=()=>{ let ms=until-Date.now(); if(ms<=0){el.textContent='Expired';clearInterval(_resTimer);return;} const h=Math.floor(ms/3.6e6),m=Math.floor(ms%3.6e6/6e4),s=Math.floor(ms%6e4/1e3); el.textContent=String(h).padStart(2,'0')+':'+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0'); };
  tick(); _resTimer=setInterval(tick,1000);
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
  document.getElementById('im-port').innerHTML=d.imgs.map(img=>`<img src="${img}" loading="lazy"/>`).join('');
  document.getElementById('im-dc').textContent=d.desc;
  document.getElementById('im-pr').textContent=d.price;
  document.getElementById('im-rt').textContent=d.rating;
  openM('int-ov');
}

// ── VIDEO ──
function openVid(t){document.getElementById('vid-cap').textContent=t+' — Video Tour';openM('vid-ov');}

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
function calcShift(){doCalc('sc-load','sc-labor','sc-p','sc-n','sc-res');}
function calcShift2(){doCalc('sc2-load','sc2-labor','sc2-p','sc2-n','sc2-res');}
function doCalc(lid,labid,pid,nid,resid){
  const load=document.getElementById(lid).value,labor=document.getElementById(labid).value;
  const base={small:1000,medium:1800,large:3000}[load],lc={no:0,yes:500,yes4:900}[labor];
  document.getElementById(pid).textContent='৳'+(base+lc).toLocaleString();
  document.getElementById(nid).textContent='Truck + labor estimated cost';
  document.getElementById(resid).classList.add('show');
}

// ── MODAL HELPERS ──
function openM(id){document.getElementById(id).classList.add('open');document.body.style.overflow='hidden';}
function closeM(id){document.getElementById(id).classList.remove('open');if(!document.querySelector('.overlay.open'))document.body.style.overflow='';}

// ── AI ASSISTANT ENGINE — retrieval over aiDB ONLY (no hallucination, no LLM) ──
// Structured keyword/synonym retrieval. Returns ONLY records that exist in aiDB.
const NO_MATCH_MSG='No matching property was found in the current database.';
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
// Cities users commonly ask about that are NOT in the dataset — must return honest no-match, not wrong-city results
const OUT_CITIES=['khulna','খুলনা','rajshahi','রাজশাহী','barishal','barisal','বরিশাল','rangpur','রংপুর','mymensingh','ময়মনসিংহ','cumilla','comilla','কুমিল্লা','cox','কক্সবাজার','narayanganj','নারায়ণগঞ্জ','gazipur','গাজীপুর','bogura','bogra','বগুড়া','jashore','jessore','যশোর','dinajpur','দিনাজপুর'];
const DB_AREAS = (typeof aiDB!=='undefined' && Array.isArray(aiDB)) ? [...new Set(aiDB.map(p=>p.area))] : [];

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
  if(/bachelor|ব্যাচেলর/.test(lq)) tenant='Bachelor';
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
    if(f.tenant){ const t=(p.tenant||'').toLowerCase(); if(t.includes(f.tenant.toLowerCase())){sc+=6;rs.push(p.tenant);} else if(f.tenant==='Bachelor'){ hard=false; } }
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
  m.className='ai-msg '+type;m.textContent=txt;d.appendChild(m);d.scrollTop=d.scrollHeight;
}
function homeQ(q){document.getElementById('home-ai-inp').value=q;homeAI();}
function homeAI(){
  const inp=document.getElementById('home-ai-inp'),q=inp.value.trim();if(!q)return;
  hAddMsg(q,'user');inp.value='';hAddMsg('Analyzing...','typing');
  setTimeout(()=>{
    document.querySelectorAll('#home-ai-msgs .typing').forEach(m=>m.remove());
    let matched;
    try{ matched=aiMatch(q); }
    catch(e){
      if(e.message==='AI_DB_NOT_LOADED'){
        hAddMsg('⚠️ Database load ব্যর্থ হয়েছে (js/aiDB.js পাওয়া যায়নি)। ফোল্ডার স্ট্রাকচার ঠিক আছে কিনা চেক করুন — index.html, css/, js/ একসাথে একই ফোল্ডারে থাকতে হবে।','bot');
      } else { hAddMsg('⚠️ একটি error হয়েছে: '+e.message,'bot'); }
      document.getElementById('home-ai-results').classList.remove('show');
      return;
    }
    if(!matched.length){ hAddMsg(NO_MATCH_MSG,'bot'); document.getElementById('home-ai-results').classList.remove('show'); return; }
    hAddMsg(matched.length+' matching '+(matched.length===1?'property':'properties')+' from database','bot');
    const res=document.getElementById('home-ai-results'),cards=document.getElementById('home-ai-cards');
    cards.innerHTML=matched.slice(0,3).map(({p,sc})=>`
      <div class="ai-rc" onclick="openDetail(${p.id})">
        <img class="ai-rc-img" src="${p.img}" loading="lazy"/>
        <div style="flex:1">
          <div class="ai-rc-t">${p.t}</div>
          <div class="ai-rc-l">📍 ${p.area}, ${p.city}</div>
          <div class="ai-rc-p">৳${p.rent.toLocaleString()}/${p.type==='RENT'?'mo':'sale'}</div>
        </div>
        <div class="ai-rc-sc">${sc}% match</div>
      </div>`).join('');
    res.classList.add('show');
  },1000);
}

// ── FULL AI PAGE ──
function initAIPage(){
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
  m.textContent=txt;d.appendChild(m);d.scrollTop=d.scrollHeight;
}
function aiQ(q){document.getElementById('ai-fi').value=q;fullAI();}

function fullAI(){
  const inp=document.getElementById('ai-fi'),q=inp.value.trim();if(!q)return;
  aiFAddMsg(q,'user');inp.value='';aiFAddMsg('AI বিশ্লেষণ করছে…','typing');
  const area=document.getElementById('ai-match');
  area.innerHTML='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px">'+'<div style="background:var(--surface);border:1px solid var(--border);border-radius:16px;height:220px;animation:shimmer 1.5s infinite"></div>'.repeat(4)+'</div>';
  setTimeout(()=>{
    document.querySelectorAll('#ai-full-msgs .typing').forEach(m=>m.remove());
    let res;
    try{ res=aiMatch(q); }
    catch(e){
      const msg = e.message==='AI_DB_NOT_LOADED'
        ? '⚠️ js/aiDB.js লোড হয়নি। index.html, css/, js/ ফোল্ডার একসাথে আছে কিনা চেক করুন — ব্রাউজারের F12 → Console-এ 404 error দেখাবে যদি path ভেঙে থাকে।'
        : '⚠️ Error: '+e.message;
      aiFAddMsg(msg,'bot');
      document.getElementById('ai-res-ttl').textContent='⚠️ Database error';
      document.getElementById('ai-res-sub').textContent='';
      document.getElementById('ai-match').innerHTML='<div style="padding:40px;text-align:center;color:#b3262f;font-family:var(--font-ui);font-size:.9rem">'+msg+'</div>';
      return;
    }
    if(!res.length){
      aiFAddMsg(NO_MATCH_MSG,'bot');
      document.getElementById('ai-res-ttl').textContent='No match in database';
      document.getElementById('ai-res-sub').textContent='"'+q+'" — searched '+aiDB.length+' database records';
      document.getElementById('ai-match').innerHTML='<div style="padding:40px;text-align:center;color:var(--white-30);font-family:var(--font-ui);font-size:.9rem">🔍 '+NO_MATCH_MSG+'</div>';
      return;
    }
    aiFAddMsg(res.length+' matching '+(res.length===1?'property':'properties')+' from the database','bot');
    document.getElementById('ai-res-ttl').textContent='🎯 '+res.length+' Properties from Database';
    document.getElementById('ai-res-sub').textContent='"'+q+'" — matched against '+aiDB.length+' database records';
    showAIMatches(res.map(({p,sc,reason})=>({id:p.id,score:sc,reason})));
  },700);
}
function showAIMatches(matches){
  document.getElementById('ai-match').innerHTML=`
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px">
    ${matches.map(m=>{
      const p=aiDB.find(x=>x.id===m.id)||props.find(x=>x.id===m.id);if(!p)return'';
      return`<div style="background:var(--surface);border:1px solid var(--border);border-radius:18px;overflow:hidden;cursor:pointer;transition:all .3s;position:relative" onmouseenter="this.style.borderColor='rgba(212,175,55,.3)';this.style.transform='translateY(-4px)'" onmouseleave="this.style.borderColor='var(--border)';this.style.transform='none'" onclick="openDetail(${p.id})">
        <div style="position:absolute;top:10px;right:10px;background:var(--emerald);color:var(--ink-white);font-weight:700;border-radius:100px;padding:3px 9px;font-family:var(--font-ui);font-size:.625rem;z-index:1">${m.score}% match</div>
        <img src="${p.img}" style="width:100%;height:170px;object-fit:cover" loading="lazy"/>
        <div style="padding:14px">
          <div style="font-family:var(--font-display);font-size:.9375rem;font-weight:500;color:var(--white);margin-bottom:4px">${p.t}</div>
          <div style="font-family:var(--font-ui);font-size:.75rem;color:var(--white-30);margin-bottom:8px">📍 ${p.area}, ${p.city}</div>
          <div style="font-family:var(--font-ui);font-size:.75rem;color:var(--emerald-l);background:rgba(14,90,69,.15);padding:4px 10px;border-radius:8px;margin-bottom:10px;line-height:1.4">🤖 ${m.reason}</div>
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
const _fakeEmail = u => u.includes('@') ? u : `${u}@abashon.local`;

function setRole(r){
  authRole=r;
  document.getElementById('ro-buyer').classList.toggle('on',r==='buyer');
  document.getElementById('ro-seller').classList.toggle('on',r==='seller');
  document.getElementById('su-loc-label').textContent = r==='seller' ? 'Shop / office location' : 'Home address';
  document.getElementById('su-loc').placeholder = r==='seller' ? 'দোকান/অফিসের ঠিকানা' : 'বাসা/এলাকার ঠিকানা';
  document.getElementById('auth-ctx').textContent = r==='seller'
    ? 'Seller account — list properties and manage inquiries.'
    : 'Buyer account — browse, book and track homes.';
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
    ? 'Booking requires a Buyer account. Login or sign up to continue.'
    : (role==='seller' ? 'Seller account — list properties and manage inquiries.' : 'Buyer account — browse, book and track homes.');
  openM('auth-ov');
}
function requireAuth(role,action){ if(session)return true; pendingAction=action; openAuth('buyer','login',true); return false; }

function toast(msg,type,ms){const w=document.getElementById('toast-wrap');if(!w)return;const t=document.createElement('div');t.className='toast'+(type?' '+type:'');t.textContent=msg;w.appendChild(t);setTimeout(()=>{t.style.transition='opacity .3s';t.style.opacity='0';setTimeout(()=>t.remove(),300);},ms||3500);}

async function restoreSession(){
  const profile = await AuthSvc.getCurrentProfile();
  if (profile) {
    session = profile;
    renderNavAuth();
  }
}
restoreSession();

async function doSignup(){
  const name=_val('su-name'), user=_val('su-user'), phone=_val('su-phone').replace(/\D/g,''),
        nid=_val('su-nid').replace(/\D/g,''), loc=_val('su-loc'), pass=_val('su-pass');
  const err=document.getElementById('auth-err'), btn=document.getElementById('su-btn');
  err.textContent='';
  if(!name||!user||!phone||!nid||!loc||!pass){ err.textContent='সব ঘর পূরণ করুন।'; return; }
  if(!ASvc.isValidBDPhone(phone).ok){ err.textContent='সঠিক ১১-ডিজিট ফোন নম্বর দিন (01…)।'; return; }
  if(!ASvc.isValidNIDFormat(nid)){ err.textContent='NID ১০, ১৩ বা ১৭ সংখ্যার হতে হবে।'; return; }
  if(pass.length<6){ err.textContent='Password অন্তত ৬ অক্ষরের হতে হবে।'; return; }
  btn.disabled=true; btn.innerHTML='<span class="svc-spin"></span> NID যাচাই হচ্ছে…';
  try{
    const nidRes = await ASvc.verifyNID(nid);              // Step: NID verification (mock)
    btn.innerHTML='<span class="svc-spin"></span> Account তৈরি হচ্ছে…';
    await AuthSvc.signUp({
      name, username:user, email:_fakeEmail(user), phone,
      role:authRole, loc, nidMask:nidRes.maskedNid, password:pass
    });
    toast('✓ Account created! Please log in.', '', 3000);
    setAuthMode('login');
  }catch(e){
    err.textContent = e.message?.includes('already registered')
      ? 'এই username আগে থেকেই আছে।'
      : (e.code==='NOT_FOUND' ? 'এই NID সিস্টেমে পাওয়া যায়নি।' : (e.message || 'Signup ব্যর্থ হয়েছে।'));
  }finally{
    btn.disabled=false; btn.innerHTML='Create account';
  }
}
async function doLogin(){
  const user=_val('lg-user'), pass=_val('lg-pass'), err=document.getElementById('auth-err');
  err.textContent='';
  try{
    await AuthSvc.signIn(_fakeEmail(user), pass);
    const profile = await AuthSvc.getCurrentProfile();
    loginAs(profile);
  }catch(e){
    err.textContent = 'ভুল username বা password।';
  }
}
function loginAs(profile){
  session = profile;
  renderNavAuth(); closeM('auth-ov');
  document.getElementById('lg-user').value=''; document.getElementById('lg-pass').value='';
  const act=pendingAction; pendingAction=null;
  if(act) act(); else goPage('dashboard');
}
async function logout(){
  await AuthSvc.signOut();
  session=null;
  renderNavAuth(); goPage('home');
}

function renderNavAuth(){
  const el=document.getElementById('nav-auth'); if(!el)return;
  const explore=document.getElementById('nav-explore'), addp=document.getElementById('nav-addprop');
  const showExplore=(v)=>{ if(explore) explore.style.display=v?'inline-flex':'none'; };
  const showAddp=(v)=>{ if(addp) addp.style.display=v?'inline-flex':'none'; };
  if(!session){
    showExplore(true); showAddp(false);
    el.innerHTML='<button class="btn-outline" style="padding:9px 18px;font-size:.75rem" onclick="openAuth(\'buyer\',\'login\',false)">Login / Sign up</button>';
  } else {
    const seller=session.role==='seller';
    showExplore(!seller);   // Explore Homes = buyers only
    showAddp(seller);       // Add Property  = sellers only
    const b=seller?'seller':'buyer', ic=seller?'🏷️ Seller':'🛒 Buyer';
    el.innerHTML='<span class="nav-userchip" onclick="goPage(\'dashboard\')"><span class="role-badge '+b+'">'+ic+'</span><span class="nm">'+(session.name||'').split(' ')[0]+'</span></span>'
      +'<button class="btn-logout" onclick="logout()">Logout</button>';
  }
}
function dashEntry(){ if(session) goPage('dashboard'); else openAuth('seller','login'); }

function renderDash(){
  if(!session)return;
  const isSeller=session.role==='seller';
  document.getElementById('dash-buyer').style.display=isSeller?'none':'block';
  document.getElementById('dash-seller').style.display=isSeller?'block':'none';
  if(isSeller){ renderSellerDash(); }
  else{
    document.getElementById('db-av').textContent=(session.name||'U').trim()[0]||'U';
    document.getElementById('db-nm').textContent=session.name;
    document.getElementById('db-em').textContent='@'+session.user+' · '+session.phone;
    renderSaved(); initCounters();
  }
}
async function renderSellerDash(){
  const el=document.getElementById('dash-seller');
  const mine=await getSellerListings();
  const listingsHtml = mine.length
    ? mine.map(p=>`<div class="prop-card"><div class="prop-img-wrap" style="height:150px"><img src="${p.img}" loading="lazy"/></div><div class="prop-body"><div class="prop-title">${p.t}</div><div class="prop-loc">📍 ${p.area}, ${p.city}</div><div class="prop-footer"><div class="prop-price">৳${(p.rent||0).toLocaleString()}<small>/mo</small></div><span class="role-badge ${p.v?'seller':'buyer'}">${p.v?'Live':'Pending'}</span></div></div></div>`).join('')
    : `<div style="grid-column:1/-1;padding:40px;text-align:center;color:var(--white-30);font-family:var(--font-ui)">এখনো কোনো প্রপার্টি যোগ করেননি। <br><button class="auth-submit" style="margin-top:14px;max-width:220px;margin-inline:auto;background:linear-gradient(135deg,var(--gold-l),var(--gold-d));color:#2a2005" onclick="openAddProperty()">＋ Add your first property</button></div>`;
  el.innerHTML=`
  <div class="dash-grid">
    <div class="dash-side">
      <div class="dash-user-av" style="background:linear-gradient(135deg,var(--gold-l),var(--gold-d));color:#2a2005">${(session.name||'S').trim()[0]}</div>
      <div class="dash-user-name">${session.name}</div>
      <div style="text-align:center;margin:6px 0 4px"><span class="role-badge seller">🏷️ Seller</span></div>
      <div class="dash-user-email">📍 ${session.loc||''}</div>
      <div class="dash-menu">
        <div class="dm active">📊 Overview</div>
        <div class="dm">🏘️ My Listings</div>
        <div class="dm">📨 Inquiries</div>
        <div class="dm">💰 Earnings</div>
        <div class="dm">⚙️ Settings</div>
      </div>
      <button class="auth-submit" style="margin-top:14px;background:linear-gradient(135deg,var(--gold-l),var(--gold-d));color:#2a2005" onclick="openAddProperty()">＋ Add Property</button>
    </div>
    <div class="dash-content">
      <div class="stat-row">
        <div class="stat-c"><div class="stat-n">${mine.length}</div><div class="stat-l">Active Listings</div></div>
        <div class="stat-c"><div class="stat-n">${mine.length?'১২':'০'}</div><div class="stat-l">New Inquiries</div></div>
        <div class="stat-c"><div class="stat-n">${mine.length?'৩.৪K':'০'}</div><div class="stat-l">Total Views</div></div>
        <div class="stat-c"><div class="stat-n">৳${mine.reduce((s,p)=>s+Math.round((p.rent||0)*.1),0).toLocaleString()}</div><div class="stat-l">Est. Earnings</div></div>
      </div>
      <div class="dash-card">
        <div class="dash-card-title">🏘️ My Listings</div>
        <div class="prop-grid" style="grid-template-columns:repeat(auto-fill,minmax(240px,1fr))">${listingsHtml}</div>
      </div>
      <div class="dash-card">
        <div class="dash-card-title">📨 Recent Inquiries</div>
        ${(mine.length?[['রহিম উদ্দিন','৩ BHK · গুলশান','আজ'],['করিম আহমেদ','২ BHK · ধানমন্ডি','গতকাল']]:[]).map(r=>`<div class="bk-item"><div class="owner-av" style="width:34px;height:34px">${r[0][0]}</div><div style="flex:1"><div class="bk-t">${r[0]} — ${r[1]}</div><div class="bk-l">📞 কল-ব্যাকের অপেক্ষায় · ${r[2]}</div></div><div class="bk-st pend">New</div></div>`).join('') || '<div style="padding:20px;text-align:center;color:var(--white-30);font-family:var(--font-ui);font-size:.85rem">প্রপার্টি যোগ করলে এখানে inquiry দেখা যাবে।</div>'}
      </div>
    </div>
  </div>`;
}
async function getSellerListings(){
  if(!session) return [];
  const rows = await PropertySvc.fetchBySeller(session.id);
  return rows.map(dbRowToCard);
}

// ── SELLER: ADD PROPERTY FLOW ──
const _apImg='https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700&h=400&fit=crop';
function _apv(id){ const e=document.getElementById(id); return e?e.value.trim():''; }
function apStep(n){
  [1,2,3].forEach(i=>{
    const s=document.getElementById('aps'+i); if(s) s.className='prog-s'+(i<n?' done':i===n?' on':'');
    const c=document.getElementById('apsc'+i); if(c) c.style.display=i===n?'block':'none';
  });
}
function openAddProperty(){
  if(!session || session.role!=='seller'){ openAuth('seller','login',false); return; }
  document.getElementById('addp-seller').textContent=session.name;
  document.getElementById('addp-err').textContent='';
  ['ap-title','ap-area','ap-rent','ap-beds','ap-baths','ap-sqft','ap-phone'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});
  apStep(1); openM('addp-ov');
}
function addpReview(){
  const err=document.getElementById('addp-err'); err.textContent='';
  const t=_apv('ap-title'),city=_apv('ap-city'),area=_apv('ap-area'),type=_apv('ap-type'),rent=_apv('ap-rent'),beds=_apv('ap-beds'),phone=_apv('ap-phone').replace(/\D/g,'');
  if(!t||!area||!rent||!beds){ err.textContent='Title, Area, Rent এবং Bedrooms আবশ্যক।'; return; }
  if(!(Number(rent)>0)){ err.textContent='সঠিক Rent দিন।'; return; }
  if(!(Number(beds)>0)){ err.textContent='সঠিক Bedroom সংখ্যা দিন।'; return; }
  if(phone && !/^01[3-9]\d{8}$/.test(phone)){ err.textContent='ফোন নম্বর সঠিক নয় (01…)।'; return; }
  const row=(l,v)=>`<div class="pr-row"><span class="pr-l">${l}</span><span class="pr-v">${v}</span></div>`;
  document.getElementById('addp-review').innerHTML=
    row('Title',t)+row('Location',area+', '+city)+row('Type',type)+
    row('Rent','৳'+Number(rent).toLocaleString()+'/mo')+
    row('Beds / Baths',beds+' / '+(_apv('ap-baths')||'—'))+
    row('Size',(_apv('ap-sqft')||'—')+' sqft')+row('Furnished',_apv('ap-furn'));
  apStep(2);
}
async function confirmAddProperty(){
  if(!session) return;
  try{
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
      image: _apImg,
      images: [_apImg],
      verified: false,
      description: _apv('ap-area')+', '+_apv('ap-city')+' — '+_apv('ap-beds')+' বেড।'
    };
    const saved = await PropertySvc.create(rec);
    document.getElementById('addp-lid').textContent = '#LST-' + saved.id;
    apStep(3);
    toast('✓ Property published','',3000);
  }catch(e){
    document.getElementById('addp-err').textContent = e.message || 'Property সেভ করা যায়নি।';
  }
}
function addpDone(){ closeM('addp-ov'); renderDash(); goPage('dashboard'); }

// ── INIT ──
async function loadAllProperties(){
  try{
    const dbRows = await PropertySvc.fetchAll();
    curProps = [...dbRows.map(dbRowToCard), ...props];
    renderProps(curProps);
  }catch(e){
    console.error('Property load failed:', e);
    renderProps(props);
  }
}
loadAllProperties();
initJourney();setActiveNav('home');renderNavAuth();
// AI welcome msg
const hm=document.getElementById('home-ai-msgs');
if(hm){const m=document.createElement('div');m.className='ai-msg bot';m.textContent='Hello! I\'m Abashon AI. Tell me what home you need — location, budget, size. I\'ll find the best matches instantly.';hm.appendChild(m);}
// Date
const d=new Date();d.setDate(d.getDate()+7);
if(document.getElementById('mv-dt'))document.getElementById('mv-dt').value=d.toISOString().split('T')[0];