var express = require('express');
var router = express.Router();

// IMPORT CONTROLLER
const instrument_controller = require('../controllers/instrument');


router.get('/', instrument_controller.instrument_list);

module.exports = router;