const modal = document.getElementById('8');

const labelEl = document.createElement('label');

const inputEl = document.createElement('input');
inputEl.type = 'text';

labelEl.appendChild(inputEl)
modal.appendChild(labelEl)
>>>>>>> main:src/js/games/calculate-hour-or-minutes.js
const input = document.querySelector('.js-calculate');
        console.log(input);
        input.addEventListener('input', calculate);

            function calculate (event) {
                const numbers = Number(event.target.value);
                const calculation = numbers / 60;
                createTextInput(calculation);
}
function createTextInput(result) {
    const textEl = document.createElement('p');
    textEl.classList.add('text-result');
    // textEl.append
    textEl.textContent = result;
}
            