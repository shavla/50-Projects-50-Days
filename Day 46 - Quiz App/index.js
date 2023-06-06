"use strict";

const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const result = document.querySelector(".result");

let currentIndex = 0;
let correctAns = 0;

function startQuiz() {
  currentIndex = 0;
  correctAns = 0;
  loadQuestion();
}

startQuiz();

function loadQuestion() {
  if (currentIndex == quizData.length) {
    let res = `<h1>You answered ${correctAns}/${quizData.length} questions correctly</h1>
    <button id="reload">Reload</button>
    `;
    result.innerHTML = "";
    result.innerHTML = res;

    document.getElementById("reload").addEventListener("click", startQuiz);
    return;
  }

  displayQuestion(quizData[currentIndex]);

  const submitBtn = document.querySelector("button");

  submitBtn.addEventListener("click", () => {
    checkCorrectAnswer(currentIndex);
    currentIndex++;
    loadQuestion();
  });
}

function displayQuestion(question) {
  let res = "";
  res += `
          <h1>${question.question}</h1>
          <form>
          <input type="radio" id="A" name="choice" value="a">
          <lable for="A">${question.a}</lable><br>
          <input type="radio" id="B" name="choice" value="b">
          <lable for="B">${question.b}</lable><br>
          <input type="radio" id="C" name="choice" value="c">
          <lable for="C">${question.c}</lable><br>
          <input type="radio" id="D" name="choice" value="d">
          <lable for="D">${question.d}</lable><br>
          <button type="submit">Submit</button>
          </form>
          `;
  result.innerHTML = "";
  result.innerHTML = res;

  checkInputAndMoveToNextQuestion();
}

function checkInputAndMoveToNextQuestion() {
  document.querySelector("button").disabled = true;
  document.querySelectorAll("input").forEach((elem) => {
    elem.addEventListener("click", () => {
      document.querySelector("button").disabled = false;
    });
  });
}

function checkCorrectAnswer(index) {
  document.querySelectorAll("input").forEach((elem) => {
    if (elem.checked) {
      if (elem.value === quizData[index].correct) {
        correctAns++;
      }
    }
  });
}
