var initialPrice = document.querySelector("#initial-price")
var quantity = document.querySelector("#quantity")
var currentPrice = document.querySelector("#current-price")
var btnSubmit = document.querySelector("#btn-submit")
var outputBox = document.querySelector("#output-box")
var message = ""




function calculator(costPrice, sellingPrice) {
  if (costPrice>sellingPrice) {
    var loss = costPrice - sellingPrice
    var lossPercentage = (loss/costPrice) * 100
    message = "Hey! the loss is " + loss + " and the loss percentage is " + lossPercentage.toFixed(2) + "%."
    output(message)
    
    console.log(lossPercentage)
  } else if (sellingPrice>costPrice) {
    var profit = sellingPrice - costPrice
    var profitPercentage = (profit/costPrice) * 100

    message = "Hey! the profit is " + profit + " and the loss percentage is " + profitPercentage.toFixed(2) + "%."
    output(message)
   
  } else {
    message = "This is a breakeven point i.e. no profit, no loss."

    output(message)
  }
}

function output(message) {
  outputBox.innerHTML = message
}




function submitHandler() {

  var costPrice = initialPrice.value * quantity.value
  var sellingPrice = currentPrice.value * quantity.value

  calculator(costPrice, sellingPrice)

  
 
}




btnSubmit.addEventListener("click", submitHandler)