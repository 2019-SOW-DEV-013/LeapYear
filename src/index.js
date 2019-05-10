var Year = require('./year');

var MESSAGE = {
    LEAP_YEAR: "Leap year",
    NON_LEAP_YEAR: "Not a leap year",
    INVALID_YEAR: "Invalid Year. Please Enter a valid year from 1582 as Gregorian Calendar is adopted from 1582"
};

document.getElementById("check").onclick = function () {

    var year = new Year(Number(document.getElementById("year").value));
    if (year.isValidYear()) {
        if (year.isLeapYear()) {
            displayMessage(MESSAGE.LEAP_YEAR);
        } else {
            displayMessage(MESSAGE.NON_LEAP_YEAR);
        }
    } else {
        displayMessage(MESSAGE.INVALID_YEAR);
    }
}

function displayMessage(message) {
    document.getElementById("message").innerHTML = message;
}