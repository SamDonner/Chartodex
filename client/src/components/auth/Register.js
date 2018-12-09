import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { registerUser } from '../../actions/authActions'

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

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({errors: nextProps.errors})
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="login-page center">
        <div className="card login-card shadow">
          <div className="card-body">
            <p className="login-title">Create an account</p>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  className={classnames('form-control', {
                    'is-invalid': errors.name
                  })} 
                  value={this.state.name}
                  placeholder="Username"
                  name="name"
                  onChange={this.onChange}
                />
                {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  className={classnames('form-control', {
                    'is-invalid': errors.email
                  })} 
                  value={this.state.email} 
                  placeholder="Email"
                  name="email"
                  onChange={this.onChange}
                /> 
                {errors.email && (<div className="invalid-feedback">{errors.email}</div>)} 
              </div>
              <div className="form-group">
                <input 
                  type="password" 
                  className={classnames('form-control', {
                    'is-invalid': errors.password
                  })} 
                  value={this.state.password} 
                  placeholder="Password"
                  name="password"
                  onChange={this.onChange}
                />
                {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
              </div>
              <div className="form-group">
                <input 
                  type="password" 
                  className={classnames('form-control', {
                    'is-invalid': errors.password2
                  })}  
                  value={this.state.password2}
                  placeholder="Confirm Password"
                  name="password2"
                  onChange={this.onChange}
                />
                {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
              </div>
              <div className="form-group">
                <button type="submit" className="btn login-btn">Register</button>
              </div>
              <p>Already have an account? <Link to="/login" className="login-links"> Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter(Register));