var Year = require('../src/year');

describe('check valid year', function () {
    it('should display invalid year when given year is 0', function () {
        var year = new Year(0);
        expect(year.isValidYear()).toBe(false);
    });
    it('should display invalid year when given year has invalid characters', function () {
        var yearValueEntered="0,,,";
        var year = new Year(Number(yearValueEntered));
        expect(year.isValidYear()).toBe(false);
    });
    it('should display invalid year when given year is less than 1582', function () {
        var yearValueEntered="1523";
        var year = new Year(Number(yearValueEntered));
        expect(year.isValidYear()).toBe(false);
    });
});
describe('check leap year', function () {
    it('should display leap year when given year is divisible by 400', function () {
        var year = new Year(1600);
        expect(year.isLeapYear()).toBe(true);
    });
    it('should display not a leap year when given year is divisible by 100 but not divisible by 400', function () {
        var year = new Year(1700);
        expect(year.isLeapYear()).toBe(false);
    });
    it('should display leap year when given year is divisible by 4 but not divisible by 100', function () {
        var year = new Year(2004);
        expect(year.isLeapYear()).toBe(true);
    });
    it('should display not a leap year when given year is not divisible by 4', function () {
        var year = new Year(2019);
        expect(year.isLeapYear()).toBe(false);
    });
    
});