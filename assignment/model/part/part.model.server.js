import * as userModel from "../user/user.model.server";

var mongoose = require('mongoose');
var partSchema = require('./part.schema.server');

var partModel = mongoose.model('Part', partSchema);

partModel.addPartToCart = addPartToCart;
partModel.findPartById = findPartById;
partModel.updatePart = updatePart;
partModel.deletePart = deletePart;
partModel.createPart = createPart;


module.exports.partModel;


function createPart(userId, storeId, part) {
  console.log('creating new part for users store');
  return partModel.create(part)
    .then(
      function (responsePart) {
        userModel.findUserById(userId)
          .then(
            function (foundUser) {
              foundUser.listings.push(responsePart)
              return foundUser.save();
            });
        return responsePart;
      });
}
// function deletePart(partId) {
//   console.log('removing part from parts. partId: ' + partId);
//   partModel.findOne({_id: partId})
//     .then(
//       function (foundPart) {
//         userModel.find
//       });
// }
