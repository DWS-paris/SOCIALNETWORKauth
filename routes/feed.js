/*
Importer les composants de la route
*/
    // Class
    const express = require('express');
    const router = express.Router();
    const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
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
    const MongooseFeed = require('../models/feed.mongoose');
    const config = require('../config/token.js');
//

/*
Définition des routes
*/
    // Fonction Get All
    router.get('/all', VerifyToken, (req, res, next) => {
        // Recherche de l'utilisateur
        MongooseFeed.find((err, feeds) => {

            // Message d'erreur
            if (err) return res.status(500).send("There was a problem finding the feeds.");
            if (!feeds) return res.status(404).send("No feeds found.");
            
            // Envoie de la réponse
            res.status(200).send(feeds);
        });
    });

    // Fonction Get All
    router.post('/add', VerifyToken, (req, res, next) => {
        
        // Création de l'utilisateur
        MongooseFeed.create({
            content: req.body.content,
            date: new Date(),
            author: {
                _id: req.body.author._id,
                name: req.body.author.name,
                avatar: req.body.author.avatar
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
    });
//

/*
Exporter le module de route
*/
    module.exports = router;
//