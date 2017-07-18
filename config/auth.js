module.exports = {

    'facebookAuth' : {
        'clientID'      : '1911588259111284', // your App ID
        'clientSecret'  : 'ac6fc89280d33029d11d1d0fb7d71ad6', // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback',
        //'profileFields'   : ['id', 'name', 'email'],
       
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '767269527185-v56vkn8fclk1jk3hbleabkglkr5k23nr.apps.googleusercontent.com',
        'clientSecret'  : 'YjV1GuE3KdZCyFnwKQQzNR4e',
        'callbackURL'   : 'http://localhost:3000/auth/google/callback'
    }

};