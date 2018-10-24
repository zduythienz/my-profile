import React, { Component } from "react";
import "./App.css";
import Main from "./pages/main";
import { Link } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import "./assets/css/common/common.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="background-animation-color"
            title={<Link to="/">My Profile</Link>}
            scroll
            style={{ position: "fixed" }}
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/about-me">About Me</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="My Profile" style={{ position: "fixed" }}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/about-me">About Me</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content">
              <Main />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
