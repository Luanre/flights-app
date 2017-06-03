import React, { Component } from 'react';
import './App.css';
import * as BS from 'react-bootstrap';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './reducers';
import Router from './router';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container-fluid">
          <BS.Navbar>
            <BS.Navbar.Header>
              <BS.NavbarBrand>Flights App</BS.NavbarBrand>
              <BS.Navbar.Toggle />
            </BS.Navbar.Header>
          </BS.Navbar>
          <Router />
        </div>
      </Provider>
    );
  }
}

export default App;
