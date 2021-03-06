var angleOne = document.querySelector('#angle-one');
var angleTwo = document.querySelector('#angle-two');
var angleThree = document.querySelector('#angle-three');
var btnCheck = document.querySelector('#btn-check');
var showOutput = document.querySelector('#show-output');

function clickHandler() {
  if (
    !angleOne.value ||
    !angleTwo.value ||
    !angleThree.value ||
    angleOne.value < 0 ||
    angleTwo.value < 0 ||
    angleThree.value < 0
  )
    return (showOutput.innerHTML = 'Invalid input');
  var sum =
    Number(angleOne.value) + Number(angleTwo.value) + Number(angleThree.value);
  if (sum === 180) {
    showOutput.innerHTML = 'Yeay! the triangle is formed with these angles.';
  } else {
    showOutput.innerHTML =
      'Sorry! the triangle can not be formed with these angles.';
  }
}

btnCheck.addEventListener('click', clickHandler);
