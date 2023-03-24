const Table = require('cli-table3');

class HelpTable {
  constructor(randomStrings) {
    this.randomStrings = randomStrings;
  }
  getHelpTable() {
    const modifiedStrings = [];
    this.randomStrings.map((str) => modifiedStrings.push(str));
    modifiedStrings.unshift('');
    const table = new Table({
      head: modifiedStrings,
      colWidths: this.randomStrings.map((str) => 10),
      style: {
        head: ['yellow'],
        border: ['white'],
      },
    });
    const rows = [];
    this.randomStrings.forEach((str) => {
      rows.push([
        str,
        this.randomStrings.map((el, idx, arr) => {
          if (arr.indexOf(str) > arr.indexOf(el)) return 'Win';
          else if (arr.indexOf(str) < arr.indexOf(el)) return 'Lose';
          else return 'Draw';
        }),
      ]);
    });
    rows.forEach((el) => table.push(el.flat()));
    return table.toString();
  }
}

module.exports = HelpTable;
