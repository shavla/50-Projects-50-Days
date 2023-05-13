"use strict";

const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

const inputs = document.querySelectorAll("input");

inputs.forEach((input) =>
  input.addEventListener("click", (e) => {
    checkInputs(e.target.value);
  })
);

function checkInputs(element) {
  if (element == "Good") {
    if (cheap.checked && fast.checked) {
      fast.checked = false;
    }
  }
  if (element == "Cheap") {
    if (good.checked && fast.checked) {
      good.checked = false;
    }
  }
  if (element == "Fast") {
    if (good.checked && cheap.checked) {
      cheap.checked = false;
    }
  }
}
