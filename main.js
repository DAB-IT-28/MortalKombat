const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');

const player1 = {
  player: 1,
  name: "SCORPION",
  hp: 100,
  img: "./assets/img/scorpion.gif",
  weapon: ['Sword', 'Kunai', 'Naginata'],
  attack: function () {
    console.log(this.name + "Fight...");
  }
};

const player2 = {
  player: 2,
  name: "Kitana",
  hp: 100,
  img: "./assets/img/kitana.gif",
  weapon: ['Sword', 'Kunai', 'Naginata'],
  attack: function () {
    console.log(this.name + "Fight...");
  }
};


function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }
  return $tag;
}

function createPlayer(playerObj) {
  const $player = createElement('div', 'player' + playerObj.player);
  const $progressBar = createElement('div', 'progressbar');
  const $character = createElement('div', 'character');
  const $life = createElement('div', 'life');
  const $name = createElement('div', 'name');
  const $img = createElement('img');

  $player.appendChild($progressBar);
  $player.appendChild($character);
  $progressBar.appendChild($life);
  $progressBar.appendChild($name);
  $character.appendChild($img);

  $life.style.width = playerObj.hp + '%';
  $name.innerHTML = playerObj.name;
  $img.src = playerObj.img;
  return $player
}

function changeHp(player) {
  const playerLife = document.querySelector('.player' + player.player + ' .life');
  player.hp -= Math.floor(Math.random() * 20);
  if (player.hp <= 0) {
    player.hp = 0
  }
  console.log(player.hp);
  playerLife.style.width = player.hp + '%';

  if (player.hp <= 0) {
    if (player.player === 1) {
      arenas.appendChild(showWinner(player2.name));
    }
    if (player.player === 2) {
      arenas.appendChild(showWinner(player1.name));
    }

    randomButton.disabled = true;
  }
}

function showWinner(name) {
  const loseTitle = createElement('div', 'loseTitle');
  loseTitle.innerHTML = name + ' win';
  return loseTitle;
}

randomButton.addEventListener('click', function () {
  changeHp(player1);
  changeHp(player2);
});

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));