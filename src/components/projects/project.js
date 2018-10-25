import React, { Component } from "react";
import { Card, CardTitle, CardText, Button, CardActions } from "react-mdl";
import ReactIcon from "../../assets/images/react.png"

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card
        shadow={0}
        style={{ width: "320px", height: "320px", margin: "auto" }}
      >
        <CardTitle
          expand
          style={{
            color: "#fff",
            background: `url(${ReactIcon}) 15% no-repeat #46B6AC`,
            backgroundSize: '116px 116px',
            backgroundPosition: 'center'
          }}
        >
          Project Name
        </CardTitle>
        <CardText>
          Project's Information
          <br/>
          Line 2
        </CardText>
        <CardActions border>
          <Button colored>Github</Button>
          <Button colored style={{float:'right'}}>Preview</Button>
        </CardActions>
      </Card>
    );
  }
}

export default Project;
