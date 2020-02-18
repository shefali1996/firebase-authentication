import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Login extends Component {
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
            />
          </FormGroup>
          <Button>Submit</Button>
          <div> Don't Have an Account? <Link to="/signUp">Sign Up</Link></div>
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
      
    };
  };
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
