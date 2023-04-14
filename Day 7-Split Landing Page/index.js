"use strict";
const ps = document.querySelector(".ps");
const xbox = document.querySelector(".xbox");

ps.addEventListener("mouseenter", () => ps.classList.add("hover-ps"));
ps.addEventListener("mouseleave", () => ps.classList.remove("hover-ps"));

xbox.addEventListener("mouseenter", () => xbox.classList.add("hover-xbox"));
xbox.addEventListener("mouseleave", () => xbox.classList.remove("hover-xbox"));
