// List of all Costumes
// var Instrument = require("./models/instrumentSchema");
exports.instrument_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Instruments list');
    };
    // for a specific Costume.
    exports.instrument_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Instruements detail: ' + req.params.id);
    };
    // Handle Costume create on POST.
    exports.instrument_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Instruments create POST');
    };
    // Handle Costume delete form on DELETE.
    exports.instrument_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Instruments delete DELETE ' + req.params.id);
    };
    // Handle Costume update form on PUT.
    exports.instrument_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Instruments update PUT' + req.params.id);
    };
    //List of all Costumes
    exports.costume_list = async function(req, res) {
    try{
    theCostumes = await Costume.find();
    res.send(theCostumes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    