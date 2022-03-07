import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import Questions from "./Questions";
import { addQuestions } from "../actions/actionsCreators.js";
import GameOver from "../components/Game.jsx";

const mapStateToProps = (state) => ({
  category: state.trivia.category,
  page: state.trivia.page,
  questionData: state.trivia.questionData,
  lives: state.trivia.lives,
  points: state.trivia.points,
  questionsAnswered: state.trivia.questionsAnswered
});

const mapDispatchToProps = (dispatch) => ({
  addQuestions: (data) => dispatch(addQuestions(data)),
});

class Game extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("game re-rendered");
    if (this.props.page === "game")
      return (
        <div className="Game">
          <div className="gameStats">
            <div>Lives: {this.props.lives}</div>
            <div>Points: {this.props.points}</div>
          </div>
          <Questions />
        </div>
      );
    else if (this.props.page === "gameOver")
      return (
        <div className="MainContainer">
          <GameOver />
        </div>
      );
  }
}

// const Game = props => {

//   useEffect(() => {

// let apiURL = `https://opentdb.com/api.php?amount=15&category=${props.category}&difficulty=easy`

//     fetch(apiURL)
//       .then((res) => res.json())
//       .then((data) => {
//         props.addQuestions(data)
//       })
//       .catch((error) => {
//         console.log('error:', error);
//       });
//   }, []);

//   if (props.page === 'game') return(
//     <div className="Game">
//       Game Page Rendered
//       <Questions />
//     </div>
//   );
//   else return null
// };

export default connect(mapStateToProps, mapDispatchToProps)(Game);
