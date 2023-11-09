var express = require('express');
const instrument_controlers= require('../controllers/instrument');
var router = express.Router();

// GET Instruments
router.get('/', instrument_controlers.instrument_view_all_Page );
 //GET request for one instrument.
router.get('/instruments/:id', instrument_controlers.instrument_detail)

module.exports = router;
