let xp: number = 0;
let health: number = 100;
let gold: number = 50;
let currentWeapon: number = 0;
let fighting: any;
let monsterHealth: any;
let inventory: string[] = ['stick'];

const button1: HTMLButtonElement | null = document.querySelector('#button1');
const button2: HTMLButtonElement | null = document.querySelector('#button2');
const button3: HTMLButtonElement | null = document.querySelector('#button3');

const text: HTMLDivElement | null = document.querySelector('#text');
const xpText: HTMLSpanElement | null = document.querySelector('#xpText');
const healthText: HTMLSpanElement | null =
  document.querySelector('#healthText');
const goldText: HTMLSpanElement | null = document.querySelector('#goldText');
const monsterStats: HTMLDivElement | null =
  document.querySelector('#monsterStats');
const monsterName: HTMLSpanElement | null =
  document.querySelector('#monsterName');
const monsterHealthText: HTMLSpanElement | null =
  document.querySelector('#monsterHealth');


  function goTown(): void{
    const button1: HTMLButtonElement | null = document.querySelector('#button1');
    if (button1) {
      button1.innerText = 'Go to store';
      button1.onclick = goStore;
    }
  
    const button2: HTMLButtonElement | null = document.querySelector('#button2');
    if (button2) {
      button2.innerText = 'Go to cave';
      button2.onclick = goCave;
    }
  
    const button3: HTMLButtonElement | null = document.querySelector('#button#');
    if(button3){
      button3.innerText = 'Fight dragon';
      button3.onclick = fightDragon;
    }
  
    const text: HTMLDivElement | null = document.querySelector('#text');
    if(text){
      text.innerText = 'You are in the town square. You see a sign that says Store.';
    }
  };

function goStore(): void {
  const button1: HTMLButtonElement | null = document.querySelector('#button1');
  if (button1) {
    button1.innerText = 'Buy 10 health (10 gold)';
    button1.onclick = buyHealth;
  }

  const button2: HTMLButtonElement | null = document.querySelector('#button2');
  if (button2) {
    button2.innerText = 'Buy weapon (30 gold)';
    button2.onclick = buyWeapon;
  }

  const button3: HTMLButtonElement | null = document.querySelector('#button#');
  if(button3){
    button3.innerText = 'Go to town square';
    button3.onclick = goTown;
  }

  const text: HTMLDivElement | null = document.querySelector('#text');
  if(text){
    text.innerText = 'You enter the store.';
  }
}



function goCave(): void {
  const button2: HTMLButtonElement | null = document.querySelector('#button2');
  if (button2) {
    button2.innerText = 'Buy weapon (30 gold)';
  }
}

function fightDragon(): void {
  const button3: HTMLButtonElement | null = document.querySelector('#button#');
  if(button3){
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

function buyHealth(): void {};

function buyWeapon(): void {};

function update(location): void {};

interface Location {
    name: string;
    'button text': string[];
}

const locations: Location[] = [
    {name: 'town square',
     'button text': ['Go to store', 'Go to cave', 'Fight dragon']},
];



