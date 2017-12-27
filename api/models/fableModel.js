'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const locales = ['en_us'];
const messageTypes = ['text','image','video'];

const Fable = new Schema({
  name: {
    type: String,
    required: 'Please enter the name of the Fable'
  },
  creator: {
    type: String,
    required: 'Please enter the creator of the Fable'
  },
  messages: [{
    messageType: [{
      type: String,
      enum: messageTypes
    }],
    body: String,
    date: {
      type: Date,
      default: Date.now
    }
  }],
  created_date: {
    type: Date,
    default: Date.now
  },
  locale: {
    type: [{
      type: String,
      enum: locales
    }],
    default: ['en_us'],
    required: 'Please enter the locale of the Fable'
  }
}, {
  usePushEach: true
});

module.exports = mongoose.model('Fable', Fable);
