"use strict";
const demo = document.querySelector("#demo");
const step = document.querySelector("input");
const title = "We Love Programming!";

let time = 500 / step.value;
let index = 0;

writeText();

function writeText() {
  demo.textContent += title[index];
  index++;

  if (index > title.length) {
    demo.textContent = "";
    index = 0;
  }

  setTimeout(writeText, time);
}

step.addEventListener("input", function () {
  time = 500 / this.value;
});
