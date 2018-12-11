const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLogsInput(data) {
  let errors = {};

  data.base = !isEmpty(data.base) ? data.base : '';
  data.pair = !isEmpty(data.pair) ? data.pair : '';
  data.quantity = !isEmpty(data.pair) ? data.pair : '';

  if(Validator.isEmpty(data.base)) {
    errors.base = 'Base field is required';
  }

  if(Validator.isEmpty(data.pair)) {
    errors.pair = 'Pair field is required';
  }

  if(Validator.isEmpty(data.quantity)) {
    errors.pair = 'Quantity field is required';
  }

    return {
      errors, 
      isValid: isEmpty(errors)
    }
  
} 