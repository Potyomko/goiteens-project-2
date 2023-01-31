const modalContainer = document.getElementById('11');
console.log(modalContainer);

const appEl = document.createElement('div');
appEl.classList.add('app');

const arr = [
  { item: 0 },
  { item: 1 },
  { item: 2 },
  { item: 3 },
  { item: 4 },
  { item: 5 },
  { item: 6 },
  { item: 7 },
  { item: 8 },
];

const itemEl = arr.map(el => {
  console.log(el);
  const itemEl = document.createElement('div');
  itemEl.classList.add('app_block');
  itemEl.dataset = el.item;
});

appEl.append(itemEl);
modalContainer.append(appEl);
const items = document.getElementsByClassName('app_block');
let movePlayer = true;
let game = true;

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function () {
    let collecion = document.querySelectorAll('.app_block:not(.active)');
    if (collecion.length == 1) {
      exit({ win: 'other' });
    }

    if (!this.classList.contains('active')) {
      if (movePlayer) {
        firstPlayer(this);
      } else {
        secondPlayer(this);
      }
    }
  });
}

function firstPlayer(that) {
  if (that.innerHTML == '') {
    that.classList.add('active');
    that.classList.add('active_x');
    that.innerHTML = 'x';
  }

  var result = checkMap();
  if (result.val) {
    game = false;
    setTimeout(function () {
      exit(result);
    }, 10);
  }

  movePlayer = !movePlayer;
}

function secondPlayer(that) {
  if (that.innerHTML == '') {
    that.classList.add('active');
    that.classList.add('active_o');
    that.innerHTML = '0';
  }

  var result = checkMap();
  if (result.val) {
    game = false;
    setTimeout(function () {
      exit(result);
    }, 10);
  }

  movePlayer = !movePlayer;
}

function checkMap() {
  let block = document.querySelectorAll('.app_block');
  let items = [];
  for (let i = 0; i < block.length; i++) {
    items.push(block[i].innerHTML);
  }

  if (
    (items[0] == 'x' && items[1] == 'x' && items[2] == 'x') ||
    (items[3] == 'x' && items[4] == 'x' && items[5] == 'x') ||
    (items[6] == 'x' && items[7] == 'x' && items[8] == 'x') ||
    (items[0] == 'x' && items[3] == 'x' && items[6] == 'x') ||
    (items[1] == 'x' && items[4] == 'x' && items[7] == 'x') ||
    (items[2] == 'x' && items[5] == 'x' && items[8] == 'x') ||
    (items[0] == 'x' && items[4] == 'x' && items[8] == 'x') ||
    (items[6] == 'x' && items[4] == 'x' && items[2] == 'x')
  )
    return { val: true, win: 'player 1' };
  if (
    (items[0] == '0' && items[1] == '0' && items[2] == '0') ||
    (items[3] == '0' && items[4] == '0' && items[5] == '0') ||
    (items[6] == '0' && items[7] == '0' && items[8] == '0') ||
    (items[0] == '0' && items[3] == '0' && items[6] == '0') ||
    (items[1] == '0' && items[4] == '0' && items[7] == '0') ||
    (items[2] == '0' && items[5] == '0' && items[8] == '0') ||
    (items[0] == '0' && items[4] == '0' && items[8] == '0') ||
    (items[6] == '0' && items[4] == '0' && items[2] == '0')
  )
    return { val: true, win: 'player 2' };

  return { val: false };
}

function exit(obj) {
  alert('game over | win: ' + obj.win);
  location.reload();
}
