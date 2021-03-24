const express = require('express')
const router = express.Router()

const Image = require('../../models/image.js')


// route handler to home page that renders index.ejs
router.get('/images', async (req, res, next) => {
  try {
    const gallery = await Image.find({});
    if (gallery) return res.json(gallery);
    return next(new Error('No Images to be found'));
  } catch(err){
    return next(err);
  }
})


module.exports = router