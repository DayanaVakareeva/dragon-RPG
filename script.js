"use strict";
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ['stick'];
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const text = document.querySelector('#text');
const xpText = document.querySelector('#xpText');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');
const monsterStats = document.querySelector('#monsterStats');
const monsterName = document.querySelector('#monsterName');
const monsterHealthText = document.querySelector('#monsterHealth');
function goTown() {
    const button1 = document.querySelector('#button1');
    if (button1) {
        button1.innerText = 'Go to store';
        button1.onclick = goStore;
    }
    const button2 = document.querySelector('#button2');
    if (button2) {
        button2.innerText = 'Go to cave';
        button2.onclick = goCave;
    }
    const button3 = document.querySelector('#button#');
    if (button3) {
        button3.innerText = 'Fight dragon';
        button3.onclick = fightDragon;
    }
    const text = document.querySelector('#text');
    if (text) {
        text.innerText = 'You are in the town square. You see a sign that says Store.';
    }
}
;
function goStore() {
    const button1 = document.querySelector('#button1');
    if (button1) {
        button1.innerText = 'Buy 10 health (10 gold)';
        button1.onclick = buyHealth;
    }
    const button2 = document.querySelector('#button2');
    if (button2) {
        button2.innerText = 'Buy weapon (30 gold)';
        button2.onclick = buyWeapon;
    }
    const button3 = document.querySelector('#button#');
    if (button3) {
        button3.innerText = 'Go to town square';
        button3.onclick = goTown;
    }
    const text = document.querySelector('#text');
    if (text) {
        text.innerText = 'You enter the store.';
    }
}
function goCave() {
    const button2 = document.querySelector('#button2');
    if (button2) {
        button2.innerText = 'Buy weapon (30 gold)';
    }
}
function fightDragon() {
    const button3 = document.querySelector('#button#');
    if (button3) {
        button3.innerText = 'Go to town square';
    }
}
if (button1) {
    button1.onclick = goStore;
}
if (button2) {
    button2.onclick = goCave;
}
if (button3) {
    button3.onclick = fightDragon;
}
function buyHealth() { }
;
function buyWeapon() { }
;
function update(location) { }
;
const locations = [
    { name: 'town square',
    'button text': ['Go to store', 'Go to cave', 'Fight dragon'] },
];
