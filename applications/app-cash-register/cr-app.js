var billAmount = document.querySelector('#bill-amount');
var cashAmount = document.querySelector('#cash-amount');
var btnCheck = document.querySelector('#btn-check');
var nuOfNotes = document.querySelectorAll('.number-of-notes');
var msg = document.querySelector('#msg');
var btnNext = document.querySelector('#btn-next');
var showDetails = document.querySelector('#showdetails');
var msgCheck = document.querySelector('#msg-check');

var notesAvailable = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

var billAmountValue;

function checkHandler() {
  billAmountValue = Number(billAmount.value);

  if (billAmountValue < 0 || !billAmountValue) {
    msgCheck.style.display = 'block';
    msgCheck.innerHTML = 'Invalid amount';
  } else {
    msgCheck.style.display = 'none';
    msgCheck.innerHTML = '';
    showDetails.style.display = 'block';
    btnNext.style.display = 'none';
  }
}

function cashRegister() {
  var cashAmountValue = Number(cashAmount.value);

  if (cashAmountValue > 0) {
    if (cashAmountValue > billAmountValue) {
      var changeAmount = cashAmountValue - billAmountValue;

      msg.style.display = 'none';

      changeCalculator(changeAmount);
    } else {
      msg.style.display = 'block';
      msg.innerHTML = 'Insufficient amount is paid';
      error();
    }
  } else {
    msg.style.display = 'block';
    msg.innerHTML = 'Invalid amount is paid';
    error();
  }
}

function changeCalculator(amount) {
  for (let i = 0; i < notesAvailable.length; i++) {
    nuOfNotes[i].innerHTML = Math.trunc(amount / notesAvailable[i]);
    amount %= notesAvailable[i];
  }
}

function error() {
  for (let i = 0; i < notesAvailable.length; i++) {
    nuOfNotes[i].innerHTML = '';
  }
}

btnCheck.addEventListener('click', cashRegister);

btnNext.addEventListener('click', checkHandler);
