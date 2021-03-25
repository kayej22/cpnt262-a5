const mongoose = require('./_connection');

const path = require('path');
const express = require('express');
const index = require('./routes')
require ('dotenv').config();


// importing the model
const Image = require('./models/image.js')
const config = require('./config')

// express app
const app = express();

// EJS view engine
app.set('view engine', 'ejs')

app.use('/', (req, res, next) => {
  res.locals = config
  next()
})

// middleware
app.use(express.static(path.join(__dirname,'public')))


// route
app.use('/', index)


// 404 page
app.use((req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname,'pages/error'));
});

// Error for middleware handling from Vitaly. Tried to figure out on my own. Needed the assist. 
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  const errStatus = err.status || 500;
  res.locals.status = errStatus;
  res.status(errStatus);
  res.render('pages/error', {pageTitle: errStatus, errCode: errStatus});
});




// port
const PORT = process.env.PORT || 3000
const HOST = process.env.HOST;

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}.`)
})


