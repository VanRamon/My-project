'use strict';

let meaning_6 = document.querySelector('.meaning_6');
let meaning_20 = document.querySelector('.meaning_20');
let check_6 = document.querySelector('.check_6');
let check_20 = document.querySelector('.check_20');
let score_6 = document.querySelector('.score_6');
let score_20 = document.querySelector('.score_20');
let btnAgain = document.querySelector('.again');

let number_6 = Math.trunc(Math.random() * 6) + 1;
let number_20 = Math.trunc(Math.random() * 20) + 1;


check_6.addEventListener('click', function(){
    let cast_6 =  meaning_6.textContent = number_6;
    score_6.textContent = `${cast_6}`;
});

check_20.addEventListener('click', function(){
    let cast_20 =  meaning_20.textContent = number_20;
    score_20.textContent = `${cast_20}`;
});

btnAgain.addEventListener('click', function(){
    number_6 = Math.trunc(Math.random() * 6) + 1;
    number_20 = Math.trunc(Math.random() * 20) + 1;
    
    meaning_6.textContent = '?';
    meaning_20.textContent = '?';

});