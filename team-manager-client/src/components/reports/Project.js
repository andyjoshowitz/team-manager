import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteProject } from '../../redux/actions/projects'

class Project extends Component {

  handleOnDelete = () => {
    this.props.deleteProject(this.props.project, this.props.history)
  }


  render() {
    return (
      <div key={this.props.project.id} className="rproject-box">
        <h2>{this.props.project.title}</h2>
        <p className="description">{this.props.project.info}</p>
        {this.props.project.help_needed &&
        	<p className="flagged-red">The project creator has requested assistance</p>
        }
        {this.props.project.proj_url &&
         <div><a className="github_url" target="_blank" href={this.props.project.proj_url}>Link To Project Respository</a><br/><br/></div>
        }
        {this.props.isAdmin && this.props.project.user_email !== undefined &&
          <button onClick={this.handleOnDelete}>Delete </button>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const projects = state.projects || [];
  const project_target_id = parseInt((ownProps.match.params.projectId), 10);
  const too_high = (projects.find(project => project.id >= project_target_id) === undefined)
  const project_target = projects.find(project => project.id === project_target_id)
  console.log(too_high)
  if (project_target) {
    return { project: project_target, isAdmin: state.auth.currentUser.admin}
  } else if (too_high) {
    return { project: {title: "An Ode to the Uncreated",
	info: " One day to exist? Brimming possibilities... Or might never be"}, isAdmin: state.auth.currentUser.admin}
  } else if (!too_high) {
    return { project: {title: "An Ode to the Forgotton",
	info: "Brought low in its death, No one still remembers. Much like you, one day"}, isAdmin: state.auth.currentUser.admin}
  } else {
    return { project: {title: "Error: does not exist"}, isAdmin: state.auth.currentUser.admin}
  }
}project

export default connect(mapStateToProps, { deleteProject })(Project);
