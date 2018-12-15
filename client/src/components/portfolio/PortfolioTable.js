import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import { getPortfolio, deleteCoin } from '../../actions/portfolioActions';

class PortfolioTable extends Component  {
  
  componentDidMount() {
    this.props.getPortfolio()
  }

  deleteCoin = (id) => {
    this.props.deleteCoin(id);
  }
  numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
} 

  renderRow = coin => {
   const price = coin.price < 1 ? +coin.price.toFixed(4) : coin.price.toFixed(2);
   const worth =  (coin.price * coin.holdings).toFixed(2); 
   
    return (
      <tr key={coin.coin}>
        <td className="coin-symbol">{coin.coin}</td>
        <td>
          <div className="label">{price}</div>
          <div 
            className={classnames({"positive sub-label": coin.change >= 0, "negative sub-label": coin.change < 0})}>
              {coin.change.toFixed(2)}%
          </div>
        </td>
        <td><div className="label">${this.numberWithCommas(worth)}</div><div className="sub-label">{coin.holdings}</div></td>
        <td>
          <button className="btn btn-sm delete-coin label" 
            onClick={(e) => this.deleteCoin(coin._id)}>
            <i className="far fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    ) 
  }

  render() { 
    return (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Coin</th>
              <th scope="col">Price (USD)</th>
              <th scope="col">Holdings</th>
              <th scope="col"><i className="far fa-trash-alt"></i></th>
            </tr>
          </thead>
          <tbody>
            {this.props.portfolio.portfolio.map(this.renderRow)}
          </tbody>
        </table>
    )
  }
}

const mapStateToProps = (state) => ({
  portfolio: state.portfolio,
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getPortfolio, deleteCoin}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioTable);