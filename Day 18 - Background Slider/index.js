"use strict";

const images = [
  "./images/mount.jpg",
  "./images/water.jpg",
  "./images/fire.jpg",
  "./images/wind.jpg",
  "./images/light.jpg",
];

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let position = 0;

const background = document.querySelector(".background");
background.style.backgroundImage = `url(${images[0]})`;

const content = document.querySelector(".content");
content.style.backgroundImage = `url(${images[0]})`;

nextButton.addEventListener("click", () => {
  if (position == images.length - 1) {
    position = 0;
  } else {
    position++;
  }
  content.style.backgroundImage = `url(${images[position]})`;
  background.style.backgroundImage = `url(${images[position]})`;
});

prevButton.addEventListener("click", () => {
  if (position == 0) {
    position = images.length - 1;
  } else {
    position--;
  }
  content.style.backgroundImage = `url(${images[position]})`;
  background.style.backgroundImage = `url(${images[position]})`;
});
