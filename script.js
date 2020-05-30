// var _ = require('lodash');

// var array = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log('answer:', _.without(array, 3));

const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const color4 = document.querySelector(".color4");
const color5 = document.querySelector(".color5");
const body = document.getElementById("gradient");
const buttonPref = document.getElementById("change");
const buttonRand = document.getElementById("randomize");
const dir = document.getElementById("direction");
const howManyColors = document.getElementById("howManyColors");

color3.style.display = "none";
color4.style.display = "none";
color5.style.display = "none";

function numberColors() {
  switch (this.value) {
    case "2":
      color1.style.display = "inline";
      color2.style.display = "inline";
      color3.style.display = "none";
      color4.style.display = "none";
      color5.style.display = "none";
      break;
    case "3":
      color1.style.display = "inline";
      color2.style.display = "inline";
      color3.style.display = "inline";
      color4.style.display = "none";
      color5.style.display = "none";
      break;
    case "4":
      color1.style.display = "inline";
      color2.style.display = "inline";
      color3.style.display = "inline";
      color4.style.display = "inline";
      color5.style.display = "none";
      break;
    case "5":
      color1.style.display = "inline";
      color2.style.display = "inline";
      color3.style.display = "inline";
      color4.style.display = "inline";
      color5.style.display = "inline";
      break;
    default:
      color1.style.display = "inline";
      color2.style.display = "inline";
      color3.style.display = "none";
      color4.style.display = "none";
      color5.style.display = "none";
  }
}

const setCssContent = () => {
  css.textContent = body.style.background + ";";
}

const setBackgroundColor = () => {
  switch (howManyColors.value) {
    case "2":
      body.style.background = `linear-gradient(${dir.value}, ${color1.value}, ${color2.value})`;
      break;
    case "3":
      body.style.background = `linear-gradient(${dir.value}, ${color1.value}, ${color2.value}, ${color3.value})`;
      break;
    case "4":
      body.style.background = `linear-gradient(${dir.value}, ${color1.value}, ${color2.value}, ${color3.value}, ${color4.value})`;
      break;
    case "5":
      body.style.background = `linear-gradient(${dir.value}, ${color1.value}, ${color2.value}, ${color3.value}, ${color4.value}, ${color5.value})`;
      break;
    default:
      body.style.background = `linear-gradient(${dir.value}, ${color1.value}, ${color2.value})`;
  }

  setCssContent();
}

const setRandomBackgroundColor = () => {
  var random1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  var random2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  var random3 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  var random4 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  var random5 = "#" + Math.floor(Math.random() * 16777215).toString(16);

  switch (howManyColors.value) {
    case "2":
      body.style.background = `linear-gradient(${dir.value}, ${random1}, ${random2})`;
      break;
    case "3":
      body.style.background = `linear-gradient(${dir.value}, ${random1}, ${random2}, ${random3})`;
      break;
    case "4":
      body.style.background = `linear-gradient(${dir.value}, ${random1}, ${random2}, ${random3}, ${random4})`;
      break;
    case "5":
      body.style.background = `linear-gradient(${dir.value}, ${random1}, ${random2}, ${random3}, ${random4}, ${random5})`;
      break;
    default:
      body.style.background = `linear-gradient(${dir.value}, ${random1}, ${random2})`;
  }

  setCssContent();
}

buttonPref.addEventListener("click", setBackgroundColor);
buttonRand.addEventListener("click", setRandomBackgroundColor);
howManyColors.onchange = numberColors;