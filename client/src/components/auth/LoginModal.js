import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';


class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: true,
      status: 'Member Login'
    }
  }

  toggle = () => {
    this.setState({ loginForm: !this.state.loginForm })
    !this.state.loginForm ? this.setState({status: 'Member Login'}) : this.setState({status: 'New Member'})
  }
  
  render() {  
    return (
      <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content center">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalTitle">{this.state.status}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              
               
              
                 
                  <span onClick={this.toggle}>Already have an account? Login</span>
              
              </div>
          </div>
        </div>
      </div>
    
    )
  }
}
export default LoginModal;
  

