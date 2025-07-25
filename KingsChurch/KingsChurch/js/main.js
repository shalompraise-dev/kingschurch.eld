const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const menuIcon = document.getElementById('menuIcon');

let isOpen = false;

navToggle.addEventListener('click', () => {
  isOpen = !isOpen;
  navLinks.style.display = isOpen ? 'flex' : 'none';
  menuIcon.src = isOpen ? 'assets/images/icon-close.png' : 'assets/images/icon-menu.png';
});





//"Next Steps" 
const openBtn = document.getElementById('openNextSteps');
const closeBtn = document.getElementById('closeNextSteps');
const overlay = document.getElementById('nextStepsOverlay');

openBtn.addEventListener('click', () => {
  overlay.classList.add('active');
  overlay.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
  setTimeout(() => {
    overlay.classList.add('hidden');
  }, 300);
});

// Prompt "Next Steps" briefly after page load
window.addEventListener('load', () => {
  const button = document.querySelector('.next-steps-entry button');
  button.classList.add('pulse');

  setTimeout(() => {
    button.classList.remove('pulse');
  }, 3000);
});




const planVisitLink = document.getElementById("planVisitLink");
const visitOverlay = document.getElementById("visitOverlay");
const visitModal = document.getElementById("visitModal");
const visitClose = document.getElementById("visitClose");

const steps = document.querySelectorAll(".chat__step");
const nameInput = document.getElementById("visitorName");
const namePreview = document.getElementById("namePreview");
const nextButtons = document.querySelectorAll(".chat__next");
const submitBtn = document.getElementById("submitVisit");

// ✅ Open Chat Modal
planVisitLink.addEventListener("click", (e) => {
  e.preventDefault();
  visitOverlay.classList.remove("hidden");
  visitModal.classList.remove("hidden");

  steps.forEach((s) => s.classList.add("hidden"));
  steps[0].classList.remove("hidden");
});

// ✅ Close Chat Modal
visitClose.addEventListener("click", () => {
  visitOverlay.classList.add("hidden");
  visitModal.classList.add("hidden");
});

// ✅ Step Transitions
nextButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const currentStep = btn.closest(".chat__step");
    const nextStep = document.querySelector(`.${btn.dataset.next}`);

    if (btn.id === "submitVisit") return;

    if (currentStep.classList.contains("step1") && nameInput.value.trim()) {
      namePreview.textContent = nameInput.value.trim();
    }

    currentStep.classList.add("hidden");
    nextStep.classList.remove("hidden");
  });
});

// ✅ Submit Final
submitBtn.addEventListener("click", () => {
  const currentStep = submitBtn.closest(".chat__step");
  const finalStep = document.querySelector(".step4");

  currentStep.classList.add("hidden");
  finalStep.classList.remove("hidden");
});




// Watch Sermon Modal
const watchSermonLink = document.getElementById("watchSermonLink");
const sermonOverlay = document.getElementById("sermonOverlay");
const sermonModal = document.getElementById("sermonModal");
const sermonClose = document.getElementById("sermonClose");

const sermonSteps = sermonModal.querySelectorAll(".chat__step");
const sermonNextButtons = sermonModal.querySelectorAll(".chat__next");

watchSermonLink.addEventListener("click", (e) => {
  e.preventDefault();
  sermonOverlay.classList.remove("hidden");
  sermonModal.classList.remove("hidden");

  sermonSteps.forEach((s) => s.classList.add("hidden"));
  sermonSteps[0].classList.remove("hidden");
});

sermonClose.addEventListener("click", () => {
  sermonOverlay.classList.add("hidden");
  sermonModal.classList.add("hidden");
});

sermonNextButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const currentStep = btn.closest(".chat__step");
    const nextStep = sermonModal.querySelector(`.${btn.dataset.next}`);

    currentStep.classList.add("hidden");
    nextStep.classList.remove("hidden");
  });
});



// Join Group Modal
const joinGroupLink = document.getElementById("joinGroupLink");
const groupOverlay = document.getElementById("groupOverlay");
const groupModal = document.getElementById("groupModal");
const groupClose = document.getElementById("groupClose");

const groupSteps = groupModal.querySelectorAll(".chat__step");
const groupNextBtns = groupModal.querySelectorAll(".chat__next");
const groupType = document.getElementById("groupType");
const groupDay = document.getElementById("groupDay");
const submitGroup = document.getElementById("submitGroup");

// Open Modal
joinGroupLink.addEventListener("click", (e) => {
  e.preventDefault();
  groupOverlay.classList.remove("hidden");
  groupModal.classList.remove("hidden");

  groupSteps.forEach((s) => s.classList.add("hidden"));
  groupSteps[0].classList.remove("hidden");
});

// Close Modal
groupClose.addEventListener("click", () => {
  groupOverlay.classList.add("hidden");
  groupModal.classList.add("hidden");
});

// Handle Steps
groupNextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const currentStep = btn.closest(".chat__step");

    if (btn.id === "submitGroup") {
      if (!groupDay.value) return;
      currentStep.classList.add("hidden");
      groupModal.querySelector(".group-step3").classList.remove("hidden");
    } else {
      // Validate first dropdown
      if (groupType.value === "") return;
      currentStep.classList.add("hidden");
      groupModal.querySelector(`.${btn.dataset.next}`).classList.remove("hidden");
    }
  });
});



// Prayer Modal
const getPrayerLink = document.getElementById("getPrayerLink");
const prayerOverlay = document.getElementById("prayerOverlay");
const prayerModal = document.getElementById("prayerModal");
const prayerClose = document.getElementById("prayerClose");

const prayerSteps = prayerModal.querySelectorAll(".chat__step");
const prayerNextBtns = prayerModal.querySelectorAll(".chat__next");

const prayerNameInput = document.getElementById("prayerName");
const prayerNamePreview = document.getElementById("prayerNamePreview");
const prayerRequestInput = document.getElementById("prayerRequest");
const submitPrayer = document.getElementById("submitPrayer");

// Open Modal
getPrayerLink.addEventListener("click", (e) => {
  e.preventDefault();
  prayerOverlay.classList.remove("hidden");
  prayerModal.classList.remove("hidden");

  prayerSteps.forEach((s) => s.classList.add("hidden"));
  prayerSteps[0].classList.remove("hidden");
});

// Close Modal
prayerClose.addEventListener("click", () => {
  prayerOverlay.classList.add("hidden");
  prayerModal.classList.add("hidden");
});

// Step Transitions
prayerNextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const currentStep = btn.closest(".chat__step");

    if (btn.id === "submitPrayer") {
      if (!prayerRequestInput.value.trim()) return;
      currentStep.classList.add("hidden");
      prayerModal.querySelector(".prayer-step3").classList.remove("hidden");
    } else {
      if (!prayerNameInput.value.trim()) return;
      prayerNamePreview.textContent = prayerNameInput.value.trim();
      currentStep.classList.add("hidden");
      prayerModal.querySelector(`.${btn.dataset.next}`).classList.remove("hidden");
    }
  });
});







  const peekingNews = document.getElementById("peekingNews");
  const messages = [
    "📢 Baptism Sunday – December 23rd!",
    "🙏 Join Us for Prayer Night this Friday!",
    "🎉 Summer Youth Camp – Sign Up Now!"
  ];
  let i = 0;

  function showPeekingNews() {
    peekingNews.textContent = messages[i];
    peekingNews.classList.add("show");

    setTimeout(() => {
      peekingNews.classList.remove("show");
    }, 5000); // Hide after 5s

    i = (i + 1) % messages.length;
  }

  // Show every 20s
  setInterval(showPeekingNews, 25000);
  setTimeout(showPeekingNews, 1000); // initial