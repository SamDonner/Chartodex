import { GET_LOGS, ADD_ENTRY, DELETE_ENTRY, LOG_LOADING} from '../actions/types';

const initialState = {
  logs: []
} 

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      };
    case ADD_ENTRY:
      return {
        ...state,
        logs: [...state.logs, action.payload]
      }
    case LOG_LOADING:
      return {
        ...state,
        loading: true
      }
    case DELETE_ENTRY:
      return {
        ...state,
        logs: state.logs.filter(entry => entry._id !== action.payload)
      }
    default:
      return state;

  }
}