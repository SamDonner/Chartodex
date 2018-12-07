import React from 'react'
import AddChart from '../containers/AddChart';
import Charts from './Charts';
import Watchlist from '../containers/watchList';



const ChartLayout = () => (
  <div>
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <AddChart/>
        <Watchlist/>
      </div>
      </nav>
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-0">
        <Charts/>
      </main>     
  </div>
)
export default ChartLayout;