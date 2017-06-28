
require('../config/passport.js');
module.exports = function(app, passport) {


// Register Route
//var express = require('express');
//var router = express.Router();

//var User = require('./app/models/user.js');


//Get HomePage
app.get('/', function(req,res){
    res.render('layout.ejs');
});

//Get Register page
app.get('/signup', function(req,res){
    res.render('signup');
});
//route for facebook authentication and login
app.get('/auth/facebook', passport.authenticate('facebook'));

// handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/profile',
            failureRedirect : '/'
        }));
};
// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
/*//Login Route
app.get('/login', function(req,res){
    res.render('login');
});
app.post('/login', function(req,res){
   var username = req.body.username;
	var password = req.body.password;
	User.findOne({username:username, password:password}, function(err, user){
		if(err){
			console.log(err);
			return res.status(500).send();
		}
		if(!user){
			return res.status(404).send();
		}else
		return res.status(200).send();
	})

});
//Post register 
app.post('/register', function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	
	var newUser = new User();
	newUser.name = name;
	newUser.email = email;
	newUser.username = username;
	newUser.password = password;

	newUser.save(function(err, savedUser){
		if(err){
			console.log(err);
			return res.status(500).send();
		}
return res.send("You have registered successfully");
	})
});

}
//module.exports = router;*/