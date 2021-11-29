function reverseStr(str) {
  var listOfChars = str.split('');
  var reverseListOfChars = listOfChars.reverse();
  var reversedStr = reverseListOfChars.join('');
  return reversedStr;
}

function isItPalindrome(str) {
  var reverse = reverseStr(str);

  return str === reverse;
}

function convertStr(date) {
  var dateStr = { day: '', month: '', year: '' };

  if (date.day < 10) {
    dateStr.day = 0 + date.day.toString();
  } else {
    dateStr.day = date.day.toString();
  }

  if (date.month < 10) {
    dateStr.month = 0 + date.month.toString();
  } else {
    dateStr.month = date.month.toString();
  }

  dateStr.year = date.year.toString();

  return dateStr;
}

function dateFormater(date) {
  var dateStr = convertStr(date);

  var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  var yyyyddmm = dateStr.year + dateStr.day + dateStr.month;
  var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);

  return [ddmmyyyy, mmddyyyy, yyyymmdd, yyyyddmm, ddmmyy, mmddyy];
}

function checkPalimdrome(date) {
  var listOfDateFormates = dateFormater(date);

  var palindrome = false;

  for (let i = 0; i < listOfDateFormates.length; i++) {
    var str = listOfDateFormates[i];

    if (isItPalindrome(str)) {
      palindrome = true;
      break;
    }
  }

  return palindrome;
}

function leapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

function getNextDate(date) {
  var nextDate = { day: '', month: '', year: '' };
  var daysInAMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (date.month === 2) {
    if (leapYear(date.year) == true) {
      if (date.day < 29) {
        nextDate.day = date.day + 1;
        nextDate.month = date.month;
      } else {
        nextDate.day = 1;
        nextDate.month = date.month + 1;
      }
    } else {
      if (date.day < 28) {
        nextDate.day = date.day + 1;
        nextDate.month = date.month;
      } else {
        nextDate.day = 1;
        nextDate.month = date.month + 1;
      }
    }

    nextDate.year = date.year;
  } else if (date.month === 12) {
    if (date.day < 31) {
      nextDate.day = date.day + 1;
      nextDate.month = date.month;
      nextDate.year = date.year;
    } else {
      nextDate.day = 1;
      nextDate.month = 1;
      nextDate.year = date.year + 1;
    }
  } else {
    if (date.day < daysInAMonth[date.month - 1]) {
      nextDate.day = date.day + 1;
      nextDate.month = date.month;
    } else {
      nextDate.day = 1;
      nextDate.month = date.month + 1;
    }

    nextDate.year = date.year;
  }

  return nextDate;
}

function getPreviousDate(date) {
  var previousDate = { day: '', month: '', year: '' };
  var daysInAMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (date.month === 3) {
    if (leapYear(date.year) == true) {
      if (date.day === 1) {
        previousDate.day = 29;
        previousDate.month = date.month - 1;
      } else {
        previousDate.day = date.day - 1;
        previousDate.month = date.month;
      }
    } else {
      if (date.day === 1) {
        previousDate.day = 28;
        previousDate.month = date.month - 1;
      } else {
        previousDate.day = date.day - 1;
        previousDate.month = date.month;
      }
    }

    previousDate.year = date.year;
  } else if (date.month === 1) {
    if (date.day === 1) {
      previousDate.day = 31;
      previousDate.month = 12;
      previousDate.year = date.year - 1;
    } else {
      previousDate.day = date.day - 1;
      previousDate.month = date.month;
      previousDate.year = date.year;
    }
  } else {
    if (date.day === 1) {
      previousDate.day = daysInAMonth[date.month - 2];
      previousDate.month = date.month - 1;
    } else {
      previousDate.day = date.day - 1;
      previousDate.month = date.month;
    }

    previousDate.year = date.year;
  }

  return previousDate;
}

function nearbyPalindrome(date) {
  var nextPalindrome = 0;
  var previousPalindrome = 0;
  var nextDate = getNextDate(date);
  var previousDate = getPreviousDate(date);

  while (true) {
    nextPalindrome++;
    if (checkPalimdrome(nextDate)) {
      break;
    } else {
      nextDate = getNextDate(nextDate);
    }
  }

  while (true) {
    previousPalindrome++;
    if (checkPalimdrome(previousDate)) {
      break;
    } else {
      previousDate = getPreviousDate(previousDate);
    }
  }

  if (nextPalindrome > previousPalindrome) {
    return [previousDate, previousPalindrome];
  } else {
    return [nextDate, nextPalindrome];
  }
}

var btnCheck = document.querySelector('#btn-check');
var msg = document.querySelector('#msg');
var inputDate = document.querySelector('#input-date');

function clickHandler() {
  if (!inputDate.value) msg.innerHTML = 'Invalid input';
  var date = {
    day: '',
    month: '',
    year: '',
  };
  var dateGiven = inputDate.value.split('-');
  date.day = Number(dateGiven[2]);
  date.month = Number(dateGiven[1]);
  date.year = Number(dateGiven[0]);

  var nearestPalindromeDetails = nearbyPalindrome(date);
  if (nearestPalindromeDetails[1] > 1) {
    var inDayOrDays = 'days';
  } else {
    var inDayOrDays = 'day';
  }

  if (checkPalimdrome(date) == true) {
    msg.innerHTML = 'Yeay! your birthday is a palindrome👏.';
  } else {
    msg.innerHTML = `Sorry! your birthday is not a palindrome. The nearest palindrome is ${nearestPalindromeDetails[0].day}-${nearestPalindromeDetails[0].month}-${nearestPalindromeDetails[0].year} and you miss it by ${nearestPalindromeDetails[1]} ${inDayOrDays}.`;
  }
}

btnCheck.addEventListener('click', clickHandler);
