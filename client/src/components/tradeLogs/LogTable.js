import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLogs, deleteEntry } from '../../actions/logActions';

class LogTable extends Component  {
  componentDidMount() {
    this.props.getLogs();
  }
  
  deleteEntry = (id) => {
    this.props.deleteEntry(id);
  }
  renderRow = entry => {
    let profit = +((entry.sellPrice - entry.buyPrice) * entry.quantity).toFixed(4);
    let percent = +(((entry.sellPrice - entry.buyPrice) / entry.sellPrice) * 100).toFixed(2);
   
    if(entry.buyPrice === '') {
      profit = 0;
      percent = 0;
    }
    
    return (
    
      <tr key={entry.date}>
        <th scope="row">{entry.date.toString()}</th>
        <td>{entry.base} / {entry.pair}</td>
        <td>{entry.quantity}</td>
        <td>{entry.buyPrice}</td>
        <td>{entry.sellPrice}</td>
        <td>{profit}</td>
        <td>{percent.toString()}</td>
        <td>
          <button className="btn btn-sm delete-but" 
          onClick={(e) => this.deleteEntry(entry._id)}>
            <i className="far fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    ) 
  }

  render() {
    return (
      <table className="table table-condensed log-table table-striped">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Pairing</th>
            <th scope="col">Quantity</th>
            <th scope="col">Buy Price</th>
            <th scope="col">Sell Price</th>
            <th scope="col">Profit</th>
            <th scope="col">Profit %</th>
          </tr>
        </thead>
        <tbody>
          {this.props.log.logs.map(this.renderRow)}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => ({
  log: state.log
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getLogs, deleteEntry}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LogTable);