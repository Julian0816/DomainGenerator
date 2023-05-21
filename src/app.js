/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cardSuits = ["♦", "♥", "♠", "♣"];
const cardValue = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

window.onload = function() {
  //write your code here
  let randomNumber = Math.floor(Math.random() * 4);
  console.log(randomNumber);

  let colorPicker = document.getElementsByClassName("suit");
  colorPicker[0].classList.add("top");
  colorPicker[1].classList.add("bottom");

  for (let i = 0; i < colorPicker.length; i++) {
    if (randomNumber === 0 || randomNumber === 1) {
      colorPicker[i].style.color = "red";
    }
    colorPicker[i].innerHTML = cardSuits[randomNumber];
  }
  document.getElementById("cardValue").innerHTML =
    cardValue[Math.floor(Math.random() * 12)];
};
