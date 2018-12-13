import axios from 'axios';
import { FETCH_CHARTS, ADD_CHART, DELETE_CHART, CHARTS_LOADING, GET_ERRORS } from './types';


export const fetchCharts = () => dispatch => {
  dispatch(setChartsLoading());
  axios
    .get('/api/charts')
    .then(res => 
      dispatch({
        type: FETCH_CHARTS,
        payload: res.data
      })
    )
}

export const addChart = chart => dispatch => {
  axios
    .post('/api/charts', chart)
    .then(res => 
      dispatch({
        type: ADD_CHART,
        payload: res.data
      }))
      .catch(err => 
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      )
 
}

export const deleteChart = id => dispatch => {
  axios
    .delete(`/api/charts/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_CHART,
        payload: id
      })
  )
}


export const setChartsLoading = () => {
  return {
    type: CHARTS_LOADING
  }
}