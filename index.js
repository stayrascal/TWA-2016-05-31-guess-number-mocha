function main(){
    var Game = require('./src/Game.js');
    var Validator = require('./src/Validator.js');
    var Comparer = require('./src/Comparer.js');
    var RandomNumberGenerator = require('./src/RandomNumberGenerator.js');
    var Scanner = require('./src/Scanner.js');
    var ConsoleOut = require('./src/ConsoleOut.js');

    var game = new Game(6);
    var validator = new Validator();
    var comparer = new Comparer();
    var generator = new RandomNumberGenerator();
    var scanner = new Scanner();
    var console = new ConsoleOut();

    game.run(validator, comparer, generator, scanner, console);

}
main();