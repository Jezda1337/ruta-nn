const menuToggleButton = document.querySelector(".nav__toggle-btn");
const navList = document.querySelector(".nav__list");
const nav = document.querySelector(".nav");
const body = document.body;

function toggleMenu() {
  this.classList.toggle("active");
  navList.classList.toggle("nav__list--active");
  nav.classList.toggle("nav--active");
  body.classList.toggle("hideScroll");
  nav.addEventListener("click", closeList);
}

function closeList(e) {
  if (e.target !== navList) {
    menuToggleButton.classList.remove("active");
    navList.classList.remove("nav__list--active");
    nav.classList.remove("nav--active");
    body.classList.remove("hideScroll");
    e.currentTarget.removeEventListener("click", closeList);
  }
}

// listeners
menuToggleButton.addEventListener("click", toggleMenu);
