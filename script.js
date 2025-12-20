"use strict";

// Dice
let dice = document.querySelector(".dice"); // Dice image

// Buttons
let roll_dice = document.querySelector(".roll_dice"); // Button "Roll dice"
let hold = document.querySelector(".hold"); // Button "hold"
let new_game = document.querySelector(".new_game"); // Button "new game"

// Players
let player1 = document.querySelector(".player--0");
let player2 = document.querySelector(".player--1");
// Titles
let win = document.querySelectorAll("h2");
let arrWin = [...win];
// Total scores
let score1 = document.querySelector(".score0");
let score2 = document.querySelector(".score1");
// Current scores
let current_score_p1 = document.getElementById("current--0");
let current_score_p2 = document.getElementById("current--1");

// Starting conditions
let active_player, currentScore, scores, playing;
const resetValues = function () {
  player1.classList.add("bg_active");
  player2.classList.remove("bg_active");
  dice.classList.add("hidden");
  playing = true;
  active_player = 0;
  currentScore = 0;
  scores = [0, 0];
};
resetValues();

// Switch player
const switchPlayer = function () {
  document.getElementById(`current--${active_player}`).textContent = 0;
  active_player = active_player === 0 ? 1 : 0;
  currentScore = 0;
  player1.classList.toggle("bg_active");
  player2.classList.toggle("bg_active");
};

// Roll dice
roll_dice.addEventListener("click", function () {
  if (playing) {
    // Generate a random number
    let numero = Math.ceil(Math.random() * 6);

    // Display dice
    dice.classList.remove("hidden");
    dice.src = `img/dice-${numero}.png`;

    // Add values and switch player
    currentScore += numero;
    if (numero > 1) {
      document.getElementById(`current--${active_player}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Hold value
hold.addEventListener("click", function () {
  if (playing) {
    scores[active_player] += currentScore;
    document.querySelector(`.score${active_player}`).textContent =
      scores[active_player];

    if (scores[active_player] >= 21) {
      // Set values
      document
        .querySelector(`.player--${active_player}`)
        .classList.add("player--winner");
      arrWin[active_player].textContent = "Winner";
      playing = false;
    } else {
      // Switch player
      switchPlayer();
    }
  }
});

// Reset game
new_game.addEventListener("click", function () {
  arrWin[active_player].textContent = `Player ${active_player + 1}`;
  document
    .querySelector(`.player--${active_player}`)
    .classList.remove("player--winner");
  resetValues();
  score1.textContent = 0;
  score2.textContent = 0;
  current_score_p1.textContent = 0;
  current_score_p2.textContent = 0;
});
