import React, { Component } from "react";
import { connect } from "react-redux";
import { answerQuestion } from '../actions/actionsCreators.js'
var he = require('he');

const mapStateToProps = (state) => ({
  questionData: state.trivia.questionData,
  questionsAnswered: state.trivia.questionsAnswered
});

const mapDispatchToProps = (dispatch) => ({
   startGame: (categoryValue) => dispatch(startGame(categoryValue)),
   answerQuestion: (answer) => dispatch(answerQuestion(answer))
})


const Questions = props => {
  
  function handleAnswer(answer) {
    props.answerQuestion(answer)
  }

  let answersArr = [];
  answersArr.push()
  for(let i = 0; i < props.questionData.results[props.questionsAnswered].incorrect_answers.length+1; i++) {
     answersArr.push(<button key={i} onClick={handleAnswer}>`fake answer ${i}`</button>)
  }
  const question = he.decode(props.questionData.results[props.questionsAnswered].question)
  return(
    <div className="Questions">
      Questions rendered
      <br></br>
     {question}
     <br></br>
     {answersArr}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);