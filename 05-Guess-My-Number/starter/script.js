'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const resetGame = function () {
  score = 20;
  document.querySelector('.score').textContent = score;

  highScore = highScore;

  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').focus();
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('Please insert a value between 1 and 20 ⛔️');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct number! 🥳');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When player loses
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'Number is too high! 🥺'
          : 'Number is too low! 🥺'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game over! 🥺');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.guess').value = '';
      document.querySelector('.guess').focus();
    }
  }
});

document.querySelector('.again').addEventListener('click', resetGame);
