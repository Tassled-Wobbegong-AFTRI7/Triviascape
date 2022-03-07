import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { answerQuestion, gameOver } from "../actions/actionsCreators.js";
var he = require("he"); //Decoding Library: to turn random strings

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
  gameOver: () => dispatch(gameOver()),
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
        console.log("cool Beans");
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }
  // useEffect(() => {
  //   if (props.lives === 0) {
  //     props.gameOver();
  //   }
  // }, []);

  let answersArr = [];
  const result = props.questionData.results[props.questionsAnswered];

  //used to randomize our potential answers since not having this here will have the answer appear as the last option.
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
  answersArr.push();
  for (let i = 0; i < potentialAnswers.length; i++) {
    console.log("result correct answer", result.correct_answer);
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
  const question = he.decode(
    props.questionData.results[props.questionsAnswered].question
  );

  function hardModeHandler() {
    for(let i = 0; i < answersArr.length; i++) {
      let button = document.getElementById(`answer${i}`)
      button.style.left = Math.random()*1000
      button.style.top = Math.random()*700
      button.style.position = 'absolute'
    }
    setInterval(() => {
      for(let i = 0; i < answersArr.length; i++) {
        let button = document.getElementById(`answer${i}`)
        button.style.left = parseInt(button.style.left) + (Math.round(Math.random()) ? 10: -10)
        button.style.top = parseInt(button.style.left)+ (Math.round(Math.random()) ? 10: -10)
        button.style.position = 'absolute'
      };
    }, 100);

  }

  return (
    <div>
      <div className="Questions" style={{fontSize: "25px"}} >
        <div style={{fontSize: "35px", fontWeight: "bold"}} > Question #{props.questionsAnswered}: </div>
        <br></br>
        {question}
        <br></br>
        {answersArr}
      </div>
      <button onClick={() => saveGame()}>Save Game</button>
      <button onClick={() => hardModeHandler()}>Hard Mode</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
