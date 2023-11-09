var Instrument = require('../models/instrument');
// List of all Instruments
exports.instrument_list = function(req, res) {
res.send('NOT IMPLEMENTED: Instrument list');
};
// for a specific Instruments.
exports.instrument_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Instrument detail: ' + req.params.id);
};
// Handle Instrument create on POST.
exports.instrument_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Instrument create POST');
};
// Handle Instrument delete form on DELETE.
exports.instrument_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Instrument delete DELETE ' + req.params.id);
};
// Handle Instrument update form on PUT.
exports.instrument_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Instrument update PUT' + req.params.id);
};
