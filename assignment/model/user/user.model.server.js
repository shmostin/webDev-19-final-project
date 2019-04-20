var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');

var userModel = mongoose.model('User', userSchema);


userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.updateUserById = updateUserById;
userModel.logout = logout;
userModel.findAllPartsInCart = findAllPartsInCart;
userModel.orderThisPart = orderThisPart;
userModel.removeFromCart = removeFromCart;
userModel.findAllOrdersForUser = findAllOrdersForUser;
userModel.removeOrder = removeOrder;
userModel.findAllFaveStoresForUser = findAllFaveStoresForUser;
userModel.findAllListingsForUser = findAllListingsForUser;

module.exports = userModel;



function createUser(user) {
  console.log('creating user from the model');
  return userModel.create(user)
}

function findUserById(userId) {
  console.log('findUserById from the model');
  return userModel.findById(userId);
}

function updateUserById(userId, user) {
  console.log('updating user from the model');
  return userModel.findByIdAndUpdate(userId, user);
}


function findAllPartsInCart(userId) {
  return userModel.findById(userId).select({"cart": 1, "_id": 0});
}

function orderThisPart(userId, partToOrder) {
  return userModel.findUserById(userId)
    .then(
      function (user) {
        user.orders.push(partToOrder);
        return userModel.updateUserById(userId, user);
      });
}

function removeFromCart(userId, partId) {
  console.log('Deleting part from cart: '+ partId);
  userModel.findOne({_id: userId})
    .then(
      function (foundUser) {
        foundUser.cart.pull({_id: partId});
        return foundUser.save();
      });
}

function findAllOrdersForUser(userId) {
  return userModel.findById(userId).select({"orders": 1, "_id": 0});
}

function removeOrder(userId, partId) {
  console.log('removing order from orders. partId: ' + partId);
  userModel.findOne({_id: userId})
    .then(
      function (foundUser) {
        foundUser.orders.pull({_id: partId});
        return foundUser.save();
      });
}

function findAllFaveStoresForUser(userId) {
  console.log('finding all favorite stores for user: ' + userId);
  return userModel.findById(userId).select({"favStores": 1, "_id": 0});
}

function findAllListingsForUser(userId) {
  console.log('finding all listings for this user: ' + userId);
  return userModel.findById(userId).select({"listings": 1, "_id": 0});
}



