import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteChart } from '../actions/chartActions';
import { bindActionCreators } from 'redux';
import { Button, Container, ListGroup, ListGroupItem } from 'reactstrap';

class Watchlist extends Component {

 deletePair = id => {
   this.props.deleteChart(id);
 }
  
  renderWatchlist = chart => {
    return(
      <ListGroupItem className="list-group-item" key={chart._id}>{`${chart.base} / ${ chart.pair}`} 
        <Button 
          className="btn btn-light delete-but"
          onClick={(e) => this.deletePair(chart._id)}>X</Button>
      </ListGroupItem>
    )
  }
  
  render() {
    return( 
      <Container>  
        <hr className="my-2" />
        {this.props.chart &&
          <div>
            <h3>Watchlist</h3>
            <ListGroup>
              {this.props.chart.charts.map(this.renderWatchlist)}
            </ListGroup>
          </div>
        }
      </Container>
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