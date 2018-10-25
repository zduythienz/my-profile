import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import { Content } from "react-mdl";
import ListProjects from '../components/projects/listProject';

class Projects extends Component {
  state = {};

  toggleCategories (){
    if(this.state.activeTab === 0){
      return <h1>this is Angular</h1>
    }else if(this.state.activeTab === 1){
      return <div><ListProjects/></div>
    }
    else{
      return <h1>this is VueJS</h1>
    }
  }

  render() {
    return (
      <Content className="content-backgourd">
        <div className="page-content">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={tabId => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>Angular</Tab>
            <Tab>ReactJS</Tab>
            <Tab>VueJS</Tab>
          </Tabs>
          <section>
            <Grid>
              <Cell col={12}>
                <div className="content">
                  {this.toggleCategories()}
                </div>
              </Cell>
            </Grid>
          </section>
        </div>
      </Content>
    );
  }
}

export default Projects;
