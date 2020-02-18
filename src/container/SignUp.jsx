import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import {connect} from 'react-redux'
import * as actions from '../redux/actions'

class SignUp extends Component {
    state={
        email:"",
        password:""
    }
onSubmit=(evt)=>{
    evt.preventDefault();
    console.log(this.state.email,"lll")
    this.props.doSignUp(this.state.email,this.state.password)
}
  render() {
    return (
      <div>
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
              onChange={(e)=>{this.setState({email:e.target.value})}}
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
                })
              }}
            />
          </FormGroup>
          <Button type ="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      
    };
  }
  const mapDispatchToProps = dispatch => {
    return {
        doSignUp: (email,password) => {
            return dispatch(actions.doSignUpRequest(email,password));
          },
    };
  };
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUp)
