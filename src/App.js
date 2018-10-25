import React, { Component } from "react";
import "./App.css";
import Main from "./pages/main";
import { Link } from "react-router-dom";
import { Layout, Header, Navigation, Drawer } from "react-mdl";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={<Link to="/">My Profile</Link>}
            scroll
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/about-me">About Me</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link to="/">My Profile</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/about-me">About Me</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Main />
        </Layout>
      </div>
    );
  }
}

export default App;
