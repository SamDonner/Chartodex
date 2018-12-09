import { combineReducers } from 'redux';
import ChartReducer from './chartReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  auth: authReducer,
  chart: ChartReducer,
  errors: errorReducer
});