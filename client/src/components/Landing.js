import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeImage  from '../assets/HomeImage.jpg';

class Landing extends  Component {
  
  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/charts');
    }
  }
  render() {
    return (  
      <div>
        <div className="showcase_image" > 
            <img src={HomeImage} alt="cover" className="showcase_image"/>
          </div>
        <div className="showcase_wrap">
          <div className="container showcase"> 
            <h5 className="showcase_wrap_text"><strong>CRYPTO TRADING TOOLBOX</strong></h5>
            <div>Easily scroll through your favorite, customizable charts, record all of your trading profits, and keep a close eye on your holdings. </div> 
            <Link to="/login">
              <button type="button" className="btn login-button shadow">
                Get Started
              </button>
            </Link>
          </div>  
        </div>
      </div>
    );
  }  
};

const mapPropToState = (state) => ({
  auth: state.auth
})
export default connect(mapPropToState)(Landing);