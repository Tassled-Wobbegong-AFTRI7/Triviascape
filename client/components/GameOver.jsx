import React, { Component } from "react";
import { connect } from "react-redux";
import { resetGame } from "../actions/actionsCreators.js";

//parts of state that we diplay to the user in render when they lose the game.
const mapStateToProps = (state) => ({
  points: state.trivia.points,
  questionsAnswered: state.trivia.questionsAnswered,
  username: state.trivia.username,
});

const mapDispatchToProps = (dispatch) => ({
  //fires off the resetGame action creator that brings everything back to initial state and redirects to welcome page
  resetGame: (username) => dispatch(resetGame(username)),
});

let GameOver = (props) => {
  return (
    <div className="GameOver">
      Game Over
      <div> YOU LOST: {props.username}</div>
      <div>Questions Answered: {props.questionsAnswered}</div>
      <div>Points: {props.points}</div>

      <button onClick={() => { props.resetGame(props.username) }} >
      Try Again
      </button>

      <img
        src="https://o.dlf.pt/dfpng/smallpng/472-4721713_dead-fish-clipart-clip-art-library-library-cartoon.png"
        style={{ width: "80%" }}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
