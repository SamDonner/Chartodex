import React from 'react';
import { Link } from 'react-router-dom';
import AddChart from '../containers/AddChart';


class MainNavbar extends React.Component {
  
  render() {
    return (    
      <nav className="navbar fixed-top navi front shadow">
        <Link className="mr-auto nav-brand" to="/">Chartodex</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars nav-hamburger"></i>
        </button>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/charts">Charts<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logs">Trading Logs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" >Logout</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="/">Add a chart</Link>
            </li>
            <li className="nav-hamburger-menu">
            <AddChart/>
            </li>
          </ul>
          
        </div>
      </nav>
    );
  }
}

export default MainNavbar;


