import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import RateProject from './RateProject'

class ProjectList extends Component {


  render() {
    const sorted_projects = this.props.projects.sort(function(a,b) {
      let timeA = new Date(a.created_at);
      let timeB = new Date(b.created_at);
      if(timeA < timeB) return 1;
      if(timeA > timeB) return -1;
      return 0;
    })
    const renderProjects = sorted_projects.map(project =>
    <tr key={project.id} className="table-row"  >
      <td> <Link to={`/projects/${project.id}`}><h4 >{project.title}</h4></Link> </td>
      <td> {project.created_at.substring(0, 10)}</td>
      <td> {project.created_at.substring(11, 19)}</td>
      <td> {project.info}</td>
      <td> {project.user_email}</td>
      {project.help_needed ? (<td className="flagged-red"> yes </td>) : (<td> no </td>)}
      <td>
        <RateProject project={project} />
      </td>
    </tr>
    );

    // addLike = event => {
    //   event.preventDefault();
    //   let project = Object.assign({}, this.props.project, this.props.project.counter += 1)
    //   this.props.actions.updateProject(project, this.props.project.id);
    // }

    return (
      <table className="projects-table">
        <tbody>
          <tr className="table-header">
            <th>Project Name</th><th>Date</th><th>Time</th><th>Info</th><th>User</th><th>Need Help?</th><th>Rate</th>
          </tr>
          {renderProjects}
        </tbody>
      </table>
    )
  };

}

// each item has its own like count, button increases link count individually
// once last step is down, then work on getting it presist to the db

export default ProjectList;
