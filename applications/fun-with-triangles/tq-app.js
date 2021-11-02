var btnSubmit = document.querySelector("#btn-submit")
var formQuiz = document.querySelector("#form-quiz")
var showOutput = document.querySelector("#show-output")

var correctAnswer = ["90°", "right angled"]

function clickHandler() {
var score = 0;
let i = 0;
const givenAnswer = new FormData(formQuiz)


for (let value of givenAnswer.values(formQuiz)) {
    if (value === correctAnswer[i]) {
        score++
    }

    i++
    
} 

showOutput.innerHTML = "Score: " + score
}


btnSubmit.addEventListener("click", clickHandler)