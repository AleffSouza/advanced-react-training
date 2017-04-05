import React from 'react';
import ReactDOM from 'react-dom'; // glue between React and the DOM
import App from './components/app/App';
import './index.css';
import { robotsSearch, robotsRequest } from './reducers'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import createLogger from 'redux-logger'

const logger = createLogger()
const rootReducers = combineReducers({robotsSearch, robotsRequest})
const store = createStore(rootReducers, applyMiddleware(ReduxThunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
