const modal = document.getElementById('1');

const countainerEl = document.createElement('div');
const inputEl = document.createElement('input');
const verifiEl = document.createElement('button');
const answerEl = document.createElement('p');

let year = 0;

countainerEl.classList.add('year-countainer')
inputEl.classList.add('year-field');
verifiEl.classList.add('verifi');
answerEl.classList.add('answer');

verifiEl.textContent = 'Verifi';

// modal.style.backgroundColor = "$darkHeaderAndFooterColor"

inputEl.placeholder = 'Put a year';

countainerEl.append(inputEl);
countainerEl.append(verifiEl)
countainerEl.append(answerEl)
modal.append(countainerEl)


inputEl.addEventListener('input',hendlerInputEvent )
verifiEl.addEventListener('click', hendlerVerifiYear);

function hendlerInputEvent(event) {
    return year = Number(event.currentTarget.value)
}

function hendlerVerifiYear() {
    if (year % 4) {
        answerEl.textContent = 'Це не високосний рік :0'
    } else {
        answerEl.textContent = 'Це високосний рік :)'
    }
    
}
