import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteChart } from '../../actions/chartActions';
import { bindActionCreators } from 'redux';


class Watchlist extends Component {
  
  deletePair = id => {
    this.props.deleteChart(id);
  } 
  
  renderWatchlist = chart => {
    return(
      <li className="list-group-item watchlist-item" key={chart._id}>{chart.base} / <strong>{ chart.pair}</strong> 
        <button 
          className="btn btn-sm delete-but"
          onClick={(e) => this.deletePair(chart._id)}>
          <i className="far fa-trash-alt"></i>
        </button>
      </li>
    )
  }
  
  render() {
    const { chart } = this.props;

    return( 
      <div className="container">  
        <hr className="my-2" />
        {chart &&
          <div className="watchlist center">
            <h5 >Chart Watchlist</h5>
            <ul className="list-group mb-4">
              {chart.charts.map(this.renderWatchlist)}
            </ul>
            {(window.innerWidth < 768) && 
          <Link to="/charts">
          <button type="button" className="btn add-chart-btn mb-2">
            Back to Charts
          </button>
        </Link>
        }
          </div>
        } 
       
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  chart: state.chart
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteChart }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);