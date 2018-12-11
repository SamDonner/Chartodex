import { FETCH_CHARTS, ADD_CHART, DELETE_CHART, CHARTS_LOADING } from '../actions/types';

const initialState = {
  charts: [],
  loading: false
} 

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARTS:
      return {
        ...state,
        charts: action.payload,
        loading: false
      };
    case ADD_CHART:
      return {
        ...state,
        charts: [...state.charts, action.payload]
      }
    case DELETE_CHART:
      return {
        ...state,
        charts: state.charts.filter(chart => chart._id !== action.payload)
      }
    case CHARTS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}