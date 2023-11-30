'use strict';



// add event on multiple elements
const addEventOnElem = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

const header = document.querySelector("[data-header]");
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  header.classList.toggle("change-bg");
  document.body.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);


// header active when window scrollY 100px

const activeElem = function () {
  console.log("scrolled!");
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElem);