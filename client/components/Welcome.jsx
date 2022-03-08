import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { startGame, addQuestions, loadGame} from "../actions/actionsCreators";

const mapStateToProps = (state) => ({
  page: state.trivia.page,
  username: state.trivia.username,
});

const mapDispatchToProps = (dispatch) => ({
  addQuestions: (data) => dispatch(addQuestions(data)),
  loadGame: (state) => dispatch(loadGame(state)),
  startGame: (categoryValue, username) => dispatch(startGame(categoryValue, username)),
});

const Welcome = (props) => {
  
  function handleClick(category) {
    let apiURL = `https://opentdb.com/api.php?amount=15&category=${category}&difficulty=easy`;
    
    //first checks for existing saved Games in database
    fetch('/data/saveGame/loadGame', {
      method: 'POST',
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify({username: props.username}),
    })
      .then((res) => res.json())
      .then((data) => {
    //if no saved games are found: fetch new game data from the API, store it in state under questionData, and start the game
    //NOTE: this pulls difficulty = "easy" questions by default. Not all question categories have an easy option which can result in a 404 error
        if (data === null) {
          fetch(apiURL)
          .then((res) => res.json())
          .then((data) => {
            props.addQuestions(data);
            props.startGame(category, props.username);
          })
          .catch((error) => {
            console.log("error:", error);
          });
        }
    //if saved game is found, load that saved game
        else {
          props.loadGame(data);
        }
      })
      
  }

  return (
    <div className='welcomeContent' >
      <div id='welcomeMessage' style={{fontSize: '25px'}} >{`Hi ${props.username}!`} 
      <br></br> 
      Welcome to Team Wobblegong's Trivia Game</div>
      <br></br> 
      <div>Select a trivia category:</div>
      <div className="categoryButtons">
        <select name="categories" id="categoriesSelect">
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Music</option>
          <option value="13">Entertainment: Musicals and Theaters</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="18">Science: Computers </option>
          <option value="19">Science: Mathematics </option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Comics</option>
          <option value="30">Science: Gadget</option>
          <option value="31">Japanese Anime & Manga</option>
          <option value="32">Cartoon & Animations</option>
          <option>History</option>
          <option>Art</option>
        </select>
        <button id="categorySubmit"
          onClick={() => handleClick(document.getElementById("categoriesSelect").value)} >
          Submit
        </button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
