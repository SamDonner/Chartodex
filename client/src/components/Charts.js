import React, { Component } from 'react';
import TradingViewWidget from 'react-tradingview-widget'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCharts } from '../actions/chartActions';
import NoCharts from './NoCharts';


class Charts extends Component {

  componentDidMount() {
    this.props.fetchCharts();
  }
  
  renderCharts(chart) {
    console.log(chart.base,"render trading view")
    return (
      <TradingViewWidget
        width="980"
        height="610"
        symbol={`BINANCE:${chart.pair}${chart.base}`}
        interval="60"
        key={chart._id}
        hide_side_toolbar="false"
      />
    ) 
  }

  render() {
    console.log(this.props.chart, 'rendercharts')
    if (this.props.chart.charts.length > 0) {

    return (
      <div className="container charts-container">
        <h1>Charts</h1>
        <div>
          {this.props.chart.charts.map(this.renderCharts.bind(this))}
        </div>
      </div>
    )
  } else {
    return (
     <NoCharts/>
    )
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

