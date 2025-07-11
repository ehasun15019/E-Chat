import React from "react";
import "./Rightsidebar.css";
import assets from "../../assets/assets";

const Rightsidebar = () => {
  return (
    <div className="rs">
      <div className="rs-profile">
        <img src={assets.profile_img} alt="profile image" />

        <h3>
          Richard Sanford{" "}
          <img src={assets.green_dot} className="dot" alt="active" />
        </h3>
        <p>Hey, There i am Richard Sanford using E-Chat</p>
      </div>

      <hr />

      <div className="rs-media">
        <p>Media</p>

        <div>
          <img src={assets.pic1} alt="pictures" />
          <img src={assets.pic2} alt="pictures" />
          <img src={assets.pic3} alt="pictures" />
          <img src={assets.pic4} alt="pictures" />
          <img src={assets.pic1} alt="pictures" />
          <img src={assets.pic2} alt="pictures" />
        </div>
      </div>

      <button>Logout</button>
    </div>
  );
};

export default Rightsidebar;
