/*
Import des composants du serveur
*/
  // Interfaces
  const express = require('express');
  const passport = require('passport');
  const path = require('path');
  const dotenv = require('dotenv').config();
  const mongoose = require('mongoose');

  // Modules
  const frontRoute = require('./routes/front');
  const authRoute = require('./routes/auth');
  const userRoute = require('./routes/user');
  const bodyParser = require('body-parser');
  const cookieParser = require('cookie-parser');
  const expressSession = require('express-session');
//



/*
Configuration du serveur
*/
  // Création du serveur Express
  const server = express();
  const port = process.env.PORT;
  const dbHost = process.env.MONGO_HOST;


  // Définition du dossier static
  server.set( 'views', __dirname + '/www-ejs' );
  server.use( express.static(path.join(__dirname, 'www-ejs')) );

  // Définition du moteur de rendu
  // server.engine('html', require('ejs').renderFile);
  server.set('view engine', 'ejs');

  // Connexion à MongoDB
  // Base de données
  

  // Configuration des middleware
  server.use(cookieParser());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(expressSession({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
  server.use(passport.initialize());
  server.use(passport.session());


  // Définition des routes
  server.use('/', frontRoute);
  server.use('/auth', authRoute);
  server.use('/user', userRoute);
// 



/*
Activer le serveur
*/ 
  // Connecter la base MongoDB
  mongoose.connect(dbHost, () => {
    console.log(`MongoDB connecté à l'adresse ${dbHost}`)

    // Lancer le serveur
    server.listen( port, () => console.log(`Serveur lancé sur le port ${port}`) );
  });
  
//