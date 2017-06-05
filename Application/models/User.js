

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

//var dbURI = 'mongodb://localhost/Users';

//mongoose.connect(dbURI);
var UserSchema = mongoose.Schema({

        local        : {
        email        : String,
        password     : String,
 } });
module.exports = mongoose.model('User', UserSchema);











