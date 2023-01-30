const modal = document.getElementById('8');

const input = document.querySelector('.js-calculate');

const inputEl = document.createElement('input');
inputEl.classList.add('js-calculate');
inputEl.type = 'text';

const btnEl = document.createElement('button');
btnEl.type = 'button';
btnEl.textContent = 'Ризкни'

modal.appendChild(inputEl);
modal.appendChild(btnEl);

input.addEventListener('input', calculate);

let calculation = 0;

function calculate (event) {
    const numbers = Number(event.currentTarget.value);
    return calculation = numbers % 60;
}

btnEl.addEventListener('click', createTextInput);

function createTextInput() {
    const textEl = document.createElement('p');
    textEl.classList.add('text-result');
    modal.appendChild(textEl);
    textEl.textContent = calculation;
}
            