import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
      <td> {project.created_at}</td>
      <td> {project.created_at}</td>
      <td> {project.info}</td>
      <td> {project.user_email}</td>
      {project.help_needed ? (<td className="flagged-red"> yes </td>) : (<td> no </td>)}
    </tr>
    );

    return (
      <table className="projects-table">
        <tbody>
          <tr className="table-header">
            <th>Project Name</th><th>Date</th><th>Time</th><th>Info</th><th>User</th><th>Assistance needed?</th>
          </tr>
          {renderProjects}
        </tbody>
      </table>
    )
  }
}

export default ProjectList;
