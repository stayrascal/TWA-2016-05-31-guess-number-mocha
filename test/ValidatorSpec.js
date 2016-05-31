var assert = require('assert');
describe('Test validate rule for number', function(){

    var Validator = require('../src/Validator.js');
    var ConsoleOut = require('../src/ConsoleOut.js');


    var validator = new Validator();
    var consoleOut = new ConsoleOut();

    it('Should return true when validate a normal number', function () {

        assert.equal(validator.isValidNumber('1234', 4, consoleOut), true);
    });

    it('Should return false when validate a number that have same digit', function () {
        assert.equal(validator.isValidNumber('1224', 4, consoleOut), false);
    });

    it('Should return false when validate a number which length is not equal to 4', function () {
        assert.equal(validator.isValidNumber('224', 4, consoleOut), false);
        assert.equal(validator.isValidNumber('22434', 4, consoleOut), false);
    });

    it('Should return false when validate a number that contain character', function () {
        assert.equal(validator.isValidNumber('224e', 4, consoleOut), false);
    });

    it('Should return false when validate a number which first digit is zero', function () {
        assert.equal(validator.isValidNumber('0224', 4, consoleOut), false);
    });
});