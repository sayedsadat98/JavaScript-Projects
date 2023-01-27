'use strict';

let num = Math.trunc(Math.random() * 20) + 1;
console.log(num);
let getScoreText = document.querySelector('.score');
let scoreMessage = document.querySelector('.message');
let highScore = document.querySelector('.highscore').textContent;

function checkGameStatus(score) {
  if (score < 1) {
    document.querySelector('body').style.backgroundColor = 'red';
    scoreMessage.textContent = '😣 You Lost The Game!';
  }
}

function checkBtn() {
  let guess = document.querySelector('.guess').value;
  let score = getScoreText.textContent;
  console.log(guess);
  if (guess == num) {
    document.querySelector('.number').textContent = num;
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }

    scoreMessage.textContent = '💥Congratulations!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '25%';
  } else if (guess < num) {
    score--;
    getScoreText.textContent = score;
    scoreMessage.textContent = '📉 Too Low!';
    checkGameStatus(score);
  } else {
    score--;
    getScoreText.textContent = score;
    scoreMessage.textContent = '📈 Too High!';
    checkGameStatus(score);
  }
}

function againEvent() {
  num = Math.trunc(Math.random() * 20) + 1;
  console.log('NEW NUM:' + num);
  getScoreText.textContent = 20;
  document.querySelector('.number').textContent = '?';
  scoreMessage.textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15%';
}

document.querySelector('.check').addEventListener('click', checkBtn);

document.querySelector('.again').addEventListener('click', againEvent);
