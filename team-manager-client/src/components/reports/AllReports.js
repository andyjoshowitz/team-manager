import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import ProjectList from './ProjectList';
import project from './Project';

const AllProject = ({ match, projects }) =>
  <div>
    <div className="main">
      <h2>&nbsp;</h2>
      <ProjectList projects={projects} />
      <Route path={`${match.url}/:projectId`} component={project} />
    </div>
  </div>

const mapStateToProps = (state) => {
  return {
    reports: state.projects
  }
}

export default connect(mapStateToProps)(AllProjects);
