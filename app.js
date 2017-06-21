var express = require("express");
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var passport = require('passport');
var flash    = require('connect-flash');
var expressValidator = require('express-validator');

//intialize app
var app = express();
var port = 3000;

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Users')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

var routes = require('./routes/index');
var users = require('./routes/users');

// set up view engine with ejs for templating
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 


// body parser middleware
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//set static folder
app.use(express.static(path.join(__dirname, '/public')));

//Middleware for  express session
app.use(session({
  secret:'secret',
  saveUninitialized:true,
  resave:true

}));
//passport init
app.use(passport.initialize());
app.use(passport.session());

//connect flash middleware

app.use(flash());
app.use('/', routes);
app.use('/users', users);

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));
// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});



app.listen(port, () => {
  console.log("Server listening on port " + port);
});
module.exports = app;








