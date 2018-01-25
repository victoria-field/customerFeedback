import materializeCSS from 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';


import App from './components/App';
import reducers from './reducers';
import axios from 'axios';
window.axios= axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store ={store}>
    <App />
  </Provider>,

  document.querySelector('#root'));

  // console.log('stripe key is ', process.env.REACT_APP_STRIPE_KEY);
  // console.log('environment is ', process.env.NODE_ENV);
