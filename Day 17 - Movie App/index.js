"use strict";
const input = document.querySelector("input");
const result = document.querySelector(".result");

const STARTER =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

//   starter condition
fetchMovies(STARTER);

//   searching movies
input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    let text = input.value;

    fetchMovies(SEARCH + text);
    input.value = "";
  }
});

function fetchMovies(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let movies = data.results;
      let res = "";
      for (let movie of movies) {
        res += `<div class="movie">
        <img src = ${IMG_PATH + movie.poster_path} alt="${movie.title}">
        <div class="title">
            <h2>${movie.title}</h2>
            <p>${movie.vote_average.toFixed(2)}</p>
        </div>
        <div class="overview"><h1>Overview</h1>${movie.overview}</div>
        </div>`;
      }
      result.innerHTML = res;

      const allMovies = document.querySelectorAll(".movie");

      hoverMovie(allMovies);
      if (movies.length == 0) {
        result.innerHTML = `<h1>No Matched</h1>`;
      }
    });
}

// add class on hover
function hoverMovie(items) {
  items.forEach((element) => {
    element.addEventListener("mouseenter", function (elem) {
      elem.target.classList.add("active");
    });
    element.addEventListener("mouseleave", function (elem) {
      elem.target.classList.remove("active");
    });
  });
}
