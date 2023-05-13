const btn = document.querySelector("button");
const wrapper = document.querySelector(".wrapper");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

const colors = ["green", "red", "blue"];

btn.addEventListener("click", () => {
  let message = messages[Math.floor(Math.random() * messages.length)];
  let color = colors[Math.floor(Math.random() * colors.length)];
  let element = document.createElement("div");
  element.innerHTML = message;
  element.style.color = color;
  wrapper.appendChild(element);

  setTimeout(() => {
    element.remove();
  }, 3000);
});
