const readline = require('readline');
const ComputerMove = require('./classes/ComputerMove');
const HelpTable = require('./classes/HelpTable');
const Hmac = require('./classes/Hmac');
const SecretKey = require('./classes/SecretKey');
const WinnerOfTheCircle = require('./classes/WinnerOfTheCircle');

const randomStrings = process.argv.slice(2);

class Main {
  constructor(randomStrings) {
    this.randomStrings = randomStrings;
  }

  playGame() {
    const repeatedStrings = randomStrings.filter(
      (str, idx, arr) => arr.indexOf(str) !== idx
    );
    if (repeatedStrings.length > 0)
      return console.log(
        `You have written some repeated strings, every string should be unique!\nYou can try again like this example: Stone, Paper, Wolf, Car, bear or 42 091 5 1585 01. Good luck!`
      );
    else if (randomStrings.length < 3 || randomStrings === '')
      return console.log(
        `You have written less strings than required, please write more than 3 strings\nlike in this example: Wolf, Paper, 105, Genius, job. Good luck!`
      );
    else if (randomStrings.length % 2 == 0)
      return console.log(
        `You have written even number of strings, but to play in this game\ntheir should be odd numbers, let's try like this: model Dry json 5123 mercedec`
      );
    else {
      const newExSecretKey = new SecretKey();
      const secretKey = newExSecretKey.getSecretKey();

      const newExComputerMove = new ComputerMove(this.randomStrings);
      const computerMove = newExComputerMove.getComputerMove();

      const newExHmac = new Hmac(computerMove, secretKey);
      const hmac = newExHmac.getHmac();

      const availableMoves = randomStrings.map(
        (str, idx) => `${idx + 1} - ${str}`
      );

      console.log(
        `HMAC: ${hmac}\nAvailable moves:\n${availableMoves.join(
          '\n'
        )}\n0 - exit\n? - help`
      );

      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      const getResultOfTheGame = () =>
        rl.question('Enter your move:', (answer) => {
          const moveInt = parseInt(answer);
          const moveString = String(answer);
          if (moveInt === 0) {
            console.log('See you again!');
            rl.close();
          } else if (moveString === '?') {
            const newExHelpTable = new HelpTable(randomStrings);
            console.log(newExHelpTable.getHelpTable());
            getResultOfTheGame();
          } else {
            const newExWinnerOfTheCircle = new WinnerOfTheCircle(
              randomStrings,
              computerMove,
              moveInt
            );
            console.log(
              `Your move: ${
                moveInt === 0
                  ? randomStrings[moveInt]
                  : randomStrings[moveInt - 1]
              }\nComputer move: ${computerMove}\n${newExWinnerOfTheCircle.getWinnerOfTheCircle()}\nHMAC key: ${secretKey}`
            );
            rl.close();
          }
        });

      getResultOfTheGame();
    }
  }
}

const newMain = new Main(randomStrings);
newMain.playGame();

module.exports = randomStrings;
