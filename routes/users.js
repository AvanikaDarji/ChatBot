// Register Route
var express = require('express');
var router = express.Router();

var User = require('../models/user');


//Get Register page
router.get('/signup', function(req,res){
    res.render('signup');
});

//Login Route
router.get('/login', function(req,res){
    res.render('login');
});
router.post('/login', function(req,res){
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
router.post('/register', function(req, res){
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
})
module.exports = router;