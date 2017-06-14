var express = require('express');
var router = express.Router();


//Get HomePage
router.get('/', function(req,res){
    res.render('layouts/layout.ejs');
});

module.exports = router;