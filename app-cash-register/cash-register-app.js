var billAmount = document.querySelector("#bill-amount");
var cashAmount = document.querySelector("#cash-amount");
var btnCheck = document.querySelector("#check");
var alertMsg = document.querySelector("#alert-msg");
var nuOfChange = document.querySelectorAll(".number-of-notes");

var availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1]

function clickHandler() {

   
    if (billAmount.value > 0) {
        if (cashAmount.value > billAmount.value) {

            var changeAmount = cashAmount.value - billAmount.value;

            changeCalculator(changeAmount);

        

        }else {
            alertMsg.innerHTML = "Insufficient Amount is Paid";
        }
    } else {
        alertMsg.innerHTML = "Invalid Amount";
    }
}

function changeCalculator(amount) {
    for (i=0; i<availableNotes.length; i++) {
        nuOfChange[i].innerHTML = Math.trunc(amount/availableNotes[i]);
        amount %= availableNotes[i];
        
        
        
    }
}

btnCheck.addEventListener("click", clickHandler)