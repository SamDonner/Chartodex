import React from 'react'
import AddChart from '../containers/addChart';
import Charts from './Charts';
import Watchlist from '../containers/watchList';
import SideMenu from './SideMenu';


const Layout = () => (
  <div>
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <SideMenu/>
            <AddChart/>
            <Watchlist/>
          </div>
        </nav>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-0">
          <Charts/>
        </main>
      </div>
    </div>
</div>
)
export default Layout;