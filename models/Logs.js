const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  date: {
     type: Date,
     default: Date.now
   },
   base: {
     type: String,
     required: true
   },
   pair: {
     type: String,
     required: true
   },
   quantity: {
    type: String,
    required: true
  },
  buyPrice: {
    type: String,
    default: 0
  },
  sellPrice: {
    type: String,
    default: 0
  }


});

module.exports = Log = mongoose.model('logs', LogSchema);