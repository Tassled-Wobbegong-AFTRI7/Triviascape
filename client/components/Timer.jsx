import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  page: state.trivia.page,
  time: state.trivia.time,
});

const Timer = (props) => {
  return (
    <div>Timer: {props.time} </div>
  )
}

export default connect(mapStateToProps, null)(Timer);
