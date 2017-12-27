'use strict';

const mongoose = require('mongoose');
const Fable = mongoose.model('Fable');
const paginate = require('mongoose-pagination');

/**
 * @api {get} /fable/:locale/:page/:limit Get a paginated list of all Fables
 * @apiName List All Fables
 * @apiGroup Fables
 *
 * @apiParam {String} locale The sites current locale.
 * @apiParam {Int} page The current page.
 * @apiParam {Int} limit The amount to return.
 *
 */
exports.list_all_Fables = function(req, res) {
  Fable.find({}).
  where('locale').equals(req.params.locale).
  paginate(parseInt(req.params.page), parseInt(req.params.limit), function(err, Fables, total) {
    handleError(err, res);
    res.json({
      "fables": Fables,
      "total": total
    });
  });
};

/**
 * @api {post} /fable Create a new Fable
 * @apiName Create a Fable
 * @apiGroup Fables
 *
 * @apiParam {String} name Name of the Fable.
 * @apiParam {String} locale Locale of the Fable.
 *
 */
exports.create_a_Fable = function(req, res) {
  let new_Fable = new Fable(req.body);
  new_Fable.save(function(err, Fable) {
    handleError(err, res);
    res.json(Fable);
  });
};

/**
 * @api {get} /fable/:collectionId Get a Fable
 * @apiName Get a Fable
 * @apiGroup Fables
 *
 * @apiParam {String} collectionId Id of the Fable.
 *
 */
exports.get_a_Fable = function(req, res) {
  Fable.findById(req.params.collectionId, function(err, Fable) {
    handleError(err, res);
    res.json(Fable);
  });
};

/**
 * @api {put} /fable/:collectionId Update a Fable
 * @apiName Update a Fable
 * @apiGroup Fables
 *
 * @apiParam {String} collectionId Id of the Fable.
 *
 */
exports.update_a_Fable = function(req, res) {
  Fable.findOneAndUpdate({_id: req.params.collectionId}, req.body, {new: true}, function(err, Fable) {
    handleError(err, res);
    res.json(Fable);
  });
};

/**
 * @api {delete} /fable/:collectionId Delete a Fable
 * @apiName Delete a Fable
 * @apiGroup Fables
 *
 * @apiParam {String} collectionId Id of the Fable.
 *
 */
exports.delete_a_Fable = function(req, res) {
  Fable.remove({
    _id: req.params.collectionId
  }, function(err, Fable) {
    handleError(err, res);
    res.status(200).json({ message: 'Fable successfully deleted' });
  });
};

/**
 * @api {get} /fable/:collectionId Get a single fables messages
 * @apiName List All Fable Messages
 * @apiGroup Fable Messages
 *
 * @apiParam {collectionId} The collectionId of the message object.
 *
 */
exports.list_all_Fable_Messages = function(req, res) {
  Fable.findById(req.params.collectionId, function(err, Fable) {
    handleError(err, res);
    res.status(200).json(Fable.messages);
  });
};

/**
 * @api {post} /fable/messages/:collectionId Create a Fable Message
 * @apiName Create a Fable Message
 * @apiGroup Fable Messages
 *
 * @apiParam {String} collectionId Id of the Fable.
 *
 */
exports.create_a_Fable_Message = function(req, res) {
  Fable.findById(req.params.collectionId, function (err, fable) {
    handleError(err, res);
    fable.messages.push({ messageType: 'text', body: req.body.messages, date: new Date() });
    fable.save(function(err){
      handleError(err, res);
      res.status(200).json({ message: 'Fable Message successfully created.' });
    });
  })
};

/**
 * @api {put} /fable/messages/:collectionId/:messageId Update a Fable Message
 * @apiName Update a Fable Message
 * @apiGroup Fable Messages
 *
 * @apiParam {String} collectionId Id of the Fable.
 * @apiParam {String} messageId Id of the Message.
 *
 */
exports.update_a_Fable_Message = function(req, res) {
  Fable.findById(req.params.collectionId, function(err, fable) {
    let subDoc = fable.messages.id(req.params.messageId);
    subDoc.set({
      "body": req.body.messages
    });
    fable.save(function(err){
      handleError(err, res);
      res.status(200).json({ message: 'Fable Message successfully updated.' });
    });
  });
};

/**
 * @api {delete} /fable/messages/:collectionId/:messageId Delete a Fable Message
 * @apiName Delete a Fable Message
 * @apiGroup Fable Messages
 *
 * @apiParam {String} collectionId Id of the Fable.
 * @apiParam {String} messageId Id of the Message.
 *
 */
exports.delete_a_Fable_Message = function(req, res) {
  Fable.findById(req.params.collectionId, function(err, fable) {
    let subDoc = fable.messages.id(req.params.messageId).remove();
    fable.save(function(err){
      handleError(err, res);
      res.status(200).json({ message: 'Fable Message successfully deleted.' });
    });
  });
};

/* Helpers
------------------------*/

function handleError(err, res){
  if (err) {
    res.status(500).send(err);
  }
}
