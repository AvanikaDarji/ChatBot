

/*var express = require("express");
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan       = require('morgan');
var session      = require('express-session');
var passport = require('passport');
var flash    = require('connect-flash');
var expressValidator = require('express-validator');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');


//intialize app

var port = 3000;

var mongoose = require("mongoose");
//mongoose.Promise = global.Promise;
var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database
/*mongoose.connect('mongodb://localhost/Users')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));*/

//var routes = require('./routes/index');
//var users = require('./routes/users');

// set up view engine with ejs for templating
/*app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 
// required for passport
app.use(session(
  { 
secret: 'anythng',
resave: true,
saveUninitialized:true
})); // session secret
//require('./auth')(passport);
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

// body parser middleware
//var bodyParser = require('body-parser');
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

//set static folder
app.use(express.static(path.join(__dirname, '/public')));
require('./config/auth.js');
require('./config/passport.js');
require('./app/routes.js')(app, passport);

//app.use('/', routes);
//app.use('/users', users);


app.listen(port, () => {
  console.log("Server listening on port " + port);
});
//module.exports = app;

*/



// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3000;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

app.configure(function() {

	// set up our express application
	app.use(express.logger('dev')); // log every request to the console
	app.use(express.cookieParser()); // read cookies (needed for auth)
	app.use(express.bodyParser()); // get information from html forms

	app.set('view engine', 'ejs'); // set up ejs for templating

	// required for passport
	app.use(express.session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions
	app.use(flash()); // use connect-flash for flash messages stored in session

});

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);


