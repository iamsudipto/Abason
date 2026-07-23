// js/agreementService.js — ভাড়ার চুক্তিপত্র (e-doc) জেনারেটর
//
// কী করে: ফর্মের ইনপুট থেকে একটা প্রমিত বাংলা বাড়িভাড়া চুক্তিপত্র বানায়, দুইভাবে নেওয়া যায় —
//   1) 🖨️ PDF: প্রিন্ট-অপ্টিমাইজড নতুন উইন্ডো খুলে window.print() → ইউজার "Save as PDF" করে।
//      (jsPDF-এ বাংলা ফন্ট embed করা ঝামেলার; ব্রাউজারের নিজের রেন্ডারার বাংলা নিখুঁত ছাপে —
//      তাই print-to-PDF-ই এখানে সবচেয়ে নির্ভরযোগ্য পথ।)
//   2) ⬇️ Word: পুরো HTML-টা application/msword Blob হিসেবে .doc নামে ডাউনলোড —
//      MS Word/Google Docs দুটোতেই খোলে, বাংলা অক্ষুণ্ণ থাকে, ইউজার এডিটও করতে পারে।
//
// আইনি নোট (UI-তেও দেখানো হয়): এটা একটা টেমপ্লেট, আইনি পরামর্শ নয়। বাড়ীভাড়া নিয়ন্ত্রণ
// আইন, ১৯৯১ অনুযায়ী লিখিত চুক্তি ও ভাড়ার রসিদ দেওয়া বাধ্যতামূলক; প্রয়োজনে
// নন-জুডিশিয়াল স্ট্যাম্পে সম্পাদন ও নোটারি করাতে হবে।

class AgreementError extends AppError {
  constructor(code, message) { super(code, message); this.name = 'AgreementError'; }
}

const AgreementSvc = (() => {

  const esc = s => AbashonUtil.esc(s); // canonical: js/coreUtils.js

  function bnMoney(n){
    const v = Number(n)||0;
    return '৳' + v.toLocaleString('bn-BD');
  }

  function bnDateStr(iso){
    if(!iso) return '____________';
    try{ return new Date(iso).toLocaleDateString('bn-BD',{year:'numeric',month:'long',day:'numeric'}); }
    catch(e){ return esc(iso); }
  }

  /**
   * @param {object} d - {ownerName, ownerAddress, tenantName, tenantAddress, propertyAddress,
   *                      rent, advance, termMonths, startDate, extraTerms, tenantType}
   * @returns {string} full standalone HTML document (print-ready, A4)
   */
  function buildAgreementHtml(d){
    const today = new Date().toLocaleDateString('bn-BD',{year:'numeric',month:'long',day:'numeric'});
    const blank = '____________';
    const extra = (d.extraTerms||'').trim();
    return `<!DOCTYPE html>
<html lang="bn">
<head>
<meta charset="UTF-8"/>
<title>বাড়িভাড়ার চুক্তিপত্র</title>
<style>
  @page { size: A4; margin: 22mm 20mm; }
  body { font-family: 'Noto Sans Bengali','SolaimanLipi','Kalpurush',serif; color:#111; line-height:1.9; font-size:14px; max-width:760px; margin:0 auto; padding:24px; }
  h1 { text-align:center; font-size:20px; margin:0 0 4px; letter-spacing:.5px; }
  .sub { text-align:center; font-size:12px; color:#555; margin-bottom:26px; }
  .clause { margin:0 0 10px; text-align:justify; }
  .clause b { font-weight:700; }
  ol { padding-right:0; padding-left:22px; margin:8px 0 18px; }
  ol li { margin-bottom:8px; text-align:justify; }
  .sig-row { display:flex; justify-content:space-between; gap:40px; margin-top:70px; }
  .sig { width:45%; text-align:center; font-size:13px; }
  .sig .line { border-top:1px solid #111; padding-top:6px; margin-top:46px; }
  .wit { margin-top:44px; font-size:13px; }
  .wit .line { border-top:1px dashed #777; width:60%; margin-top:34px; padding-top:4px; }
  .footer-note { margin-top:36px; font-size:11px; color:#666; border-top:1px solid #ddd; padding-top:10px; text-align:justify; }
  .toolbar { position:fixed; top:10px; right:10px; display:flex; gap:8px; }
  .toolbar button { padding:9px 16px; border:none; border-radius:8px; font-family:inherit; font-size:13px; font-weight:700; cursor:pointer; }
  .tb-print { background:#0e5a45; color:#fff; }
  .tb-close { background:#eee; color:#333; }
  @media print { .toolbar { display:none; } body { padding:0; } }
</style>
</head>
<body>
<div class="toolbar">
  <button class="tb-print" onclick="window.print()">🖨️ Print / Save as PDF</button>
  <button class="tb-close" onclick="window.close()">বন্ধ</button>
</div>

<h1>বাড়িভাড়ার চুক্তিপত্র</h1>
<div class="sub">(বাড়ীভাড়া নিয়ন্ত্রণ আইন, ১৯৯১-এর আলোকে প্রস্তুতকৃত সাধারণ টেমপ্লেট)</div>

<p class="clause"><b>১ম পক্ষ (বাড়ির মালিক):</b> ${esc(d.ownerName)||blank}, ঠিকানা: ${esc(d.ownerAddress)||blank}।</p>
<p class="clause"><b>২য় পক্ষ (ভাড়াটিয়া):</b> ${esc(d.tenantName)||blank}, ঠিকানা: ${esc(d.tenantAddress)||blank}।</p>

<p class="clause">এই মর্মে উভয় পক্ষ সুস্থ মস্তিষ্কে, স্বেচ্ছায় ও বিনা প্ররোচনায় নিম্নলিখিত শর্তে অত্র বাড়িভাড়ার চুক্তিপত্র সম্পাদন করিলেন। চুক্তি সম্পাদনের তারিখ: <b>${today}</b>।</p>

<p class="clause"><b>ভাড়াকৃত বাসার বিবরণ:</b> ${esc(d.propertyAddress)||blank} ${d.tenantType?`(ভাড়াটিয়ার ধরন: ${esc(d.tenantType)})`:''}</p>

<b>শর্তাবলি:</b>
<ol>
  <li>মাসিক ভাড়া নির্ধারিত হইল <b>${bnMoney(d.rent)}</b> (কথায়: ____________ টাকা মাত্র), যাহা প্রতি ইংরেজি মাসের ১ হইতে ৭ তারিখের মধ্যে ২য় পক্ষ ১ম পক্ষকে পরিশোধ করিবেন এবং ১ম পক্ষ প্রতিটি পরিশোধের বিপরীতে <b>ভাড়ার রসিদ</b> প্রদান করিবেন (বাড়ীভাড়া নিয়ন্ত্রণ আইন, ১৯৯১-এর ধারা ১৩ অনুযায়ী রসিদ প্রদান বাধ্যতামূলক)।</li>
  <li>অগ্রিম/জামানত বাবদ ২য় পক্ষ ১ম পক্ষকে <b>${bnMoney(d.advance)}</b> প্রদান করিলেন, যাহা চুক্তি শেষে বাসা বুঝাইয়া দেওয়ার সময় (কোনো বকেয়া/ক্ষতি সমন্বয়ের পর) ফেরতযোগ্য।</li>
  <li>চুক্তির মেয়াদ <b>${esc(d.termMonths)||blank} মাস</b>, যাহা <b>${bnDateStr(d.startDate)}</b> তারিখ হইতে কার্যকর হইবে। মেয়াদ শেষে উভয় পক্ষের সম্মতিতে চুক্তি নবায়নযোগ্য।</li>
  <li>বিদ্যুৎ, গ্যাস, পানি ও সার্ভিস চার্জ — কে কোনটি বহন করিবেন তাহা উভয় পক্ষ লিখিতভাবে নির্ধারণ করিবেন; ভিন্নরূপ উল্লেখ না থাকিলে ব্যবহারভিত্তিক বিল ২য় পক্ষ বহন করিবেন।</li>
  <li>২য় পক্ষ বাসাটি শুধুমাত্র আবাসিক কাজে ব্যবহার করিবেন এবং ১ম পক্ষের লিখিত অনুমতি ব্যতীত অন্য কাহাকেও ভাড়া (সাব-লেট) দিতে পারিবেন না।</li>
  <li>বাসার কাঠামোগত মেরামত ১ম পক্ষের দায়িত্বে থাকিবে; ২য় পক্ষের ব্যবহারজনিত ক্ষয়ক্ষতি ২য় পক্ষ নিজ খরচে মেরামত করিবেন।</li>
  <li>যেকোনো পক্ষ চুক্তি ভঙ্গ করিতে চাহিলে ন্যূনতম <b>দুই মাস</b> পূর্বে অপর পক্ষকে লিখিত নোটিশ প্রদান করিবেন।</li>
  <li>আইনানুগ কারণ ব্যতীত মেয়াদকালে ১ম পক্ষ ২য় পক্ষকে উচ্ছেদ করিতে পারিবেন না এবং ২য় পক্ষ নিয়মিত ভাড়া পরিশোধে বাধ্য থাকিবেন।</li>
  ${extra?`<li><b>বিশেষ শর্ত:</b> ${esc(extra)}</li>`:''}
  <li>এই চুক্তিতে অনুল্লিখিত যেকোনো বিষয়ে বাড়ীভাড়া নিয়ন্ত্রণ আইন, ১৯৯১ সহ বাংলাদেশের প্রচলিত আইন প্রযোজ্য হইবে।</li>
</ol>

<p class="clause">উপরোক্ত শর্তাবলি পাঠ করিয়া/শুনিয়া, ইহার মর্ম সম্পূর্ণরূপে অবগত হইয়া উভয় পক্ষ স্বাক্ষর করিলেন।</p>

<div class="sig-row">
  <div class="sig"><div class="line">১ম পক্ষের স্বাক্ষর ও তারিখ<br/>(${esc(d.ownerName)||'বাড়ির মালিক'})</div></div>
  <div class="sig"><div class="line">২য় পক্ষের স্বাক্ষর ও তারিখ<br/>(${esc(d.tenantName)||'ভাড়াটিয়া'})</div></div>
</div>

<div class="wit">
  <b>সাক্ষীগণ:</b>
  <div class="line">১। নাম ও স্বাক্ষর</div>
  <div class="line">২। নাম ও স্বাক্ষর</div>
</div>

<div class="footer-note">
  ⚠️ এই দলিলটি আবাসন (Abashon) প্ল্যাটফর্মে তৈরি একটি <b>সাধারণ টেমপ্লেট</b> — ইহা আইনি পরামর্শ নহে।
  পক্ষগণের প্রয়োজন অনুযায়ী নন-জুডিশিয়াল স্ট্যাম্পে সম্পাদন, নোটারি ও প্রযোজ্য ক্ষেত্রে রেজিস্ট্রেশনের
  জন্য একজন আইনজীবীর পরামর্শ লওয়া বাঞ্ছনীয়। তৈরির তারিখ: ${today} · abashon
</div>
</body>
</html>`;
  }

  /** নতুন উইন্ডোতে প্রিন্ট-রেডি চুক্তিপত্র খোলে (ইউজার সেখান থেকে Print → Save as PDF করবে)। */
  function openPrintable(data){
    const html = buildAgreementHtml(data);
    const w = window.open('', '_blank');
    if(!w) throw new AgreementError('POPUP_BLOCKED','পপ-আপ ব্লক হয়ে আছে — ব্রাউজারে এই সাইটের পপ-আপ allow করুন।');
    w.document.open(); w.document.write(html); w.document.close();
  }

  /** .doc ফাইল হিসেবে ডাউনলোড (Word/Google Docs-এ খোলে ও এডিট করা যায়)। */
  function downloadDoc(data){
    const html = buildAgreementHtml(data);
    // \ufeff (BOM) দিলে Word বাংলা encoding ঠিকমতো ধরে
    const blob = new Blob(['\ufeff', html], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ভাড়া-চুক্তিপত্র-' + new Date().toISOString().slice(0,10) + '.doc';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(()=>URL.revokeObjectURL(url), 4000);
  }

  return { buildAgreementHtml, openPrintable, downloadDoc };
})();
