
function evenOdd() {
    
    var text = document.querySelector("#input").value;

    if (text === "") {
        document.querySelector("#output").innerHTML = ""   
    } else {if (text%400 === 0) {
      document.querySelector("#output").innerHTML = "Leap Year"
    } else {
      if (text%4 === 0) {
        if (text%100 === 0) {
            document.querySelector("#output").innerHTML = "Not a Leap Year"
        } else {
            document.querySelector("#output").innerHTML = "Leap Year"
        } 
      } else {
        document.querySelector("#output").innerHTML = "Not a Leap Year"
      }
    }
  }}

  document.querySelector("#btn").addEventListener("click", evenOdd);

  function reset() {
    document.querySelector("#output").innerHTML = "";
    document.querySelector("#input").value = "";
  }

  document.querySelector("#reset").addEventListener("click", reset);