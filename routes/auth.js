const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth');
const { checkJWT, checkUser } = require('../middleware/auth');

router.post('/signup', authCtrl.signup);
router.post('/login', authCtrl.login);

router.get('/:id', checkJWT, checkUser, authCtrl.getUser);

module.exports = router;