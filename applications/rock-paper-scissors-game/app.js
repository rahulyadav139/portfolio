const compInput = document.getElementById('compInput');
const inputBet = document.querySelectorAll('.main__input');
const msg = document.querySelector('#msg');

const randomRoll = function (e) {
  const myBet = e.target.getAttribute('value');
  const randomValue = Math.floor(Math.random() * 3);

  const bets = ['Rock', 'Paper', 'Scissors'];
  const compBet = bets[randomValue];

  if (
    (compBet === 'Rock' && myBet === 'Paper') ||
    (compBet === 'Paper' && myBet === 'Scissors') ||
    (compBet === 'Scissors' && myBet === 'Rock')
  ) {
    msg.textContent = 'You won!🎉';
    msg.style.color = '#059669';
  } else if (compBet === myBet) {
    msg.textContent = 'This match is a draw!🙃';
    msg.style.color = '#5b21b6';
  } else {
    msg.textContent = 'You lost!😬';
    msg.style.color = '#F87171';
  }

  compInput.textContent = `Computer's bet: ${compBet.toUpperCase()}`;
};

inputBet.forEach(el => el.addEventListener('click', randomRoll));
