import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { Content } from "react-mdl";
import LandingAvatar from "../components/avatar/landingAvatar";
import Particles from "react-particles-js";

class LandingPage extends Component {
  render() {
    return (
      <Content className="landing-grid">
        <div className="page-content">
          <div style={{ width: "100%", margin: "auto" }}>
          <Particles 
              style={{position: 'absolute'}}
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
                    },
                    distance:200
            			}
            		}
            	}}
            />
            <Grid className="landing-grid">
              <Cell col={12}>
              
                <LandingAvatar />
              </Cell>
            </Grid>
          </div>
        </div>
      </Content>
    );
  }
}

export default LandingPage;
