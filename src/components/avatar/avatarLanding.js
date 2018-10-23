import React from "react";
import "../../css/avatar.css";

const AvatarLanding = () => {
  return (
    <div className="avatar-img">
      <div className="wrapper">
        <div className="border-circle" id="one" />
        <div className="border-circle" id="two" />
        <div className="background-circle">
          <div className="triangle-light" />
          <div className="body" />
          <span className="shirt-text">H</span>
          <span className="shirt-text">E</span>
          <span className="shirt-text">L</span>
          <span className="shirt-text">L</span>
          <span className="shirt-text">O</span>
          <div className="triangle-dark" />
        </div>
        <div className="head">
          <div className="ear" id="left" />
          <div className="ear" id="right" />
          <div className="hair-main">
            <div className="sideburn" id="left" />
            <div className="sideburn" id="right" />
            <div className="hair-top" />
          </div>
          <div className="face">
            <div className="hair-bottom" />
            <div className="nose" />
            <div className="eye-shadow" id="left">
              <div className="eyebrow" />
              <div className="eye" />
            </div>
            <div className="eye-shadow" id="right">
              <div className="eyebrow" />
              <div className="eye" />
            </div>
            <div className="mouth" />
            <div className="shadow-wrapper">
              <div className="shadow" />
            </div>
          </div>
        </div>
        <span className="music-note" id="one">
          &#9835;
        </span>
        <span className="music-note" id="two">
          &#9834;
        </span>
      </div>
    </div>
  );
};

export default AvatarLanding;
