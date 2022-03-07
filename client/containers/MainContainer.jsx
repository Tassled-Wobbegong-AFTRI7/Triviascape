import React, { Component } from "react";
import Welcome from "../components/Welcome.jsx";
import { connect } from "react-redux";
import Game from "../components/Game.jsx";

const mapStateToProps = (state) => ({
  page: state.trivia.page,
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.page, "main container render");

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
    else return null;
  }
}

export default connect(mapStateToProps, null)(MainContainer);
