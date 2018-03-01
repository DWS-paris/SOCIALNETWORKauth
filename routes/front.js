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
        res.render('index', { user: req.user });
    });

    router.get( '/login', (req, res) => {
        // Envoyer la vue index
        res.render('index', { user: req.user });
    });
//

/*
Exporter le module de route
*/
    module.exports = router;
//