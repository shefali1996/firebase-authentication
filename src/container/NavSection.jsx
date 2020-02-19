import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import * as actions from "../redux/actions";
import { withRouter } from "react-router";

class NavSection extends Component {
 
  doSignOut = () => {
    localStorage.clear()
    this.props.doSignOut();
    
    this.props.history.push("/");
   
  };
  render() {
    return (
      <div className="nav-section py-3 px-5">
        {(this.props.signUp &&
          this.props.signUp.data &&
          this.props.signUp.data.refreshToken) ||
        (this.props.signIn &&
          this.props.signIn.data &&
          this.props.signIn.data.refreshToken) ||(localStorage.getItem("token")) ? (
          <Link onClick={this.doSignOut}>LogOut</Link>
        ) : (
          <Link to="/">Login</Link>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    signUp: state.login.signUp,
    signIn: state.login.signIn
  };
}
const mapDispatchToProps = dispatch => {
  return {
    doSignOut: () => {
      return dispatch(actions.doSignOutRequest());
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavSection)
);
