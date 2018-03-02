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
    name: String,
    email: String,
    password: String,
    gender: String,
    type: String,
    facebook: {
      token: String,
      id: String,
      avatar: String
    }
  });

  // Création du model Mongoose
  mongoose.model('User', UserSchema);
// 

/*
Export du model
*/
  module.exports = mongoose.model('User');
// 