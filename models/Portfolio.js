const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  coin: {
     type: String,
     required: true
   },
   holdings: {
     type: String,
     required: true
   }
});

module.exports = Portfolio = mongoose.model('portfolio', PortfolioSchema);