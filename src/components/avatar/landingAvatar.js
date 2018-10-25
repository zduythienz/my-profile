import React, { Component } from "react";
import "../../assets/css/landingAvatar.css";
class LandingAvatar extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    setTimeout(this.handleLoad, 250);
    document.querySelector(
      "#main-avatar"
    ).className += navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? " is-ie" : "";
  }

  handleLoad = () => {
    document.querySelector("#main-avatar").className = document
      .querySelector("#main-avatar")
      .className.replace(/\bis-preload\b/, "");
  };

  render() {
    return (
      <div id="main-avatar" class="">
        <div id="wrapper">
          <section id="main">
            <header>
              <span class="avatar">
                <img
                  src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                  alt=""
                  width="120"
                />
              </span>
              <h1>Duy Thien</h1>
              <p>Full Stack Developer</p>
            </header>
            <footer>
              <ul class="icons">
                <li>
                  <a href="https://www.facebook.com/zduythienz" target="blank" class="fa-twitter">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/zd.tz/" class="fa-instagram">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/zduythienz" class="fa-facebook">
                    Facebook
                  </a>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </div>
    );
  }
}

export default LandingAvatar;
