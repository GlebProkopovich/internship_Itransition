class WinnerOfTheCircle {
  constructor(randomStrings, computerMove, userOrder) {
    this.randomStrings = randomStrings;
    this.computerMove = computerMove;
    this.userOrder = userOrder;
  }
  getWinnerOfTheCircle() {
    const computerOrder = this.randomStrings.indexOf(this.computerMove);
    if (computerOrder + 1 === this.userOrder) return 'Draw!';
    else if (computerOrder + 1 > this.userOrder) return 'Computer win!';
    else return 'You win!';
  }
}

module.exports = WinnerOfTheCircle;
