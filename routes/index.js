const express = require('express')
const router = express.Router()
const api = require('./api/v0')
const config = require('../config')
const Image = require('../models/image')




// route handler to home page that renders index.ejs
router.get('/', (req, res) => {
  res.render('pages/index', {pageTitle:"Index"});
  
})

// route handler to single page
router.get('/images/:id', async(req, res, next) =>{
  try {
    const image = await Image.findOne({id: req.params.id})
    if(image) return res.render('pages/single-image',{image})
    return next(new Error("Couldn't find image"))
  } catch(err) {
    return next(err)
  }
})

// route handler to home page that renders another page
router.get('/login', (req, res) => {
  res.render('pages/login', {pageTitle:"Login"});
})

// route handler to home page that renders another page
router.get('/register', (req, res) => {
  res.render('pages/register', {pageTitle:"Register"});
})

// api
router.use('/api/v0/', api);

module.exports = router