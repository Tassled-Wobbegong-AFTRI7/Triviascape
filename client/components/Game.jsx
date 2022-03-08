import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import Questions from "./Questions";
import { addQuestions } from "../actions/actionsCreators.js";
import Timer from "../components/Timer.jsx";

const mapStateToProps = (state) => ({
  page: state.trivia.page,
  lives: state.trivia.lives,
  points: state.trivia.points,
});

const mapDispatchToProps = (dispatch) => ({
  addQuestions: (data) => dispatch(addQuestions(data)),
});


//renders the Game page if page state is "game"
let Game = (props) => {
  if (props.page === "game") 
    return (
      <div className="Game">
        <div className="gameStats">
          <div>Lives: {props.lives}</div>
          <div>Points: {props.points}</div>
        </div>
        <Questions />
        {/* <Timer /> */}
      </div>
    );
  else return null;
};  

export default connect(mapStateToProps, mapDispatchToProps)(Game);
