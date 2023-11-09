var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
const connectionString = process.env.MONGO_CON
const mongoose = require('mongoose');
mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    wtimeout: 30000
  });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var instrumentRouter = require('./routes/instrument');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var Instrument = require("./models/instrumentSchema");
var resourceRouter = require('./routes/resource');
var app = express();

//Get the default connection

var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function () {
  console.log("Connection to DB succeeded")
});


//const Instrument = mongoose.model("Instrument", instrumentSchema);


// We can seed the collection if needed onserver start
async function recreateDB() {
  
  console.log("**********")
  
  // Delete everything
 // mongoose.set('bufferTimeoutMS', 50000);
  await Instrument.deleteMany();
  let instance1 = new Instrument({ instrument_name: "Guitar", manufacturer: 'Fender', price: 599 });
  instance1.save().then(doc => { console.log("First object saved") }).catch(err => {
    console.error(err)
  });
  let instance2 = new Instrument({ instrument_name: "Drums", manufacturer: 'Pearl', price: 899 });
  instance2.save().then(doc => { console.log("second object saved") }).catch(err => {
    console.error(err)
  });
  let instance3 = new Instrument({ instrument_name: "Keyboard", manufacturer: 'Yamaha', price: 499 });
  instance3.save().then(doc => { console.log("third object saved") }).catch(err => {
    console.error(err)
  });
  let instance4 = new Instrument({ instrument_name: "Violin", manufacturer: 'Stradivarius', price: 1999 });
  instance4.save().then(doc => { console.log("Fourth object saved") }).catch(err => {
    console.error(err)
  });
  let instance5 = new Instrument({ instrument_name: "Piano", manufacturer: 'Steinway', price: 2999 });
  instance5.save().then(doc => { console.log("Fifth object saved") }).catch(err => {
    console.error(err)
  });
}
// mongoose.connection.close();
let reseed = true;
if (reseed) { recreateDB(); }


  

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/instruments', instrumentRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
