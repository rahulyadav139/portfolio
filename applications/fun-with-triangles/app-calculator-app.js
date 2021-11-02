var sides = document.querySelectorAll(".text-input")
var btnCalculate = document.querySelector("#btn-calculate")
var showOutput = document.querySelector("#show-output")


function clickHandler() {
    var area = 1/2 * Number(sides[0].value) * Number(sides[1].value).toFixed(2)
    showOutput.innerHTML = `Area: ${area} cm²`
}


btnCalculate.addEventListener("click", clickHandler)