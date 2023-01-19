const countainerRef = document.querySelector('[data-module="leap-year"]');

const whatSouuldDo = document.createElement('p');
const inputEl = document.createElement('input');
const reviewEl = document.createElement('button');
const answerEl = document.createElement('p');

let year = 0;

inputEl.classList.add('leap-year');
reviewEl.classList.add('leap-year-btn')

whatSouuldDo.textContent = 'Введіть рік';
reviewEl.textContent = 'Перевірити';

countainerRef.append(whatSouuldDo)
countainerRef.append(inputEl);
countainerRef.append(reviewEl)
countainerRef.append(answerEl)

inputEl.addEventListener('input',hendlerInputEvent )
reviewEl.addEventListener('click', hendlerReviewYear);

function hendlerInputEvent(event) {
    return year = Number(event.currentTarget.value)
}

function hendlerReviewYear() {
    if (year % 4) {
        answerEl.textContent = 'Це не високосний рік :0'
    } else {
        answerEl.textContent = 'Це високосний рік :)'
    }
    
}
