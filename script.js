"use strict";

const guessingNumberPlace = document.querySelector(".hidden-number");
const restartBtn = document.querySelector(".restart-btn");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const checkBtn = document.querySelector(".check-btn");
const highScoreNumber = document.querySelector(".high-score-number");
const hiddenNumber = document.querySelector(".hidden-number");
const backColor = document.querySelector("body");
const indicator = document.querySelector(".indicator");
let score = 20;
const inputPlaceHolder = document.querySelector(".input");
const scoreNumber = document.querySelector(".score-number");
hiddenNumber.textContent = secretNumber;
checkBtn.addEventListener("click", function () {
    const guess = Number(document.querySelector(".input").value);
    if (!guess) {
        indicator.textContent = "No number";
    } else if (secretNumber === guess) {
        backColor.style.backgroundColor = "green";
        indicator.textContent = "Corrent number";
        if (highScoreNumber.textContent < score) {
            highScoreNumber.textContent = score;
        }
        hiddenNumber.textContent = guess;
        inputPlaceHolder.disabled = true;
    } else if (secretNumber < guess) {
        score -= 1;
        indicator.textContent = "Too high";
        scoreNumber.textContent = score;
    } else {
        score -= 1;
        indicator.textContent = "Too Low";
        scoreNumber.textContent = score;
    }
});

restartBtn.addEventListener("click", function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    backColor.style.backgroundColor = "#333";
    hiddenNumber.textContent = "?";
    hiddenNumber.textContent = secretNumber;
    indicator.textContent = "Start guessing...";
    score = 20;
    scoreNumber.textContent = score;
    inputPlaceHolder.disabled = false;
    inputPlaceHolder.value = "";
});
