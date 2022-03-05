import React, { Component } from "react";
import { pageChange } from "../actions/actionsCreators.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  test: state.trivia.test,
  page: state.trivia.page,
});

const mapDispatchToProps = (dispatch) => ({
  pageChange: (value) => dispatch(pageChange(value)),
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
    console.log(submitData);
    this.props.pageChange('welcome')

    // fetch("/data/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "Application/JSON" },
    //   body: JSON.stringify({
    //     username: submitData.username,
    //     password: submitData.password,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //      this.props.welcomeUser(data)
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  render() {
    if (this.props.page === "login")
      return (
        <div>
          Login:
          <form
            onSubmit={(e) => {
              this.handleSubmit(e);
            }}
          >
            <label htmlFor="username"> </label>
            <label htmlFor="password"> </label>

            <input type="textbox" id="username" name="username"></input>
            <input type="textbox" id="password" name="password"></input>
            <input type="submit" value="Login" />
          </form>
          <button onClick={() => this.props.pageChange('createUser')}>Create an Account</button>
        </div>
      );
    else return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
