'use strict';
const expressJwt = require('express-jwt');
const constants = require('../../const');
const authenticate = expressJwt({secret : constants.jwtSecret});

module.exports = function(app) {
  const fableList = require('../controllers/fablesController');

  // Creation / Viewing Fable
  app.route('/fable/:locale/:page/:limit')
    .get(fableList.list_all_Fables)
    .post(authenticate, fableList.create_a_Fable);

  // Updating / Deletion of parent Fable
  app.route('/fable/:collectionId')
    .get(fableList.get_a_Fable)
    .put(authenticate, fableList.update_a_Fable)
    .delete(authenticate, fableList.delete_a_Fable);

  // Management of Fable Messages
  app.route('/fable/messages/:collectionId')
    .get(fableList.list_all_Fable_Messages)
    .post(authenticate, fableList.create_a_Fable_Message);

  app.route('/fable/messages/:collectionId/:messageId')
    .put(authenticate, fableList.update_a_Fable_Message)
    .delete(authenticate, fableList.delete_a_Fable_Message);
};
