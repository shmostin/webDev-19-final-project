
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  favStores: [{type: mongoose.Schema.Types.ObjectId, ref: 'Store'}],
  myStore: {type: mongoose.Schema.Types.ObjectId, ref:'Store'},
  cart: [{type: mongoose.Schema.Types.ObjectId, ref: 'Part'}],
  orders: [{type: mongoose.Schema.Types.ObjectId, ref: 'Part'}],
  listings: [{type: mongoose.Schema.Types.ObjectId, ref: 'Part'}],
  dateCreate: {type: Date, default: Date.now()},

  facebook: {
    id: String,
    token: String
  }
}, {collection: 'Users'});

module.exports = userSchema;
