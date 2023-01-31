const modalCheckNumber = document.getElementById('3');
modalCheckNumber.classList.add('check-number-container');
console.log(modalCheckNumber);

const inputEl = document.createElement('input');
const buttonEl = document.createElement('button');
buttonEl.textContent = 'send';
modalCheckNumber.append(inputEl, buttonEl);
console.log(inputEl);
inputEl.classList.add('type-1');
buttonEl.classList.add('pressed-button');
inputEl.placeholder = 'Введіть число';
inputEl.addEventListener('input', gg);
buttonEl.addEventListener('click', check);

function clearInputValue() {
  inputEl.value = '';
}

let num = 0;
function gg(e) {
  return (num = Number(e.currentTarget.value));
}
function check() {
  if (num >= 55 && num <= 99) {
    alert('Ваше число попадає в діапозон від 55 до 99');
  } else {
    alert('Ваше число не попадає в діапозон від 55 до 99');
  }

  clearInputValue();
}
