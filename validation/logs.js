const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLogsInput(data) {
  let errors = {};

  data.base = !isEmpty(data.base) ? data.base : '';
  data.pair = !isEmpty(data.pair) ? data.pair : '';
  data.quantity = !isEmpty(data.quantity) ? data.quantity : '';
  data.buyPrice = !isEmpty(data.buyPrice) ? data.buyPrice : '';
  data.sellPrice = !isEmpty(data.sellPrice) ? data.sellPrice : '';

  if(Validator.isEmpty(data.base)) {
    errors.base = 'Base field is required';
  }

  if(Validator.isEmpty(data.pair)) {
    errors.pair = 'Pair field is required';
  }

  if(data.quantity.length > 0 && !Validator.isNumberic(data.quantity, {no_symbols: false})) {
    errors.quantity = 'Must be a numeric value';
  }

  if(Validator.isEmpty(data.quantity)) {
    errors.quantity = 'Quantity field is required';
  }
 
  if(data.buyPrice.length > 0 && !Validator.isNumeric(data.buyPrice, {no_symbols: false})) {
    errors.buyPrice = 'Must be a numeric value';
  }

  if(data.sellPrice.length > 0 && !Validator.isNumeric(data.sellPrice, {no_symbols: false})) {
    errors.sellPrice = 'Must be a numeric value';
  }

    return {
      errors, 
      isValid: isEmpty(errors)
    }
  
} 