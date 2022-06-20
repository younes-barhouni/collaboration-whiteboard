var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signatureRouter = require('./routes/get_signature');
var frofroRouter = require('./routes/get_frofro');


// Setting permitted websites for accessing the server - only whitelisted sites can reach API

var cors = function(req, res, next) {
  var whitelist = [
    'http://localhost:3000',
  ];
  var origin = req.headers.origin;
  if (whitelist.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
}

var app = express();

// tell app to use above-defined whitelist
app.use(cors);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// tell the app to build root url from directory /collaboration/whiteboard
app.use('/collaboration/whiteboard', express.static(path.join(__dirname, './whiteboard-front/build')))

// makes homepage /collaboration/whiteboard/, all route calls are made from home page
app.use('/collaboration/whiteboard/', indexRouter);
app.use('/collaboration/whiteboard/api/users', usersRouter);
app.use('/collaboration/whiteboard/api/get_signature', signatureRouter);
app.use('/collaboration/whiteboard/api/get_frofro', frofroRouter);

// if no routes above matched, then always redirect user to home page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'whiteboard-front','build','index.html'))
})


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
