const API_URL = 'http://localhost:3001/api'

const ProjectService = {
  fetchProjects() {
    return fetch(`${API_URL}/projects`)
      .then(response => {
        const newResponse = response.json();
        console.log("Response!", newResponse);
        return newResponse
      })

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

  updateProject(project) {
    const request = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        project,
      })
    }
    return fetch(`${API_URL}/projects/${project.id}`, request)
      .then(response => response.json())
  },

  // incLikeCount(id) {
  //   // find project by id
  //   // increase like count by 1
  //   //  save project
  //   // return full content of project
  // }

  deleteProject(project) {
    return fetch(`${API_URL}/projects/` + project.id, {
      method: 'delete'
    })
  }
}

export default ProjectService;
