const modal = document.getElementById('8');

const doIt = document.createElement('p');
doIt.classList.add('do-it');
doIt.textContent = 'Введи кількість хвилин і не пожалієш, без смс і реєстрацій';
modal.prepend(doIt);

const inputEl = document.createElement('input');
inputEl.classList.add('js-calculate');
inputEl.type = 'text';
modal.appendChild(inputEl);

const btnEl = document.createElement('button');
btnEl.type = 'button';
btnEl.textContent = 'Ризкни';
modal.appendChild(btnEl);

const input = document.querySelector('.js-calculate');
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
            