"use strict";
const nav = document.querySelector(".nav");
const header = document.querySelector("header");

const stickyNav = function (entries) {
  const [entri] = entries;
  if (!entri.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  rootMargin: `220px`,
});
headerObserver.observe(header);
