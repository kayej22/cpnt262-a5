const mongoose = require('mongoose');
const express = require('express')
const router = express.Router()
const config = require('../config')
const array = require('../models/image.js')

router.use((req, res, next) => {
  res.locals = config
  next()
});

// route to single page - assist from Aidan 
router.get('/:id', async (req, res, next) => {
  try {
    const image = await Arrays.findOne({id: req.params.id});
    if(image) return res.render("pages/single-image", {
      pageTitle: image.title,
      image: image,
    });
    return next(new Error ('Failed to find image'));
  }catch(err){
    return next(err);
  }
});



module.exports = router;