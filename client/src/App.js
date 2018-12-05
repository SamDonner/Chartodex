import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './components/Layout';
import Landing from './components/Landing';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App" >
          <Landing />
         
        </div>
      </Provider>  
    );
  }
}

export default App;
