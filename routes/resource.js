var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var instrument_controller = require('../controllers/instrument');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/instruments', instrument_controller.instrument_create_post);
// DELETE request to delete Costume.
router.delete('/instruments/:id', instrument_controller.instrument_delete);
// PUT request to update Costume.
router.put('/instruments/:id', instrument_controller.instrument_update_put);
// GET request for one Costume.
router.get('/instruments/:id', instrument_controller.instrument_detail);
// GET request for list of all Costume items.
router.get('/instruments', instrument_controller.instrument_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"instrument", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};