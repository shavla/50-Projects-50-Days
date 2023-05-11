"use strict";
const countDownNumber = 3;
const numberContainer = document.querySelector(".numbers");
const button = document.querySelector("button");
let counter = 0;
let interval;

startCounting();

function startCounting() {
  countDownByOne();

  interval = setInterval(() => {
    countDownByOne();
  }, 1000);
}

function countDownByOne() {
  let number = document.createElement("div");
  number.classList.add("number");
  number.textContent = countDownNumber - counter;
  numberContainer.appendChild(number);

  if (counter == countDownNumber) {
    clearInterval(interval);
    setTimeout(() => {
      document.querySelector(".final").style.display = "flex";
      document.querySelector(".container").style.display = "none";
    }, 1000);
  } else {
    counter += 1;
  }
  setTimeout(() => {
    number.remove();
  }, 700);
}

button.addEventListener("click", () => {
  counter = 0;
  document.querySelector(".final").style.display = "none";
  document.querySelector(".container").style.display = "flex";
  startCounting();
});
