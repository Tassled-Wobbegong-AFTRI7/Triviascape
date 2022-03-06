import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  page: state.trivia.page,
  username: state.trivia.username,
});

const Welcome = props => {

  return(
    <div>
      Welcome
    </div>
  );
};

export default connect(mapStateToProps, null)(Welcome);