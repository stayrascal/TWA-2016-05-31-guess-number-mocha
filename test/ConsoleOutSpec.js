var assert = require('chai').assert;
var sinon = require('sinon');

var ConsoleOut = require('../src/ConsoleOut.js');
describe('Console log test', function () {
    var out = new ConsoleOut();

    it('Should log message when call print method', function () {
        var print = sinon.spy(console, 'log');

        out.printLog("message");
        assert(print.calledWith("message"))
    });
});