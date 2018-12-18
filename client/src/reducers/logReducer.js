import { GET_LOGS, ADD_ENTRY, DELETE_ENTRY} from '../actions/types';

const initialState = {
  logs: []
} 

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
      };
    case ADD_ENTRY:
      return {
        ...state,
        logs: [...state.logs, action.payload]
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