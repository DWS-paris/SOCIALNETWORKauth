/*
Importer les composants de la route
*/
    const express = require('express');
    const router = express.Router();
    const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
//

/*
Définition des routes
*/
    router.get( ['/', '/login', '/profile'], (req, res) => {
        // Envoyer la vue index
        res.render('index');
    });

    router.get( '/dashboard', ensureLoggedIn, (req, res) => {
        // Envoyer la vue index
        res.render('index');
    });
//

/*
Exporter le module de route
*/
    module.exports = router;
//