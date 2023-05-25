const Router = require('express');
const controller = require('./authController');
const router = new Router();

router.post('/registration', controller.registrate);
router.post('/login', controller.login);

module.exports = router;
