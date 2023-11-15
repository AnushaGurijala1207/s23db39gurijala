var Instrument = require('../models/instrument');
// List of all Costumes
exports.instrument_list = async function (req, res) {
    try {
        theInstruments = await Instrument.find();
        res.send(theInstruments);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.instrument_view_all_Page = async function (req, res) {
    try {
        theInstruments = await Instrument.find();
        res.render('instruments', { title: 'Instrument Search Results', results: theInstruments });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}

// for a specific Costume.
exports.instrument_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        let result = await Instrument.findById(req.params.id);

        if (!result) {
            res.status(404).send(`{"error": document for id ${req.params.id} not found`);
        } else {
            res.send(result);
        }
    } catch (error) {
        res.status(500).send(`{"error": ${error.message}`);
    }
};
// Handle Instrument create on POST.
exports.instrument_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Instrument();
    document.instrument_name = req.body.instrument_name;
    document.manufacturer = req.body.manufacturer;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Instrument delete form on DELETE.
exports.instrument_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Instrument.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
// Handle a show one view with id specified by query
exports.instrument_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Instrument.findById( req.query.id)
    res.render('instrumentdetail',
    { title: 'Instrument Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for creating a costume.
    // No body, no in path parameter, no query.
    // Does not need to be async
    exports.instrument_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('instrumentcreate', { title: 'Instrument Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for updating a instrument.
// query provides the id
exports.instrument_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Instrument.findById(req.query.id)
    res.render('instrumentupdate', { title: 'Instrument Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };   
// Handle Instrument update form on PUT.
exports.instrument_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Instrument.findById(req.params.id)
        // Do updates of properties
        if (req.body.instrument_name)
            toUpdate.instrument_name = req.body.instrument_name;
        if (req.body.manufacturer)
            toUpdate.manufacturer = req.body.manufacturer;
        if (req.body.price)
            toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Success " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}failed`);
    }
};
//Handle a delete one view with id from query
exports.instrument_delete_Page = async function(req, res) {
console.log("Delete view for id " + req.query.id)
try{
result = await Instrument.findById(req.query.id)
res.render('instrumentdelete', { title: 'Instrument Delete', toShow:
result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};


