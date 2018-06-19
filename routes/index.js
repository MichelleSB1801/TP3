var express = require('express');
var router = express.Router();

const homeController = require('../controllers/homeController');
const agregarController = require('../controllers/agregarController');
const signinController = require('../controllers/signinController')



/* GET home page. */
router.get('/', homeController.vista);

router.get('/agregar', agregarController.vista);

router.get('/signin', signinController.vista);

router.post('/signin', signinController.verif);

module.exports = router;
