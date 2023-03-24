const fs = require('fs');
const crypto = require('crypto');

const filesNames = fs.readdirSync('./files/');
let files = filesNames.map((el) => fs.readFileSync(`./files/${el}`));

let hashes = files.map((el, idx) =>
  crypto.createHash('SHA3-256').update(files[idx]).digest('hex').toLowerCase()
);

hashes.sort();
let splitedHashes = hashes.join('').concat('g.prokopovich@rambler.ru');

let resultHash = crypto
  .createHash('SHA3-256')
  .update(splitedHashes)
  .digest('hex');
console.log(resultHash);
