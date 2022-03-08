import React, { Component } from "react";
import { connect } from "react-redux";
import LoginContainer from "./containers/LoginContainer.jsx";
import MainContainer from "./containers/MainContainer.jsx";

const mapStateToProps = (state) => ({});

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="centralContainer" >
        <LoginContainer />
        <MainContainer />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);
