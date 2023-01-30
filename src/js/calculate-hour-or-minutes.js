// const calculate_hour = document.querySelector(["data-module=8"]);

// const labelEl = createElement('label');
// labelEl.appendChild(inputEl)
// labelEl.apend(calculate_hour);

// const inputEl = createElement('input');
// inputEl.classList.add('js-calculate');
// inputEl.type = 'text';


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
            