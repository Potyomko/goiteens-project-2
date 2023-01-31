
// const mod = document.getElementById('12')

// const box = document.createElement('div')
// box.classList.add('box-dino')
// ==============================================

// const gameEl = document.createElement('div')
// gameEl.classList.add('play')

// const dinosaurRef = document.createElement("div")
// dinosaurRef.id = 'dino'

// const cactussRef = document.createElement("div")
// cactussRef.id = 'cactus'

// const cloudRef = document.createElement("div")
// firstRef.id = 'first-cloud'

// const secondRef = document.createElement("div")
// secondRef.id = 'second-cloud'
// ==========================
// const gameOver = document.createElement('div')
// gameOver.id = 'game-over'
// ====================================================================================
// mod.appendChild(box)
// box.appendChild(gameEl)
// gameEl.appendChild(dinosaurRef)
// dinosaurRef.after(cactussRef)
// cactussRef.after(firstRef)
// firstRef.after(secondRef)
// secondRef.after(gameOver)
// ====================================================================================
// const dino = document.querySelector("#dino")
// const cactus = document.querySelector("#cactus")
// const gameOver = document.getElementById('game-over')

// const occasion = document.addEventListener("keydown", function (e) {
//     jump()
// })
// const jump = function () {
//     if (dino.classList != "jump") {
//         dino.classList.add("jump")
//     }
//     setTimeout(function() {
//         dino.classList.remove("jump")
//         }, 500)
// }



// window.addEventListener("keydown", (start)=> {
//     if (start.code == 'Space') {
//         gameOver.style.display = "none"
//         cactus.classList.add('cactusActive')
//     }
// })



// let isAlive = setInterval (function() {
//     const dinoUp = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
//     const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
//     if (cactusLeft < 50 && cactusLeft > 0 && dinoUp >= 140) {
//         gameOver.style.display = "block"
//         cactus.classList.remove("cactusActive")
//         console.log('Game over');
// }}, 10)

const modalDino = document.getElementById('12')

const linkDino = document.createElement('a')
linkDino.classList.add('link-dino')
linkDino.href = 'https://mukolasa.github.io/portfolio/'
linkDino.textContent = 'Dino game'

modalDino.appendChild(linkDino)
// buttonDino.appendChild(dinoImg)
