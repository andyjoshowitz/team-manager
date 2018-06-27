import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../redux/actions/projects';

class AddProject extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      help_needed: false,
      info: '',
      proj_url: '',
      user_email: localStorage.getItem('team_manager.email')
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleRadio = event => {
    const needsHelp = event.currentTarget.value === "true" ? true: false;
    this.setState({
      help_needed: needsHelp
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createReport(this.state, this.props.history);
    this.setState({
      title: '',
      help_needed: false,
      info: '',
      proj_url: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit} className="project-form">
        <h2 className="project-form-title">Project Form</h2>
        <div>
          <label htmlFor="project_title">Project Name</label><br/>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleOnChange}
            required
            />
        </div><br/>

        <div>
          <label htmlFor="project_description">Info</label><br/>
          <textarea
            name="info"
            value={this.state.info}
            onChange={this.handleOnChange}
            required
            />
        </div><br/>

        <div>
          <label htmlFor="project_proj_url">Proj URL (optional)</label><br/>
          <input
            type="url"
            name="proj_url"
            value={this.state.proj_url}
            onChange={this.handleOnChange}
            />
        </div><br/>

	    <div>
            <label htmlFor="featured">Need Assistance?</label>
            <input type="radio" name="featured" value="true" onClick={this.handleRadio} /> Yes
            <input type="radio" name="featured" value="false" onClick={this.handleRadio} /> No
	    </div><br/><br/>

        <button>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    admin: state.auth.currentUser.admin
  }
}

export default connect(mapStateToProps, { createProject })(AddProject);
