
module.exports = function(app) {

  //PASSPORT
  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var bcrypt = require('bcrypt-nodejs');

  const userModel = require('../model/user/user.model.server');


  //restful api

  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/user', createUser);
  app.get('/api/user/:uid', findUserById);
  app.put('/api/user/:uid', updateUserById);
  app.post('/api/register', register);
  app.get('/api/loggedIn', loggedIn);
  app.post('/api/logout', logout);
  app.get('/api/user/:uid/getParts', findAllPartsInCart);
  app.post('/api/user/:uid/orderParts', orderThisPart);
  app.delete('/api/deleteItem/:partId', removeFromCart);
  app.get('/api/user/:uid/orders', findAllOrdersForUser);
  app.delete('/api/user/:uid/order/:partId', removeOrder);
  app.get('/api/stores/:uid', findAllFaveStoresForUser);
  app.get('/api/listings/:uid', findAllListingsForUser)


  passport.serializeUser(serializeUser);

  function serializeUser(user, done) {
    return done(null, user);
  }

  passport.deserializeUser(deserializeUser);

  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function (user) {
          done(null, user);
        },
        function (err) {
          done(err, null);
        });
  }

  //IMPLEMENT LOCAL STRATEGY
  passport.use(new LocalStrategy(localStrategy));

  function localStrategy(username, password, done) {
    console.log('CALLING LOCAL STRATEGY FOR LOGIN');
    userModel.findUserByUserName(username).then(
      function (user) {
        if (user && bcrypt.compareSync(password, user.password)) {
          console.log('password valid!');
          return done(null, user);
        } else {
          console.log('password failed.');
          return done(null, false);
        }
      }, function (err){
        console.log('err is ' + err);
        return done(err);
      });
  }

  function login(req, res) {
    console.log('server side login called');
    var user = req.user;
    res.json(user);
  }

  function loggedIn(req, res) {
    console.log('server side loggedIn called');
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function logout(req, res) {
    console.log('Server side logout() called');
    req.logOut();
    res.status(200).send({});
  }


  function register(req, res) {
    //grab the username and password
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    return userModel.createUser(user)
      .then(
        function (user) {
          //if a user is found go to login
          if (user) {
            req.login(user, function (err) {
              if (err) {
                res.status(400).send(err);
              } else {
                //otherwise create the user on the db
                res.json(user);
              }
            });
          }
        });
  }

  function createUser(req, res){
    var newuser = req.body;
    // console.log('newUser from the req body: ' + newuser);
    userModel.createUser(newuser).
    then(function(user){
      res.send(user);

    }, function(error){
      console.log("create user error:" + error);
      res.status(400);

    });
  }

  function findUserById(req, res){
    var userId = req.params['uid'];
    console.log("userId that was found in the req params: " + userId);

    userModel.findUserById(userId).exec(
      function (err,user) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(user);
      });
  }

  function updateUserById(req, res){
    var userId = req.params['uid'];
    var user = req.body;

    console.log(req.body);
    console.log("update user: " + userId + " " + user.firstName + " " + user.lastName);

    userModel.updateUser(userId, user)
      .exec(
        function (err, user) {
          if (err) {
            return res.sendStatus(400).send(err);
          }
          return res.status(200).send(user);
        });
  }

  function findAllPartsInCart(req, res) {
    var userId = req.params['uid'];

    userModel.findAllPartsInCart(userId)
      .then(
        function (partsFound) {
          console.log('parts were found!');
          res.status(200).json(partsFound);
        }, function (err) {
          console.log('ERROR trying to find parts: ' + err);
          res.status(400);
        });
  }

  function orderThisPart(req, res) {
    var userId = req.params['uid'];
    var partToOrder = req.body;

    userModel.orderTheseParts(userId, partToOrder)
      .then(
        function (user) {
          res.send(user);
        }, function (error) {
          console.log('couldnt add parts to order: ' + error);

        });
  }


  function removeFromCart(req, res) {
    var userId = req.body;
    var partId = req.params['partid'];

    userModel.removeFromCart(userId, partId)
      .then(
        function (user) {
          res.send(user);
        }, function (error) {
          console.log('could not delete from cart: ' + error);
        });
  }


  function findAllOrdersForUser(req, res) {
    var userId = req.params['uid'];

    userModel.findAllOrdersForUser(userId)
      .then(
        function (ordersFound) {
          console.log('Orders were found for this id');
          res.status(200).json(ordersFound);
        }, function (err) {
          console.log('ERROR finding orders for user: ' + err);
          res.status(400);
        });
  }


  function removeOrder(req, res) {
    var partId = req.params['partid'];
    var userId = req.params['uid'];

    userModel.removeOrder(userId, partId)
      .exec(
        function (err, part) {
          if (err) {
            return res.status(400).send(err);
          } else {
            return res.status(200).send(part);
          }
        });
  }

  function findAllFaveStoresForUser(req, res) {
    var userId = req.params['uid'];

    userModel.findAllFaveStoresForUser(userId)
      .then(
        function (favoriteStores) {
          console.log('Favorite stores were found for this id');
          res.status(200).json(favoriteStores);
        }, function (err) {
          console.log('Error finding favorite stores: ' + err);
          res.status(400);
        });
  }


  function findAllListingsForUser(req, res) {
    var userId = req.params['uid'];

    userModel.findAllListingsForUser(userId)
      .then(
        function (listings) {
          console.log('Listings were found for this id');
          res.status(200).json(listings);
        }, function (err) {
          console.log('Error finding listings: ' + err);
          res.status(400);
        });
  }

}
