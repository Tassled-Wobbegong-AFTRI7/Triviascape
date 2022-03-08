import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { answerQuestion, gameOver, timer } from "../actions/actionsCreators.js";
var he = require("he"); //'he' is a library we installed to decode html entity codes

const mapStateToProps = (state) => ({
  playerState: state.trivia,
  questionData: state.trivia.questionData,
  questionsAnswered: state.trivia.questionsAnswered,
  lives: state.trivia.lives,
});

const mapDispatchToProps = (dispatch) => ({
  startGame: (categoryValue) => dispatch(startGame(categoryValue)),
  answerQuestion: (answer, correctAnswer) =>
    dispatch(answerQuestion(answer, correctAnswer)),
  // gameOver: () => dispatch(gameOver()),
});

const Questions = (props) => {
  function handleAnswer(answer, correctAnswer) {
    props.answerQuestion(answer, correctAnswer);
  }

  function saveGame() {
    fetch("/data/saveGame", {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(props.playerState),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }
  //setting result equal to the correct question we are on. Much easier to see this if you do a query search on Postman
  //if you paste:  https://opentdb.com/api.php?amount=10  You can see how the data looks and will have a better picture on what result is representing in this case

  const result = props.questionData.results[props.questionsAnswered];

  //Algorithim used to randomize our potential answers since not having this here will have the answer appear as the last option. Not super efficient, but seems to work.
  function randomize(answerArray) {
    const newSet = new Set();

    while (newSet.size < answerArray.length) {
      const index = Math.floor(Math.random() * answerArray.length);
      newSet.add(answerArray[index]);
    }
    const randomOrder = [...newSet];
    return randomOrder;
  }
  //applying the randomize array function to our potential answers
  const potentialAnswers = randomize(
    result.incorrect_answers.concat(result.correct_answer)
  );
  //creating an answer array to push potential answers (buttons with the key) to the
  let answersArr = [];
  answersArr.push();
  for (let i = 0; i < potentialAnswers.length; i++) {
    answersArr.push(
      <button
        id={`answer${i}`}
        key={i}
        onClick={() => {
          handleAnswer(potentialAnswers[i], result.correct_answer);
        }}
      >
        {he.decode(potentialAnswers[i])}
      </button>
    );
  }
  //'he' is a library we installed to decode html entity codes
  const question = he.decode(
    props.questionData.results[props.questionsAnswered].question
  );
  let intervalTimer;
  function hardModeHandler() {
    intervalTimer = setInterval(() => {
      for (let i = 0; i < answersArr.length; i++) {
        let button = document.getElementById(`answer${i}`);
        button.style.left = Math.random() * 1000;
        button.style.top = Math.random() * 700;
        button.style.position = "absolute";
      }
    }, 1000);
  }

  function undoHardModeHandler() {
    clearInterval(intervalTimer);
    for (let i = 0; i < answersArr.length; i++) {
      let button = document.getElementById(`answer${i}`);
      button.style.removeProperty("left");
      button.style.removeProperty("top");
      button.style.removeProperty("position");
    }
  }

  return (
    <div>
      <div className="Questions" style={{ fontSize: "25px" }}>
        <div style={{ fontSize: "35px", fontWeight: "bold" }}>
          {" "}
          Question #{props.questionsAnswered}:{" "}
        </div>
        <br></br>
        {question}
        <br></br>
        {answersArr}
      </div>
      <button onClick={() => saveGame()}>Save Game</button>
      <button onClick={() => hardModeHandler()}>Hard Mode</button>
      <button onClick={() => undoHardModeHandler()}>Undo Hard Mode</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
