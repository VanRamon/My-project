"use strict";

const btnAdd = document.querySelector('.add');
const inputText = document.querySelector('.inputeText');
const todoList = document.querySelector('.todoList');

//const todoAdd = function(){
   // const textIn = inputText.value;
   // const li = `<li>${textIn}</li>`;
   // todoList.insertAdjacentHTML('beforeend',li);
   // inputText.value = '';
//};
 
const newtodoAdd = function(){
    const newli = document.createElement('li');
    newli.innerText = inputText.value;
    todoList.append(newli);
    inputText.value = '';

    const delbtn = document.createElement('button');
    //delbtn.setAttribute('role', 'button');
    delbtn.innerText = 'x'
    newli.append(delbtn);
    delbtn.style.margin = '10px';

    delbtn.addEventListener('click', function(){
        newli.remove();
    });
};


btnAdd.addEventListener('click', newtodoAdd);