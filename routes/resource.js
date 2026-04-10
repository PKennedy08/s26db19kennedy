var express = require('express');
var router = express.Router();

// FIXED: correct controller import
const instrument_controller = require('../controllers/instrument');
var api_controller = require('../controllers/instrument')

router.get('/', api_controller.api)

// GET one
router.get('/instruments/:id', instrument_controller.instrument_detail);

// UPDATE
router.put('/instruments/:id', instrument_controller.instrument_update);

// DELETE
router.delete('/instruments/:id', instrument_controller.instrument_delete);

module.exports = router;