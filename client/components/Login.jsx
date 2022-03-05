import React, { Component } from "react";
import { createUser } from "../actions/actionsCreators.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  test: state.trivia.test,
  create: state.trivia.create,
});

const mapDispatchToProps = (dispatch) => ({
  createUser: () => dispatch(createUser()),
});

// const mapDispatchToProps = {
//   createUser,
// };

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

    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": Application / JSON },
    //   body: JSON.stringify({
    //     username: submitData.username,
    //     password: submitData.password,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("Login succesful");
    //   })
    //   .catch((error) => {
    //     console.log("fetch failed");
    //   });
  }

  render() {
    if (this.props.create === "login")
      return (
        <div>
          saved!
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
          <button onClick={() => this.props.createUser()}>Create</button>
          <div>{this.props.create}</div>
        </div>
      );
    else return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
