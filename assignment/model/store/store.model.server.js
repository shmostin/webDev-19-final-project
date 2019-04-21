var mongoose = require('mongoose');
var storeSchema = require('./store.schema.server');

var storeModel = mongoose.model('Store', storeSchema);

storeModel.findAllPartsByStoreId = findAllPartsByStoreId;
storeModel.getAllStores = getAllStores;

module.exports = storeModel;

function getAllStores() {
  console.log('getting all stores from the store model');
  return storeModel.find();
}

function findAllPartsByStoreId(storeId) {
  console.log('findAllPartsByStore in the store model');
  return storeModel.find({_id: storeId}).select({"parts": 1, "_id": 0});
}
