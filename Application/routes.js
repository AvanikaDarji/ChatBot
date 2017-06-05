
module.exports = function(app, passport) {

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
 app.post('/signup', passport.authenticate('/signup', {
       successRedirect : '/home', 
       failureRedirect : '/signup', 
      failureFlash : true 
   }));


// route middleware to make sure a user is logged in

}
