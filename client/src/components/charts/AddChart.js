import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import { addChart, fetchCharts } from '../../actions/chartActions';



class AddChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base: '',
      pair: '',
      errors: {}
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value.toUpperCase(), errors: {} })
  }

  onSubmitForm = e => {
    e.preventDefault();
   
    const newChart = {
      base: this.state.base,
      pair: this.state.pair,
      pairing: `${this.state.base}${this.state.pair}`
    }

    this.props.addChart(newChart);
    this.setState({pair: ''})
    this.props.fetchCharts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({
        errors: this.props.errors
      });
    }
  }

 

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <h5 className="center">Add a Chart</h5>
        <form onSubmit={this.onSubmitForm}>
          <div className="form-group mb-2 mr-sm-2">
            <label className="sr-only">Base Currency</label>
            <select 
              onChange={this.onChange} 
              value={this.state.base} 
              name="base" 
              className={classnames('form-control', {
                'is-invalid': errors.base
              })} >
              <option value="">Select Base...</option>
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
              <option value="USDT">USDT</option>
            </select>
            {errors.base && (<div className="invalid-feedback">{errors.base}</div>)}
          </div>
          <div className="form-group mb-2 mr-sm-2">
            <label className="sr-only">Currency Pair</label>
            <input 
              onChange={this.onChange} 
              value={this.state.pair} 
              name="pair"
              type="text" 
              className={classnames('form-control', {
                'is-invalid': errors.pair
              })}   
              placeholder="Pair symbol (ex: ETH)"/>
              {errors && (<div className="invalid-feedback">{errors.pair}</div>)}
          </div>
          
          <div>
            <button type="submit" className="btn add-chart-btn mb-2">Add</button>
          </div>
        </form>
      </div> 
    )
  }
}
const mapStateToProps = (state) => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addChart, fetchCharts}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(AddChart);