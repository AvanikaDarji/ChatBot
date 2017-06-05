var express = require("express");
var app = express();
var mongoose = require("mongoose");
var passport = require('passport');
var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var expressSession = require('express-session');

//var configDB = require('./config/db.js');

//var dbURI = 'mongodb://localhost/Users';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/node-auth')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

  var User = require('./Application/models/User');

//mongoose.connect(configDB.url);

//mongoose.connection.on('connected', function() {
  //  console.log('Mongoose is connected to ' + configDB.url);
//});


// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating


// Configuring Passport
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./Application/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
//require('./config/passport')(passport);
// launch ======================================================================
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


module.exports = app;



