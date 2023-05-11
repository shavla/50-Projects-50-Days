const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  let x = e.clientX - btn.getBoundingClientRect().left;
  let y = e.clientY - btn.getBoundingClientRect().top;

  const circle = document.createElement("span");
  circle.classList.add("circle");
  circle.style.left = `${(100 * x) / btn.offsetWidth}%`;
  circle.style.top = `${(100 * y) / btn.offsetHeight}%`;

  btn.appendChild(circle);
  setTimeout(() => circle.remove(), 1000);
});
