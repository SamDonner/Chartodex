import { combineReducers } from 'redux';
import chartReducer from './chartReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import logReducer from './logReducer';

export default combineReducers({
  auth: authReducer,
  chart: chartReducer,
  errors: errorReducer,
  log: logReducer
});