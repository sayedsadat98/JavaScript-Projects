'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let initial_score = Number(document.querySelector('.score').textContent);
let highscore = 0;

const targetFunction = function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔You have not entered anything!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Your guess is correct!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#83B541';

    if (initial_score > highscore) {
      highscore = initial_score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber && initial_score > 0) {
    displayMessage('🙄 Guess is too high!!');
    decrease_score();
  } else if (guess < secretNumber && initial_score > 0) {
    displayMessage('🤧 Guess is too low!!');
    decrease_score();
  } else {
    displayMessage('👎 You lost the game!!');
    alert('👎 You lost the game!!');
  }
};

function decrease_score() {
  initial_score--;
  document.querySelector('.score').textContent = initial_score;
}

function displayMessage(str) {
  document.querySelector('.message').textContent = str;
}

function resetApp() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  initial_score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = initial_score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222222';
}

document.querySelector('.check').addEventListener('click', targetFunction);

document.querySelector('.again').addEventListener('click', resetApp);
