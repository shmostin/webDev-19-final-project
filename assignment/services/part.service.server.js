module.exports = function(app) {

  const partModel = require('../model/part/part.model.server');

  app.post('/api/user/:uid', addPartToCart);
  app.get('/api/store/:storeid/part/:partid/listing', findPartById);
  app.put('/api/store/:storeid/part/:partid/edit', updatePart);
  app.delete('/api/part/:partid', deletePart);



  function deletePart(req, res) {
    var partId = req.params['partid'];

    partModel.deletePart(partId).exec(
      function (err, part) {
        if (err) {
          return res.status(400).send(err);
        } else {
          return res.status(200).send(part);
        }
      });
  }

  function updatePart(req, res) {
    var storeId = req.params['storeid'];
    var partId = req.params['partid'];
    var part = req.body;


    partModel.updatePart(storeId, part)
      .exec(
        function (err, part) {
          if (err) {
            return res.status(400).send('ERROR: ' + err);
          }
          return res.status(200).send(part);
        });
  }

  function findPartById(req, res) {
    var storeId = req.params['storeid'];
    var partId = req.params['partid'];

    return partModel.findPartbyId(storeId, partId)
      .then(
        function (foundPart) {
          console.log('The part was found!');
          res.status(200).send(foundPart);
        }, function (err) {
          console.log('Error finding the part from the store: ' + err);
          res.status(400);
        });
  }

  function addPartToCart(req, res) {
    var userId = req.params['uid'];

    return partModel.addPartToCart(userId)
      .then(
        function (user) {
          res.send(user);
        }, function (error) {
          console.log('couldnt add parts to cart: ' + error);
        });
  }


}
