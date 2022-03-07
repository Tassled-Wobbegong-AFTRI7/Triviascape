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
    return <div className="GameOver">Game Over
    <div> YOU LOST: {this.props.username}</div>
    <div>Questions Answered: {this.props.questionsAnswered}</div>
    <div>Points: {this.props.points}</div>
    <button onClick={() => {this.props.resetGame(this.props.username)} }>Try Again</button>
    <img src="https://o.dlf.pt/dfpng/smallpng/472-4721713_dead-fish-clipart-clip-art-library-library-cartoon.png" style={{width: '80%'}} />
    </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);