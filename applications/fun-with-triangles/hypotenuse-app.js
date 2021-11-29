var sides = document.querySelectorAll('.text-input');
var btnCalculate = document.querySelector('#btn-calculate');
var showOutput = document.querySelector('#show-output');

function clickHandler() {
  if (!sides[0].value || !sides[1] || sides[0].value < 0 || sides[1].value < 0)
    return (showOutput.innerHTML = 'Invalid input');
  var square = Number(sides[0].value) ** 2 + Number(sides[1].value) ** 2;
  var hypotenuse = Math.sqrt(square).toFixed(2);
  showOutput.innerHTML = `Hypotenuse: ${hypotenuse}`;
}

btnCalculate.addEventListener('click', clickHandler);
