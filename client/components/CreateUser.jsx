import React, { Component } from "react";
import { connect } from "react-redux";
import { pageChange } from "../actions/actionsCreators.js";

const mapStateToProps = (state) => ({
  test: state.trivia.test,
  page: state.trivia.page,
});

const mapDispatchToProps = (dispatch) => ({
  pageChange: () => dispatch(pageChange("login")),
});

class CreateUser extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    let submitData = {};
    const formData = new FormData(e.currentTarget);
    e.preventDefault();
    for (let [key, value] of formData.entries()) submitData[key] = value;
    this.props.pageChange();

    fetch("/data/login/createUser", {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify({ ...submitData }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("User created succesfully:");
        console.log(data);
        this.props.pageChange();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
<<<<<<< HEAD
    if (this.props.page === "createUser") return (
        <div className="CreateUserContent" style={{fontSize: "20px"}}>
          Create an Account:
          <br></br>
          <br></br>
          <form id={'createUserForm'} onSubmit={(e) => { this.handleSubmit(e)}} >
            <label htmlFor="username"> Username </label>
=======
    if (this.props.page === "createUser")
      return (
        <div>
          Create an Account:
          <form
            onSubmit={(e) => {
              this.handleSubmit(e);
            }}
          >
            <label htmlFor="username"> </label>
            <label htmlFor="password"> </label>
>>>>>>> main
            <input type="textbox" id="username" name="username"></input>
            <br></br>
            <label htmlFor="password"> Password </label>
            <input type="textbox" id="password" name="password"></input>
            <br></br>
            <input type="submit" value="Create Account" />
          </form>
        </div>
      );
    else return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
