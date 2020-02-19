import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>
          Welcome{" "}{localStorage.getItem("email")}
          
        </h1>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {};
};
function mapStateToProps(state) {
  return {
    signUp: state.login.signUp,
    signIn: state.login.signIn
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
