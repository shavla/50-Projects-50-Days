"use stict";
const minusButton = document.getElementById("btn__min");
const plusButton = document.getElementById("btn__plus");
const lines = document.querySelectorAll(".line");
const borders = document.querySelectorAll(".number");

const maxAmount = 3;
const minAmount = 0;
let currentPosition = 0;

minusButton.addEventListener("click", () => {
  changeCurrentPage(-1);
});
plusButton.addEventListener("click", () => {
  changeCurrentPage(1);
});

function changeCurrentPage(direction) {
  currentPosition = Math.min(
    Math.max(minAmount, currentPosition + direction),
    maxAmount
  );

  displayBorders();
  displayLines();

  if (currentPosition == minAmount) {
    disableButton(minusButton);
  } else if (currentPosition == maxAmount) {
    disableButton(plusButton);
  } else {
    enableButton(minusButton);
    enableButton(plusButton);
  }
}

function displayLines() {
  lines.forEach((line, index) => {
    if (index < currentPosition) {
      line.classList.add("active__line");
    } else {
      line.classList.remove("active__line");
    }
  });
}

function displayBorders() {
  borders.forEach((border, index) => {
    if (index <= currentPosition) {
      border.classList.add("active__number");
    } else {
      border.classList.remove("active__number");
    }
  });
}

function disableButton(button) {
  button.disabled = true;
  button.classList.add("disable");
}

function enableButton(button) {
  button.disabled = false;
  button.classList.remove("disable");
}
