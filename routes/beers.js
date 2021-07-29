const express = require('express');
const router = express.Router();
const beerCtrl = require('../controllers/beers');
const multerImage = require('../middleware/multerImage');
const { checkJWT, checkUser } = require('../middleware/auth');

router.get('/', beerCtrl.getAllBeers);
router.post('/', checkJWT, checkUser, multerImage, beerCtrl.createBeer);
router.get('/:id', beerCtrl.getOneBeer);
router.put('/:id', checkJWT, checkUser, multerImage, beerCtrl.modifyBeer);
router.delete('/:id', checkJWT, checkUser, multerImage, beerCtrl.deleteBeer);

module.exports = router;