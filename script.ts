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
    update(locations[0])
  };

function goStore(): void {
update(locations[1])
}

function goCave(): void {
update(locations[2])
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

function fightSlime(): void {};

function fightBeast(): void {};

function update(location): void {
  const button1: HTMLButtonElement | null = document.querySelector('#button1');
  if (button1) {
    button1.innerText = location["button text"][0];
    button1.onclick = location["button functions"][0];
  }

  const button2: HTMLButtonElement | null = document.querySelector('#button2');
  if (button2) {
    location["button text"][1]
    button2.onclick = location["button functions"][1];
  }

  const button3: HTMLButtonElement | null = document.querySelector('#button#');
  if(button3){
    location["button text"][2];
    button3.onclick = location["button functions"][2];
  }

  const text: HTMLDivElement | null = document.querySelector('#text');
  if(text){
    text.innerText = location.text;
  }
};

interface Location {
    name: string;
    'button text': string[];
}

const locations: Location[] = [
    {name: 'town square',
     'button text': ['Go to store', 'Go to cave', 'Fight dragon'],
    'button functions': [goStore, goCave, fightDragon],
    'text': 'You are in the town square. You see a sign that says "Store".'},
    {name: 'store',
      'button text': ['Buy 10 health (10 gold)', 'Buy weapon (30 gold)', 'Go to town square'],
      'button functions' : [buyHealth, buyWeapon, goTown]
      text: 'You enter the store.'
    },
    {name: 'cave',
      'button text': ['Fight slime', 'Fight fanged beast', 'Go to town square'],
      'button functions': [fightSlime, fightBeast, goTown],
      text: 'You enter the cave. You see some monsters.'
    },
];



