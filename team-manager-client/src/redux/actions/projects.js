import ProjectService from '../../services/ProjectService'

// ** async actions and action creators **
const prependProjects = projects => {
  return {
    type: 'SUCCESSFUL_REPORTS_FETCH',
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
    type: 'SUCCESSFUL_CREATE_REPORT',
    payload: project
  }
}

export const createProject = (project, routerHistory) => {
  return dispatch => {
    return ProjecttService.createProject(project)
      .then(project => {
        dispatch(prependProject(project));
        routerHistory.push('/projects')
      })
  }
}

const destroyProject = id => {
  return {
    type: 'SUCESSFUL_DELETE_REPORT',
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
