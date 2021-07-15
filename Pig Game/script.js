'use strict';

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');

const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');

const diceImage = document.querySelector('.dice');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const buttonNew = document.querySelector('.btn--new');

const activePlayer0 = document.querySelector('.player--0');
const activePlayer1 = document.querySelector('.player--1');

score0.textContent = 0;
score1.textContent = 0;

diceImage.classList.add('hidden');

let score, currentScore, activePlayer, isPlaying;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0; // Initially It will be player 1
  isPlaying = true;

  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  diceImage.classList.add('hidden');

  activePlayer0.classList.add('player--active');
  activePlayer1.classList.remove('player--active');
  activePlayer1.classList.remove('player--winner');
  activePlayer0.classList.remove('player--winner');
};

init();

function rollDice() {
  if (isPlaying) {
    let roll = Math.trunc(Math.random() * 6 + 1);
    console.log(roll);

    diceImage.classList.remove('hidden');
    let path = `dice-${roll}.png`;
    diceImage.src = path;

    if (roll != 1) {
      currentScore += roll;

      document.getElementById(`current--${activePlayer}`).textContent = roll;
    } else {
      switchPlayer();
    }
  }
}

function switchPlayer() {
  if (isPlaying) {
    document.getElementById(`score--${activePlayer}`).textContent =
      currentScore;
    scores[activePlayer] = currentScore;
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = scores[activePlayer];
    activePlayer0.classList.toggle('player--active');
    activePlayer1.classList.toggle('player--active');
  }
}

function holdDice() {
  if (isPlaying) {
    scores[activePlayer] += currentScore;
    document.getElementById(`current--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      isPlaying = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceImage.classList.add('hidden');
      if (activePlayer == 0) {
        alert('Player 1 Has Won!!');
      } else {
        alert('Player 2 Has Won!!');
      }
    } else {
      switchPlayer();
    }
  }
}

buttonRoll.addEventListener('click', rollDice);
buttonHold.addEventListener('click', holdDice);
buttonNew.addEventListener('click', init);
