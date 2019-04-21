// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const passport = require('passport');
const secret = !!process.env.SESSION_SECRET ? process.env.SESSION_SECRET : 'local_secret';
const cookieParser = require('cookie-parser');
const session      = require('express-session');

// Body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// EXPRESS SESSION SUPPORT
app.use(cookieParser());
app.use(session({ secret: secret }));

//PASSPORT
app.use(passport.initialize());
app.use(passport.session());




// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist/final-project')));





// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const port = process.env.PORT || '3200';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);
server.listen( port , () => console.log('Running on port 3200'));

//MongoDB
// var mongoose = require('mongoose');
// var db = mongoose.createConnection('mongodb://localhost:27017/webdev',{useNewUrlParser:true});

var localConnectionString = 'mongodb://localhost:27017/webdev';

var connectionString = 'mongodb://austin:austin1234@ds145356.mlab.com:45356/heroku_slkg0vl4';
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const client = mongoose.connect( localConnectionString, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;
// //Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

require('./assignment/app')(app);
