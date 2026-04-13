var express = require('express');
var router = express.Router();

// IMPORT CONTROLLER
const instrument_controller = require('../controllers/instrument');

// JSON endpoint (Part 5)
router.get('/', instrument_controller.instrument_list);

// VIEW endpoint (Part 6)
router.get('/view', instrument_controller.instrument_view_all_Page);

module.exports = router;