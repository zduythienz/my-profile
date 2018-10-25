import React, { Component } from "react";
import { Content, Grid, Cell } from "react-mdl";
import Project from "./project";

class ListProjects extends Component {
  state = {
    listProject: [
      {
        id: 1,
        name: "Project 1",
        description: "Project's description Project's description Project's description Project's description"
      },
      {
        id: 2,
        name: "Project 2",
        description: "Project's description Project's description Project's description Project's description"
      },
      {
        id: 3,
        name: "Project 3",
        description: "Project's description Project's description Project's description Project's description"
      },
      {
        id: 4,
        name: "Project 4",
        description: "Project's description Project's description Project's description Project's description"
      },
      {
        id: 5,
        name: "Project 5",
        description: "Project's description Project's description Project's description Project's description"
      },
    ]
  };

  render() {
    return (
      <Content className="content-backgourd">
        <div className="page-content" >
        <Grid>
            {this.state.listProject.map((project) => (
                <Cell col={4}>
                
                        <Project key={project.id}/>
                </Cell>
            ))}
            </Grid>
        </div>
      </Content>
    );
  }
}

export default ListProjects;
