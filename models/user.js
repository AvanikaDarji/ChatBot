

var mongoose = require('mongoose');
//var bcrypt = require('bcryptjs');
//mongoose.connect('mongodb://localhost/Users');

var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index:true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	name: {
		type: String
	},
	/* facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
	}*/
});
var User =  mongoose.model('User', UserSchema);
module.exports = User;





