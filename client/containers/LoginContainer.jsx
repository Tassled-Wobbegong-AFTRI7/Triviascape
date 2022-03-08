import React, { Component } from "react";
import Login from "../components/Login.jsx";
import CreateUser from "../components/CreateUser.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  page: state.trivia.page,
});


//this is the login box displayed when first accessing the app
class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.page === "login" || this.props.page === "createUser") return (
      <div className="LoginContainer">
        <Login />
        <CreateUser />
      </div>
    );
    else return null
  }
}

export default connect(mapStateToProps, null)(LoginContainer);
