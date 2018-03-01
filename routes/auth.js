/*
Importer les composants de la route
*/
    const express = require('express');
    const router = express.Router();
    const Strategy = require('passport-facebook').Strategy;
    const passport = require('passport');
//

/*
Configuration Passport
*/
    // Variables d'environnement
    require('dotenv').config();

    // Passport : Facebook strategy
    passport.use(new Strategy({
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: process.env.CLIENT_CB_URL,
            // profileFields: ['id', 'displayName', 'photos', 'email']
            profileFields: [ 'email','name', 'gender' ]

        }, (accessToken, refreshToken, profile, cb) => {
            console.log(`User FB Token`, accessToken)
            // In this example, the user's Facebook profile is supplied as the user
            // record.  In a production-quality application, the Facebook profile should
            // be associated with a user record in the application's database, which
            // allows for account linking and authentication with other identity
            // providers.
            return cb(null, profile);
        }
    ));

    // Passport : serializeUser
    passport.serializeUser((user, cb) => { cb(null, user) });

    // Passport : deserializeUser
    passport.deserializeUser((obj, cb) => { cb(null, obj) });
//


/*
Définition des routes
*/
    // Connexion Facebook
    router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));

    // Validation de la connexion Facebbook
    router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/connexion' }), (req, res) =>{
        res.redirect('/');
    });
//

/*
Exporter le module de route
*/
    module.exports = router;
//