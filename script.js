document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-mode");
  const body = document.body;
  const navLinks = document.getElementById("navLinks");
  const menuIcon = document.querySelector(".menu-icon i");

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    toggleBtn.innerHTML = body.classList.contains("dark")
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
  });

  document.querySelector(".menu-icon").addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-times");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove("active");
        menuIcon.classList.add("fa-bars");
        menuIcon.classList.remove("fa-times");
      }
    });
  });
});
