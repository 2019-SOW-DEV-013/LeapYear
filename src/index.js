const Year = require('./year');

document.getElementById("check").onclick = function () {

    year = new Year(Number(document.getElementById("year").value));

    if (!year.isValidYear(year)){
        document.getElementById("message").innerHTML = "Invalid Year";
    }

}

function isValidYear(value) {
    return false;
}