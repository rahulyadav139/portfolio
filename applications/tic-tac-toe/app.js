const blocks = Array.from(document.querySelectorAll('.block'));
const form = document.querySelector('.form');
const playerOne = document.querySelector('#player-one');
const playerTwo = document.querySelector('#player-two');
const title = document.querySelector('.title');

const rowOne = Array.from(document.querySelectorAll('.row-one'));
const rowTwo = Array.from(document.querySelectorAll('.row-two'));
const rowThree = Array.from(document.querySelectorAll('.row-three'));

const colOne = Array.from(document.querySelectorAll('.column-one'));
const colTwo = Array.from(document.querySelectorAll('.column-two'));
const colThree = Array.from(document.querySelectorAll('.column-three'));

const diaOne = Array.from(document.querySelectorAll('.dia-one'));
const diaTwo = Array.from(document.querySelectorAll('.dia-two'));

const crossScore = document.querySelector('.team-cross__score');
const zeroScore = document.querySelector('.team-zero__score');
const tieScore = document.querySelector('.tie__score');

let crossTeam = true;
let zeroTeam = false;

let crossScoreValue = 0;
let zeroScoreValue = 0;
let tieValue = 0;
let blockNum = 0;

const innerHTMLCross = `<h2 class="block-X">X</h2>`;
const innerHTMLZero = `<h2 class="block-O">O</h2>`;

const checkArr = [
  rowOne,
  rowTwo,
  rowThree,
  colOne,
  colTwo,
  colThree,
  diaOne,
  diaTwo,
];

const addHtml = function () {
  if (crossTeam) {
    zeroTeam = true;
    crossTeam = false;
    return 'X';
  }
  if (zeroTeam) {
    zeroTeam = false;
    crossTeam = true;
    return 'O';
  }
};

const compTurn = function () {
  for (let turnBlock of blocks) {
    blockNum = Math.floor(Math.random() * 8) + 1;

    if (!blocks[blockNum].innerHTML) break;
  }
};

const onePlayerGame = function (selectedBlock) {
  selectedBlock.innerHTML = `<h2 class="block-X">X</h2>`;

  if (checkWinner()) return;

  compTurn();

  setTimeout(() => {
    blocks[blockNum].innerHTML = `<h2 class="block-O">O</h2>`;
  }, 500);
};

const twoPlayerGame = function (selectedBlock) {
  const team = addHtml();

  selectedBlock.innerHTML = `<h2 class="block-${team}">${team}</h2>`;
};

const checkWinner = function () {
  for (let check of checkArr) {
    if (check.every(el => el.innerHTML === innerHTMLCross)) {
      return ['cross', check];
    }
    if (check.every(el => el.innerHTML === innerHTMLZero)) {
      return ['zero', check];
    }
  }
  return false;
};

const reset = function () {
  blocks.forEach(el => el.classList.remove('winner'));
  title.textContent = 'Restart';
  title.style.textDecoration = 'underline';
  title.style.cursor = 'pointer';
  const clickHandler = function () {
    blocks.forEach(el => (el.innerHTML = ''));
    title.textContent = 'Tic Tac Toe';
    title.style.cursor = 'default';
    title.style.textDecoration = 'none';
    title.removeEventListener('click', clickHandler);
  };
  title.addEventListener('click', clickHandler);
};

blocks.forEach(el =>
  el.addEventListener('click', e => {
    const selectedBlock = e.target;

    if (selectedBlock.innerHTML) return;

    if (checkWinner()) return;

    playerOne.checked
      ? onePlayerGame(selectedBlock)
      : twoPlayerGame(selectedBlock);

    if (checkWinner()[0] === 'cross') {
      crossScoreValue++;
      crossScore.textContent = `${crossScoreValue}`;
      checkWinner()[1].forEach(el => el.classList.add('winner'));
      reset();
    }

    setTimeout(() => {
      if (checkWinner()[0] === 'zero') {
        zeroScoreValue++;
        zeroScore.textContent = `${zeroScoreValue}`;
        checkWinner()[1].forEach(el => el.classList.add('winner'));
        reset();
      }
    }, 600);

    if (blocks.every(el => el.innerHTML !== '')) {
      tieValue++;
      tieScore.textContent = `${tieValue}`;
      reset();
    }
  })
);
