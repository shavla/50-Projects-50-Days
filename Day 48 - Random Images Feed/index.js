"use strict";

const container = document.querySelector(".container");
const link = "https://source.unsplash.com/random/";

for (let i = 0; i < 15; i++) {
  const img = document.createElement("img");
  img.src = link + i;
  container.appendChild(img);
}
