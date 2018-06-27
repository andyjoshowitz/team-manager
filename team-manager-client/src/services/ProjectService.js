const API_URL = 'http://localhost:3001/api'

const ProjectService = {
  fetchProjects() {
    return fetch(`${API_URL}/reports`)
      .then(response => response.json())
  },

  createProject(project) {
    const request = {
      method: 'POST',
      body: JSON.stringify({
        project: project
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }

    return fetch(`${API_URL}/projects`, request)
      .then(response => response.json())
  },

  deleteProject(project) {
    return fetch(`${API_URL}/projects/` + project.id, {
      method: 'delete'
    })
  }
}

export default ProjectService;
