const crypto = require('crypto');

class Hmac {
  constructor(computerMove, secretKey) {
    this.computerMove = computerMove;
    this.secretKey = secretKey;
  }
  getHmac() {
    const hmac = crypto.createHmac('sha256', this.secretKey);
    hmac.update(this.computerMove);
    return hmac.digest('hex');
  }
}

module.exports = Hmac;
