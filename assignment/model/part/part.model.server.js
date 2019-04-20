var mongoose = require('mongoose');
var partSchema = require('./part.schema.server');

var partModel = mongoose.model('Part', partSchema);

partModel.addPartToCart = addPartToCart;
partModel.findPartById = findPartById;
partModel.updatePart = updatePart;
partModel.deletePart = deletePart;


module.exports.partModel;


// function deletePart(partId) {
//   console.log('removing part from parts. partId: ' + partId);
//   partModel.findOne({_id: partId})
//     .then(
//       function (foundPart) {
//         userModel.find
//       });
// }
