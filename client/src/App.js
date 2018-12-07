import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './store';
import ChartLayout from './components/ChartLayout';
import Landing from './components/Landing';
import MainNavbar from './components/MainNavbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Charts from './components/Charts';
import LoginModal from './components/auth/LoginModal';

import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App" >
            <MainNavbar />
            <Route exact path="/" component={ Landing } />
            <LoginModal/>
            <Route exact path="/charts" component={ ChartLayout } />
            
          </div>
        </Router>
      </Provider>  
    );
  }
}

export default App;
