import React, { Component } from 'react';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './store';
import HomeImage  from './assets/HomeImage.jpg';
import ChartLayout from './components/ChartLayout';
import Landing from './components/Landing';
import MainNavbar from './components/MainNavbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Charts from './components/Charts';
import LoginModal from './components/auth/LoginModal';

import './App.css';

//check for token
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App" >
          <div className="showcase_image" > 
            <img src={HomeImage} alt="cover" className="showcase_image"/>
          </div>
            <MainNavbar />
            <Route exact path="/" component={ Landing } />
            <Route exact path="/charts" component={ ChartLayout } />
            <Route exact path="/login" component={Login} />
           <Route exact path="/register" component={Register} />
          </div>
        </Router>
      </Provider>  
    );
  }
}

export default App;
