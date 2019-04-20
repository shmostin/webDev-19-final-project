
var mongoose = require('mongoose');

var partSchema = new mongoose.Schema({
  name: String,
  partId: String,
  description: String,
  price: Number

}, {collection: 'Parts'});

module.exports = partSchema;
