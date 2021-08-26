const express = require('express');
const router = express.Router();
const wineCtrl = require('../controllers/wines');
const multerImage = require('../middleware/multerImage');
const { checkJWT, checkUser } = require('../middleware/auth');

router.get('/', wineCtrl.getAllWines);
router.post('/', checkJWT, checkUser, multerImage, wineCtrl.createWine);
router.get('/:id', wineCtrl.getOneWine);
router.put('/:id', checkJWT, checkUser, multerImage, wineCtrl.modifyWine);
router.delete('/:id', checkJWT, checkUser, multerImage, wineCtrl.deleteWine);

module.exports = router;