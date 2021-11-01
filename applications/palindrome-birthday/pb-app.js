var date = document.querySelector("#input-date")
var msg = document.querySelector("#msg")
var btnCheck = document.querySelector("#check")








// var date = {
//     day: 1,
//     month: 3,
//     year: 2021,
// }

function reverseStr(str) {

    var listOfChars = str.split("")
    var reverseListOfChars = listOfChars.reverse()
    var reversedStr = reverseListOfChars.join("")
    return reversedStr
}

function isItPalindrome(str) {
    var reverse = reverseStr(str)

    return str === reverse;
}

function convertStr(date) {

    var dateStr = {
        day: "",
        month: "",
        year: ""
    }

    if (date.day < 10) {
        dateStr.day = 0 + date.day.toString()
    } else {
        dateStr.day = date.day.toString()
    }

    if (date.month < 10) {
        dateStr.month = 0 + date.month.toString()
    } else {
        dateStr.month = date.month.toString()
    }

    dateStr.year = date.year.toString()


    return dateStr

}

function dateFormater(date) {
    var dateStr = convertStr(date)

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day
    var yyyyddmm = dateStr.year + dateStr.day + dateStr.month
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2)
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2)

    return [ddmmyyyy, mmddyyyy, yyyymmdd, yyyyddmm, ddmmyy, mmddyy]


}

function checkPalimdrome(date) {

    var listOfDateFormates = dateFormater(date)

    var palindrome = false


    for (let i = 0; i < listOfDateFormates.length; i++) {
        var str = listOfDateFormates[i]

        if (isItPalindrome(str)) {
            palindrome = true
            break;
        }

    }

    return palindrome
}


function leapYear(year) {
    if (year % 400 === 0) {
        return true
    }
    if (year % 100 === 0) {
        return false
    }
    if (year % 4 === 0) {
        return true
    } else {
        return false
    }
}


function getNextDate(date) {

    var nextDate = {
        day: "",
        month: "",
        year: ""
    }
    var daysInAMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (date.month === 2) {
        if (leapYear(date.year) == true) {
            if (date.day < 29) {
                nextDate.day = date.day + 1
                nextDate.month = date.month
            } else {
                nextDate.day = 1
                nextDate.month = date.month + 1
            }


        } else {
            if (date.day < 28) {
                nextDate.day = date.day + 1
                nextDate.month = date.month
            } else {
                nextDate.day = 1
                nextDate.month = date.month + 1
            }
        }

        nextDate.year = date.year
    } else if (date.month === 12) {
        if (date.day < 31) {
            nextDate.day = date.day + 1
            nextDate.month = date.month
            nextDate.year = date.year

        } else {
            nextDate.day = 1
            nextDate.month = 1
            nextDate.year = date.year + 1

        }
    } else {
        if (date.day < daysInAMonth[date.month - 1]) {
            nextDate.day = date.day + 1
            nextDate.month = date.month

        } else {
            nextDate.day = 1
            nextDate.month = date.month + 1

        }

        nextDate.year = date.year

    }



    return nextDate
}


function nearbyPalindrome(date) {
    var nextPalindrome = 0;
    
    var nextDate = getNextDate(date)
    


    while(true) {
      nextPalindrome++
       if (checkPalimdrome(nextDate)) {
         break;
       } else {
         nextDate = getNextDate(nextDate)
       }


    }

   

    return [nextDate, nextPalindrome]
}

function clickHandler() {
    console.log(date.value)
}


btnCheck.addEventListener("click", clickHandler)
