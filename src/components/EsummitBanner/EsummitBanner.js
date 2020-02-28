import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";
const EsummitBanner = ({ changeBannerView }) => {
  let src = "/flex2.jpg";
  if (window.screen.width < 600) src = "/images/esummit_mobile.jpg";
  return (
    <div onClick={changeBannerView} id="banner-container">
      <Link to="/FacultyConvention">
        <img id="banner-img" src={src} alt="" />
      </Link>
    </div>
  );
};
export default EsummitBanner;
