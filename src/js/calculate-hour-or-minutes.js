const labelEl = createElement('label');

const inputEl = createElement('input');
inputEl.type = 'text';

labelEl.appendChild(inputEl)

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
    textEl.textContent = result;
            }