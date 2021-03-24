const mongoose = require('mongoose')
const dotenv = require('dotenv').config();

// Import seed
const seed = require (`./seeds/images.js`)


// Define model
const Image = require(`./models/image.js`);

// Mongoose/DB connection
mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

var db = mongoose.connection;

db.on('error', function(error){
  console.log(`Connection Error:${error.message}`)
});

db.once('open', function() {
  console.log('Connected to database...');
});


// closing connection
array.insertMany(seed, function(err, Image) {
  console.log('Data import completed.')
  mongoose.connection.close();
});