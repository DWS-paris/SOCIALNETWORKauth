/*
Import des composants du serveur
*/
  // Interfaces
  const express = require('express');
  const passport = require('passport');
  const path = require('path');
  const dotenv = require('dotenv').config();
  const cors = require('cors')

  // Modules
  const frontRoute = require('./routes/front');
  const authRoute = require('./routes/auth');
  const userRoute = require('./routes/user');
//



/*
Configuration du serveur
*/
  // Création du serveur Express
  var app = express();
  const port = process.env.PORT;

  // Configuration des CORS
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  // Définition du dossier static
  app.set( 'views', __dirname + '/www-ejs' );
  app.use( express.static(path.join(__dirname, 'www-ejs')) );

  // Définition du moteur de rendu
  // app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'ejs');

  // Configuration des middleware
  app.use(require('cookie-parser')());
  // app.use(require('body-parser').urlencoded({ extended: true }));
  app.use(require('express-session')({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());


  // Définition des routes
  app.use('/', frontRoute);
  app.use('/auth', authRoute);
  app.use('/user', userRoute);
// 



/*
Lancer le serveur
*/ 
    app.listen( port, () => console.log(`Le serveur est lancé sur le port ${port}`) );
//