import React, { Component } from 'react';
import TradingViewWidget from 'react-tradingview-widget'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchCharts } from '../../actions/chartActions';
import NoCharts from './NoCharts';
import AddChart from "./AddChart";
import Loading from "../Loading";


class Charts extends Component {

  componentDidMount() {
    this.props.fetchCharts();
  }
  
  renderCharts = (chart) => {
    return (
      <TradingViewWidget
        autosize="true"
        symbol={`BINANCE:${chart.pair}${chart.base}`}
        interval="60"
        key={chart._id}
        hide_side_toolbar='false'
      />
    ) 
  }

  render() {
    const smallDevice = (
      <div>
        <AddChart/>
        <Link to="/watchlist"  className="back-link">Edit watchlist</Link>
        
      </div>)
    
    if (this.props.chart.charts.length > 0) {

      return (
        <div className="container">
          <h1>Charts</h1>
          <hr className="my-2" />
          { (window.innerWidth < 768) && smallDevice }
          <div className="charts-container">
            {this.props.chart.charts.map(this.renderCharts)}
          </div>
        </div>
      )
    } else {
      if (this.props.chart.loading) {
        return <Loading/>
      } else {
      return (
        <div>
          {(window.innerWidth < 768) ? <div>{smallDevice}<NoCharts/></div> :
          <NoCharts/>
          }
        </div>
      )}
    }
  }
}

const mapStateToProps = (state) => ({
  chart: state.chart
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchCharts}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Charts);

