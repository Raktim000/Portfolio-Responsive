const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector("nav ul");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
});

const type = new Typed(".multiple", {
  strings: ["Web Developer", "Front-End Developer", "Freelancer"],
  backSpeed: 100,
  typeSpeed: 100,
  backDelay: 1000,
  loop: true,
});
