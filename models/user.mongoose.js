/*
Import du composant Mongoose
*/
const mongoose = require('mongoose');  

// 

/*
Création du model
*/
  // Création du Schema
  const UserSchema = new mongoose.Schema({  
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    gender: String,
    type: String
  });

  // Création du model Mongoose
  mongoose.model('User', UserSchema);
// 

/*
Export du model
*/
  module.exports = mongoose.model('User');
// 