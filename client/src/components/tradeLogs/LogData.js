import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getLogs, deleteEntry } from '../../actions/logActions';
import RenderData from './RenderData';

class LogData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BTC: {},
      ETH: {},
      USDT: {}, 
      bases: ['BTC', 'ETH', 'USDT']
    }
  }

  componentDidMount() {
    this.state.bases.map(this.getData)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.log.logs !== this.props.log.logs) {
      this.state.bases.map(this.getData)
    }
  }
  
  //add up total of given category
  getTotal = (arr, cat) => {
    if (arr) {   
      const total = arr.reduce((acc, cur) => {
        return acc + cur[cat]
      }, 0)
      return total
    } else {
    return '0.00';
    }
  }

  //aggregate data for sidebar
  getData = (base) => {
    if (this.props.log.logs) {
      const { logs } = this.props.log;
      const date = (date => Date.parse(date));
  
      const day = logs.filter(entry => entry.base === base && (date(entry.date) > (Date.now() - 86400000 )));
      const week = logs.filter(entry => entry.base === base && (date(entry.date) > (Date.now() - 604800000)));
      const month = logs.filter(entry => entry.base === base && (date(entry.date) > (Date.now() - 2592000000)));
      const total = logs.filter(entry => entry.base === base);
      console.log(this.getTotal(day, 'amtBase'))
 
      const data = {
        day: {profit: this.getTotal(day, 'profit'), percent: +((this.getTotal(day, 'profit') / this.getTotal(day, 'amtBase')) * 100).toFixed(2)}, 
        week: {profit: this.getTotal(week, 'profit'), percent: +((this.getTotal(week, 'profit') / this.getTotal(week, 'amtBase')) * 100).toFixed(2)}, 
        month: {profit: this.getTotal(month, 'profit'), percent: +((this.getTotal(month, 'profit') / this.getTotal(month, 'amtBase')) * 100).toFixed(2)},
        total: {profit: this.getTotal(total, 'profit'), percent: +((this.getTotal(total, 'profit') / this.getTotal(total, 'amtBase')) * 100).toFixed(2)}
      }
      this.setState({[base]: data})
      }
  }

  callRenderData = (base) => {
    return (
      <div key={base}>
        {this.state[base].total &&
          <div className="card mb-2">
          <div className="card-body">
            <h5 className="card-title">{base}</h5>
            {RenderData(this.state[base])}  
          </div>
        </div>
          }
      </div>
    )
  }

  render() {
    return (
      
      <div className="container">  
        <hr className="my-2" />
          <div className="watchlist center">
            <h5 >Log Summary</h5>
              {this.props.log.logs && this.state.bases.map(this.callRenderData)}
            {(window.innerWidth < 768) && 
          <Link to="/logs">
            <button type="button" className="btn add-chart-btn mb-2">
              Back to Trade Logs
            </button>
          </Link>
        }
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  log: state.log
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getLogs, deleteEntry}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LogData);