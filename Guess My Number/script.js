'use strict';

let guess = Math.trunc(Math.random() * 20);
console.log(guess);

const displayMessage = document.querySelector('.message');
let currentScore = document.querySelector('.score').textContent;
const displayScore = document.querySelector('.score');

let maxScore = -1;

let calculateScore = () => {
  if (currentScore > 0) {
    --currentScore;
    return currentScore;
  } else {
    gameOver();
  }
};

function resetGame() {
  guess = Math.trunc(Math.random() * 20);
  console.log(guess);
  document.querySelector('.number').textContent = '?';
  displayScore.textContent = 20;
  currentScore = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage.textContent = 'Start guessing...';
}

function gameOver() {
  document.querySelector('body').style.backgroundColor = 'red';
  displayMessage.textContent = 'Game Over';
  document.querySelector('.score').value = '0';
}

function game() {
  let answer = document.querySelector('.guess').value;

  if (answer > guess) {
    displayMessage.textContent = 'Too high';
    displayScore.textContent = calculateScore();
  } else if (answer < guess) {
    displayMessage.textContent = 'Too low';
    displayScore.textContent = calculateScore();
  } else {
    displayMessage.textContent = 'You won!!!!';
    document.querySelector('.number').textContent = answer;
    document.querySelector('body').style.backgroundColor = 'green';

    if (currentScore > maxScore) {
      maxScore = currentScore;
    }

    document.querySelector('.highscore').textContent = maxScore;
  }
}

document.querySelector('.check').addEventListener('click', game);

document.querySelector('.again').addEventListener('click', resetGame);
