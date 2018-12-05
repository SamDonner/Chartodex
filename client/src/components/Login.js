import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Login extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input className="login-input" type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input className="login-input" type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        <Button className="login-button">Login</Button>
      </Form>
    );
  }
}