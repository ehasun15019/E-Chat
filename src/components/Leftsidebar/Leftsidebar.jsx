import React, { useState } from "react";
import "./Leftsidebar.css";
import assets from "../../assets/assets";

const Leftsidebar = () => {
  const [showSubMenu, SetShowSubMenu] = useState(false);

  return (
    <div className="ls">
      <div className="ls-top">
        <div className="ls-nav">
          <img src={assets.logo} className="logo" alt="logo" />

          <div className="menu">
            <img
              src={assets.menu_icon}
              alt="menu-icon"
              onClick={() => SetShowSubMenu((a) => !a)}
            />

            <div
              className="sub-menu"
              style={{ display: showSubMenu ? "block" : "none" }}
            >
              <p>Edit Profile</p>
              <hr />
              <p>Logout</p>
            </div>
          </div>
        </div>

        <div className="ls-search">
          <img src={assets.search_icon} alt="search icon" />
          <input type="text" placeholder="Search here" />
        </div>
      </div>

      <div className="ls-list">
        {Array(12)
          .fill("")
          .map((item, index) => {
            return (
              <div key={index} className="friends">
                <img src={assets.profile_img} alt="profile" />

                <div>
                  <p>Richard Sanford</p>
                  <span>Hello, How are you?</span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Leftsidebar;
