import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button,Alert } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../redux/actions";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  onSubmit = evt => {
    evt.preventDefault();
    this.props.doSignIn({
      email: this.state.email,
      password: this.state.password
    });
  };
  componentDidUpdate(){
    if (
      this.props.signIn &&
      this.props.signIn.data &&
      this.props.signIn.data.refreshToken
    ) {
      this.props.history.push("/home");
    }
  }
  componentDidMount(){
    if(localStorage.getItem('token')){
      this.props.history.push("/home")
    }
  }
  render() {
    return (
      <div className="p-5">
        <h1 className="text-center">Login</h1>
        {this.props.status && <div><Alert fade={false} className="alert-transparent" color="danger">{this.props.status}</Alert></div>}
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
              value={this.state.email}
              onChange={(e)=>{this.setState({
                email:e.target.value
              })}}
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
              onChange={(e)=>{this.setState({
                password:e.target.value
              })}}
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
          <div className="py-3">
            {" "}
            Don't Have an Account? <Link to="/signUp">Sign Up</Link>
          </div>
        </Form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    signIn:state.login.signIn,
    status:state.login.status
  };
}
const mapDispatchToProps = dispatch => {
  return {
    doSignIn: (data) => {
      return dispatch(actions.doSignInRequest(data));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
