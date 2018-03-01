/*
Importer les composants de la route
*/
    const express = require('express');
    const router = express.Router();
    const Strategy = require('passport-facebook').Strategy;
    const passport = require('passport');
    const bodyParser = require('body-parser');
    const jwt = require('jsonwebtoken');
    const bcrypt = require('bcryptjs');

    // Middleware
    router.use(bodyParser.urlencoded({ extended: false }));
    router.use(bodyParser.json());
    router.use( (user, req, res, next)  => { res.status(200).send(user) });

    // Modules
    const VerifyToken = require('../models/verify.token');
    const MongooseUser = require('../models/user.mongoose');
    const secretTokenCode = process.env.TOKEN_MY_SECRET
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
            profileFields: [ 'email','name', 'gender' ]

        }, (facbookAccessToken, refreshToken, profile, cb) => {

            // Recherche de l'utilisateur
            MongooseUser.findOne({ email: profile._json.email },  (err, mongodbUser) => {

                // Vérification de la présence d'un utilisateur
                if (mongodbUser){
                    console.log('Login USER');

                    // Hashage du mot de passe
                    const passwordIsValid = bcrypt.compareSync( profile._json.id, mongodbUser.password);
                    
                    // Message d'erreur
                    if (!passwordIsValid){
                        console.log('bad pass')
                        return cb(null, mongodbUser);
                    }

                    // Création du token
                    const userToken = jwt.sign({ id: 'user._id' }, secretTokenCode, {
                        expiresIn: 86400 // expires in 24 hours
                    });

                    // Envoie de la réponse
                    return cb(null, mongodbUser);

                } 
                
                else {
                    console.log('Register USER');

                    // Hashage du mot de passe
                    const hashedPassword = bcrypt.hashSync(profile._json.id, 8);

                    // Création de l'utilisateur
                    MongooseUser.create({
                        firstName : profile._json.first_name,
                        lastName : profile._json.last_name,
                        email : profile._json.email,
                        password : hashedPassword,
                        gender : profile._json.gender,
                        type : "USERfb",
                        tokenFb : facbookAccessToken,
                        facebookId: profile._json.id
                    },

                    // Fonction de callback
                    (err, mongodbUser) => {
                        // Message d'erreur
                        if (err) { console.log(`Problème de requête`) }
                        
                        // Création du token
                        const userToken = jwt.sign({ id: mongodbUser._id }, secretTokenCode, {
                            expiresIn: 86400 // expires in 24 hours
                        });

                        // Envoie de la réponse
                        return cb(null, mongodbUser);
                    });
                    
                }
            });
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