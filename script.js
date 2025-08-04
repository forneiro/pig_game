'use strict'
var dice = document.querySelector('.dice');
var roll_dice = document.querySelector('.roll_dice');
var hold = document.querySelector('hold');

var player1 = document.querySelector('.p1');
var player2 = document.querySelector('.p2');

var score1 = document.querySelector('.score1')
var score2 = document.querySelector('.score2');
var suma = 0;

roll_dice.addEventListener('click', function() {
    var numero = Math.ceil(Math.random() * 6);
    suma += numero;
    dice.src = `img/dice-${numero}.png`;
    if (numero > 1) {
        if (player1.classList.contains('bg_active')) {
            score1.textContent = suma;
        } else if (player2.classList.contains('bg_active')) {
            score2.textContent = suma;
        }
    } else {
        if (player1.classList.contains('bg_active')) {
            score1.textContent = 0;
            suma = 0;
            player1.classList.remove('bg_active');
            player2.classList.add('bg_active');
        } else if (player2.classList.contains('bg_active')) {
            score2.textContent = 0;
            suma = 0;
            player2.classList.remove('bg_active');
            player1.classList.add('bg_active');
        }
    }
})
hold.addEventListener('click', function() {
    
})