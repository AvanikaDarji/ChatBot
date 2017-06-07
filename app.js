var express = require("express");
var app = express();
var port = 3000;
var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Users')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
var Schema = new mongoose.Schema({
  email: String,
  password: String
});

//var dbURI = 'mongodb://localhost/Users';

//mongoose.connect(dbURI);

 
var User = mongoose.model('User',Schema);

 

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // set up ejs for templating

//home page
    app.get('/', function(req, res) {
     
       res.render('index.ejs');
    });

   
    // show the login form
    app.get('/login', function(req, res) {
        res.render('login.ejs')
    });


// show the signup form
     app.get('/signup', function(req, res) {
        res.render('signup.ejs')
    });

// process the signup form

app.post('/signup', (req, res) => {
  var userData = new User(req.body);
  userData.save()
    .then(item => {
      res.send("Data saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
module.exports = app;



//var configDB = require('./config/db.js');

//var dbURI = 'mongodb://localhost/Users';
//mongoose.connect(configDB.url);

//mongoose.connection.on('connected', function() {
  //  console.log('Mongoose is connected to ' + configDB.url);
//});

// var User = require('./Application/models/User.js');

// set up our express application
// get information from html forms




