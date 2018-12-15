import { GET_PORTFOLIO, ADD_COIN, DELETE_COIN, PORTFOLIO_LOADING } from '../actions/types';

const initialState = {
  coins: [],
  portfolio: []
} 

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_PORTFOLIO:
      return {
        ...state,
        portfolio: action.payload,
      };
    case ADD_COIN:
      return {
        ...state,
        coins: [...state.coins, action.payload]
      }
    case DELETE_COIN:
      return {
        ...state,
        coins: state.coins.filter(coin => coin._id !== action.payload),
        portfolio: state.portfolio.filter(coin => coin._id !== action.payload)

      }
    default:
      return state;
  }
}