const Year = require('./year');

document.getElementById("check").onclick = function () {

    var year = new Year(Number(document.getElementById("year").value));

    if (year.isValidYear()){
        if(year.isLeapYear()){
            displayMessage("Leap Year");
        }
        else{
            displayMessage("Not a Leap Year");
        }
        
    }
    else{
        displayMessage("Invalid Year. Please Enter a valid year from 1582 as Gregorian Calendar is adopted from 1582");
    }

}

function displayMessage(message){
    document.getElementById("message").innerHTML =message;
}