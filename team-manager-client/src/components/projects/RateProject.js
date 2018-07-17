import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { incLikeCount } from '../../redux/actions/projects';
import * as actions from '../actions/projects';
import { bindActionCreators } from 'redux';

class RateProject extends Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   counter: 0
    // }
  }

  onLike = (fake) => {
    console.log("helllloooo ", fake)
    // return (dispatch) => {
      return () => fake(this.props.incLikeCount(this.props.project.id))
    // }
    // let count = this.state.counter
    // this.props.updateProject(this.state, this.props.history);
    // this.setState({
    //   counter: count += 1
    // })
  }

  onDislike = () => {
    let count = this.state.counter
    // this.props.updateProject(this.state, this.props.history);
    this.setState({
      counter: count -= 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.onLike}>Like</button>
        <button onClick={this.onDislike}>Dislike</button>
        <p>Overall likes: {this.props.response.like_count || 0}</p>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  // return {
  //   incLikeCount: (id) => dispatch(incLikeCount(id))
  // }
  // return bindActionCreators({
  //   incLikeCount: (id) => incLikeCount(id)
  // }, dispatch);
  return { actions: bindActionCreators(actions, dispatch) }
}


export default connect( null, mapDispatchToProps)(RateProject);
