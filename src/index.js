import React from 'react';
import ReactDOM from 'react-dom'; // glue between React and the DOM
import App from './components/app/App';
import './index.css';
import { Provider } from 'react-redux'
import { storeFactory } from './store'

ReactDOM.render(
  <Provider store={storeFactory()}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
