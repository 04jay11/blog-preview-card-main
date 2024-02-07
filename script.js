"use strict";

const h1 = document.querySelector("h1");
const shadow = document.querySelector(".section-center");

h1.addEventListener("mouseover", () => {
  shadow.classList.add("hover");
});

h1.addEventListener("mouseout", () => {
  shadow.classList.remove("hover");
});
