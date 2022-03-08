import React, { Component } from "react";
import { pageChange } from "../actions/actionsCreators.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  page: state.trivia.page,
});

const mapDispatchToProps = (dispatch) => ({
  pageChange: (value, username) => dispatch(pageChange(value, username)),
});

class Login extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    let submitData = {};
    //creates a new form data object that we populate from key-value pairs in the form event.
    const formData = new FormData(e.currentTarget);
    //prevent refresh
    e.preventDefault();
    for (let [key, value] of formData.entries()) submitData[key] = value;

    //fetch request to verify if username and password matches what we have in the database.
    fetch("/data/login", {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify({
        username: submitData.username,
        password: submitData.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //if we don't receive a null object, we are going to route to the page welcome by dispatching the action created by the page Change action creator
        if (data !== null)
          return this.props.pageChange("welcome", data.username);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.props.page === "login")
      return (
        <div className="loginContent" style={{ fontSize: "20px" }}>
          Welcome!
          <br></br>
          Login here:
          <br></br>
          <br></br>
          <form
            id="loginForm"
            onSubmit={(e) => {
              this.handleSubmit(e);
            }}
          >
            <label htmlFor="username"> Username </label>
            <input type="textbox" id="username" name="username"></input>
            <br></br>
            <label htmlFor="password"> Password </label>
            <input type="textbox" id="password" name="password"></input>
            <br></br>
            <input id="loginWelcomepg" type="submit" value="Login" />
            <button
              id="createUserWelcomepg"
              onClick={() => this.props.pageChange("createUser")} //triggers the createUser action if the create an account button is clicked.
            >
              Create an Account
            </button>
          </form>
        </div>
      );
    else return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
