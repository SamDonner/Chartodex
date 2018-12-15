import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import AddCoin from './AddCoin';
import PortfolioTable from './PortfolioTable';


const Portfolio = (props) => {
  return (
    <div className="log-container">
    <main className={classNames({'container': (window.innerWidth > 768)})}>
        <div >
        <h1 className="heading">Portfolio</h1>
        <Link to='/charts' ><h6 className="back-link heading mt-4">Back to Charts</h6></Link>
        </div>
        <hr className="my-2" />
        <div className="center log-table">
          <AddCoin />
          <PortfolioTable />
        </div>
    </main>
    </div>
  )
}
export default Portfolio;