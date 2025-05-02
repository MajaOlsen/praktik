// Toggle switcher
document.getElementById("toggle").addEventListener("change", function () {
  document.getElementById("toggle-text").textContent = this.checked ? "🇬🇧" : "🇩🇰";
});

// Animation til progress barer
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

progressBars.forEach((progressBar) => {
  progressObserver.observe(progressBar);
});

// Animation til styrker (fade-in med delay)
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

strengthBoxes.forEach((box) => {
  strengthObserver.observe(box);
});
