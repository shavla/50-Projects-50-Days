const texts = document.querySelector(".text");
const images = document.querySelector(".images");

const btnUp = document.querySelector(".btn-up");
const btnDown = document.querySelector(".btn-down");

texts.style.transform = "translateY(-300%)";
images.style.transform = "translateY(0)";

let currentText = -300;
let currentImg = 0;

btnUp.addEventListener("click", function () {
  if (currentText == 0) {
    currentText = -300;
    currentImg = 0;
  } else {
    currentText += 100;
    currentImg -= 100;
  }
  texts.style.transform = `translateY(${currentText}%)`;
  images.style.transform = `translateY(${currentImg}%)`;
});

btnDown.addEventListener("click", function () {
  if (currentText == -300) {
    currentText = 0;
    currentImg = -300;
  } else {
    currentText -= 100;
    currentImg += 100;
  }
  texts.style.transform = `translateY(${currentText}%)`;
  images.style.transform = `translateY(${currentImg}%)`;
});
