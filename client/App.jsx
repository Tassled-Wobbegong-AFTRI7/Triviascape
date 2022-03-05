import React, { Component } from "react";
import { connect } from "react-redux";
import LoginContainer from "./containers/LoginContainer.jsx";

const mapStateToProps = (state) => ({
  test: state.trivia.test,
});

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <LoginContainer />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);
