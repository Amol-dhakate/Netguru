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
  print: "Print & copy",
  ids: "IDs & cards",
  forms: "Forms",
  counselling: "Counselling",
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
      step === "mobile" ? "10-digit mobile number" : "Type a message";
    if (typing) {
      chatInput.focus();
    }
  }
  if (chatTypes) {
    chatTypes.hidden = step !== "enquiry_type";
  }
  if (step === "first_name") {
    addBubble("What is your first name?", "bot");
  } else if (step === "last_name") {
    addBubble("Thanks. What is your last name?", "bot");
  } else if (step === "mobile") {
    addBubble("Please share your 10-digit mobile number.", "bot");
  } else if (step === "enquiry_type") {
    addBubble("What is your enquiry type? Tap one option.", "bot");
  }
}

function openWhatsApp() {
  const lines = [
    "Hello Net Guru, I want to enquire.",
    `First name: ${answers.first_name || ""}`,
    `Last name: ${answers.last_name || ""}`,
    `Mobile no: ${answers.mobile || ""}`,
    `Enquiry type: ${answers.enquiry_type || ""}`,
  ];
  if (enquireTopic) {
    lines.push(`Service: ${enquireTopic}`);
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
  addBubble("Thank you. I am opening WhatsApp with your enquiry.", "bot");
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
      addBubble("Please enter a 10-digit mobile number.", "bot");
      return;
    }
    answers.mobile = text;
    setHidden("mobile", text);
    addBubble(text, "user");
    askStep("enquiry_type");
  }
}

function openEnquire(service, category) {
  enquireTopic = service || "";
  answers = {};
  enquireForm?.reset();
  if (chatLog) {
    chatLog.innerHTML = "";
  }
  enquireDialog?.showModal();
  addBubble("Hi, I am the Net Guru WhatsApp assistant.", "bot");
  if (enquireTopic) {
    addBubble(`You selected: ${enquireTopic}.`, "bot");
  }
  addBubble("I will take a few details, then open WhatsApp for you.", "bot");
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
    openEnquire(link.dataset.service || "", link.dataset.category || "");
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
    addBubble(value, "user");
    finishChat();
  });
});
