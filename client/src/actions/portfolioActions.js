import axios from 'axios';
import { GET_PORTFOLIO, ADD_COIN, DELETE_COIN, GET_ERRORS, PORTFOLIO_LOADING } from './types';

export const getPortfolio = () => dispatch => {
  axios.get('/api/portfolio')
    .then(res => {
      dispatch({
        type: GET_PORTFOLIO,
        payload: res.data
      })
    })
} 

export const addCoin = coin => dispatch => {
  axios
    .post('/api/portfolio', coin)
    .then(res => 
      dispatch({
        type: ADD_COIN,
        payload: res.data
      }))
      .catch(err => {
        console.log(err)
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      }
      )
 
}

export const deleteCoin = id => dispatch => {
  axios
    .delete(`/api/portfolio/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_COIN,
        payload: id
      })
  )
}

export const setPortfolioLoading = () => {
  return {
    type: PORTFOLIO_LOADING
  }
}

