var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString = process.env.MONGO_CON;
const mongoose = require('mongoose');
console.log("Mongo URI:", process.env.MONGO_CON);
mongoose.connect(connectionString);

var Instruments = require("./models/instrumentsSchema");

// We can seed the collection if needed on

async function recreateDB(){
  try{
  // Delete everything
    await Instruments.deleteMany();

    let instance1 = new Instruments({name: "Guitar", type: "String", price: 500});
    let instance2 = new Instruments({name: "Piano", type: "Keyboard", price: 1500});
    let instance3 = new Instruments({name: "Drum", type: "Percussion", price: 700});

    await instance1.save();
    console.log("First object saved");

    await instance2.save();
    console.log("Second object saved");

    await instance3.save();
    console.log("Third objective saved");

  } catch(err) {
    console.error(err);
  }
}
  
let reseed = true;
if (reseed) {
  recreateDB();
}


var resourceRouter = require('./routes/resource');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var instrumentsRouter = require('./routes/instruments');

var gridRouter = require('./routes/grid');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/resource', resourceRouter)
app.use('/grid', gridRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/instruments', instrumentsRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
