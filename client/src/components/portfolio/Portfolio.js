import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import { getPortfolio } from '../../actions/portfolioActions';
import AddCoin from './AddCoin';
import PortfolioTable from './PortfolioTable';
import Loading from '../Loading';


class Portfolio extends Component {
  componentDidMount() {
    this.props.getPortfolio()
  }
  render() {
    console.log(this.props.portfolio)
    return (
      <div className="log-container">
      <main className={classNames({'container': (window.innerWidth > 768)})}>
          <div >
          <h1 className="heading">Portfolio</h1>
          <Link to='/charts' ><h6 className="back-link heading mt-4">Back to Charts</h6></Link>
          </div>
          <hr className="my-2" />
          <div className="center">
            <AddCoin />
            {this.props.portfolio.loading ? <Loading/> : <PortfolioTable />}    
          </div>
      </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  portfolio: state.portfolio
})
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getPortfolio}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);