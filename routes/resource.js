var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var instrument_controller = require('../controllers/instrument');
/// API ROUTE ///
// GET resources base.
router.get('/instrument/:id', costume_controller.costume_detail);/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/instrument', instrument_controller.instrument_create_post);
// DELETE request to delete Costume.
router.delete('/instrument/:id', instrument_controller.instrument_delete);
// PUT request to update Costume.
router.put('/instrument/:id', instrument_controller.instrument_update_put);
// GET request for one Costume.
router.get('/instrument/:id', instrument_controller.instrument_detail);
// GET request for list of all Costume items.
router.get('/instrument', instrument_controller.instrument_list);
module.exports = router;