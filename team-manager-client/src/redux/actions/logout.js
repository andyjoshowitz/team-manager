function receiveLogout() {
  return {
    type: 'LOGOUT_SUCCESS',
    isAuthenticating: false,
    isAuthenticated: false
  }
}

export default function logoutUser() {
  return dispatch => {
    localStorage.removeItem('team_manager.token')
    localStorage.removeItem('team_manager.admin')
    localStorage.removeItem('team_manager.email')
    dispatch(receiveLogout())
  }
}
