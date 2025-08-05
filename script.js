'use strict'
var dice = document.querySelector('.dice');
var roll_dice = document.querySelector('.roll_dice');
var hold = document.querySelector('.hold');
var new_game = document.querySelector('.new_game');

var player1 = document.querySelector('.player--0');
var player2 = document.querySelector('.player--1');
var score1 = document.querySelector('.score0')
var score2 = document.querySelector('.score1');
var current_score_p1 = document.getElementById('current--0');
var current_score_p2 = document.getElementById('current--1');

// Starting conditions 
var currentScore = 0;
var active_player = 0;
var scores = [0, 0]
dice.classList.add('hidden');
var playing = true;

const switchPlayer = function() {
    document.getElementById(`current--${active_player}`).textContent = 0;
        active_player = active_player == 0 ? 1 : 0;
        currentScore = 0;
        player1.classList.toggle('bg_active');
        player2.classList.toggle('bg_active');
}

roll_dice.addEventListener('click', function() {
    if (playing) {
        // Generate a random number
        var numero = Math.ceil(Math.random() * 6);
    
        // Display dice
        dice.classList.remove('hidden');
        dice.src = `img/dice-${numero}.png`;
    
        // Add values and switch player
        currentScore += numero;
        if (numero > 1) {
            document.getElementById(`current--${active_player}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
})
hold.addEventListener('click', function() {
    if (playing) {
        scores[active_player] += currentScore;
        document.querySelector(`.score${active_player}`).textContent = scores[active_player];
        if (scores[active_player] >= 20) {
            // Set values
            document.querySelector(`.player--${active_player}`).classList.add('player--winner');
            playing = false;
        } else {
            // Switch player
            switchPlayer();
        }
    }
})
new_game.addEventListener('click', function() {
    document.querySelector(`.player--${active_player}`).classList.remove('player--winner');
    dice.classList.add('hidden');
    scores = [0, 0]
    score1.textContent = 0;
    score2.textContent = 0;
    current_score_p1.textContent = 0;
    current_score_p2.textContent = 0;
    if (player2.classList.contains('bg_active')) {
        player2.classList.remove('bg_active');
        player1.classList.add('bg_active');
    };
    currentScore = 0;
    playing = true;
})