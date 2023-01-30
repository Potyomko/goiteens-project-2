const gameEl = document.querySelector('.game')
const dinosaurRef = document.createElement("div")
dinosaurRef.id = 'dino'

const cactussRef = document.createElement("div")
cactussRef.id = 'cactus'

const firstRef = document.createElement("div")
firstRef.id = 'first-cloud'

const secondRef = document.createElement("div")
secondRef.id = 'second-cloud'
// ======================================================================
console.log(gameEl);
gameEl.appendChild(dinosaurRef)
dinosaurRef.after(cactussRef)
cactussRef.after(firstRef)
firstRef.after(secondRef)
// ======================================================================
const dino = document.getElementById("dino")
const cactus = document.getElementById("cactus")
const occasion = document.addEventListener("keydown", function (e) {
    jump()
})
const jump = function () {
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    }
    setTimeout(function() {
        dino.classList.remove("jump")
        }, 300)
}
let isAlive = setInterval (function() {
    const dinoUp = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
    if (cactusLeft < 50 && cactusLeft > 0 && dinoUp >= 140) {
        alert("GAME OVER")
    }
}, 10)