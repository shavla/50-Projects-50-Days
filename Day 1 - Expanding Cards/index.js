"use strict";

const contents = document.querySelectorAll(".content");

contents.forEach((content) => {
  content.addEventListener("click", () => {
    clearActiveToAllContents();
    content.classList.add("active");
  });
});

function clearActiveToAllContents() {
  contents.forEach((content) => content.classList.remove("active"));
}
