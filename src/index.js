import React from 'react';
import ReactDOM from 'react-dom'; // glue between React and the DOM
import { Provider } from 'react-redux'
import App from './containers/App';
import './index.css';
import createStore from './store';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
