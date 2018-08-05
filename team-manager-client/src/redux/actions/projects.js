import ProjectService from '../../services/ProjectService'

// ** async actions and action creators **
const prependProjects = projects => {
  return {
    type: 'SUCCESSFUL_PROJECTS_FETCH',
    projects: projects
  }
}

export const fetchProjects = () => {
  return dispatch => {
    ProjectService.fetchProjects()
      .then(projects => {
        dispatch(prependProjects(projects))
      })
  }
}

const prependProject = project => {
  return {
    type: 'SUCCESSFUL_CREATE_PROJECT',
    payload: project
  }
}

export const createProject = (project, routerHistory) => {
  return dispatch => {
    return ProjectService.createProject(project)
      .then(project => {
        dispatch(prependProject(project));
        routerHistory.push('/projects')
      })
  }
}

// export const incLikeCount = id => {
//   return dispatch => {
//     return ProjectService.incLikeCount(id)
//     .then(project => {
//       dispatch(updateProject(project));
//     })
//   }
// }


const editProject = project => {
  return {
    type: 'UPDATE_PROJECT_SUCCEEDED',
    payload: project
  };
}

export const updateProject = (project) => {
  return dispatch => {
    return ProjectService.updateProject(project)
      .then(project => {
        dispatch(editProject(project));
        // console.log("hello");
        // routerHistory.push('/projects')
      })
  }
};


const destroyProject = id => {
  return {
    type: 'SUCESSFUL_DELETE_PROJECT',
    id: id
  }
}

export const deleteProject = (project, routerHistory) => {
  const id = project.id
  return dispatch => {
    return ProjectService.deleteProject(project)
      .then(project => {
        dispatch(destroyProject(id))
        routerHistory.push('/deleted');
      })
  }
}
