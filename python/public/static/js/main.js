const LANG_KEY = "netguru-lang";
const I18N = {
  en: {
    "nav.shop": "Shop",
    "nav.offers": "Offers",
    "nav.contact": "Contact",
    call: "Call",
    enquire: "Enquire on WhatsApp",
    "hero.eyebrow": "Online shop · Bhawarkua, Indore",
    "hero.title": "Order services.<br />Collect at the centre.",
    "hero.tagline": "Your convenience, our responsibility.",
    "hero.lead": "Choose a service and enquire on WhatsApp. Collect and pay at the centre.",
    "shop.title": "Our Services",
    "shop.lead": "Choose a service and enquire on WhatsApp. Collect and pay at the centre.",
    "shop.expertise": "Counselling expertise",
    "cat.all": "All",
    "cat.print": "Print & copy",
    "cat.ids": "IDs & cards",
    "cat.forms": "Forms",
    "cat.counselling": "Counselling",
    "contact.title": "Visit the centre",
    "contact.address": "70–71, Indrapuri Colony, Bhawarkua,<br />Indore, Madhya Pradesh",
    "why.experience": "20 years of experience",
    "why.pay": "Pay and collect at the shop",
    "why.advice": "Correct information, student-first advice",
    "why.roof": "All work under one roof",
    prev: "Previous photo",
    next: "Next photo",
    "chat.assistant": "AI Assist",
    "chat.fab": "AI Assist",
    "chat.close": "Close chat",
    "chat.placeholder": "Type a message",
    "chat.mobilePlaceholder": "10-digit mobile number",
    "chat.send": "Send",
    "chat.hi": "Hi, I am the Net Guru WhatsApp assistant.",
    "chat.selected": "You selected: {name}.",
    "chat.intro": "I will take a few details, open WhatsApp, then keep helping with your query.",
    "chat.first": "What is your first name?",
    "chat.last": "Thanks. What is your last name?",
    "chat.mobile": "Please share your 10-digit mobile number.",
    "chat.mobileError": "Please enter a 10-digit mobile number.",
    "chat.type": "What is your enquiry type? Tap one option.",
    "chat.query": "What is your query? Type it, or tap a topic.",
    "chat.thanks": "Thank you. I am opening WhatsApp, then I will keep assisting here.",
    "chat.opened": "WhatsApp is open for the shop. Keep asking here — I will help with your query.",
    "chat.queryPlaceholder": "Type your query",
    "suggest.address": "Centre address",
    "suggest.hours": "Visit / timing",
    "suggest.docs": "Documents needed",
    "suggest.whatsapp": "Open WhatsApp again",
    "faq.photocopy": "Photocopy is done at the counter. Bring the original papers and collect the copies at the centre.",
    "faq.print": "We print forms, notes and documents in black & white or colour. Bring the file on phone, email or pen drive.",
    "faq.photo": "Passport, admit-card and PVC photos are taken at the centre, usually the same day.",
    "faq.forms": "We fill MP Online and other government, scholarship, Gumasta/MSME, nursing and pharmacy forms. Bring ID proofs and required documents.",
    "faq.ids": "PAN, Aadhaar, voter ID and Samagra ID work is done at the centre. Bring existing IDs and a mobile number linked to Aadhaar.",
    "faq.counselling": "Admission and exam counselling (NEET, JEE, CLAT, CET, ePravesh and more) is free. Visit the centre with marksheets for guidance.",
    "faq.address": "Net Guru Online Services, 70–71 Indrapuri Colony, Bhawarkua, Indore. Call 9755588862.",
    "faq.hours": "Visit the Bhawarkua centre to collect and pay. For timing, call 9755588862 or continue on WhatsApp.",
    "faq.docs": "Bring original IDs (Aadhaar/PAN), photos if needed, and any form or file you want printed or submitted.",
    "faq.pay": "There is no online payment here. Enquire now, then pay and collect at the shop.",
    "faq.default": "I can help with photocopy, print, photos, IDs, government forms and counselling. Share a bit more, or the shop will reply on WhatsApp.",
    "wa.hello": "Hello Net Guru, I want to enquire.",
    "wa.first": "First name",
    "wa.last": "Last name",
    "wa.mobile": "Mobile no",
    "wa.type": "Enquiry type",
    "wa.service": "Service",
    "wa.query": "Query",
    "type.print": "Print & copy",
    "type.ids": "IDs & cards",
    "type.forms": "Forms",
    "type.counselling": "Counselling",
    "type.other": "Other",
    "product.photocopy.name": "Photocopy",
    "product.photocopy.blurb": "Black & white copies at the counter.",
    "product.printout.name": "Colour / document print",
    "product.printout.blurb": "Print forms, notes and documents.",
    "product.admit-photo.name": "Admit-card photo",
    "product.admit-photo.blurb": "Exam and admit-card size photos.",
    "product.pvc-card.name": "PVC card",
    "product.pvc-card.blurb": "Printed PVC identity cards.",
    "product.passport-photo.name": "Passport photo",
    "product.passport-photo.blurb": "Passport-size photos, same day.",
    "product.scan-email.name": "Document scan & email",
    "product.scan-email.blurb": "Scan papers and send them by email.",
    "product.online-form.name": "Online form filling",
    "product.online-form.blurb": "We fill and submit your online form.",
    "product.govt-forms.name": "All government forms",
    "product.govt-forms.blurb": "MP Online and other govt applications.",
    "product.scholarship.name": "Scholarship forms",
    "product.scholarship.blurb": "Scholarship and student aid forms.",
    "product.gumasta-msme.name": "Gumasta / MSME registration",
    "product.gumasta-msme.blurb": "Shop licence and MSME paperwork.",
    "product.medical-reg.name": "Nursing / BPharma registration",
    "product.medical-reg.blurb": "Medical and pharmacy registrations.",
    "product.pan-aadhaar.name": "PAN & Aadhaar services",
    "product.pan-aadhaar.blurb": "PAN, Aadhaar update and related work.",
    "product.voter-samagra.name": "Voter ID & Samagra ID",
    "product.voter-samagra.blurb": "Voter card and Samagra ID help.",
    "product.counselling.name": "Admission counselling",
    "product.counselling.blurb": "Free guidance for college admissions.",
    "product.exam-counselling.name": "Exam counselling (NEET, JEE, CLAT…)",
    "product.exam-counselling.blurb": "NEET, JEE, CLAT, CET, ePravesh and more.",
    "cookie.text": "We use cookies to remember your language and to improve the site. Necessary cookies keep the site working. Accept all cookies if you are happy with optional cookies too.",
    "cookie.accept": "Accept all cookies",
    "cookie.necessary": "Necessary only",
    "cookie.manage": "Cookies",
    "ads.badge": "Ad",
    "ads.kicker": "Marketing",
    "ads.title": "Offers at the centre",
    "ads.lead": "Current ads from Net Guru. Enquire on WhatsApp and collect at the shop.",
    "ads.strip": "Free admission counselling · Same-day passport photos · PAN, Aadhaar and government forms in Bhawarkua, Indore.",
    "ads.counsel.title": "Free NEET, JEE & CLAT counselling",
    "ads.counsel.text": "Get admission guidance at the centre. Bring marksheets. No online payment.",
    "ads.photo.title": "Same-day passport & admit-card photos",
    "ads.photo.text": "Photos and PVC cards printed at the counter. Walk in or enquire first.",
    "ads.forms.title": "PAN, Aadhaar and government forms",
    "ads.forms.text": "MP Online, scholarship, Gumasta/MSME and ID work under one roof.",
    "ads.later": "Maybe later",
    "ads.close": "Close ad",
  },
  hi: {
    "nav.shop": "दुकान",
    "nav.offers": "ऑफर",
    "nav.contact": "संपर्क",
    call: "कॉल",
    enquire: "व्हाट्सऐप पर पूछताछ",
    "hero.eyebrow": "ऑनलाइन दुकान · भावरकुआ, इंदौर",
    "hero.title": "सेवाएँ ऑर्डर करें।<br />केंद्र पर लें।",
    "hero.tagline": "आपकी सुविधा, हमारी ज़िम्मेदारी।",
    "hero.lead": "सेवा चुनें और व्हाट्सऐप पर पूछताछ करें। केंद्र पर आकर भुगतान करें।",
    "shop.title": "हमारी सेवाएँ",
    "shop.lead": "सेवा चुनें और व्हाट्सऐप पर पूछताछ करें। केंद्र पर आकर भुगतान करें।",
    "shop.expertise": "परामर्श विशेषज्ञता",
    "cat.all": "सभी",
    "cat.print": "प्रिंट और कॉपी",
    "cat.ids": "आईडी और कार्ड",
    "cat.forms": "फॉर्म",
    "cat.counselling": "परामर्श",
    "contact.title": "केंद्र पर आएँ",
    "contact.address": "70–71, इंद्रपुरी कॉलोनी, भावरकुआ,<br />इंदौर, मध्य प्रदेश",
    "why.experience": "20 वर्षों का अनुभव",
    "why.pay": "दुकान पर भुगतान करें और काम लें",
    "why.advice": "सही जानकारी, विद्यार्थी-हित सलाह",
    "why.roof": "सभी काम एक ही छत के नीचे",
    prev: "पिछली तस्वीर",
    next: "अगली तस्वीर",
    "chat.assistant": "AI सहायता",
    "chat.fab": "AI सहायता",
    "chat.close": "चैट बंद करें",
    "chat.placeholder": "संदेश लिखें",
    "chat.mobilePlaceholder": "10 अंकों का मोबाइल नंबर",
    "chat.send": "भेजें",
    "chat.hi": "नमस्ते, मैं नेट गुरु व्हाट्सऐप सहायक हूँ।",
    "chat.selected": "आपने चुना: {name}.",
    "chat.intro": "मैं कुछ जानकारी लूँगा, व्हाट्सऐप खोलूँगा, फिर आपकी क्वेरी में मदद करता रहूँगा।",
    "chat.first": "आपका पहला नाम क्या है?",
    "chat.last": "धन्यवाद। आपका अंतिम नाम क्या है?",
    "chat.mobile": "कृपया अपना 10 अंकों का मोबाइल नंबर बताएँ।",
    "chat.mobileError": "कृपया 10 अंकों का मोबाइल नंबर लिखें।",
    "chat.type": "पूछताछ का प्रकार क्या है? एक विकल्प चुनें।",
    "chat.query": "आपकी क्वेरी क्या है? लिखें, या एक विषय चुनें।",
    "chat.thanks": "धन्यवाद। मैं व्हाट्सऐप खोल रहा हूँ, फिर यहाँ मदद करता रहूँगा।",
    "chat.opened": "दुकान के लिए व्हाट्सऐप खुल गया है। यहाँ पूछते रहें — मैं आपकी क्वेरी में मदद करूँगा।",
    "chat.queryPlaceholder": "अपनी क्वेरी लिखें",
    "suggest.address": "केंद्र का पता",
    "suggest.hours": "आना / समय",
    "suggest.docs": "कौन से दस्तावेज़",
    "suggest.whatsapp": "व्हाट्सऐप फिर खोलें",
    "faq.photocopy": "फोटोकॉपी काउंटर पर होती है। मूल कागज़ लाएँ और केंद्र पर कॉपी ले जाएँ।",
    "faq.print": "हम फॉर्म, नोट्स और दस्तावेज़ ब्लैक एंड व्हाइट या रंगीन प्रिंट करते हैं। फाइल फोन, ईमेल या पेन ड्राइव पर लाएँ।",
    "faq.photo": "पासपोर्ट, एडमिट-कार्ड और पीवीसी फोटो केंद्र पर लिए जाते हैं, आमतौर पर उसी दिन।",
    "faq.forms": "हम एमपी ऑनलाइन और अन्य सरकारी, छात्रवृत्ति, गुमास्ता/MSME, नर्सिंग और फार्मेसी फॉर्म भरते हैं। पहचान पत्र और जरूरी कागज़ लाएँ।",
    "faq.ids": "पैन, आधार, वोटर आईडी और समग्र आईडी का काम केंद्र पर होता है। पुराने आईडी और आधार से जुड़ा मोबाइल नंबर लाएँ।",
    "faq.counselling": "प्रवेश और परीक्षा परामर्श (NEET, JEE, CLAT, CET, ePravesh) मुफ्त है। मार्कशीट लेकर केंद्र आएँ।",
    "faq.address": "नेट गुरु ऑनलाइन सर्विसेस, 70–71 इंद्रपुरी कॉलोनी, भावरकुआ, इंदौर। कॉल 9755588862।",
    "faq.hours": "काम लेने और भुगतान के लिए भावरकुआ केंद्र आएँ। समय के लिए 9755588862 पर कॉल करें या व्हाट्सऐप पर पूछें।",
    "faq.docs": "मूल आईडी (आधार/पैन), जरूरत हो तो फोटो, और जो फॉर्म या फाइल छपवानी/जमा करनी है वह लाएँ।",
    "faq.pay": "यहाँ ऑनलाइन भुगतान नहीं है। पहले पूछताछ करें, फिर दुकान पर भुगतान कर काम लें।",
    "faq.default": "मैं फोटोकॉपी, प्रिंट, फोटो, आईडी, सरकारी फॉर्म और परामर्श में मदद कर सकता हूँ। थोड़ा और लिखें, या दुकान व्हाट्सऐप पर जवाब देगी।",
    "wa.hello": "नमस्ते नेट गुरु, मुझे पूछताछ करनी है।",
    "wa.first": "पहला नाम",
    "wa.last": "अंतिम नाम",
    "wa.mobile": "मोबाइल नंबर",
    "wa.type": "पूछताछ का प्रकार",
    "wa.service": "सेवा",
    "wa.query": "क्वेरी",
    "type.print": "प्रिंट और कॉपी",
    "type.ids": "आईडी और कार्ड",
    "type.forms": "फॉर्म",
    "type.counselling": "परामर्श",
    "type.other": "अन्य",
    "product.photocopy.name": "फोटोकॉपी",
    "product.photocopy.blurb": "काउंटर पर ब्लैक एंड व्हाइट कॉपी।",
    "product.printout.name": "रंगीन / दस्तावेज़ प्रिंट",
    "product.printout.blurb": "फॉर्म, नोट्स और दस्तावेज़ प्रिंट करें।",
    "product.admit-photo.name": "एडमिट-कार्ड फोटो",
    "product.admit-photo.blurb": "परीक्षा और एडमिट-कार्ड साइज़ फोटो।",
    "product.pvc-card.name": "पीवीसी कार्ड",
    "product.pvc-card.blurb": "प्रिंटेड पीवीसी पहचान कार्ड।",
    "product.passport-photo.name": "पासपोर्ट फोटो",
    "product.passport-photo.blurb": "पासपोर्ट साइज़ फोटो, उसी दिन।",
    "product.scan-email.name": "दस्तावेज़ स्कैन और ईमेल",
    "product.scan-email.blurb": "कागज़ स्कैन कर ईमेल से भेजें।",
    "product.online-form.name": "ऑनलाइन फॉर्म भरना",
    "product.online-form.blurb": "हम आपका ऑनलाइन फॉर्म भरकर जमा करते हैं।",
    "product.govt-forms.name": "सभी सरकारी फॉर्म",
    "product.govt-forms.blurb": "एमपी ऑनलाइन और अन्य सरकारी आवेदन।",
    "product.scholarship.name": "छात्रवृत्ति फॉर्म",
    "product.scholarship.blurb": "छात्रवृत्ति और विद्यार्थी सहायता फॉर्म।",
    "product.gumasta-msme.name": "गुमास्ता / MSME पंजीकरण",
    "product.gumasta-msme.blurb": "दुकान लाइसेंस और MSME कागज़ात।",
    "product.medical-reg.name": "नर्सिंग / बीफार्मा पंजीकरण",
    "product.medical-reg.blurb": "मेडिकल और फार्मेसी पंजीकरण।",
    "product.pan-aadhaar.name": "पैन और आधार सेवाएँ",
    "product.pan-aadhaar.blurb": "पैन, आधार अपडेट और संबंधित काम।",
    "product.voter-samagra.name": "वोटर आईडी और समग्र आईडी",
    "product.voter-samagra.blurb": "वोटर कार्ड और समग्र आईडी में मदद।",
    "product.counselling.name": "प्रवेश परामर्श",
    "product.counselling.blurb": "कॉलेज प्रवेश के लिए मुफ्त मार्गदर्शन।",
    "product.exam-counselling.name": "परीक्षा परामर्श (NEET, JEE, CLAT…)",
    "product.exam-counselling.blurb": "NEET, JEE, CLAT, CET, ePravesh और अन्य।",
    "cookie.text": "हम आपकी भाषा याद रखने और साइट बेहतर बनाने के लिए कुकीज़ का उपयोग करते हैं। जरूरी कुकीज़ साइट चलाती हैं। अगर आप वैकल्पिक कुकीज़ से सहमत हैं तो सभी कुकीज़ स्वीकार करें।",
    "cookie.accept": "सभी कुकीज़ स्वीकार करें",
    "cookie.necessary": "केवल जरूरी",
    "cookie.manage": "कुकीज़",
    "ads.badge": "विज्ञापन",
    "ads.kicker": "मार्केटिंग",
    "ads.title": "केंद्र पर ऑफर",
    "ads.lead": "नेट गुरु के मौजूदा विज्ञापन। व्हाट्सऐप पर पूछताछ करें और दुकान पर काम लें।",
    "ads.strip": "मुफ्त प्रवेश परामर्श · उसी दिन पासपोर्ट फोटो · पैन, आधार और सरकारी फॉर्म, भावरकुआ, इंदौर।",
    "ads.counsel.title": "मुफ्त NEET, JEE और CLAT परामर्श",
    "ads.counsel.text": "केंद्र पर प्रवेश मार्गदर्शन लें। मार्कशीट लाएँ। ऑनलाइन भुगतान नहीं।",
    "ads.photo.title": "उसी दिन पासपोर्ट और एडमिट-कार्ड फोटो",
    "ads.photo.text": "फोटो और पीवीसी कार्ड काउंटर पर। आकर या पहले पूछताछ करके करवाएँ।",
    "ads.forms.title": "पैन, आधार और सरकारी फॉर्म",
    "ads.forms.text": "एमपी ऑनलाइन, छात्रवृत्ति, गुमास्ता/MSME और आईडी काम एक ही छत के नीचे।",
    "ads.later": "बाद में",
    "ads.close": "विज्ञापन बंद करें",
  },
};

let lang = "en";

function t(key, vars) {
  const table = I18N[lang] || I18N.en;
  let value = table[key] || I18N.en[key] || key;
  if (vars) {
    Object.keys(vars).forEach((name) => {
      value = value.replace(`{${name}}`, vars[name]);
    });
  }
  return value;
}

function applyLang(next) {
  lang = next === "hi" ? "hi" : "en";
  document.documentElement.lang = lang;
  document.body.classList.toggle("lang-hi", lang === "hi");
  localStorage.setItem(LANG_KEY, lang);
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("is-on", button.dataset.lang === lang);
  });
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder));
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => applyLang(button.dataset.lang));
});
applyLang(localStorage.getItem(LANG_KEY) || "en");

const slides = [...document.querySelectorAll(".hero-slide")];
const dots = [...document.querySelectorAll("[data-hero-dot]")];
const slider = document.querySelector("[data-hero-slider]");
let index = 0;
let timer;

function showSlide(next) {
  if (!slides.length) {
    return;
  }
  index = (next + slides.length) % slides.length;
  slides.forEach((slide, n) => slide.classList.toggle("is-on", n === index));
  dots.forEach((dot, n) => {
    const on = n === index;
    dot.classList.toggle("is-on", on);
    if (on) {
      dot.setAttribute("aria-current", "true");
    } else {
      dot.removeAttribute("aria-current");
    }
  });
}

function stopSlider() {
  window.clearInterval(timer);
}

function startSlider() {
  stopSlider();
  if (slides.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }
  timer = window.setInterval(() => showSlide(index + 1), 5000);
}

document.querySelector("[data-hero-prev]")?.addEventListener("click", () => {
  showSlide(index - 1);
  startSlider();
});
document.querySelector("[data-hero-next]")?.addEventListener("click", () => {
  showSlide(index + 1);
  startSlider();
});
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showSlide(Number(dot.dataset.heroDot));
    startSlider();
  });
});
slider?.addEventListener("mouseenter", stopSlider);
slider?.addEventListener("mouseleave", startSlider);
startSlider();

function setFilter(category) {
  document.querySelectorAll("[data-filter]").forEach((chip) => {
    chip.classList.toggle("is-on", chip.dataset.filter === category);
  });
  document.querySelectorAll(".product").forEach((card) => {
    const show = category === "all" || card.dataset.category === category;
    card.classList.toggle("is-hidden", !show);
  });
}

document.querySelectorAll("[data-filter]").forEach((chip) => {
  chip.addEventListener("click", () => setFilter(chip.dataset.filter));
});

const enquireDialog = document.querySelector("#enquire");
const enquireForm = document.querySelector("#enquire-form");
const chatLog = document.querySelector("[data-chat-log]");
const chatInput = document.querySelector("[data-chat-input]");
const chatSend = document.querySelector(".wa-send");
const chatTypes = document.querySelector("[data-chat-types]");
const chatSuggest = document.querySelector("[data-chat-suggest]");
const whatsappNumber = "919755588862";
const typeByCategory = {
  print: "print",
  ids: "ids",
  forms: "forms",
  counselling: "counselling",
};
const queryRules = [
  { keys: ["photocopy", "xerox", "copy", "फोटोकॉपी", "जेरॉक्स", "कॉपी"], answer: "faq.photocopy" },
  { keys: ["print", "printout", "प्रिंट"], answer: "faq.print" },
  { keys: ["photo", "passport", "admit", "pvc", "फोटो", "पासपोर्ट", "एडमिट"], answer: "faq.photo" },
  { keys: ["form", "scholarship", "gumasta", "msme", "nursing", "फॉर्म", "छात्रवृत्ति", "गुमास्ता"], answer: "faq.forms" },
  { keys: ["pan", "aadhaar", "adhaar", "voter", "samagra", "पैन", "आधार", "वोटर", "समग्र"], answer: "faq.ids" },
  { keys: ["counselling", "counseling", "neet", "jee", "clat", "admission", "परामर्श", "प्रवेश"], answer: "faq.counselling" },
  { keys: ["address", "where", "location", "indore", "पता", "कहाँ", "कहा", "लोकेशन"], answer: "faq.address" },
  { keys: ["hour", "time", "timing", "open", "visit", "समय", "खुल", "आना"], answer: "faq.hours" },
  { keys: ["document", "paper", "id proof", "दस्तावेज", "दस्तावेज़", "कागज़", "कागज"], answer: "faq.docs" },
  { keys: ["price", "pay", "fee", "charge", "कीमत", "दाम", "भुगतान", "फीस"], answer: "faq.pay" },
];

let enquireTopic = "";
let chatStep = "first_name";
let answers = {};
let whatsappOpened = false;

function addBubble(text, who) {
  if (!chatLog) {
    return;
  }
  const bubble = document.createElement("p");
  bubble.className = `wa-bubble ${who}`;
  bubble.textContent = text;
  chatLog.appendChild(bubble);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function setHidden(name, value) {
  const field = enquireForm?.querySelector(`[name="${name}"]`);
  if (field) {
    field.value = value;
  }
}

function replyForQuery(text) {
  const q = text.toLowerCase();
  const match = queryRules.find((rule) => rule.keys.some((key) => q.includes(key)));
  return t(match ? match.answer : "faq.default");
}

function sendIsReady() {
  const text = (chatInput?.value || "").trim();
  if (chatStep === "enquiry_type") {
    return false;
  }
  if (chatStep === "mobile") {
    return /^[0-9]{10}$/.test(text);
  }
  return Boolean(text);
}

function updateSendButton() {
  if (!chatSend) {
    return;
  }
  const ready = sendIsReady();
  chatSend.disabled = !ready;
  chatSend.classList.toggle("is-ready", ready);
}

function setComposer(step) {
  chatStep = step;
  const typing = step !== "enquiry_type";
  if (chatInput) {
    chatInput.hidden = !typing;
    chatInput.value = "";
    chatInput.placeholder =
      step === "mobile"
        ? t("chat.mobilePlaceholder")
        : step === "query" || step === "assist"
          ? t("chat.queryPlaceholder")
          : t("chat.placeholder");
    if (typing) {
      chatInput.focus();
    }
  }
  if (chatTypes) {
    chatTypes.hidden = step !== "enquiry_type";
  }
  if (chatSuggest) {
    chatSuggest.hidden = step !== "query" && step !== "assist";
  }
  updateSendButton();
}

function askStep(step) {
  setComposer(step);
  if (step === "first_name") {
    addBubble(t("chat.first"), "bot");
  } else if (step === "last_name") {
    addBubble(t("chat.last"), "bot");
  } else if (step === "mobile") {
    addBubble(t("chat.mobile"), "bot");
  } else if (step === "enquiry_type") {
    addBubble(t("chat.type"), "bot");
  } else if (step === "query") {
    addBubble(t("chat.query"), "bot");
  } else if (step === "assist") {
    addBubble(t("chat.opened"), "bot");
  }
}

function afterMobile() {
  if (answers.enquiry_type) {
    askStep("query");
    return;
  }
  askStep("enquiry_type");
}

function openWhatsApp() {
  const typeKey = answers.enquiry_type || "";
  const typeLabel = typeKey ? t(`type.${typeKey}`) : typeKey;
  const lines = [
    t("wa.hello"),
    `${t("wa.first")}: ${answers.first_name || ""}`,
    `${t("wa.last")}: ${answers.last_name || ""}`,
    `${t("wa.mobile")}: ${answers.mobile || ""}`,
    `${t("wa.type")}: ${typeLabel}`,
  ];
  if (enquireTopic) {
    lines.push(`${t("wa.service")}: ${enquireTopic}`);
  }
  if (answers.query) {
    lines.push(`${t("wa.query")}: ${answers.query}`);
  }
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(href, "_blank", "noopener");
  whatsappOpened = true;
}

function startAssistAfterWhatsApp() {
  addBubble(t("chat.thanks"), "bot");
  window.setTimeout(() => {
    openWhatsApp();
    askStep("assist");
  }, 600);
}

function handleQuery(text) {
  answers.query = answers.query ? `${answers.query}\n${text}` : text;
  setHidden("query", answers.query);
  addBubble(text, "user");
  addBubble(replyForQuery(text), "bot");
  if (!whatsappOpened) {
    startAssistAfterWhatsApp();
    return;
  }
  setComposer("assist");
}

function acceptAnswer(value) {
  const text = value.trim();
  if (!text) {
    return;
  }
  if (chatStep === "first_name") {
    answers.first_name = text;
    setHidden("first_name", text);
    addBubble(text, "user");
    askStep("last_name");
    return;
  }
  if (chatStep === "last_name") {
    answers.last_name = text;
    setHidden("last_name", text);
    addBubble(text, "user");
    askStep("mobile");
    return;
  }
  if (chatStep === "mobile") {
    if (!/^[0-9]{10}$/.test(text)) {
      addBubble(text, "user");
      addBubble(t("chat.mobileError"), "bot");
      return;
    }
    answers.mobile = text;
    setHidden("mobile", text);
    addBubble(text, "user");
    afterMobile();
    return;
  }
  if (chatStep === "query" || chatStep === "assist") {
    handleQuery(text);
  }
}

function openEnquire(service, category, productId) {
  hideAdPopup(true);
  enquireTopic = productId ? t(`product.${productId}.name`) : service || "";
  answers = {};
  whatsappOpened = false;
  enquireForm?.reset();
  if (chatLog) {
    chatLog.innerHTML = "";
  }
  enquireDialog?.showModal();
  addBubble(t("chat.hi"), "bot");
  if (enquireTopic) {
    addBubble(t("chat.selected", { name: enquireTopic }), "bot");
  }
  addBubble(t("chat.intro"), "bot");
  const preset = typeByCategory[category];
  if (preset) {
    answers.enquiry_type = preset;
    setHidden("enquiry_type", preset);
  }
  askStep("first_name");
}

document.querySelectorAll("[data-enquire]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openEnquire(link.dataset.service || "", link.dataset.category || "", link.dataset.product || "");
  });
});

document.querySelector("[data-enquire-open]")?.addEventListener("click", () => {
  if (enquireDialog?.open) {
    return;
  }
  openEnquire("", "", "");
});

document.querySelector("[data-enquire-close]")?.addEventListener("click", () => {
  enquireDialog?.close();
});

enquireForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (chatStep === "enquiry_type" || !sendIsReady()) {
    return;
  }
  acceptAnswer(chatInput?.value || "");
});

chatInput?.addEventListener("input", updateSendButton);

chatTypes?.querySelectorAll("[data-type]").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.type || "";
    answers.enquiry_type = value;
    setHidden("enquiry_type", value);
    addBubble(t(`type.${value}`), "user");
    askStep("query");
  });
});

chatSuggest?.querySelectorAll("[data-suggest]").forEach((button) => {
  button.addEventListener("click", () => {
    const topic = button.dataset.suggest || "";
    if (topic === "whatsapp") {
      openWhatsApp();
      addBubble(t("chat.opened"), "bot");
      return;
    }
    const labels = {
      address: t("suggest.address"),
      hours: t("suggest.hours"),
      docs: t("suggest.docs"),
    };
    handleQuery(labels[topic] || topic);
  });
});

const COOKIE_KEY = "netguru-cookies";
const cookieBar = document.querySelector("[data-cookie-bar]");

function showCookieBar(show) {
  if (!cookieBar) {
    return;
  }
  cookieBar.hidden = !show;
  document.body.classList.toggle("has-cookie-bar", show);
}

function saveCookies(choice) {
  localStorage.setItem(COOKIE_KEY, choice === "all" ? "all" : "necessary");
  showCookieBar(false);
  scheduleAdPopup(6000);
}

if (!localStorage.getItem(COOKIE_KEY)) {
  showCookieBar(true);
}

cookieBar?.querySelectorAll("[data-cookie]").forEach((button) => {
  button.addEventListener("click", () => saveCookies(button.dataset.cookie));
});

document.querySelector("[data-cookie-open]")?.addEventListener("click", () => {
  showCookieBar(true);
  hideAdPopup(false);
});

const AD_KEY = "netguru-ad-at";
const AD_WAIT = 24 * 60 * 60 * 1000;
const adPopup = document.querySelector("[data-ad-popup]");
const adSlides = [...document.querySelectorAll("[data-ad-slide]")];
let adTimer;

function adDismissedRecently() {
  const at = Number(localStorage.getItem(AD_KEY) || 0);
  return Date.now() - at < AD_WAIT;
}

function hideAdPopup(remember) {
  if (!adPopup) {
    return;
  }
  adPopup.hidden = true;
  adPopup.classList.remove("is-open");
  if (remember) {
    localStorage.setItem(AD_KEY, String(Date.now()));
  }
}

function showAdPopup() {
  if (!adPopup || adDismissedRecently() || enquireDialog?.open || (cookieBar && !cookieBar.hidden)) {
    return;
  }
  if (adSlides.length) {
    const pick = Math.floor(Date.now() / AD_WAIT) % adSlides.length;
    adSlides.forEach((slide, n) => slide.classList.toggle("is-on", n === pick));
  }
  adPopup.hidden = false;
  adPopup.classList.add("is-open");
}

function scheduleAdPopup(delay) {
  window.clearTimeout(adTimer);
  if (adDismissedRecently()) {
    return;
  }
  adTimer = window.setTimeout(showAdPopup, delay);
}

document.querySelector("[data-ad-close]")?.addEventListener("click", () => hideAdPopup(true));
document.querySelector("[data-ad-later]")?.addEventListener("click", () => hideAdPopup(true));

if (localStorage.getItem(COOKIE_KEY)) {
  scheduleAdPopup(10000);
}
