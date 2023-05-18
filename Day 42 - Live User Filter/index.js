"use strict";
const result = document.querySelector(".result");
const filter = document.getElementById("filter");

let allData = [];
fetch("https://randomuser.me/api?results=50")
  .then((response) => response.json())
  .then((data) => {
    allData = [...data.results];
    createElements(allData);
  });

filter.addEventListener("input", function (e) {
  let inputName = e.target.value.toLowerCase().split(" ").join("");
  let filterArr = [];
  allData.forEach((user, i) => {
    let fullName = (
      user.name.first +
      user.name.last +
      user.location.city +
      user.location.country
    ).toLowerCase();
    if (fullName.includes(inputName)) {
      filterArr.push(allData[i]);
    }
  });
  createElements(filterArr);
});

function createElements(arr) {
  let res = "";
  arr.forEach((user) => {
    res += `<div class="each-user">
        <img src="${user.picture.medium}">
        <div>
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
    </div>`;
  });
  result.innerHTML = res;
}
