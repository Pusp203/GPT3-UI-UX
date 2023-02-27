import React from "react";
import "./banner.scss";
import BannerComponent from "./BannerComponent";
import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-main">
        {/* <div className="banner-main__header"> */}
        <BannerComponent />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Banner;
