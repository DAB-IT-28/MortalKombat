const player1 = {
  name: "SCORPION",
  hp: 90,
  img: "./assets/img/scorpion.gif",
  weapon: ['Sword', 'Kunai', 'Naginata'],
  attack: function () {
    console.log(this.name + "Fight...");
  }
};

const player2 = {
  name: "Kitana",
  hp: 80,
  img: "./assets/img/kitana.gif",
  weapon: ['Sword', 'Kunai', 'Naginata'],
  attack: function () {
    console.log(this.name + "Fight...");
  }
};

const arenas = document.querySelector('.arenas')

function createPlayer(name, hp, img) {
  const $player1 = document.createElement('div');
  const $progressBar = document.createElement('div');
  const $character = document.createElement('div');
  const $life = document.createElement('div');
  const $name = document.createElement('div');
  const $img = document.createElement('img');

  $player1.classList.add('player1');
  $progressBar.classList.add('progressbar');
  $character.classList.add('character');
  $life.classList.add('life');
  $name.classList.add('name');

  arenas.appendChild($player1);
  $player1.appendChild($progressBar);
  $player1.appendChild($character);
  $progressBar.appendChild($life);
  $progressBar.appendChild($name);
  $character.appendChild($img);

  $life.style.width = hp + '%';
  $name.innerHTML = name;
  $img.src = img;
}
createPlayer(player1.name, player1.hp, player1.img);
createPlayer(player2.name, player2.hp, player2.img);
