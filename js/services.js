// আবাসন — mock service layer (OTP, NID, payment, reservation). Docs in /services.
// ── ABASHON MOCK SERVICES (inlined, file://-safe copy of /services/*.js) ──
// Documented, testable source lives in services/. This is the runtime bundle.
const ASvc=(function(){
  const MOCK=true;
  class SErr extends AppError{constructor(code,msg){super(code,msg);this.name='SErr';}}
  const delay=(a,b)=>new Promise(r=>setTimeout(r,Math.floor(a+Math.random()*(b-a))));
  const tmo=o=>o&&o.simulateTimeout?Promise.reject(new SErr('TIMEOUT','Request timed out.')):null;
  const uid=p=>(globalThis.crypto&&crypto.randomUUID?crypto.randomUUID():p+Date.now().toString(36)+Math.random().toString(36).slice(2,9));
  // OTP
  const otp=new Map();
  const isValidBDPhone=p=>Validators.bdPhone(p); // কেন্দ্রীয় সংজ্ঞা: js/validators.js
  const isSixDigitCode=c=>typeof c==='string'&&/^\d{6}$/.test(c);
  async function sendOTP(phone,o){const t=tmo(o);if(t)return t;const c=isValidBDPhone(phone);if(!c.ok)throw new SErr('INVALID_INPUT','সঠিক মোবাইল নম্বর দিন (01XXXXXXXXX)।');await delay(500,1100);const sid=uid('otp_'),code=String(Math.floor(100000+Math.random()*900000)),expiresAt=Date.now()+300000;otp.set(sid,{code,phone:c.normalised,expiresAt,attempts:0});if(MOCK)console.warn('[ASvc OTP] '+c.normalised+': '+code);const r={sessionId:sid,expiresAt,phone:c.normalised};if(MOCK)r.devCode=code;return r;}
  async function verifyOTP(sid,code,o){const t=tmo(o);if(t)return t;if(!sid)throw new SErr('INVALID_INPUT','Session ID প্রয়োজন।');if(!isSixDigitCode(code))throw new SErr('INVALID_INPUT','কোড ৬ সংখ্যার হতে হবে।');await delay(300,700);const s=otp.get(sid);if(!s)throw new SErr('NOT_FOUND','সেশন পাওয়া যায়নি।');if(Date.now()>s.expiresAt){otp.delete(sid);throw new SErr('EXPIRED','কোডের মেয়াদ শেষ।');}if(s.attempts>=5){otp.delete(sid);throw new SErr('TOO_MANY_ATTEMPTS','অনেকবার ভুল হয়েছে।');}if(s.code!==code){s.attempts++;throw new SErr('INVALID_CODE','ভুল কোড। বাকি: '+(5-s.attempts)+'।');}otp.delete(sid);return{verified:true,phone:s.phone};}
  // NID
  const isValidNIDFormat=n=>Validators.nid(n); // কেন্দ্রীয় সংজ্ঞা: js/validators.js
  function nidIdentity(nid){const F=['Rahim','Karim','Sadia','Tanvir','Nusrat','Imran','Farhana','Sabbir'],L=['Uddin','Ahmed','Islam','Chowdhury','Khatun','Hossain','Akter','Rahman'];let h=0;for(const ch of String(nid))h=(h*31+ch.charCodeAt(0))>>>0;return F[h%F.length]+' '+L[(h>>>3)%L.length];}
  async function verifyNID(nn,o){const t=tmo(o);if(t)return t;const nid=typeof nn==='string'?nn.trim():'';if(!isValidNIDFormat(nid))throw new SErr('INVALID_INPUT','NID ১০, ১৩ বা ১৭ সংখ্যার হতে হবে।');await delay(2000,3000);if(nid.startsWith('0000'))throw new SErr('NOT_FOUND','এই NID পাওয়া যায়নি।');return{verified:true,nid,maskedNid:nid.slice(0,3)+'••••'+nid.slice(-3),name:nidIdentity(nid),refId:'NIDREF-'+Date.now().toString(36).toUpperCase()};}
  // Payment
  const luhnCheck=cn=>{if(typeof cn!=='string')return false;const d=cn.replace(/[\s-]/g,'');if(!/^\d{13,19}$/.test(d))return false;let s=0,x=false;for(let i=d.length-1;i>=0;i--){let n=d.charCodeAt(i)-48;if(x){n*=2;if(n>9)n-=9;}s+=n;x=!x;}return s%10===0;};
  const isValidExpiry=(m,y)=>{m=Number(m);y=Number(y);if(!Number.isInteger(m)||m<1||m>12||!Number.isInteger(y))return false;if(y<100)y+=2000;return new Date(y,m)>new Date();};
  const validateCard=c=>{if(!c||typeof c!=='object')return{ok:false,reason:'কার্ডের তথ্য নেই।'};if(!luhnCheck(c.number))return{ok:false,reason:'কার্ড নম্বর সঠিক নয়।'};if(!isValidExpiry(c.month,c.year))return{ok:false,reason:'মেয়াদ সঠিক নয়।'};if(!/^\d{3,4}$/.test(String(c.cvv||'')))return{ok:false,reason:'CVV সঠিক নয়।'};return{ok:true};};
  const txn=()=>'TXN-'+Date.now().toString(36).toUpperCase()+'-'+Math.random().toString(36).slice(2,6).toUpperCase();
  async function initiatePayment(amount,orderId,card,o){const t=tmo(o);if(t)return t;if(typeof amount!=='number'||!(amount>0))throw new SErr('INVALID_INPUT','পরিমাণ সঠিক নয়।');if(!orderId)throw new SErr('INVALID_INPUT','Order ID প্রয়োজন।');const v=validateCard(card);if(!v.ok)throw new SErr('INVALID_INPUT',v.reason);await delay(1500,2400);if(card.number.replace(/[\s-]/g,'').slice(-4)==='0002')throw new SErr('CARD_DECLINED','কার্ড প্রত্যাখ্যাত (insufficient funds)।');return{status:'SUCCESS',transactionId:txn(),amount,orderId,method:'card',demo:MOCK,processedAt:new Date().toISOString()};}
  async function initiateWalletPayment(amount,orderId,method,msisdn,o){const t=tmo(o);if(t)return t;if(typeof amount!=='number'||!(amount>0))throw new SErr('INVALID_INPUT','পরিমাণ সঠিক নয়।');if(!orderId)throw new SErr('INVALID_INPUT','Order ID প্রয়োজন।');if(!['bkash','nagad','rocket'].includes(method))throw new SErr('INVALID_INPUT','মেথড সঠিক নয়।');if(!Validators.bdPhone(String(msisdn).replace(/[\s-]/g,'')))throw new SErr('INVALID_INPUT','সঠিক ওয়ালেট নম্বর দিন।');await delay(1500,2400);return{status:'SUCCESS',transactionId:txn(),amount,orderId,method,demo:MOCK,processedAt:new Date().toISOString()};}
  // Reservation (localStorage + in-memory fallback)
  const PFX='reservation_lock_',mem=new Map();
  const sg={get(k){try{const v=localStorage.getItem(k);return v==null?(mem.get(k)??null):v;}catch(e){return mem.get(k)??null;}},set(k,v){try{localStorage.setItem(k,v);}catch(e){}mem.set(k,v);},rem(k){try{localStorage.removeItem(k);}catch(e){}mem.delete(k);}};
  const rkey=id=>PFX+id;
  function readLock(id){const raw=sg.get(rkey(id));if(!raw)return null;let l;try{l=JSON.parse(raw);}catch(e){sg.rem(rkey(id));return null;}if(!l||typeof l.lockedUntil!=='number'||Date.now()>=l.lockedUntil){sg.rem(rkey(id));return null;}return l;}
  const isValidId=x=>(typeof x==='string'&&x.trim())||(typeof x==='number'&&Number.isFinite(x));
  async function lockProperty(pid,uid2,o){if(o&&o.simulateTimeout)throw new SErr('TIMEOUT','Reservation timed out.');if(!isValidId(pid)||!isValidId(uid2))throw new SErr('INVALID_INPUT','propertyId ও userId প্রয়োজন।');await delay(150,400);const ex=readLock(pid);if(ex&&String(ex.userId)!==String(uid2))throw new SErr('ALREADY_LOCKED','এই প্রপার্টি বর্তমানে reserved।');const dur=(o&&o.durationMs)||86400000,now=Date.now(),lock={userId:String(uid2),lockedAt:now,lockedUntil:now+dur};sg.set(rkey(pid),JSON.stringify(lock));return{locked:true,propertyId:String(pid),userId:lock.userId,lockedUntil:lock.lockedUntil,lockedAt:lock.lockedAt};}
  async function checkLockStatus(pid){if(!isValidId(pid))throw new SErr('INVALID_INPUT','propertyId প্রয়োজন।');await delay(60,160);const l=readLock(pid);return l?{isLocked:true,remainingMs:Math.max(0,l.lockedUntil-Date.now()),lockedUntil:l.lockedUntil,userId:l.userId}:{isLocked:false,remainingMs:0,lockedUntil:null,userId:null};}
  async function releaseLock(pid,uid2){if(!isValidId(pid)||!isValidId(uid2))throw new SErr('INVALID_INPUT','id প্রয়োজন।');await delay(60,160);const l=readLock(pid);if(!l)throw new SErr('NOT_LOCKED','কোনো লক নেই।');if(String(l.userId)!==String(uid2))throw new SErr('NOT_HOLDER','শুধু holder রিলিজ করতে পারে।');sg.rem(rkey(pid));return{released:true};}
  return {SErr,isValidBDPhone,isSixDigitCode,sendOTP,verifyOTP,isValidNIDFormat,verifyNID,luhnCheck,validateCard,initiatePayment,initiateWalletPayment,lockProperty,checkLockStatus,releaseLock};
})();
