var express = require('express');
var router = express.Router();

const instrument_controller = require('../controllers/instrument');

router.put('/instrument:id', instrument_controller.instrument_update)
module.exports = router;