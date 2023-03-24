const crypto = require('crypto');

class SecretKey {
  getSecretKey() {
    const randomKey = crypto.randomBytes(32);
    return randomKey.toString('hex');
  }
}

module.exports = SecretKey;
