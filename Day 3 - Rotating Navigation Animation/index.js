const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".content");
const circleContainer = document.querySelector(".circle-container");
const navigation = document.querySelector("nav");

open.addEventListener("click", () => {
  container.classList.add("show-container");
  circleContainer.classList.add("rotate");
  navigation.classList.add("show-nav");
});

close.addEventListener("click", () => {
  container.classList.remove("show-container");
  circleContainer.classList.remove("rotate");
  navigation.classList.remove("show-nav");
});
