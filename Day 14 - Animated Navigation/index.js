"use strict";
let button = document.getElementById("toggle");
let nav = document.getElementById("nav");

button.addEventListener("click", () => {
  nav.classList.toggle("active");
});
