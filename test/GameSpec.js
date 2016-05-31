var assert = require('chai').assert;
var sinon = require('sinon');
var Game = require('../src/Game.js');
var RandomNumberGenerator = require('../src/RandomNumberGenerator.js');
var Validator = require('../src/Validator.js');
var Comparer = require('../src/Comparer.js');
var Scanner = require('../src/Scanner.js');
var ConsoleOut = require('../src/ConsoleOut.js');
describe('Guess Game Test', function () {

    var game, generator, validator, comparer, scanner, consoleOut;
    var outPrint;
    beforeEach(function () {
        game = new Game(6);
        generator = new RandomNumberGenerator();
        validator = new Validator();
        comparer = new Comparer();
        scanner = new Scanner();
        consoleOut = new ConsoleOut();


        outPrint = sinon.spy(consoleOut, 'printLog');
        sinon.stub(generator, 'generateRandomNumber').returns('1234');
    });

    describe('Test console log', function () {
        it('Should log Congratulation when first guess number is 1234 and random number is 1234', function () {
            sinon.stub(scanner, 'getUserInputNumber').returns('1234');

            game.run(validator, comparer, generator, scanner, consoleOut);

            assert(outPrint.calledWith('Congratulation!'));
        });

        it('Should log Congratulation when guess success on second times and random number is 1234', function () {
            var callback = sinon.stub(scanner, 'getUserInputNumber');
            callback.onCall(0).returns('2345');
            callback.onCall(1).returns('1234');

            game.run(validator, comparer, generator, scanner, consoleOut);

            assert(outPrint.calledWith('0A3B'));
            assert(outPrint.calledWith('Congratulation!'));
        });

        it('Should log Congratulation when guess success on sixth times and random number is 1234', function () {
            var callback = sinon.stub(scanner, 'getUserInputNumber');
            callback.onCall(0).returns('2345');
            callback.onCall(1).returns('2345');
            callback.onCall(2).returns('2345');
            callback.onCall(3).returns('2345');
            callback.onCall(4).returns('2345');
            callback.onCall(5).returns('1234');

            game.run(validator, comparer, generator, scanner, consoleOut);

            assert(outPrint.calledWith('Congratulation!'));
        });

        it('Should log Game Over when guess failure and random number is 1234', function () {
            var callback = sinon.stub(scanner, 'getUserInputNumber');
            callback.onCall(0).returns('2345');
            callback.onCall(1).returns('2345');
            callback.onCall(2).returns('2345');
            callback.onCall(3).returns('2345');
            callback.onCall(4).returns('2345');
            callback.onCall(5).returns('2345');

            game.run(validator, comparer, generator, scanner, consoleOut);

            assert(outPrint.calledWith('Game Over!'));
        });

        it('Should return 5 when guess success first time and get remain game chane', function () {
            var callback = sinon.stub(scanner, 'getUserInputNumber');
            callback.onCall(0).returns('1234');

            game.run(validator, comparer, generator, scanner, consoleOut);

            assert.equal(game.gameTimes, 5);
        });

        it('Should return 5 when input wrong format first time and guess success second time and get remain game chane', function () {
            var callback = sinon.stub(scanner, 'getUserInputNumber');
            callback.onCall(0).returns('1234er');
            callback.onCall(1).returns('1234');

            game.run(validator, comparer, generator, scanner, consoleOut);

            assert.equal(game.gameTimes, 5);
        });
    });


});