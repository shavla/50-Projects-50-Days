"use stirct";

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.classList.toggle("active");
  });
});
