import React from "react";
import "../style.css";

const MainHero = () => {
  return (
      <div className="heroImgContainer">
        <div className="heroTextContainer">
          <div className="heroTitleContainer">
          <h1 className="heroTitle">Cool Fashion</h1>
          </div>
          <p className="heroText">Make a statement<br/>of yourself</p>
          <button className="heroBtn">SHOP HERE</button>
        </div>
      </div>
  );
};

export default MainHero;
