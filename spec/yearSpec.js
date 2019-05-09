const Year = require('../src/year');

describe('check valid year', function () {
    it('should display invalid year when 0 is given', function () {
        var year = new Year(0);
        expect(year.isValidYear()).toBe(false);
    });
});