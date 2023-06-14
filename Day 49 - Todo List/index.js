"use stict";
const input = document.querySelector("input");
const dotoList = document.querySelector(".todos");

input.addEventListener("keypress", (e) => {
  if (e.key == "Enter" && input.value) {
    let div = document.createElement("div");
    div.classList.add("todo");
    div.textContent = input.value;
    dotoList.append(div);

    div.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      div.remove();
    });

    div.addEventListener("click", () => {
      div.classList.toggle("done");
    });

    input.value = "";
  }
});
