var express = require('express');
var router = express.Router();

const instrument_controller = require('../controllers/instrument');

// Part 5 - JSON
router.get('/', instrument_controller.instrument_list);

// Part 6 - View
router.get('/view', instrument_controller.instrument_view_all_Page);

module.exports = router;