import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import { addEntry, getLogs } from '../../actions/logActions';

class AddEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base: '',
      pair: '',
      quantity: '',
      buyPrice: '',
      sellPrice: '',
      errors: {}
    }
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value.toUpperCase(), errors: {}})
  }

  onSubmit = e => {
    e.preventDefault();
   
    const newEntry = {
      base: this.state.base,
      pair: this.state.pair,
      quantity: this.state.quantity,
      buyPrice: this.state.buyPrice,
      sellPrice: this.state.sellPrice
    }
    this.props.addEntry(newEntry);
    this.props.getLogs();
    if(Object.keys(this.state.errors).length < 1) {
    this.setState({ 
      pair: '',
      quantity: '',
      buyPrice: '',
      sellPrice: '',
      errors: {}
    })};
    
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({errors: nextProps.errors})
    }
  }


  render() {
    const { errors } = this.state;
    return (
      <form className="log-form" onSubmit={this.onSubmit}>
        <div className="form-row">
          <div className="col" >
          <select className={classnames('form-control', {
                'is-invalid': errors.base
              })} value={this.state.base} onChange={this.onChange} name="base">
          <option default>Base...</option>
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
          <option value="USDT">USD</option>
          </select>
          {errors.base && (<div className="invalid-feedback">{errors.base}</div>)}
          </div>
          <div className="col">
            <input 
              type="text" 
              className={classnames('form-control', {
                'is-invalid': errors.pair
              })}
              placeholder="Pair" 
              value={this.state.pair}
              name="pair"
              onChange={this.onChange}/>
              {errors.pair && (<div className="invalid-feedback">{errors.pair}</div>)}
          </div>
          <div className="col">
            <input 
              type="text" 
              className={classnames('form-control', {
                'is-invalid': errors.quantity
              })}
              placeholder="Quantity"
              value={this.state.quantity}
              name="quantity"
              onChange={this.onChange}/>
              {errors.quantity && (<div className="invalid-feedback">{errors.quantity}</div>)}
          </div>
          <div className="col">
            <input 
              type="text" 
              className={classnames('form-control', {
                'is-invalid': errors.buyPrice
              })}
              placeholder="Buy price"
              value={this.state.buyPrice}
              name="buyPrice"
              onChange={this.onChange}/>
              {errors.buyPrice && (<div className="invalid-feedback">{errors.buyPrice}</div>)}
          </div>
          <div className="col">
            <input 
              type="text" 
              className={classnames('form-control', {
                'is-invalid': errors.sellPrice
              })} 
              placeholder="Sell price"
              value={this.state.sellPrice}
              name="sellPrice"
              onChange={this.onChange}/>
              {errors.sellPrice && (<div className="invalid-feedback">{errors.sellPrice}</div>)}
          </div>
        </div>
        <button type="submit" className="btn add-button mb-2">Add Entry</button>
      </form>
    )
  }
}
const mapStateToProps = (state) => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addEntry, getLogs }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(AddEntry);