import React from "react";
import img from "../../img/homebanner.png";
import './HomeBanner.css';

const HomeBanner = () => {
  return (
    <div className="homeBanner">
      <img src={img} />
    </div>
  );
};

export default HomeBanner;
