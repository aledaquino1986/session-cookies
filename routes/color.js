var express = require('express');
var router = express.Router();
var colorController = require("../controllers/colorController")

/* GET users listing. */
router.get('/', colorController.mostrarPaginaColor)
router.post('/', colorController.elegirColor)

module.exports = router;