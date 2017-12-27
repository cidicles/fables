'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const constants = require('../../const');

/**
 * @api {post} /user Create New User
 * @apiName Create New User
 * @apiGroup User
 *
 * @apiParam {String} username Desired username (unique)
 * @apiParam {String} password Desired password
 *
 */
exports.create_new_User = function(req, res) {
  User.register(new User({username: req.body.username}), req.body.password, function(err) {
    handleError(err, res);
    if(!err){
      res.json({ message: 'User successfully registered.' });
    }
  });
};

/**
 * @api {post} /user/login Logs a User In
 * @apiName Logs a User In
 * @apiGroup User
 *
 */
exports.login = function(req, res, next) {
  let token = jwt.sign(req.user.username, constants.jwtSecret);
  res.status(200).json({
    user: req.user,
    token: token
  });
};

/**
 * @api {post} /user/logout Logs a User Out
 * @apiName Logs a User Out
 * @apiGroup User
 *
 */
exports.logout = function(req, res) {
  req.logout();
  res.status(200).json({ message: 'User successfully logged out.' });
};

/* Helpers
------------------------*/

function handleError(err, res){
  if (err) {
    return res.status(500).send(err);
  }
}
