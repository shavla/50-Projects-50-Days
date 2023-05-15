const url = "https://api.github.com/users/";

const wrapper = document.querySelector(".wrapper");
const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = input.value;
  findUser(userName);

  input.value = "";
});

function findUser(user) {
  fetch(url + `${user}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.message == "Not Found") {
        wrapper.innerHTML = `<div class="error">
            <h1>User Not Found</h1>
        </div>`;
      } else {
        let res = `<div class="container">
            <img src="${data.avatar_url}">
            <div class="info">
                <h2>${data.name}</h2>
                <strong>${data.bio}</strong>
                <div class="text">
                    <p>${data.followers} <strong>Followers</strong></p>
                    <p>${data.following} <strong>Following</strong></p>
                    <p>${data.public_repos} <strong>Repos</strong></p>
                </div>
            </div>
            <div>
            `;
        repos(user);
        wrapper.innerHTML = res;
      }
    });
}

function repos(user) {
  fetch(url + `${user}` + "/repos?sort=created")
    .then((response) => response.json())
    .then((data) => {
      let res = `<div class="repos">`;
      let count = 0;
      if (data.length >= 5) count = 5;
      else count = data.length;
      for (let i = 0; i < count; i++) {
        res += `<a href="${data[i].html_url}" target="_blank">${data[i].name}</a>`;
      }
      res += "</div>";
      wrapper.innerHTML += res;
    });
}
