import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingPage";
import AboutMe from "./aboutMe";
import Projects from "./projects";
import Contact from "./contact";
import Resume from "./resume";

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about-me" component={AboutMe} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
    );
  }
}

export default Main;
