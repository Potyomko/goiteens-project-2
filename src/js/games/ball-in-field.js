// const modalRef = document.querySelector('[data-modal="10"]');
const modalRef = document.getElementById('10');

const countainerEl = document.createElement('div');
const fieldEl = document.createElement('div');
const ballEl = document.createElement('img');

fieldEl.classList.add('field');
ballEl.classList.add('ball');
countainerEl.id = '10'

ballEl.src = '///src/images/ball.png';
ballEl.alt = 'Ball';

fieldEl.appendChild(ballEl);
countainerEl.append(fieldEl);
modalRef.append(countainerEl);

fieldEl.addEventListener('click', hendlerBollMove)

function hendlerBollMove(event) {
console.log(event.clientX);
    ballEl.style.left = event.clientX - fieldEl.clientLeft - ballEl.offsetWidth / 2 + 'px';
    ballEl.style.top = event.clientY - fieldEl.clientTop - ballEl.offsetHeight / 2 + 'px'
}