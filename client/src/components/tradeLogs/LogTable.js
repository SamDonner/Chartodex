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
    return (
    
      <tr key={entry.date}>
        <th scope="row">{entry.date.substr(0, 10)}</th>
        <td>{entry.base} - {entry.pair}</td>
        <td>{entry.quantity}</td>
        <td>{entry.buyPrice}</td>
        <td>{entry.sellPrice}</td>
        <td>{entry.profit}</td>
        <td>{entry.percent}</td>
        <td>
          <button className="btn btn-sm delete-coin" 
          onClick={(e) => this.deleteEntry(entry._id)}>
            <i className="far fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    ) 
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Pairing</th>
            <th scope="col">Quantity</th>
            <th scope="col">Buy Price</th>
            <th scope="col">Sell Price</th>
            <th scope="col">Profit (base)</th>
            <th scope="col">Profit %</th>
            <th scope="col"><i className="far fa-trash-alt"></i></th>
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