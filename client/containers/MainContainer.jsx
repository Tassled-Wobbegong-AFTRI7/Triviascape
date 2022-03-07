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
  render() {
<<<<<<< HEAD

=======
>>>>>>> 33446f78f98a632074767c2735b537e58dcd9de3
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
