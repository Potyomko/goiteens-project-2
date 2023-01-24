const countainerRef = document.querySelector('.countainer');

const fieldEl = document.createElement('div');
const ballEl = document.createElement('img');

fieldEl.classList.add('field');
ballEl.classList.add('ball');

ballEl.src = './img/ball.png'
ballEl.alt = 'Ball'

fieldEl.appendChild(ballEl);
countainerRef.append(fieldEl)

fieldEl.addEventListener('click', hendlerBollMove)

function hendlerBollMove(event) {
    ballEl.style.left = event.clientX - fieldEl.clientLeft - ballEl.offsetWidth / 2 + 'px';
    ballEl.style.top = event.clientY - fieldEl.clientTop - ballEl.offsetHeight / 2 + 'px'
}