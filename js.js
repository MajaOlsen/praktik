// Toggle switcher - skift sprog
document.getElementById("toggle").addEventListener("change", function () {
  const isEnglish = this.checked;

  // Vis/skjul tekster baseret på valgt sprog
  const texts = document.querySelectorAll(".text[data-lang]");
  texts.forEach((el) => {
    const lang = el.getAttribute("data-lang");
    el.style.display = (isEnglish && lang === "en") || (!isEnglish && lang === "da") ? "inline" : "none";
  });
});

// Start med dansk synligt, engelsk skjult
window.addEventListener("DOMContentLoaded", () => {
  const texts = document.querySelectorAll(".text[data-lang]");
  texts.forEach((el) => {
    const lang = el.getAttribute("data-lang");
    el.style.display = lang === "da" ? "inline" : "none";
  });
});

// Progress bar animation
const progressBars = document.querySelectorAll(".progress");
const progressObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progress = entry.target;
        const progressValue = progress.getAttribute("data-progress");
        progress.style.width = `${progressValue}%`;
        observer.unobserve(progress);
      }
    });
  },
  { threshold: 0.5 }
);
progressBars.forEach((bar) => progressObserver.observe(bar));

// Fade-in animation til styrke-bokse
const strengthBoxes = document.querySelectorAll(".strength-box");
const strengthObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);
strengthBoxes.forEach((box) => strengthObserver.observe(box));
