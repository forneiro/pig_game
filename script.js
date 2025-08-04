'use strict'
var dice = document.querySelector('.dice');
dice.classList.add('hidden');
var roll_dice = document.querySelector('.roll_dice');
var hold = document.querySelector('.hold');
var new_game = document.querySelector('.new_game');

var player1 = document.querySelector('.p1');
var player2 = document.querySelector('.p2');

var score1 = document.querySelector('.score1')
var score2 = document.querySelector('.score2');

var current_score_p1 = document.querySelector('.current_score_p1');
var current_score_p2 = document.querySelector('.current_score_p2');
var suma = 0;

roll_dice.addEventListener('click', function() {
    dice.classList.remove('hidden');
    var numero = Math.ceil(Math.random() * 6);
    suma += numero;
    dice.src = `img/dice-${numero}.png`;
    if (numero > 1) {
        if (player1.classList.contains('bg_active')) {
            current_score_p1.textContent = suma;
        } else if (player2.classList.contains('bg_active')) {
            current_score_p2.textContent = suma;
        }
    } else {
        if (player1.classList.contains('bg_active')) {
            current_score_p1.textContent = 0;
            suma = 0;
            player1.classList.remove('bg_active');
            player2.classList.add('bg_active');
        } else if (player2.classList.contains('bg_active')) {
            current_score_p2.textContent = 0;
            suma = 0;
            player2.classList.remove('bg_active');
            player1.classList.add('bg_active');
        }
    }
})
hold.addEventListener('click', function() {
    if (player1.classList.contains('bg_active')) {
        score1.textContent = Number(score1.textContent) + suma;
        player1.classList.remove('bg_active');
        player2.classList.add('bg_active');
        current_score_p1.textContent = 0;
        suma = 0;
    } else if (player2.classList.contains('bg_active')) {
        score2.textContent = Number(score2.textContent) + suma;
        player2.classList.remove('bg_active');
        player1.classList.add('bg_active');
        current_score_p2.textContent = 0;
        suma = 0;
    }
    if (Number(score1.textContent) > 100) {
        alert('gana el jugador 1');
    } else if(Number(score2.textContent) > 100) {
        alert('gana el jugador 2');;
    }
})

new_game.addEventListener('click', function() {
    dice.classList.add('hidden');
    score1.textContent = 0;
    score2.textContent = 0;
    current_score_p1.textContent = 0;
    current_score_p2.textContent = 0;
    if (player2.classList.contains('bg_active')) {
        player2.classList.remove('bg_active');
        player1.classList.add('bg_active');
    }
    suma = 0;
})