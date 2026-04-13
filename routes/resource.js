var express = require('express');
var router = express.Router();

// FIXED: correct controller import
var instrument_controller = require('../controllers/instrument');
var api_controller = require('../controllers/api')

router.get('/', api_controller.api)

// GET one
router.get('/instruments/:id', instrument_controller.instrument_detail);

// UPDATE
router.put('/instruments/:id', instrument_controller.instrument_update);

// DELETE
router.delete('/instruments/:id', instrument_controller.instrument_delete);
router.post('/instruments', instrument_controller.instrument_create_post);
router.get('/instruments', instrument_controller.instrument_list);

module.exports = router;