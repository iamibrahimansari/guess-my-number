const container = document.querySelector(".container");
const restart = document.querySelector(".again");
const secretBox = document.querySelector(".secret-box");

let secretNumber = Math.floor(Math.random() * 20 + 1);

let score = 20;

let input = document.querySelector("input");
const check = document.querySelector(".check");
const outputStatement = document.querySelector(".sentence");
const scoreBox = document.querySelector(".score");
const highscoreBox = document.querySelector(".highscore");

let highscore = 0;

const guessSecretNumber = () => {
    let currentNumber = Number(input.value);
    if (!currentNumber) {
        outputStatement.textContent = "No Number!";
    } else if (currentNumber > secretNumber) {
        outputStatement.textContent = "Too high!";
        score -= 1;
    } else if (currentNumber < secretNumber) {
        outputStatement.textContent = "Too low!";
        score -= 1;
    } else {
        outputStatement.textContent = "Congrates! You win";
        container.style.backgroundColor = "#2cdf77";
        secretBox.textContent = secretNumber;
        container.style.color = "#fff";
        secretBox.style.width = "25%";
        input.disabled = true;
        highscore = Math.max(score, highscore);
        highscoreBox.textContent = highscore;
    }
    scoreBox.textContent = score;
    if (score === 0) {
        outputStatement.textContent = "Oops! You lost.";
        check.removeEventListener("click", guessSecretNumber);
        container.style.backgroundColor = "#ff0303d4";
        input.disabled = true;
        container.style.color = "#fff";
    }
}

check.addEventListener("click", guessSecretNumber);

const playAgain = () => {
    secretNumber = Math.floor(Math.random() * 20 + 1);
    container.style.color = "#444";
    input.disabled = false;
    container.style.backgroundColor = "#eee";
    score = 20;
    scoreBox.textContent = score;
    secretBox.style.width = "15%";
    secretBox.textContent = "?";
    input.value = "";
    outputStatement.textContent = "Start guessing...";
}

restart.addEventListener("click", playAgain);

