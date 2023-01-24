
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

    const button = document.createElement('button');
    button.classList = 'cards-button';
    button.textContent = games.name;

    const backdropEl = document.createElement('div')
    backdropEl.classList = 'backdrop hidden game';

    const modalEl = document.createElement('div')
    backdropEl.classList = 'modal game';


    backdropEl.append(modalEl)

    cardEl.append(button, backdropEl);

      return cardEl;

  }

  // console.log(createArticle(products[0]));

  const elements = games.map(createCards)

  const containerEl = document.querySelector('.interactive-cargs')

  containerEl.append(...elements);

  console.log(containerEl);