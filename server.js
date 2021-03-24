const mongoose = require('mongoose');

const path = require('path');
const express = require('express');
const ejs = require('ejs')
const index = require('./routes/image');
const images = require('./routes/image');
require ('dotenv').config();


// importing the model
const Image = require('./models/image.js')


// express app
const app = express();
// EJS view engine
app.set('view engine', 'ejs')

// Site info
app.use((req, res, next) => {
  res.locals = {
    siteTitle: 'Kaye Creative',
    tagline: 'Creative solutions',
    copyright: 'Joel Kaye. MIT License'
  }
  next()
})

// joins pages? research answer
app.use(express.static(path.join(__dirname,'public')))

// accessing database
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


// JSON -index page
app.get('/', (req, res) => {
  res.render('pages/index');
})


// JSON Array-> 
app.get('/api/v0/image', (req, res) => {
  image.find({},(err, data) => {
    if (err) {
      res.sendStatus(404)
    }
    else {
      res.json(data);
    }
  });
});

// Return JSON based on id 
app.get('/api/v0/image/:id',(req,res) => {
  image.findOne({id: indexId}, (err, data) => {
    if (err || data===null) {
      res.send('Image does not exist');
      console.log(err);
    }
    else {
      res.json(data);
    }
  });
});


// 404 
app.use(function(req, res) {
  res.status(404);
  res.send('Sorry bro: 404 page not found');
});

// port
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}.`)
})


