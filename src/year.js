var Year = function (value) {
    this.year = value;
};
var GREGORIAN_CALENDAR_ADOPTED_YEAR = 1582;

Year.prototype.isValidYear = function () {
    return this.year >= GREGORIAN_CALENDAR_ADOPTED_YEAR;
};

Year.prototype.isLeapYear = function () {
    return isDivisibleBy100(this.year) ? isDivisibleBy400(this.year) : isDivisibleBy4(this.year);
};

function isDivisibleBy4(year) {
    return year % 4 === 0;
}

function isDivisibleBy100(year) {
    return year % 100 === 0;
}

function isDivisibleBy400(year) {
    return year % 400 === 0;
}

module.exports = Year;