"use strict";
let isDisplayedKeys = false;

document.addEventListener("keydown", function (event) {
  if (!isDisplayedKeys) {
    document.querySelector(".key-codes").style.display = "flex";
    document.querySelector(".starter").style.display = "none";
    isDisplayedKeys = true;
  }

  document.querySelector(".key").textContent =
    event.key !== " " ? event.key : "space";
  document.querySelector(".keyCode").textContent = event.keyCode;
  document.querySelector(".code").textContent = event.code;
});
