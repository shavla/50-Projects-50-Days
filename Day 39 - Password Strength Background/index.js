"use strict";

const password = document.getElementById("password");
const container = document.querySelector(".container");

password.addEventListener("input", function (e) {
  let pass = e.target.value;
  let pslength = pass.length;
  container.style.filter = `blur(${20 - pslength * 2}px)`;
});
