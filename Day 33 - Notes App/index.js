const addNote = document.querySelector(".add");
const wrapper = document.querySelector(".wrapper");

let id = 0;
addNote.addEventListener("click", () => {
  createElement();
});

function createElement() {
  const div = document.createElement("div");
  div.setAttribute("id", id);
  div.setAttribute("class", "element");

  const html = `
    <div class="title">
        <button class="edit hidden"><i class="fa fa-edit"></i> </button>
        <button class="delete"><i class="fa fa-trash"></i> </button>
    </div>
    <div>
        <textarea class="active"></textarea>
    </div>`;
  div.innerHTML = html;
  wrapper.appendChild(div);
  id++;
}

wrapper.addEventListener("click", function (e) {
  let childs = wrapper.children;
  if (e.target.nodeName === "BUTTON" || e.target.nodeName === "I") {
    if (e.target.closest(".delete")) {
      let index = e.target.closest(".element").id;
      wrapper.children[index].remove();
      [...childs].forEach((child, i) => {
        child.setAttribute("id", i);
      });
      id--;
    } else {
      e.target
        .closest(".element")
        .children[1].children[0].toggleAttribute("readonly");
      e.target
        .closest(".element")
        .children[1].children[0].classList.toggle("active");
    }
  }
});
