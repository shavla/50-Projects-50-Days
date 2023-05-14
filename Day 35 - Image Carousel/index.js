"use strict";
const slides = document.querySelectorAll(".slide");

const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

let curSlide = 0;
const maxSlide = slides.length - 1;

let interval;
function startInterval() {
  interval = setInterval(() => {
    changeDirection(1);
  }, 2000);
}

startInterval();

btnRight.addEventListener("click", () => {
  clearInterval(interval);
  changeDirection(1);

  startInterval();
});

btnLeft.addEventListener("click", () => {
  clearInterval(interval);
  changeDirection(-1);

  startInterval();
});

function changeDirection(direction) {
  let before = curSlide;
  curSlide = Math.min(Math.max(curSlide + direction, 0), maxSlide);
  if (before == curSlide && before == 0) {
    curSlide = maxSlide;
  } else if (before == curSlide && before == maxSlide) {
    curSlide = 0;
  }

  slides.forEach((slide) => slide.classList.add("hidden"));
  slides[curSlide].classList.remove("hidden");
}
