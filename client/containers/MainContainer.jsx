import React, { Component } from "react";
import Welcome from "../components/Welcome.jsx";
import { connect } from "react-redux";
import Game from "../components/Game.jsx";
import GameOver from "../components/GameOver.jsx";

const mapStateToProps = (state) => ({
  page: state.trivia.page,
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  /*Here, we are changing pages based on a state change occuring from our triviaReducer. We did this to further cement redux knowledge, but 
    it probably makes more sense to use react routers, navigate to, or link. Just a suggestion */

  render() {
    if (this.props.page === "welcome")
      return (
        <div className="MainContainer">
          <Welcome />
        </div>
      );
    else if (this.props.page === "game")
      return (
        <div className="MainContainer">
          <Game />
        </div>
      );
    else if (this.props.page === "gameOver")
      return (
        <div className="MainContainer">
          <GameOver />
        </div>
      );
    else return null;
  }
}

export default connect(mapStateToProps, null)(MainContainer);
