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

      <div className="chat-message">
        <div className="s-msg">
          <p className="msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div>
            <img src={assets.profile_img} alt="profile img" />
            <p>2:30pm</p>
          </div>
        </div>

        <div className="s-msg">
          <img className="msg-img" src={assets.pic1} alt="random image" />

          <div>
            <img src={assets.profile_img} alt="profile img" />
            <p>2:30pm</p>
          </div>
        </div>

        <div className="r-msg">
          <p className="msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div>
            <img src={assets.profile_img} alt="profile img" />
            <p>2:30pm</p>
          </div>
        </div>
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
