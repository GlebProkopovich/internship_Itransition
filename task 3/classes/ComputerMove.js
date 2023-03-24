class ComputerMove {
  constructor(randomStrings) {
    this.randomStrings = randomStrings;
  }

  getRandomValue(x) {
    return Math.floor(Math.random() * (x + 1));
  }

  getComputerMove() {
    const randomValue = this.getRandomValue(this.randomStrings.length);
    return this.randomStrings[
      randomValue === 0 ? randomValue : randomValue - 1
    ];
  }
}

module.exports = ComputerMove;
