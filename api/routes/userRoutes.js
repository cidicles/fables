'use strict';
const passport = require('passport');

module.exports = function(app) {
  const userList = require('../controllers/userController');

  // Creation
  app.route('/user')
    .post(userList.create_new_User);

  // Login
  app.route('/user/login')
    .post(passport.authenticate('local'), userList.login);

  // Logout
  app.route('/user/logout')
    .post(userList.logout);

};
