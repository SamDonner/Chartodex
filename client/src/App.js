import React, { Component } from 'react';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';

import PrivateRoute from './components/auth/PrivateRoute';
import ChartLayout from './components/charts/ChartLayout';
import Landing from './components/Landing';
import MainNavbar from './components/MainNavbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Watchlist from '../src/components/Watchlist';
import LogForm from './components/tradeLogs/LogForm';

import './App.css';


//check for token
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App" data-toggle="collapse" data-target=".navbar-collapse.show">
            <MainNavbar />
            <Route exact path="/" component={ Landing } />
            <Switch>
              <PrivateRoute exact path="/charts" component={ ChartLayout } />
              <PrivateRoute exact path="/logs" component={ LogForm } />
              <PrivateRoute exact path="/portfolio" component={ ChartLayout } />
              <PrivateRoute exact path="/watchlist" component={ Watchlist } />
            </Switch>
            <Route exact path="/login" component={Login} />
           <Route exact path="/register" component={Register} />
          </div>
        </Router>
      </Provider>  
    );
  }
}

export default App;
