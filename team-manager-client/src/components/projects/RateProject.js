import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { incLikeCount } from '../../redux/actions/projects';
// import * as actions from '../../redux/actions/projects';
// import { bindActionCreators } from 'redux';

class RateProject extends Component {
  constructor(props) {
    super(props)

    this.state = {
      like_count: this.props.project.like_count || 0
    }
  }

  onLike = () => {
    // console.log("helllloooo ", fake)
    // // return (dispatch) => {
    //   return () => (this.props.incLikeCount(this.props.project.id))
    // // }
    // event.preventDefault();
    // const project = this.props.project
    this.props.project.like_count +=1
    const project = this.props.project;
    console.log(project)
    // function updateProject(project) {
    return fetch(`http://localhost:3001/api/projects/${this.props.project.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(project)
    })
    .then(() => {
      const likeCount = this.state.like_count +1;
      console.log("The Count:", likeCount);
      this.setState({like_count: likeCount})
    })
    // };


    // clean up fetch request
    // dont call function in function
    // default value for like count
    // make sure to properly

    // let project = Object.assign({}, this.props.project.like_count += 1)
    // console.log(project)
    // this.props.actions.updateProject(project, this.props.history)
    // // let count = this.state.counter
    // // this.props.updateProject(this.state, this.props.history);
    // // this.setState({
    // //   counter: count += 1
    // // })
  }

  onDislike = () => {
    // let count = this.state.counter
    // // this.props.updateProject(this.state, this.props.history);
    // this.setState({
    //   like_count: this.state.like_count - 1
    // })
    this.props.project.like_count -=1
    const project = this.props.project;
    console.log(project)
    // function updateProject(project) {
    return fetch(`http://localhost:3001/api/projects/${this.props.project.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(project)
    })
    .then(() => {
      const likeCount = this.state.like_count -1;
      console.log("The Count:", likeCount);
      this.setState({like_count: likeCount})
    })  
  }

  render() {
    return (
      <div>
        <button onClick={this.onLike}>Like</button>
        <button onClick={this.onDislike}>Dislike</button>
        <p>Overall likes: {this.state.like_count}</p>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   // return {
//   //   incLikeCount: (id) => dispatch(incLikeCount(id))
//   // }
//   // return bindActionCreators({
//   //   incLikeCount: (id) => incLikeCount(id)
//   // }, dispatch);
//   return { actions: bindActionCreators(actions, dispatch) };
// };


export default connect(null)(RateProject);
