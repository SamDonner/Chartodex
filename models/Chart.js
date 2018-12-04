const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChartSchema = new Schema({
   base: {
     type: String,
     required: true
   },
   pair: {
     type: String,
     required: true
   },
   pairing: {
     type: String
   }

});

module.exports = Chart = mongoose.model('chart', ChartSchema);