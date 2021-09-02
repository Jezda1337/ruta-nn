const menuToggleButton = document.querySelector(".nav__toggle-btn");
const navList = document.querySelector(".nav__list");
const nav = document.querySelector(".nav");

function toggleMenu() {
  this.classList.toggle("active");
  navList.classList.toggle("nav__list--active");
  nav.classList.toggle("nav--active");
}

// listeners
menuToggleButton.addEventListener("click", toggleMenu);
