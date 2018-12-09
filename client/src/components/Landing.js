import React from 'react';
import { Link } from 'react-router-dom';
import HomeImage  from '../assets/HomeImage.jpg';

const Landing = (props) => {
  return (  
    <div>
      <div className="showcase_wrap">
        <div className="container showcase"> 
          <h5 className="showcase_wrap_text"><strong>CRYPTO TRADING TOOLBOX</strong></h5>
          <div>Easily scroll through your favorite, customizable charts, record all of your trading profits, and keep a close eye on your holdings. </div> 
          <Link to="/login">
            <button type="button" className="btn login-button shadow" data-toggle="modal" data-target="#loginModal">
              Get Started
            </button>
          </Link>
        </div>  
      </div>
    </div>
  );
};

export default Landing;