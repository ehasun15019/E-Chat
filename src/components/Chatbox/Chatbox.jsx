import React from "react";
import "./Chatbox.CSS";
import assets from "../../assets/assets";

const Chatbox = () => {
  return (
    <div className="chat-box">
      <div className="chat-user">
        <img src={assets.profile_img} alt="profile" />
        <p>
          Richard Sanford{" "}
          <img src={assets.green_dot} className="dot" alt="active" />
        </p>

        <img src={assets.help_icon} className="help" alt="help" />
      </div>

      <div className="chat-input">
        <input type="text" placeholder="send a message" />
        <input type="file" id="image" accept="image/png, image/jpg" hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="" />
        </label>

        <img src={assets.send_button} alt="" />
      </div>
    </div>
  );
};

export default Chatbox;
