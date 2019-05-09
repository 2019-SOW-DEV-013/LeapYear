var Year = function(value) {
    this.year = value;
};

Year.prototype.isValidYear=function(){
    return this.year > 0;    
};

module.exports = Year;