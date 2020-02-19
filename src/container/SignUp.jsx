import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button,Alert } from "reactstrap";
import { connect } from "react-redux";
import * as actions from "../redux/actions";

class SignUp extends Component {
  state = {
    email: "",
    password: ""
  };
  onSubmit = evt => {
    evt.preventDefault();
    this.props.doSignUp({
      email: this.state.email,
      password: this.state.password
    });
  };
  componentDidMount(){
    if(localStorage.getItem('token')){
      this.props.history.push("/home")
    }
  }

  componentDidUpdate(prevProps) {
    if (
      (this.props.signUp &&
      this.props.signUp.data &&
      this.props.signUp.data.refreshToken)
    ) {
      this.props.history.push("/home");
    }
  }
  render() {
    return (
      <div className="p-5">
        <h1 className="text-center">Sign Up</h1>
        {this.props.status && <div><Alert fade={false} className="alert-transparent" color="danger">{this.props.status}</Alert></div>}
        <Form onSubmit={this.onSubmit}>
          {/* <FormGroup>
            <Label for="FirstName">First Name</Label>
            <Input
              type="text"
              name="firstName"
              id="FirstName"
              placeholder="First Name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="LastName">Last Name</Label>
            <Input
              type="text"
              name="lastName"
              id="LastName"
              placeholder="Last Name"
            />
          </FormGroup> */}
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
              value={this.state.email}
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
              value={this.state.password}
              onChange={e => {
                this.setState({
                  password: e.target.value
                });
              }}
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    signUp: state.login.signUp,
    status:state.login.status
  };
}
const mapDispatchToProps = dispatch => {
  return {
    doSignUp: data => {
      return dispatch(actions.doSignUpRequest(data));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
