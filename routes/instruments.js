var express = require('express');
var router = express.Router();

// IMPORT CONTROLLER
var instrument_controller = require('../controllers/instrument');

// GET list (JSON response for Part 5)
router.get('/', instrument_controller.instrument_list);

module.exports = router;