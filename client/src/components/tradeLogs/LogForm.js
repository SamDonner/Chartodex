import React, { Component } from 'react';

class LogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <form className="log-form container center shadow">
        <div className="form-row">
          <div className="col-2" >
          <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
           <option default>Base...</option>
           <option value="BTC">BTC</option>
           <option value="ETH">ETH</option>
           <option value="USDT">USD</option>
           </select>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Pair" />
          </div>
          <div className="col">
            <input type="number" className="form-control" placeholder="Quantity"/>
          </div>
          <div className="col">
            <input type="number" className="form-control" placeholder="Buy price"/>
          </div>
          <div className="col">
            <input type="number" className="form-control" placeholder="Sell price"/>
          </div>
        </div>
        <button type="submit" class="btn login-button">Add Entry</button>
      </form>
    )
  }
}

export default LogForm;