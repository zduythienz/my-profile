import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import AvatarLanding from "../components/avatar/avatarLanding";
import "../css/common/common.css";
class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="background-animation-color">
          <Cell col={12}>
            <AvatarLanding />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
