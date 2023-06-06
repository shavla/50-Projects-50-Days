const wrapper = document.querySelector(".wrapper");
const show = document.querySelector(".show");
const hide = document.querySelector(".hide");

show.addEventListener("click", () => {
  [...wrapper.children].forEach((elem, i) => {
    elem.classList.add("active");
    elem.style.transitionDelay = i * 0.3 + "s";
  });
  console.log("ddd");
});

hide.addEventListener("click", () => {
  [...wrapper.children].reverse().forEach((elem, i) => {
    elem.classList.remove("active");
    elem.style.transitionDelay = i * 0.3 + "s";
  });
});
