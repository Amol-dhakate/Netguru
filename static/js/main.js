const LANG_KEY = "netguru-lang";
const I18N = {
  en: {
    "nav.shop": "Shop",
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
    "chat.assistant": "WhatsApp chat assistant",
    "chat.close": "Close chat",
    "chat.placeholder": "Type a message",
    "chat.mobilePlaceholder": "10-digit mobile number",
    "chat.send": "Send",
    "chat.hi": "Hi, I am the Net Guru WhatsApp assistant.",
    "chat.selected": "You selected: {name}.",
    "chat.intro": "I will take a few details, then open WhatsApp for you.",
    "chat.first": "What is your first name?",
    "chat.last": "Thanks. What is your last name?",
    "chat.mobile": "Please share your 10-digit mobile number.",
    "chat.mobileError": "Please enter a 10-digit mobile number.",
    "chat.type": "What is your enquiry type? Tap one option.",
    "chat.thanks": "Thank you. I am opening WhatsApp with your enquiry.",
    "wa.hello": "Hello Net Guru, I want to enquire.",
    "wa.first": "First name",
    "wa.last": "Last name",
    "wa.mobile": "Mobile no",
    "wa.type": "Enquiry type",
    "wa.service": "Service",
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
  },
  hi: {
    "nav.shop": "दुकान",
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
    "chat.assistant": "व्हाट्सऐप चैट सहायक",
    "chat.close": "चैट बंद करें",
    "chat.placeholder": "संदेश लिखें",
    "chat.mobilePlaceholder": "10 अंकों का मोबाइल नंबर",
    "chat.send": "भेजें",
    "chat.hi": "नमस्ते, मैं नेट गुरु व्हाट्सऐप सहायक हूँ।",
    "chat.selected": "आपने चुना: {name}.",
    "chat.intro": "मैं कुछ जानकारी लूँगा, फिर आपके लिए व्हाट्सऐप खोलूँगा।",
    "chat.first": "आपका पहला नाम क्या है?",
    "chat.last": "धन्यवाद। आपका अंतिम नाम क्या है?",
    "chat.mobile": "कृपया अपना 10 अंकों का मोबाइल नंबर बताएँ।",
    "chat.mobileError": "कृपया 10 अंकों का मोबाइल नंबर लिखें।",
    "chat.type": "पूछताछ का प्रकार क्या है? एक विकल्प चुनें।",
    "chat.thanks": "धन्यवाद। मैं आपकी पूछताछ के साथ व्हाट्सऐप खोल रहा हूँ।",
    "wa.hello": "नमस्ते नेट गुरु, मुझे पूछताछ करनी है।",
    "wa.first": "पहला नाम",
    "wa.last": "अंतिम नाम",
    "wa.mobile": "मोबाइल नंबर",
    "wa.type": "पूछताछ का प्रकार",
    "wa.service": "सेवा",
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
const chatTypes = document.querySelector("[data-chat-types]");
const whatsappNumber = "919755588862";
const typeByCategory = {
  print: "print",
  ids: "ids",
  forms: "forms",
  counselling: "counselling",
};

let enquireTopic = "";
let chatStep = "first_name";
let answers = {};

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

function askStep(step) {
  chatStep = step;
  const typing = Boolean(step !== "enquiry_type" && step !== "done");
  if (chatInput) {
    chatInput.hidden = !typing;
    chatInput.value = "";
    chatInput.placeholder =
      step === "mobile" ? t("chat.mobilePlaceholder") : t("chat.placeholder");
    if (typing) {
      chatInput.focus();
    }
  }
  if (chatTypes) {
    chatTypes.hidden = step !== "enquiry_type";
  }
  if (step === "first_name") {
    addBubble(t("chat.first"), "bot");
  } else if (step === "last_name") {
    addBubble(t("chat.last"), "bot");
  } else if (step === "mobile") {
    addBubble(t("chat.mobile"), "bot");
  } else if (step === "enquiry_type") {
    addBubble(t("chat.type"), "bot");
  }
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
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
  enquireDialog?.close();
  window.open(href, "_blank", "noopener");
}

function finishChat() {
  chatStep = "done";
  if (chatInput) {
    chatInput.hidden = true;
  }
  if (chatTypes) {
    chatTypes.hidden = true;
  }
  addBubble(t("chat.thanks"), "bot");
  window.setTimeout(openWhatsApp, 700);
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
    askStep("enquiry_type");
  }
}

function openEnquire(service, category, productId) {
  enquireTopic = productId ? t(`product.${productId}.name`) : service || "";
  answers = {};
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

document.querySelector("[data-enquire-close]")?.addEventListener("click", () => {
  enquireDialog?.close();
});

enquireForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (chatStep === "enquiry_type" || chatStep === "done") {
    return;
  }
  acceptAnswer(chatInput?.value || "");
});

chatTypes?.querySelectorAll("[data-type]").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.type || "";
    answers.enquiry_type = value;
    setHidden("enquiry_type", value);
    addBubble(t(`type.${value}`), "user");
    finishChat();
  });
});
