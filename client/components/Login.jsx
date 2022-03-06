import React, { Component } from "react";
import { pageChange } from "../actions/actionsCreators.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  test: state.trivia.test,
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
    const formData = new FormData(e.currentTarget);
    e.preventDefault();
    for (let [key, value] of formData.entries()) submitData[key] = value;
    // console.log(submitData);
    this.props.pageChange('welcome', 'LOU')

  //   fetch("/data/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "Application/JSON" },
  //     body: JSON.stringify({
  //       username: submitData.username,
  //       password: submitData.password,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //       if(data !== null) return this.props.pageChange('welcome', data.username)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  }

  render() {
    if (this.props.page === "login")
      return (
        <div className="loginContent">
          Welcome! Login here:
          <form onSubmit={(e) => { this.handleSubmit(e) }} >
            <label htmlFor="username"> Username </label>
            <input type="textbox" id="username" name="username"></input>
            <br></br>
            <label htmlFor="password"> Password </label>
            <input type="textbox" id="password" name="password"></input>
            <br></br>
            <input type="submit" value="Login" />
          </form>
          <button onClick={() => this.props.pageChange('createUser')}>Create an Account</button>
        </div>
      );
    else return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
