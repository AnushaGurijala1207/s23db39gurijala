var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('instrument', { title: 'Search Results - Instruments' });
});

module.exports = router;


const mongoose = require("mongoose")
const instrumentSchema = mongoose.Schema({
instrument_name: String,
manufacturer: String,
price: Number
})
module.exports = mongoose.model("Instrument",instrumentSchema)
