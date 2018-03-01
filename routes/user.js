/*
Importer les composants de la route
*/
    const express = require('express');
    const router = express.Router();
    const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn()
    const logout = require('express-passport-logout');
//

/*
Définition des routes
*/
    router.get('/me', ensureLoggedIn, (req, res) => {
      res.render('profile', { user: req.user });
    });

    router.get('/logout', (req, res) => {
        // Supprimer l'utilisateur
        req.logout()
        // Envoyer la vue index
        res.render('home', { user: req.user });
    });
//

/*
Exporter le module de route
*/
    module.exports = router;
//