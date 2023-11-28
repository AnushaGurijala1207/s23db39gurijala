var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('instrument', { title: 'Search Results - Instruments' });
});

module.exports = router;

const mongoose = require("mongoose")
const instrumentSchema = mongoose.Schema({
  instrument_name: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Example validation: Check if the manufacturer contains only alphabetical characters
        return /^[a-zA-Z]+$/.test(value);
      },
    },
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price must be at least 0'],   // Minimum value for the price
    max: [3000, 'Price must be at most 100'], // Maximum value for the price
  },
});
module.exports = mongoose.model("Instrument",instrumentSchema)
