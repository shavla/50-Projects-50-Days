"use strict";

const container = document.querySelector(".container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

for (let i = 0; i < 500; i++) {
  const div = document.createElement("div");
  container.appendChild(div);
}

const divs = document.querySelectorAll("div");
divs.forEach((div) => {
  div.addEventListener("mouseenter", function (e) {
    const element = e.target;
    const color = colors[Math.floor(Math.random() * colors.length)];
    element.style.backgroundColor = `${color}`;
    element.style.boxShadow = `0px 0px 4px ${color}`;
  });
  div.addEventListener("mouseleave", function (e) {
    const element = e.target;
    element.style.boxShadow = `0 0 0`;
    element.style.backgroundColor = `rgb(29, 29, 29)`;
  });
});
