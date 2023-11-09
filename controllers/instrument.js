// List of all Costumes
var Instrument = require("../models/instrumentSchema");
exports.instrument_list = async function (req, res) {
    try{
        theInstruments = await Instrument.find();
        res.send(theInstruments);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
};
// for a specific Costume.
exports.instrument_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Instruements detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.instrument_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Instrument()
    document.instrument_name = req.body.instrument_name;
    document.manufacturer = req.body.manufacturer;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`)
    }
};
// Handle Costume delete form on DELETE.
exports.instrument_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Instruments delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.instrument_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Instruments update PUT' + req.params.id);
};
//List of all Costumes
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
        let theinstruments = await Instrument.find();
        res.render('instruments', { title: 'Instrument Search Results', results: theinstruments });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
var express = require('express');
/* const instrument_controlers= require('../controllers/instrument');
 var router = express.Router();*/
/* /* GET costumes */
//router.get('/', instrument_controlers.instrument_view_all_Page );
//var router = express.Router();
//module.exports = router;

