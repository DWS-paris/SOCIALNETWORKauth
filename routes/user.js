/*
Importer les composants de la route
*/
    // Class
    const express = require('express');
    const router = express.Router();
    const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn()
    const logout = require('express-passport-logout');
    const jwt = require('jsonwebtoken');
    const bcrypt = require('bcryptjs');
    const bodyParser = require('body-parser');

    // Middleware
    router.use(bodyParser.urlencoded({ extended: false }));
    router.use(bodyParser.json());
    router.use( (user, req, res, next)  => { res.status(200).send(user) });

    // Modules
    const VerifyToken = require('../models/verify.token');
    const MongooseUser = require('../models/user.mongoose');
    const config = require('../config/token.js');
//

/*
Définition des routes
*/
    // Connecter l'utilisateur
    router.post('/login', (req, res) => {
        // Recherche de l'utilisateur
        MongooseUser.findOne({ email: req.body.email },  (err, user) => {

            // Message d'erreur
            if (err) {
                return res.status(500).send('Error on the server.')
            }

            else if(user){
                // Hashage du mot de passe
                const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

                // Message d'erreur
                if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

                // Création du token
                const token = jwt.sign({ id: user._id }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
                });

                // Envoie de la réponse
                res.status(200).send({ auth: true, token: token });
            }

            else if(!user){
                // Hashage du mot de passe
                const hashedPassword = bcrypt.hashSync(req.body.password, 8);

                // Création de l'utilisateur
                MongooseUser.create({
                    name : req.body.name,
                    email : req.body.email,
                    gender : req.body.gender,
                    password : hashedPassword,
                    type : req.body.type,
                    facebook: {
                        token: req.body.facebook.token,
                        id: req.body.facebook.id,
                        avatar: req.body.facebook.avatar
                    }
                },

                // Fonction de callback
                (err, user) => {
                    // Message d'erreur
                    if (err) return res.status(500).send("There was a problem registering the user.")

                    // Création du token
                    const token = jwt.sign({ id: user._id }, config.secret, {
                        expiresIn: 86400 // expires in 24 hours
                    });

                    // Envoie de la réponse
                    res.status(200).send({ auth: true, token: token });
                }); 
            }
        });
    });
//

/*
Exporter le module de route
*/
    module.exports = router;
//