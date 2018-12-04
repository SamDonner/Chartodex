import { combineReducers } from 'redux';
import ChartReducer from './chartReducer';

export default combineReducers({
  chart: ChartReducer
});