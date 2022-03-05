import React, { Component } from "react";
import Login from "../components/Login.jsx";
import CreateUser from "../components/CreateUser.jsx";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Login />
        <CreateUser />
      </div>
    );
  }
}

export default LoginContainer;
