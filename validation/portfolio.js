const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePortfolioInput(data) {
  let errors = {};

  data.coin = !isEmpty(data.coin) ? data.coin : '';
  data.holdings = !isEmpty(data.holdings) ? data.holdings : '';

  if(Validator.isEmpty(data.coin)) {
    errors.coin = 'Coin field is required';
  }

  if(Validator.isEmpty(data.holdings)) {
    errors.holdings = 'Quantity field is required';
  }

  if(data.holdings.length > 0 && !Validator.isInt(data.holdings, {no_symbols: false})) {
    errors.holdings = 'Must be a numeric value';
  }

  return {
    errors, 
    isValid: isEmpty(errors)
  }
}