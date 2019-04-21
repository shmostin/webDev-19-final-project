
var mongoose = require('mongoose');

var storeSchema = new mongoose.Schema({
  name: String,
  parts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Part'}],

}, {collection: 'Stores'});

module.exports = storeSchema;
