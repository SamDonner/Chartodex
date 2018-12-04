import React from 'react'
import AddChart from '../containers/addChart';
import Charts from './Charts';
import Watchlist from '../containers/watchList';
import SideMenu from './SideMenu';


const Layout = () => (
  <div>
  <nav className="navbar fixed-top navi flex-md-nowrap p-0 shadow">
      <a className="nav-brand bn-theme col-sm-3 col-md-2 mr-0" href="/">CHARTODEX</a>
      <a href="/" className="nav-links">Login</a>
    </nav>
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