import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addChart, fetchCharts } from '../actions/chartActions';



class AddChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base: '',
      pair: '',
      collapsed: true
    }
  }

  onInputChange = event => {
    this.setState({base: event.target.value})
  }

  onPairChange = event => {
    this.setState({pair: event.target.value.toUpperCase()})
  }

  onSubmitForm = event => {
    event.preventDefault();
   
    const newChart = {
      base: this.state.base,
      pair: this.state.pair,
      pairing: `${this.state.base}${this.state.pair}`
    }

    this.props.addChart(newChart);
    this.setState({pair: ''})
    this.props.fetchCharts()
  }

 

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmitForm}>
          <div className="sidebar-heading">
            <div className="form-group mb-2 mr-sm-2">
              <label className="sr-only">Base Currency</label>
              <select onChange={this.onInputChange} value={this.state.base} className="form-control" id="base">
                <option defaultValue="0">Select Base...</option>
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
                <option value="USDT">USDT</option>
              </select>
            </div>
            <div className="form-group mb-2 mr-sm-2">
              <label className="sr-only">Currency Pair</label>
              <input 
                onChange={this.onPairChange} 
                value={this.state.pair} 
                type="text" 
                className="form-control" 
                id="pair" 
                placeholder="Pair (ie ETH)"/>
            </div>
            <div>
              <button type="submit" className="btn add-chart-btn mb-2">Add</button>
            </div>
          </div>
        </form>
      </div> 
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addChart, fetchCharts}, dispatch);
}
export default connect(null, mapDispatchToProps)(AddChart);