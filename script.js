// ===== Amalner Hub Animations =====

// Function to animate elements when they appear in view
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
});

// Observe elements with fade-in and slide-up classes
document.querySelectorAll(".fade-in, .slide-up").forEach(el => {
  observer.observe(el);
});

// Smooth scroll behavior for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Console welcome message
console.log("Amalner Hub website initialized ✅ Designed by Meghraj More © 2025");
