import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import { addCoin, getPortfolio } from '../../actions/portfolioActions';

class AddCoin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: '',
      holdings: '',
      errors: {}
    }
  }

 

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({errors: nextProps.errors})
    }
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value.toUpperCase(), errors: {}})
  }

  onSubmit = e => {
    e.preventDefault();
   
    const newCoin = {
      coin: this.state.coin,
      holdings: this.state.holdings,
    }
    this.props.addCoin(newCoin);
    
    setTimeout(this.props.getPortfolio,500)
   
  }
 
  render() {
    const { errors } = this.state;
    return (
      <form className="log-form" onSubmit={this.onSubmit}>
        <div className="form-row ">
          <div className="col-4">
            <input 
              type="text" 
              placeholder="Coin (symbol)" 
              value={this.state.coin}
              name="coin"
              onChange={this.onChange}
              className={classnames('form-control', {
                'is-invalid': errors.coin
              })}/>
              {errors.coin && (<div className="invalid-feedback">{errors.coin}</div>)}
          </div>
          <div className="col-4">
            <input 
              type="text" 
              className={classnames('form-control', {
                'is-invalid': errors.holdings
              })}
              placeholder="Quantity"
              value={this.state.holdings}
              name="holdings"
              onChange={this.onChange}/>
              {errors.holdings && (<div className="invalid-feedback">{errors.holdings}</div>)}
          </div>
          <button type="submit" className="btn coin-btn col ">Add</button>
        </div>
       
      </form>


    )
  }

}
const mapStateToProps = (state) => ({
  errors: state.errors
})
const mapDispatchToProps = dispatch => {
  return bindActionCreators({addCoin, getPortfolio}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCoin);