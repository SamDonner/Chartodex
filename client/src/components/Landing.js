import React from 'react';
import HomeImage  from '../assets/HomeImage.jpg';
import MainNavbar from './MainNavbar';

const Landing = (props) => {
  return (  
    <div>
      <div className="showcase_image" > 
        <img src={HomeImage} alt="cover" className="showcase_image"/>
      </div>
      <MainNavbar/>
      <div className="showcase_wrap">
        <div className="container showcase">
          <div style={{textAlign:"left"}}><strong>THIS IS YOUR</strong></div> 
          <h5 className="showcase_wrap_text"><strong>CRYPTO TRADING TOOLBOX</strong></h5>
          <hr className="my-2"/>
          <button className="login-button">Get started</button>
        </div>  
      </div>
    </div>
  );
};

export default Landing;