/*
Importer les composants de la route
*/
    const express = require('express');
    const router = express.Router();
//

/*
Définition des routes
*/
    router.get( '/', (req, res) => {
        // Envoyer la vue index
        console.log(`INDEX user : `, req.user)
        res.render('index', { user: req.user });
    });

    router.get( '/connexion', (req, res) => {
        // Envoyer la vue index
        res.render('login', { user: req.user });
    });
//

/*
Exporter le module de route
*/
    module.exports = router;
//