import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteChart } from '../actions/chartActions';
import { bindActionCreators } from 'redux';


class Watchlist extends Component {

 deletePair = id => {
   this.props.deleteChart(id);
 }
  
  renderWatchlist = chart => {
    return(
      <li className="list-group-item" key={chart._id}>{`${chart.base} / ${ chart.pair}`} 
        <button 
          className="btn btn-light delete-but"
          onClick={(e) => this.deletePair(chart._id)}>X</button>
      </li>
    )
  }
  
  render() {
    return( 
      <div className="container">  
        <hr className="my-2" />
        {this.props.chart &&
          <div>
            <h3>Watchlist</h3>
            <ul className="list-group">
              {this.props.chart.charts.map(this.renderWatchlist)}
            </ul>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {chart: state.chart}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({deleteChart}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);