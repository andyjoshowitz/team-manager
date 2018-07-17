export default function projects(state = [], action){
  switch(action.type) {
    case 'SUCCESSFUL_PROJECTS_FETCH':
      return action.projects
    case 'SUCCESSFUL_CREATE_PROJECT':
      let project = Object.assign({}, action.payload)
      return state.concat(project)
    case 'SUCESSFUL_DELETE_PROJECT':
      return state.filter(project => project.id !== action.id)
    // case 'UPDATE_PROJECT':
    //   return project
    default:
      return state;
  }
}
