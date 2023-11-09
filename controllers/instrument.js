var Instrument = require('../models/instrument');
// List of all Costumes
exports.instrument_list = async function(req, res) {
try{
theInstruments = await Instrument.find();
res.send(theInstruments);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// VIEWS
// Handle a show all view
exports.instrument_view_all_Page = async function(req, res) {
try{
theInstruments = await Instrument.find();
res.render('instruments', { title: 'Instrument Search Results', results: theInstruments });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
}
// for a specific Instruments.
exports.instrument_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Instrument detail: ' + req.params.id);
};
// Handle Instrument create on POST.

exports.instrument_create_post = async function(req, res) {
    console.log(req.body)
let document = new Instrument();
document.instrument_name = req.body.instrument_name;
document.manufacturer = req.body.manufacturer;
document.price = req.body.price;
try{
    let result = await document.save();
    res.send(result);
 }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
 };
    
// Handle Instrument delete form on DELETE.
exports.instrument_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Instrument delete DELETE ' + req.params.id);
};
// Handle Instrument update form on PUT.
exports.instrument_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Instrument update PUT' + req.params.id);
};
