var Year = function(value) {
    this.year = value;
};

Year.prototype.isValidYear=function(){
    return this.year >= 1582;    
};

module.exports = Year;