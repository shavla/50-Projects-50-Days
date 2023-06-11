"use strict";
let count = 0;
let picture = document.querySelector(".pic");
let counter = document.querySelector(".count");

picture.addEventListener("dblclick", (e) => {
  count += 1;
  counter.textContent = count;

  let [x, y] = [e.offsetX, e.offsetY];
  let heartContainer = document.createElement("div");
  heartContainer.classList.add("new-heart");

  heartContainer.style.left = `${x}px`;
  heartContainer.style.top = `${y}px`;
  picture.appendChild(heartContainer);

  let heart = document.createElement("div");
  heart.classList.add("heart", "animate");
  heartContainer.appendChild(heart);

  heart.addEventListener("animationend", () => {
    heartContainer.remove();
  });
});
