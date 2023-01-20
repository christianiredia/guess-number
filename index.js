"use strict";

// document.querySelector(".message").textContent = "Correct Number";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 99;
// console.log(document.querySelector(".guess").value);

const secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "CORRECT NUMBER!!";
  } else if (guess > secretNumber) {
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "TOO HIGH";
  } else if (guess < secretNumber) {
    score--;
    document.querySelector(".score").textContent = score;

    document.querySelector(".message").textContent = "TOO LOW";
  }
});
