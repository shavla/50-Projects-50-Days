const wrapper = document.querySelector(".wrapper");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  [...wrapper.children].forEach((child) => {
    child.classList.toggle("active");
  });
  wrapper.classList.toggle("wrapper-active");
});

function createDivs() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let div = document.createElement("div");
      div.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      wrapper.appendChild(div);
    }
  }
}
createDivs();
