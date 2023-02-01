'use strict';

// Selecting Elements

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--0');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNewEl = document.querySelector('.btn--new');
const btnHoldEl = document.querySelector('.btn--hold');
const btnRollEl = document.querySelector('.btn--roll');

diceEl.classList.add('hidden');

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Roll dice function 

btnRollEl.addEventListener('click', function () {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
        currentScore += dice;
        // current0El.textContent = currentScore;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    } else {
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');

    }
});
