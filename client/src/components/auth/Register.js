import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    }
  }
  render() {
    return (
      <form>
        <div className="form-group">
          <input 
            type="text" 
            className="form-control" 
            id="inputCity" 
            placeholder="Name"/>
        </div>
        <div className="form-group">
          <input 
            type="email" 
            className="form-control" 
            id="inputEmail" 
            placeholder="Email"/>
        </div>
        <div className="form-group">
          <input 
            type="password" 
            className="form-control" 
            id="inputPassword" 
            placeholder="Password"/>
        </div>
        
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
      </form>
    )
  }
}
export default Register;