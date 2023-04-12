const items = document.querySelectorAll(".item");
const trigger = (window.innerHeight / 5) * 4;

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  items.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < trigger) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
  });
}
