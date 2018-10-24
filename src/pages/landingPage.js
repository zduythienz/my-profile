import React, { Component } from "react";

import Particles from "react-particles-js";

import "../assets/css/common/common.css";
import "../assets/css/pages/landingPage.css";
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    setTimeout(this.handleLoad, 250);
    document.querySelector(
      "#body-landing"
    ).className += navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? " is-ie" : "";
  }

  handleLoad = () => {
    document.querySelector("#body-landing").className = document
      .querySelector("#body-landing")
      .className.replace(/\bis-preload\b/, "");
  };

  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <div className="background-animation-color">
          <Particles
            params={{
              particles: {
                line_linked: {
                  shadow: {
                    enable: true,
                    color: "#3CA9D1",
                    blur: 100
                  },
                  distance: 200
                },
                move: {
                  speed: 20
                }
              }
            }}
            style={{ position: "absolute" }}
          />
          <div col={12} style={{ height: "100vh" }}>
            <div id="body-landing" className="is-preload">
              <div id="wrapper">
                <section id="main">
                  <header>
                    <span className="avatar">
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
                    <ul className="icons">
                      <li>
                        <a href="#" className="fa-twitter">
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a href="#" className="fa-instagram">
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a href="#" className="fab fa-facebook">
                          Facebook
                        </a>
                      </li>
                    </ul>
                  </footer>
                </section>
                <footer id="footer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
