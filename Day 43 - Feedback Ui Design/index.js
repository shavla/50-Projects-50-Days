"use strict";
const emojis = ["&#128533;", "&#128578;", "&#128521;"];
const texts = ["Unhappy", "Neutral", "Satisfied"];
const emojisContainer = document.querySelector(".emojis");

let activeEmojiText;

emojis.forEach((emoji, index) => {
  let div = document.createElement("div");
  div.classList.add("emoji");
  let span = document.createElement("span");
  span.innerHTML = emoji;
  let phara = document.createElement("p");
  phara.innerText = texts[index];

  div.appendChild(span);
  div.appendChild(phara);

  emojisContainer.appendChild(div);

  div.addEventListener("click", () => {
    Array.from(emojisContainer.children).forEach((child) => {
      child.classList.remove("active");
    });

    div.classList.add("active");
    activeEmojiText = texts[index];
  });

  if (index == emojis.length - 1) {
    div.classList.add("active");
    activeEmojiText = texts[index];
  }
});

const btn = document.querySelector("button");
const feedback = document.querySelector(".feedback");
const content = document.querySelector(".content");
const review = document.querySelector(".review");

btn.addEventListener("click", () => {
  content.style.display = "none";
  review.style.display = "flex";
  feedback.textContent = `Feedback: ${activeEmojiText}`;
});
