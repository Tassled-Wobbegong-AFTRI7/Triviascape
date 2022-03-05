import React, { Component } from "react";
import Welcome from '../components/Welcome.jsx';
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  page: state.trivia.page,
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.page === 'welcome' || this.props.page === 'main') return (
      <div>
        <Welcome />
        main container rendered
      </div>
    );
    else return null
  }
}

export default connect(mapStateToProps, null)(MainContainer);
