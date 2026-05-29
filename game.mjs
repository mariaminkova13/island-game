import { say } from './dialogue.mjs'

await new Promise((resolve) => {
     if (document.readyState === "complete") {
          resolve();
     } else {
          window.addEventListener("load", () => resolve(), { once: true });
     }
});

let playerDataJson = {
     "player 1": {
          "inventory": ['qw', 'qw', 'qw'],
          "hp": 79,
          "ac": 1
     },
     "player 2": {
          "inventory": ['qw', 'qw', 'qw'],
          "hp": 79,
          "ac": 3
     }
};

let playerData = JSON.parse(JSON.stringify(playerDataJson));
const pdiv = document.getElementById('players')
let plist = []
let pdivlist = []
let currentPlayer

for (const player in playerData) {
     const name = document.createElement('span')
     name.id = player
     name.textContent = player
     pdiv.appendChild(name)
     plist.push(player)
     pdivlist.push(name)
}

const items = {
     "Katana": "",
     "Wood": "log.",
     "Iron": "",
     "Axe": "",
     "Flintlock": "",
     "Rifle": "",
     "Ammo": "",
     "Knife": "",
     "Boat": "",
     "Walls": "",
     "Wild Berries": "",
     "Food": "",
     "Motorcycle": "",
     "Campfire": "",
     "Tent": "",
     "Prepared Grass": "",
     "Healing Potion": "",
     "Med-Kit": "",
     "Rope": "",
     "Gunpowder": "",
     "Saddle": "",
     "Wooden Shield": ""
}

// Object.keys(items).forEach(function (key) {
//      console.log(key, items[key]);
// });

let currentTurn = 0
function nextTurn() {
     currentPlayer = (plist[currentTurn])
     pdivlist.forEach((el) => {
          el.classList.remove('selectedP')
     })
     document.getElementById(plist[currentTurn]).classList.add('selectedP')
     if (currentTurn + 1 == plist.length) currentTurn = 0
     else currentTurn++
     say(`${currentPlayer}, what would you like to do on your turn?`, ['action', 'no'])
}

nextTurn()