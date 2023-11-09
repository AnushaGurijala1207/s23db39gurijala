var express = require('express');
const instrument_controlers= require('../controllers/instrument');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('instrument', { title: 'Search Results - Instruments' });
// });
/* GET costumes */
router.get('/', instrument_controlers.instrument_view_all_Page );
module.exports = router;


