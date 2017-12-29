const express = require('express');
const app = express();
const port = process.env.PORT || 1337;
const mongoose = require('mongoose');
const Fable = require('./api/models/fableModel'); //created model loading here
const User = require('./api/models/userModel'); //created model loading here
const bodyParser = require('body-parser');
const args = process.argv.slice(2);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cors = require('cors');

// enable cores application wide
app.use(cors());

// Auth
app.use(passport.initialize());
app.use(passport.session());

// use static authenticate method of model in LocalStrategy
passport.use(User.createStrategy());

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Connection
mongoose.Promise = Promise;
let path = args[0] === 'local' ? 'mongodb://localhost/fablesdb' : 'mongodb://mongo/fablesdb';
console.log(path);
mongoose.connect(path, {
  useMongoClient: true,
  promiseLibrary: global.Promise
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const fableRoutes = require('./api/routes/fableRoutes'); //importing route
fableRoutes(app); //register the route

const userRoutes = require('./api/routes/userRoutes'); //importing route
userRoutes(app); //register the route

app.use(function(req, res) {
  res.status(404).send({error: req.originalUrl + ' not found'})
});

app.listen(port);

// Because
const because = require('./because');
because();

console.log('api started on: ' + port);
