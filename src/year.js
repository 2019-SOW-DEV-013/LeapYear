var Year = function(value) {
    this.year = value;
};
var GREGORIAN_CALENDAR_ADOPTED_YEAR =1582;

Year.prototype.isValidYear=function(){
    return this.year >= GREGORIAN_CALENDAR_ADOPTED_YEAR;    
};

Year.prototype.isLeapYear=function(){
    if(this.year%400===0)
    {
        return true;
    }
    else if(this.year%100===0)
    {
        return false;
    }
};

module.exports = Year;