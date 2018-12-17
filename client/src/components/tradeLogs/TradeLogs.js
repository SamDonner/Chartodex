import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import AddEntry from './AddEntry';
import LogTable from './LogTable';
import LogData from './LogData';


const TradeLogs = (props) => {
  return (
    <div className={classNames({'log-container': (window.innerWidth < 768)})}>
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
      <LogData />
      </div>
      </nav>
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-0">
        <div className={classNames({'container': (window.innerWidth > 768)})}>
        <h1 className="heading">Trade Logs</h1>
        <Link to='/charts' ><h6 className="back-link heading mt-4">Back to Charts</h6></Link>
        <hr className="my-2" />
        </div>
        
        <div className="center container">
          <AddEntry />
          {(window.innerWidth < 768) && <Link to='/summary'><h6 className="back-link heading mt-4">Log Summary</h6></Link>}
          <LogTable />
          
        </div>
    </main>
       
  </div>
  
  )
}
export default TradeLogs;
/* <main className={classNames({'container': (window.innerWidth > 768)})}>
</main>    */