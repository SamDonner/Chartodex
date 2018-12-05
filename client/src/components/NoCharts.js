import React from 'react';
import HomeImage  from '../assets/HomeImage.jpg';

const NoCharts = (props) => {
  return (   
    <div>
      <div className="showcase_image" > 
        <img src={HomeImage} alt="cover" className="showcase_image"/>
      </div>
      <div className="bg-overlay" />
        <div className="showcase_wrap">
          <div className="container showcase">
            <h1>NO CHARTS YET</h1>
            <h5 className="showcase_wrap_text">Add charts in the side menu</h5>
          </div>
        </div>
    </div>
  );
};

export default NoCharts;