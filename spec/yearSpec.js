const Year = require('../src/year');

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
});