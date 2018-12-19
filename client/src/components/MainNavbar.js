import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import logo from '../assets/logo.jpg';


class MainNavbar extends React.Component {
  onLogoutClick = (e) => {
    e.preventDefault();

    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
       <li className="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
          <Link className="nav-link" to="/charts">Charts</Link>
        </li>
        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
          <Link className="nav-link" to="/logs">Trading Logs</Link>
        </li>
        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
          <Link className="nav-link" to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav-item"  data-toggle="collapse" data-target=".navbar-collapse.show">
          <span onClick={this.onLogoutClick} className="nav-link" to="/">Logout</span>
        </li>
      </ul>
    );
    const guestLinks = (
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
      </ul>
    )
    return (   
      <nav className="navbar fixed-top navi front shadow">
        <Link className="mr-auto nav-brand" to="/"><img src={logo} alt="logo" className="logo"/>Chartodex</Link>
        {this.props.auth.isAuthenticated && 
        <span>{`Hi, ${user.name.toUpperCase()}`}</span>}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars nav-hamburger"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          {isAuthenticated ? authLinks : guestLinks}    
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logoutUser})(MainNavbar);


