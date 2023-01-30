const games =  [
  {
    id: 1,
    name: 'Високосний калькулятор',
    category: 'calculator',
  },
  {
    id: 2,
    name: 'Високосний калькулятор',
    category: 'calculator',
  },
  {
    id: 3,
    name: 'Високосний калькулятор',
    category: 'calculator',
  },
  {
    id: 4,
    name: 'Високосний калькулятор',
    category: 'calculator',
  },
  {
    id: 5,
    name: 'Високосний калькулятор',
    category: 'calculator',
  },
  {
    id: 6,
    name: 'Високосний калькулятор',
    category: 'calculator',
  },
  {
    id: 7,
    name: 'Високосний калькулятор',
    category: 'calculator',
  },
  {
    id: 8,
    name: 'Високосний калькулятор',
    category: 'calculator',
  },
  {
    id: 9,
    name: 'Високосний калькулятор',
    category: 'calculator',
  },
  {
    id: 10,
    name: 'Високосний калькулятор',
    category: 'calculator',
  },
  {
    id: 11,
    name: 'Високосний калькулятор',
    category: 'calculator',
  },
  {
    id: 12,
    name: 'Високосний калькулятор',
    category: 'calculator',
  },
]

console.log(games.name);


const createCards = function(games) {
  const cardEl = document.createElement('li');
  cardEl.classList = 'cards-list';

  const gameContainerEl = document.createElement('div');
  gameContainerEl.classList.add('cards-container')
  gameContainerEl.id = games.id;

  cardEl.appendChild(gameContainerEl);

    return cardEl;
}

const elements = games.map(createCards)

const containerEl = document.querySelector('.interactive-cards')
console.log(containerEl);
containerEl.append(...elements);



// Відкриття модалки
 const backdropEl = document.querySelector('.backdrop')
 const modalEl = document.querySelector('.game-modal')


containerEl.addEventListener('click', onModalOpen);

function onModalOpen(e) {
    if(e.target.nodeName !== "BUTTON"){
      return;
    }

    modalEl.setAttribute('data-modal', e.target.id)
    backdropEl.classList.remove('is-hidden')     
  
}