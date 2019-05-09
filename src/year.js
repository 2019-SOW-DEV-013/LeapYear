var Year = function(value) {
    this.year=value;
};

Year.prototype.isValidYear=function(){
    return false;    
};

module.exports = Year;