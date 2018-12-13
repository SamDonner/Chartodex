import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import LogForm from './LogForm';
import LogTable from './LogTable';


const TradeLogs = (props) => {
  return (
    <div className="log-container">
    <main className={classNames({'container': (window.innerWidth > 768)})}>
        <h1>Trade Logs</h1>
        <Link to='/charts' className="edit-watchlist mt-2">Back to Charts</Link>
        <hr className="my-2" />
        <div className="center">
          <LogForm />
          <LogTable />
        </div>
    </main>
    </div>
  )
}
export default TradeLogs;
