import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions/authActions';
import HomeImage  from '../../assets/HomeImage.jpg';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(userData)
  }

  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/charts');
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuthenticated) {
      this.props.history.push('/charts');
    }
    if(nextProps.errors) {
      this.setState({errors: nextProps.errors})
    }
  }

  render() {
    const { errors } = this.state;


    return (
      <div>
        <div className="showcase_image" > 
          <img src={HomeImage} alt="cover" className="showcase_image"/>
        </div>
        <div className="login-page center">
        
          <div className="card login-card shadow">
            <div className="card-body">
            <p className="login-title">Login to your account</p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input 
                    type="email" 
                    className={classnames('form-control', {
                      'is-invalid': errors.email
                    })} 
                    value={this.state.email}
                    name="email"
                    onChange={this.onChange}
                    placeholder="Email"/>
                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                </div>
                <div className="form-group">
                  <input 
                    type="password" 
                    className={classnames('form-control', {
                      'is-invalid': errors.password
                    })}  
                    value={this.state.password}
                    name="password"
                    onChange={this.onChange}
                    placeholder="Password"/>
                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                </div>
                
                <div className="form-group">
                  <button type="submit" className="btn login-btn">Login</button>
                </div>
                <p className="center">Not a member? <Link to="/register" className="login-links">Register</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, {loginUser})(Login);