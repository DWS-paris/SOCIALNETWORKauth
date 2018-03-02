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
    router.get( '/', (req, res) => {
        // Envoyer la vue index
        res.render('index');
    });

    router.get( '/dashboard', ensureLoggedIn, (req, res) => {
        // Envoyer la vue index
        res.render('index');
    });

    router.get( '/login', (req, res) => {
        // Envoyer la vue index
        res.redirect('/');
    });
//

/*
Exporter le module de route
*/
    module.exports = router;
//