import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import Questions from "./Questions";
import { addQuestions } from "../actions/actionsCreators.js";
import Timer from "../components/Timer.jsx";

const mapStateToProps = (state) => ({
  category: state.trivia.category,
  page: state.trivia.page,
  questionData: state.trivia.questionData,
  lives: state.trivia.lives,
  points: state.trivia.points,
  questionsAnswered: state.trivia.questionsAnswered,
});

const mapDispatchToProps = (dispatch) => ({
  addQuestions: (data) => dispatch(addQuestions(data)),
  // gameOver: () => dispatch(gameOver()),
});

class Game extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.page === "game")
      return (
        <div className="Game">
          <div className="gameStats">
            <div>Lives: {this.props.lives}</div>
            <div>Points: {this.props.points}</div>
          </div>
          <Questions />
          {/* <Timer /> */}
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
