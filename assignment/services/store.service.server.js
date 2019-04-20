module.exports = function(app) {

  const storeModel = require('../model/store/store.model.server');

  //restful api paths
  app.get("/api/store/:storeid", findAllPartsByStoreId);


  function findAllPartsByStoreId(req, res) {
    var storeId = req.params['storeid'];

    return storeModel.findAllPartsByStoreId(storeId)
      .then(
        function (foundParts) {
          console.log('found parts for the store');
          res.status(200).json(foundParts);
        }, function (err) {
          console.log('problem finding parts for this store: ' + err);
          res.status(400);
        });
  }
}
