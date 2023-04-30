"use strict";
const remain: HTMLDivElement = document.querySelector(".remain");
const fill: HTMLDivElement = document.querySelector(".fill");

const glasses: HTMLDivElement[] = [];
const quantityOfGlasses: number = 8;
const maxLiter = 2;

let lastSelectedGlass: number = -1;

createGlasses();
fillBottle(lastSelectedGlass);
document.querySelector("h2").innerText = `Goal: ${maxLiter} Liters`;

function createGlasses(): void {
  for (let i = 0; i < quantityOfGlasses; i++) {
    let glass = document.createElement("div");
    glass.innerHTML = "250 ml";
    glass.classList.add("glass");
    glass.addEventListener("click", () => glassClicked(i));

    document.querySelector(".glasses").appendChild(glass);
    glasses.push(glass)
  }
}

function glassClicked(index: number): void {
  if (index == lastSelectedGlass) {
    removeActive(index);
    if (index == 0) {
      lastSelectedGlass = -1;
    } else {
      lastSelectedGlass -= 1;
    }
  } else {
    refillGlasses(index);
    lastSelectedGlass = index;
  }

  fillBottle(lastSelectedGlass)
}

function refillGlasses(index: number): void {
  for (let i = 0; i <= index; i++) {
    addActive(i);
  }
  for (let j = index + 1; j < quantityOfGlasses; j++) {
    removeActive(j);
  }
}

function removeActive(index: number): void {
  glasses[index].classList.remove("active");
}

function addActive(index: number): void {
  glasses[index].classList.add("active");
}

function fillBottle(index: number) {
  let quantity = index + 1;
  let filledPersentage = (100 / quantityOfGlasses) * quantity;
  remain.style.height = `${100 - filledPersentage}%`;
  remain.innerHTML = `<p>${maxLiter * (100 - filledPersentage) / 100}L</p> <span>Remained</span>`;
  fill.style.height = `${filledPersentage}%`;
  fill.innerHTML = `<p>${filledPersentage}%</p>`;

  if (!quantity) {
    remain.innerHTML = `<p>${maxLiter}L</p> <span>Remained</span>`;
    fill.innerText = "";
  }
  if (quantity == quantityOfGlasses) {
    remain.innerText = "";
  }
}
