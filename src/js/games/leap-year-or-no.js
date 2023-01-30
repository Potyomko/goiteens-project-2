const modal = document.getElementById('1');

const countainerEl = document.createElement('div');
const whatSouuldDo = document.createElement('p');
const inputEl = document.createElement('input');
const reviewEl = document.createElement('button');
const answerEl = document.createElement('p');

let year = 0;

inputEl.classList.add('leap-year');
reviewEl.classList.add('leap-year-btn');

// countainerEl.id = '1';
whatSouuldDo.textContent = 'Введіть рік';
reviewEl.textContent = 'Перевірити';

countainerEl.append(whatSouuldDo)
countainerEl.append(inputEl);
countainerEl.append(reviewEl)
countainerEl.append(answerEl)
modal.append(countainerEl)


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
