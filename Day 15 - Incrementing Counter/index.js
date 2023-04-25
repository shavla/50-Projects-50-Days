"use strict";

const maxValues = [
  { name: "twitter", amount: 12000 },
  { name: "youtube", amount: 5000 },
  { name: "facebook", amount: 7500 },
];

const twitter = document.querySelector(".counter-t");
const youtube = document.querySelector(".counter-y");
const facebook = document.querySelector(".counter-f");

let finishedIncrement = false;

let incrementing = () => {
  [twitter, youtube, facebook].forEach((app, index) => {
    app.textContent = Math.round(
      +app.textContent + maxValues[index].amount / 200
    );
    if (+app.textContent == maxValues[index].amount) {
      finishedIncrement = true;
    }
  });

  if (!finishedIncrement) {
    setTimeout(() => {
      incrementing();
    }, 10);
  }
};

incrementing();
