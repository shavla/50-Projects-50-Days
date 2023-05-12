"use strict";

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
let isDrawing = false;
let x = 0;
let y = 0;

// clear canvas
const clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

// starter font-size and font-size handler
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const minFontSize = 1;
const maxFontSize = 30;

const font = document.querySelector(".size");
let fontSize = 10;
font.textContent = fontSize;
minus.addEventListener("click", function () {
  changeFontSize(-1);
});

plus.addEventListener("click", function () {
  changeFontSize(1);
});

function changeFontSize(direction) {
  fontSize = Math.max(Math.min(fontSize + direction, maxFontSize), minFontSize);
  font.textContent = fontSize;
}

// color and color handler
let color = "black";
const favcolor = document.querySelector("#favcolor");
favcolor.addEventListener("change", function (e) {
  color = e.target.value;
});

// canvas handlers
canvas.addEventListener("mousedown", function (e) {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

canvas.addEventListener("mousemove", function (e) {
  if (isDrawing == true) {
    drawCircle(x, y);
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

function drawCircle(x, y) {
  context.beginPath();
  context.arc(x, y, fontSize, 0, Math.PI * 2);
  context.fillStyle = color;
  context.fill();
}

window.addEventListener("mouseup", function (e) {
  if (isDrawing == true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = color;
  context.lineWidth = fontSize * 2;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
}
