import axios from 'axios';
import { GET_LOGS, ADD_ENTRY, DELETE_ENTRY, GET_ERRORS } from './types';

export const getLogs = () => dispatch => {
  axios
    .get('/api/logs')
    .then(res =>
      dispatch({
        type: GET_LOGS,
        payload: res.data
      })
    )
}

export const addEntry = (entry) => dispatch => {
  axios
    .post('/api/logs', entry)
    .then(res => 
      dispatch({
        type: ADD_ENTRY,
        payload: res.data
      }))
      .catch(err => 
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      )
}

export const deleteEntry = id => dispatch => {
  axios
    .delete(`/api/logs/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_ENTRY,
        payload: id
      })
    )
}