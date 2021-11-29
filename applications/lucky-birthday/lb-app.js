var dob = document.querySelector('#dob');
var luckyNumber = document.querySelector('#lucky-number');
var btnCheck = document.querySelector('#btn-check');
var msg = document.querySelector('#msg');

function clickHandler() {
  msg.innerHTML = '';

  if (!dob.value || !luckyNumber.value || luckyNumber.value < 0) {
    msg.innerHTML = 'Invalid Input';
  } else {
    dobValue = dob.value.replaceAll('-', '');
    checkLuckyNumber(dobValue);
  }
}

function checkLuckyNumber(number) {
  var sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum = sum + Number(number.charAt(i));
  }

  if (sum % luckyNumber.value === 0) {
    msg.innerHTML = 'Yey! this is a lucky number.';
  } else {
    msg.innerHTML = 'Sorry! this is not lucky number.';
  }
}

btnCheck.addEventListener('click', clickHandler);
