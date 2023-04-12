"use strict";
const parentElement = document.querySelector(".elements");

const data = [
  {
    name: "applause",
    url: "./sounds/applause.mp3",
  },
  {
    name: "boo",
    url: "./sounds/boo.mp3",
  },
  {
    name: "gasp",
    url: "./sounds/gasp.mp3",
  },
  {
    name: "tada",
    url: "./sounds/tada.mp3",
  },
  {
    name: "victory",
    url: "./sounds/victory.mp3",
  },
  {
    name: "wrong",
    url: "./sounds/wrong.mp3",
  },
];

data.forEach((item) => {
  let button = document.createElement("button");
  button.addEventListener("click", () => {
    let audio = new Audio(item.url);
    audio.play();
  });
  button.innerText = item.name.toUpperCase();
  parentElement.appendChild(button);
});
