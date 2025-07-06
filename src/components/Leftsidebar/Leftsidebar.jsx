import React from "react";
import "./Leftsidebar.css";
import assets from "../../assets/assets";

const Leftsidebar = () => {
  return (
    <div className="ls">
      <div className="ls-top">
        <div className="ls-nav">
          <img src={assets.logo} className="logo" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Leftsidebar;
