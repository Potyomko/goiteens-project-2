
const modalContainer= document.querySelector('#7')
// створюємо li з картинками

modalContainer.innerHTML(`<section>
<h1 class="title">Камінь ножниці папір!</h1>

<p class="text">комп'ютер - <span class="comp"> 0</span></p>
<p class="text-1">Ти - <span class="user"> 0</span></p>

 <ul class="list" >
  <li class="item "><img class="img"src="https://www.pngall.com/wp-content/uploads/5/Stone-PNG-Photo.png" alt="камінь" width="50" height="50"></li>
  <li class="item "><img class="img"src="https://www.pngplay.com/wp-content/uploads/12/Scissor-PNG-HD-Quality.png" alt="ножниці" width="50" height="50"></li>
  <li class="item"><img class="img"src="https://www.pngall.com/wp-content/uploads/10/Paper-PNG-Photo.png" width="50" height="50" alt="папір"></li>
</ul>
<ul>
<img class="image item" src="https://cdn-icons-png.flaticon.com/512/25/25333.png" alt="2" width="50" height="50">
</ul>

</section>`)
const itemQuestionEl = document.querySelector('.image')
const TextEl = document.querySelector('.title"')
const comp = document.querySelector('.comp')
const users = document.querySelector('.user')
const listEl = document.querySelector('.list')

stone-scissors-paper
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
    TextEl .textContent = 'Нічия!';
    
    break
  default:
    TextEl .textContent = 'Зробіть вибір!';

    break;
}
  // }

}

// Виносимо окремі шматки коду в функції для чистоти коду
function changeStyles(message, winner, loser, ) {
  TextEl.textContent = message;   
  loser.classList.add('color-lose');
  winner.classList.add('color-win');
  
}

function increasePoints(pleer) {
pleer.textContent = points += 1;
}