/*
Import des composants
*/
    const jwt = require('jsonwebtoken');
    const config = require('../config/token');
// 


/*
Fonction du model
*/
    const verifyToken = (req, res, next) => {
    // Récupération du token
    const token = req.headers['x-access-token'];
    
    // Message d'erreur
    if (!token) return res.status(407).send({
        response: false,
        status: 407,
        content: `L'authentification nécessite un token`
    });

    // Vérification du token
    jwt.verify(token, config.secret, (err, decoded) => {
        // Message d'erreur
        if (err) return res.status(403).send({
            response: false,
            status: 403,
            content: `L'authentification est refusée pour ce token`
        });

        // Envoie de la réponse
        req.userId = decoded.id;
        next();
    });
    }
// 


/*
Export du model
*/
module.exports = verifyToken;
// 