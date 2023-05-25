const bcrypt = require('bcrypt');
const mysql = require('mysql');

const db = mysql.createPool({
  connectionLimit: 1000,
  connectTimeout: 60 * 60 * 1000,
  acquireTimeout: 60 * 60 * 1000,
  timeout: 60 * 60 * 1000,
  host: 'sql7.freesqldatabase.com',
  user: 'sql7609131',
  password: 'gTZWftszKS',
  database: 'sql7609131',
});

class authController {
  async registrate(req, res) {
    try {
      const username = req.body.username;
      const email = req.body.email;
      const password = req.body.password;

      bcrypt.hash(password, 10, (e, hash) => {
        if (e) {
          console.log(e);
        }
        db.query(
          'INSERT INTO users (username, email, password) VALUES (?,?,?)',
          [username, email, hash],
          (e, result) => {
            console.log(e);
          }
        );
      });
      return res.json('User was successfully registrated!');
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Registration error' });
    }
  }

  async login(req, res) {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
      db.query(`SELECT * FROM users WHERE email = ?;`, email, (err, result) => {
        if (err) {
          res.send({ err: err });
        } else {
          if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (err, response) => {
              if (response) {
                db.query(
                  `UPDATE users SET last_login = ? WHERE email = ?`,
                  [now, email],
                  (err, result) => {
                    if (err) {
                      console.log(err);
                    } else {
                      console.log(result);
                    }
                  }
                );
                // console.log(result);
                res.send(result);
              } else {
                res.send({ message: 'unfortunatyle wrong data' });
              }
            });
          } else {
            res.send({ message: 'user doesnt exist' });
          }
        }
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Login error' });
    }
  }
}

module.exports = new authController();
