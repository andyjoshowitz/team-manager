import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import ProjectList from './ProjectList';
import Project from './Project';

class Urgent extends Component {
  render() {
    const urgent = this.props.projects.filter(project => project.help_needed === true)

    return (
      <div>
          <h2>Projects flagged for Assistance:</h2>
          <div className="main">
            <ProjectList projects={urgent} />
            <Route path={`${this.props.match.url}/:projectId`} component={Project} />
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps)(Urgent);
