const copy = document.querySelector(".btn-copy");
const btnGenerate = document.querySelector(".btn-generate");
const result = document.querySelector(".span-result");

const lengthEl = document.getElementById("length");
const numberEl = document.getElementById("numbers");
const lowerEl = document.getElementById("lowercase");
const upperEl = document.getElementById("uppercase");
const symbolEl = document.getElementById("symbols");

copy.addEventListener("click", function () {
  navigator.clipboard.writeText(result.textContent);
});

btnGenerate.addEventListener("click", checkingIncludings);

function checkingIncludings() {
  const length = +lengthEl.value;
  let list = [];
  for (let i = 0; i < length; i++) {
    if (upperEl.checked) list.push(getRandomUpperCase());
    if (lowerEl.checked) list.push(getRandomLowerCase());
    if (numberEl.checked) list.push(getRandomNumber());
    if (symbolEl.checked) list.push(getRandomSymbol());
  }
  let password = list.slice(0, length).join("");
  result.textContent = password;
}

function getRandomUpperCase() {
  let str = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  return str;
}

function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  let symbol = "!@#$%^&*(){}[]=<>/,.|~?";
  return symbol[Math.floor(Math.random() * symbol.length)];
}
