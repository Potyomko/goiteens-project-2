

const listEl = document.createElement('ul')
listEl.classList.add('ul')
// створюємо li з картинками
console.log(listEl);
listEl.insertAdjacentHTML('afterbegin', '<li class="item "><img class="img"src="https://www.pngall.com/wp-content/uploads/5/Stone-PNG-Photo.png" alt="камінь" width="50" height="50"></li>')
listEl.insertAdjacentHTML('beforeend', '<li class="item "  ><img class="img"src="https://www.pngplay.com/wp-content/uploads/12/Scissor-PNG-HD-Quality.png" alt="ножниці" width="50" height="50"></li>')
listEl.insertAdjacentHTML('beforeend', '  <li class="item"  ><img class="img"src="https://www.pngall.com/wp-content/uploads/10/Paper-PNG-Photo.png" width="50" height="50" alt="папір"></li>')

const modalContainer = document.querySelector('.game-modal');
const itemQuestionEl = document.querySelector('li')
const textEl = document.querySelector('h1')
const comp = document.querySelector('.comp')
const users = document.querySelector('.user')


modalContainer.appendChild(listEl)

// Отримуємо масив всіх картинок
const imagesList = document.querySelectorAll('.img')
console.log(imagesList );
// Початок лічильника

let points = 0;
listEl.addEventListener('click', ulFuction)


function ulFuction(event) {
  // Якщо клікаємо не по зображеню виходимо з функції
  if(event.target.nodeName !== "IMG"){
    return
  }

  // Отримуємо рандомну картинку 
const randomImg = imagesList[Math.floor(Math.random() * imagesList.length)];

console.log(randomImg);

// // Задаємо рандомне значення li
itemQuestionEl.src = randomImg.src
itemQuestionEl.alt = randomImg.alt;

// Якщо вже існують елементи з класами .color-win чи .color-lose то знімаємо їх
  const winner = document.querySelector('.color-win');
  const loser = document.querySelector('.color-lose');

  if(winner || loser){
    winner.classList.remove('color-win');
    loser.classList.remove('color-lose');
  }      

// створюємо змінні щоб було зручніше
const targetImg = event.target;
const botImg = itemQuestionEl.alt;
const combination = `${targetImg.alt} - ${botImg}`;

// Замінюємо if...else на switch
switch (combination) {
  case "камінь - ножниці" :
  case "ножниці - папір" :
  case "папір - камінь":
    changeStyles('Ви виграли!', targetImg, itemQuestionEl)
    increasePoints(users);
    break;
    
  case "камінь - папір" :
  case "ножниці - камінь":
  case "папір - ножиці" :
    changeStyles('Ви програли!', itemQuestionEl, targetImg)  
    increasePoints(comp);
    break;

  case "камінь - камінь":
  case "ножниці - ножиці" :
  case "папір - папір" :
    textEl.textContent = 'Нічия!';
    
    break
  default:
    textEl.textContent = 'Зробіть вибір!';

    break;
}
  // }

}

// Виносимо окремі шматки коду в функції для чистоти коду
function changeStyles(message, winner, loser, ) {
  textEl.textContent = message;   
  loser.classList.add('color-lose');
  winner.classList.add('color-win');
  
}

function increasePoints(pleer) {
pleer.textContent = points += 1;
}