var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var instrument_controller = require('../controllers/instrument');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Instrument ROUTES ///
// POST request for creating a Instrument.
router.post('/instruments', instrument_controller.instrument_create_post);
// DELETE request to delete Instrument.
router.delete('/instruments/:id', instrument_controller.instrument_delete);
// PUT request to update Instrument.
router.put('/instruments/:id', instrument_controller.instrument_update_put);
// GET request for one Instrument.
router.get('/instruments/:id', instrument_controller.instrument_detail);
// GET request for list of all Instrument items.
router.get('/instruments', instrument_controller.instrument_list);
module.exports = router;