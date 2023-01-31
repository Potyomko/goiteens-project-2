const modal = document.getElementById('8');

const containerEl = document.createElement('div');
containerEl.classList.add('hour-container');
modal.append(containerEl);

const inputEl = document.createElement('input');
inputEl.classList.add('js-calculate');
inputEl.classList.add('user-number');
inputEl.type = 'text';
inputEl.placeholder = 'Введи кількість хвилин і не пожалієш, без смс і реєстрацій';
containerEl.append(inputEl);
modal.appendChild(inputEl);

const enterEl = document.createElement('button');
enterEl.classList.add('enter')
enterEl.type = 'button';
enterEl.textContent = 'Ризкни';
containerEl.append(enterEl);
modal.appendChild(enterEl);

const input = document.querySelector('.js-calculate');
input.addEventListener('input', calculate);

let calculation = 0;

function calculate (event) {
    const numbers = Number(event.currentTarget.value);
    return calculation = numbers / 60;
}

enterEl.addEventListener('click', createTextInput);

function createTextInput() {
    const textEl = document.createElement('p');
    textEl.classList.add('text-result');
    containerEl.append(textEl);
    modal.appendChild(textEl);
    textEl.textContent = calculation;
    textEl.textContent = '';
}
            