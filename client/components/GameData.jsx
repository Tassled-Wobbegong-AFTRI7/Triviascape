import React, { Component } from "react";
import Welcome from '../components/Welcome.jsx';
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  page: state.trivia.page,
});

class Questions extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.page === 'welcome' || this.props.page === 'game') return (
      <div className="MainContainer" >
        {/* <Welcome /> */}
        main container rendered
        {/* <Game /> */}
      </div>
    );
    else return null
  }
}

export default connect(mapStateToProps, null)(Questions);
