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
  startGame: (categoryValue, username) =>
    dispatch(startGame(categoryValue, username)),
});

const Welcome = (props) => {
  
   function handleClick(category) {

    let apiURL = `https://opentdb.com/api.php?amount=15&category=${category}&difficulty=easy`;
    
    
    fetch('/data/saveGame/loadGame', {
      method: 'POST',
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify({username: props.username}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('In the fetch data return')
        if (data === null) {
          fetch(apiURL)
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "FROM HANDLECLICK - WELCOME");
            props.addQuestions(data);
            props.startGame(category, props.username);
          })
          .catch((error) => {
            console.log("error:", error);
          });
        }
        else {
          console.log(data)
          props.loadGame(data);
        }
      })
      
  }

  return (
    <div>
      Welcome rendered
      {`Welcome ${props.username}`}
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
      <button
        onClick={() =>
          handleClick(document.getElementById("categoriesSelect").value)
        }
      >
        {" "}
        Submit
      </button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
