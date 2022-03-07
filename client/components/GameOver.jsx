import React, { Component } from "react";
import {connect} from "react-redux"
import {resetGame} from "../actions/actionsCreators.js";

const mapStateToProps = (state) => ({
  points: state.trivia.points,
  questionsAnswered: state.trivia.questionsAnswered,
  username: state.trivia.username
})

const mapDispatchToProps = (dispatch) => ({
  resetGame: (username) => dispatch(resetGame(username))
})

class GameOver extends Component {              
  constructor(props) {
    super(props); 
  }
  
  render() {
    console.log("here");
    return <div className="GameOver">Game Over
    <div> YOU LOST: {this.props.username}</div>
    <div>Questions Answered: {this.props.questionsAnswered}</div>
    <div>Points: {this.props.points}</div>
    <button onClick={() => {this.props.resetGame(this.props.username)} }></button>
    </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);