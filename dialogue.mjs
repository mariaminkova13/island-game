export { say }

function sleep(ms) {
     return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandom(array) {
     return array[Math.floor(Math.random() * array.length)]
}

let startSound = new Audio('style/sfx/wow.ogg')
let clickCommon = startSound
let endSound = new Audio('style/sfx/end.ogg')

var offset = 0
const min = 2, max = 25
let randomAudio
const maxTime = 0.01
let dialogue, optdiv

async function say(text, options) {
     await update(text, options)
}

async function update(text, options) {
     let part = text.substr(0, offset);
     offset++

     if (offset > text.length + 1) {
          randomAudio.pause()
          endSound.play()

          options?.forEach((o) => {
               let el = document.createElement('button')
               el.textContent = o
               optdiv.appendChild(el)
          })

          // options?.keys(dictionary).forEach(function (key) {
          //      alert(key, dictionary[key]);
          // });
          return
     }

     // randomAudio?.pause()
     if (offset == 1) { startSound.play() }
     else {
          randomAudio = clickCommon
          randomAudio.currentTime = 0

          // if (randomAudio.currentTime >= maxTime) {
          //      randomAudio.currentTime = 0
          // }
          // if (randomAudio.paused) randomAudio.play()
     }

     dialogue.textContent = part
     await sleep(Math.floor(Math.random() * (max - min + 1)) + min)
     await update(text, options)
}

document.addEventListener("DOMContentLoaded", async () => {
     dialogue = document.getElementById('dialogue')
     optdiv = document.getElementById('options')
});