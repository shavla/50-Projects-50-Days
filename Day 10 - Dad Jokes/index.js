"use strict";
getJoke();

document.querySelector("button").addEventListener("click", function () {
  getJoke();
});

function getJoke() {
  fetch("https://icanhazdadjoke.com/slack")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let joke = data.attachments[0].text;
      document.getElementById("joke").innerHTML = joke;
    });
}
