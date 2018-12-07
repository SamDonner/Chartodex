import React from 'react';
import { Link } from 'react-router-dom';
import HomeImage  from '../assets/HomeImage.jpg';

const Landing = (props) => {
  return (  
    <div>
      <div className="showcase_image" > 
        <img src={HomeImage} alt="cover" className="showcase_image"/>
      </div>
      <div className="showcase_wrap">
        <div className="container showcase"> 
          <h5 className="showcase_wrap_text"><strong>CRYPTO TRADING TOOLBOX</strong></h5>
          <div className="landing-subtitle">Easily scroll through your favorite, customizable charts, record all of your trading profits, and keep a close eye on your holdings. </div>
          <button type="button" className="btn login-button shadow" data-toggle="modal" data-target="#exampleModalCenter">
            Get Started
          </button>
        </div>  
      </div>
    </div>
  );
};

export default Landing;