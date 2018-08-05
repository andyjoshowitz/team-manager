export default function projectsReducer(state = [], action){
  switch(action.type) {
    case 'SUCCESSFUL_PROJECTS_FETCH':
      return action.projects
    case 'SUCCESSFUL_CREATE_PROJECT':
      let project = Object.assign({}, action.payload)
      return state.concat(project)
    case 'SUCESSFUL_DELETE_PROJECT':
      return state.filter(project => project.id !== action.id)
    case 'EDIT_PROJECT_SUCCEEDED':
      return state.map(project => {
        project.id === action.project.id
        ? Object.assign({}, ...project, action.project)
        : project
      })
      // filter through projects
      // passing in updated project action.payload.project
      // conditional  - if the project from state.map has id = to action.id, then return the action.payload.project
      // else return redux store project (project)
    default:
      return state;
  }
}
