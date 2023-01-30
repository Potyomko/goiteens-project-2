
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


const createCards = function(games) {
    const cardEl = document.createElement('li');
    cardEl.classList = 'cards-list';

    const button = document.createElement('button');
    button.classList = 'cards-button';
    button.textContent = games.name;

    cardEl.appendChild(button);

      return cardEl;
}

  const elements = games.map(createCards)

  const containerEl = document.querySelector('.interactive-cards')

  containerEl.append(...elements);

  // console.log(containerEl);

  // Відкриття модалки
   const backdropEl = document.querySelector('.backdrop')
console.log(backdropEl);

  containerEl.addEventListener('click', onModalOpen);

  function onModalOpen(e) {
    console.log(e.target);
      if(e.target.nodeName !== "BUTTON"){
        return;
      }
      console.log(backdropEl);
      backdropEl.classList.remove('is-hidden')
    
  }