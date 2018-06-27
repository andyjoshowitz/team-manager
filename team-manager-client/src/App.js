// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;


import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import AddProject from './components/projects/AddProject';
import NoPermission from './components/users/NoPermission';
import AllProjects from './components/projects/AllProjects';
import Project from './components/projects/Project';
import Login from './components/users/Login';
import Oops from './components/users/Oops';
import Logout from './components/users/Logout';
import NotFound from './components/NotFound';
import Deleted from './components/Deleted';
import Signup from './components/users/Signup';
import Urgent from './components/projects/Urgent';
import Secret from './components/Secret';
import Welcome from './components/Welcome';
import Home from './components/Home';
import { fetchProjects } from './redux/actions/projects'


import './App.css';
class App extends Component {
  constructor() {
    super()
    this.ourGreatSecret = this.ourGreatSecret.bind(this)
    this.state = { title: "Group Manager" };
  }

  ourGreatSecret(e){
    e.preventDefault()
    let secrets = ["Meta Labor Locator", "Boar Mate Collator", "A Tame Collar Robot", "Meat Altar Bro Loco",
    "Arab Color Tea Molt", "Cobra, Atoll or Meat?", "Lab Coral Mare Toot", "Colt Bola Ate Armor","Boat Corral to Meal",
    "Abort Amoral Eclat","A Motorboat Caller", "Bromate Allocator", "Arboreal Tact Loom", "Clam Realtor Taboo",
    "Lateral Robot Coma", "Carrot Ablate Loom" ]
    let secret = secrets[Math.floor(Math.random()*secrets.length)]
    this.setState({title: secret})
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    return (
     <Router>
        <div className="App">
          <div className="header">
          <div className="navbar">

            <div className="user-admin">{this.props.isAdmin && "Logged in as Admin"} &nbsp; </div>
              {!this.props.isAuthenticated &&
                <span>
                  <NavLink className="navlink" to="/login">Log In</NavLink> |
                  <NavLink className="navlink" to="/signup">Sign Up</NavLink>
                </span>
              }
              {this.props.isAuthenticated &&
                <span>
                  <NavLink className="navlink" to="/">Home</NavLink> |
                  <NavLink className="navlink" to="/projects">All Projects</NavLink> |
                  <NavLink className="navlink" to="/urgent">Urgent</NavLink> |
                  <NavLink className="navlink" to="/projects/new">Submit Project</NavLink> |
                  <NavLink className="navlink" to="/logout">Logout</NavLink>
                </span>
              }
            </div>


            <h1 className="title">{this.state.title}</h1>
            <p className="catch-phrase">Everyone is a Project Manager</p>
          </div>
          <div className="wrapper">
          <Switch>
            <Route exact path="/" render={() => (
              !this.props.isAuthenticated ? (
                <Redirect to='/welcome'/>
              ) : (
                <Route render={(props) => (<Home userEmail={this.props.userEmail}/>)}/>
              )
            )}/>
             <Route exact path="/projects" render={() => (
              !this.props.isAuthenticated ? (
                <Redirect to='/oops'/>
              ) : (
                <Route component={AllProjects} />
              )
            )}/>
            <Route exact path="/urgent" render={() => (
              !this.props.isAuthenticated ? (
                <Redirect to='/oops'/>
              ) : (
                <Route component={Urgent} />
              )
            )}/>
            <Route exact path="/projects/new" render={() => (
              !this.props.isAuthenticated ? (
                <Redirect to='/oops'/>
              ) : (
                <Route component={AddProject} />
              )
            )}/>
            <Route exact path="/super-secret" render={() => (
              !this.props.isAdmin ? (
                <Redirect to='/NoPermission'/>
              ) : (
                <Route render={(props) => (<Secret {...props} ourGreatSecret={this.ourGreatSecret}/>)}/>
              )
            )}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/deleted" component={Deleted} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/NoPermission" component={NoPermission} />
            <Route exact path="/oops" component={Oops} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/projects/:projectId" render={() => (
              !this.props.isAuthenticated ? (
                <Redirect to='/oops'/>
              ) : (
                <Route component={Project} />
              )
            )}/>
            <Route component={NotFound} />
          </Switch>
          </div>

          <div className="footer">
            <p>Copyright 2017. <NavLink className="hidden-link" to="/super-secret">All</NavLink> Rights Reserved.</p>
          </div>
        </div>
     </Router>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects,
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: state.auth.currentUser.admin,
  userEmail: state.auth.currentUser.email
})

export default connect(mapStateToProps, { fetchProjects })(App);
