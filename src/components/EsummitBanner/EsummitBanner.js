import React from "react";
import "./banner.css";
const EsummitBanner = ({ changeBannerView }) => {
  let src = "/images/esummit2019.jpeg";
  if (window.screen.width < 600) src = "/images/esummit_mobile.jpg";
  return (
    <div onClick={changeBannerView} id="banner-container">
      <a href="https://esummit.ecellmsit.in">
        <img id="banner-img" src={src} alt="" />
      </a>
    </div>
  );
};
export default EsummitBanner;
