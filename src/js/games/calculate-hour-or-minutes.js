const modal = document.getElementById('8');
modal.classList.add('hour-container');

const formEl = document.createElement('form');

const textEl = document.createElement('p');
textEl.classList.add('text-result');

const inputEl = document.createElement('input');
inputEl.classList.add('js-calculate');
inputEl.classList.add('user-number');
inputEl.type = 'text';
inputEl.placeholder = 'Введи кількість хвилин і не пожалієш, без смс і реєстрацій';
// modal.appendChild(inputEl);

const enterEl = document.createElement('button');
enterEl.classList.add('enter')
enterEl.type = 'button';
enterEl.textContent = 'Ризкни';
// modal.appendChild(enterEl);

formEl.append(inputEl, enterEl, textEl);

modal.appendChild(formEl);

formEl.addEventListener('submit', calculate);

const input = document.querySelector('.js-calculate');
// input.addEventListener('input', calculate);

let calculation = 0;

function calculate (event) {
    const numbers = Number(event.currentTarget.value);
    calculation = numbers / 60;
    textEl.textContent = calculation;
    textEl.textContent = '';
}

// enterEl.addEventListener('click', createTextInput);
        