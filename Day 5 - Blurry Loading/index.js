"use strict";
const element = document.querySelector(".picture");
const number = document.querySelector(".number");

let count = 0;
const maxAmount = 101;

let blurInterval = setInterval(changeBlur, 25);

function changeBlur() {
  if (count == maxAmount) {
    clearInterval(blurInterval);
  } else {
    element.style.filter = `blur(${(-20 / 100) * count + 20}px)`;
    number.textContent = `${count}%`;
    number.style.opacity = (-1 / 100) * count + 1;
    count++;
  }
}
