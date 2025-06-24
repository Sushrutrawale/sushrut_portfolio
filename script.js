// Smooth scrolling for nav links
const navLinks = document.querySelectorAll(".nav__menu a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Toggle mobile nav
const toggleBtn = document.getElementById("nav-toggle");
const navMenu = document.querySelector(".nav__menu");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Optional: Hide menu on link click
document.querySelectorAll(".nav__menu a").forEach(link =>
  link.addEventListener("click", () => navMenu.classList.remove("active"))
);


// Scroll reveal animation for sections
const sections = document.querySelectorAll(".section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("reveal");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Scroll-to-top button with custom styles and Font Awesome icon
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
scrollBtn.id = "scrollToTop";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.background = "#6610f2";
scrollBtn.style.color = "white";
scrollBtn.style.fontSize = "1.2rem";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";
scrollBtn.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

scrollBtn.addEventListener("mouseover", () => {
  scrollBtn.style.background = "#520dc2";
});

scrollBtn.addEventListener("mouseout", () => {
  scrollBtn.style.background = "#6610f2";
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "flex";
    scrollBtn.style.alignItems = "center";
    scrollBtn.style.justifyContent = "center";
  } else {
    scrollBtn.style.display = "none";
  }
});
