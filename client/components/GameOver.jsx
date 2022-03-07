import React, { Component } from "react";
class GameOver extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("here");
    return <div className="GameOver">Game Over</div>;
  }
}

export default GameOver;
