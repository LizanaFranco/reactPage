var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fileUpload= require('express-fileupload');
var cors = require('cors');
//--dependencia para trabajar con base de datos

require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var gameRoute = require('./routes/admin/gameRoute');
var apiRouter = require('./routes/api')

const { config } = require('process');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', gameRoute);
app.use('/users',  usersRouter);
app.use('/api', cors() , apiRouter);



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
