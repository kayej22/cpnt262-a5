const mongoose = require('./_connection.js')
const dotenv = require('dotenv').config();

// Import seed
const dbSeed = require (`./seeds/images.js`)


// Define model
const Image = require(`./models/image.js`);


// closing connection
Image.insertMany(dbSeed, function(err, image) {
  console.log('Data import completed.')
  mongoose.connection.close();
});