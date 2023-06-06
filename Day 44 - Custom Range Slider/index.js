"use strict";
const input = document.querySelector("input");
const label = document.querySelector(".label");

input.addEventListener("input", function () {
  console.log(input.value);
  label.style.marginLeft = `${(187 / 50) * input.value + 12}px`;
  label.textContent = input.value;
});
