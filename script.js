'use strict';
//all variables
let currentScore;
let temp;
let currentPlayerTotal;
let turn = Math.trunc(Math.random() * 2);
let maxScore = Number(prompt('Please set maximum score'));
const p1TotalScore = document.querySelector('#score--0');
const p2TotalScore = document.querySelector('#score--1');
p1TotalScore.textContent = '0';
p2TotalScore.textContent = '0';
const rollDice = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

const changeTurn = function (trn) {
  if (trn == 1) {
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
    turn = 1;
  } else {
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
    turn = 0;
  }
};

/*if turn variable turns out to be in favour of player 2 then we give the turn to 
player to else we leave as it is because by default we had given turn to player 1 */
if (turn == 1) {
  changeTurn(1);
}

//All the Event Listeners
rollDice.addEventListener('click', function () {
  currentScore = document.querySelector(`#current--${turn}`);
  let num = Math.trunc(Math.random() * 6) + 1;
  dice.src = `.\\images\\dice-${num}.png`;
  if (num != 1) {
    temp = Number(currentScore.textContent);
    currentScore.textContent = temp + num;
  } else {
    currentScore.textContent = 0;
    changeTurn(turn == 0 ? 1 : 0);
  }
});

hold.addEventListener('click', function () {
  currentPlayerTotal = document.querySelector(`#score--${turn}`);
  temp = Number(currentPlayerTotal.textContent);
  currentPlayerTotal.textContent = temp + Number(currentScore.textContent);
  currentScore.textContent = 0;
  if (Number(currentPlayerTotal.textContent) >= maxScore) {
    document.querySelector(`.player--${turn}`).classList.add('player--winner');
    currentPlayerTotal.textContent = `${currentPlayerTotal.textContent} 🎉`;
  }
  changeTurn(turn == 0 ? 1 : 0);
});

newGame.addEventListener('click', function () {
  let temp1 = Number(p1TotalScore.textContent);
  let temp2 = Number(p2TotalScore.textContent);
  if (temp1 >= temp2) {
    changeTurn(0);
  } else {
    changeTurn(1);
  }
  p1TotalScore.textContent = '0';
  p2TotalScore.textContent = '0';
  document.querySelector(`#current--0`).textContent = '0';
  document.querySelector(`#current--1`).textContent = '0';
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
});
