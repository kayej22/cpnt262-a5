const mongoose = require('mongoose');

const imagesSchema = new mongoose.Schema(
  {
    id:           Number,
    title:        String,
    description:  String,
    width:        String,
    height:       String,
    pathURL:      String,
  }
);

module.exports = mongoose.model('Images', imagesSchema);



