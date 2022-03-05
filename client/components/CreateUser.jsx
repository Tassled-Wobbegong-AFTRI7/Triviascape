import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  test: state.trivia.test,
  create: state.trivia.create,
});

class CreateUser extends Component {
  constructor(props) {
    super(props);
  }
  handleSubmit(e) {
    let submitData;
    const formData = new FormData(e.currentTarget);
    for (let [key, value] of formData.entries()) submitData[key] = value;

    fetch("/createUser", {
      method: "POST",
      headers: { "Content-Type": Application / JSON },
      body: JSON.stringify({
        username: submitData.username,
        password: submitData.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("User created succesfully");
      })
      .catch((error) => {
        console.log("fetch failed");
      });
  }

  render() {
    console.log(this.props);
    console.log(this.props.create);
    if (this.props.create === "createUser")
      return (
        <div>
          <form
            onSubmit={(e) => {
              this.handleSubmit(e);
            }}
          >
            <label htmlFor="username"> </label>
            <label htmlFor="password"> </label>

            <input type="textbox" id="username" name="username"></input>
            <input type="textbox" id="password" name="password"></input>
            <input type="submit" value="Create Account" />
          </form>
        </div>
      );
    else return <div>rendered createUser else{this.props.create}</div>;
  }
}

export default connect(mapStateToProps, null)(CreateUser);
