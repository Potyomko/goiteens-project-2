const countainerRef = document.getElementById('2');

const act = document.createElement('p');
const input = document.createElement('input');
const review = document.createElement('button');
const answer = document.createElement('p');

let number = 0;

review.classList.add('guess-the-number-btn')

act.textContent = 'Спробуйте вгадати загадане число ^-^';

countainerRef.append(act)
countainerRef.append(input);
countainerRef.append(review)
countainerRef.append(answer)

review.addEventListener('click',reviewNumber)
input.addEventListener('input',inputEvent)

function inputEvent (event) {
    return number  = Number(event.currentTarget.value)
}

function reviewNumber() {
    let randomNum = Math.floor( Math.random()*(10 - 1) + 1);

    if (number === randomNum){
        answer.textContent = `Вітаю! Ви вгадали число ${randomNum}.` 
    } 

    else {
        answer.textContent = `Ви програли, компютер загадав ${randomNum}.`
    }
}