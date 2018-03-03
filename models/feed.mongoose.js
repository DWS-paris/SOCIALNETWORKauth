/*
Import du composant Mongoose
*/
    const mongoose = require('mongoose');  
// 



/*
Création du model
*/
  // Création du Schema
  const FeedSchema = new mongoose.Schema({  
    content: String,
    date: Date,
    author: {
        _id: String,
        name: String
    }
  });

  // Création du model Mongoose
  mongoose.model('Feed', FeedSchema);
// 



/*
Export du model
*/
  module.exports = mongoose.model('Feed');
// 