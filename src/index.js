const Year = require('./year');

document.getElementById("check").onclick = function () {

    year = new Year(Number(document.getElementById("year").value));

    if (!year.isValidYear(year)){
        document.getElementById("message").innerHTML = "Invalid Year. Please Enter a valid year from 1582 as Gregorian Calendar is adopted from 1582";
    }

}