import React from 'react';
import ReactDOM from 'react-dom'; // glue between React and the DOM
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Lazy from './components/lazy';
import './index.css';
import { store } from './store'

let appLoader = (cb) => 
  require.ensure([], (require) => {
    cb(require('./containers/app/App').default)
  }, 'app')

let profileLoader = (cb) => 
  require.ensure([], (require) => {
    cb(require('./containers/profile/Profile').default)
  }, 'profile')

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={(props) => <Lazy load={appLoader} {...props} />} />
        <Route path="/profile/:id" render={(props) => <Lazy load={profileLoader} {...props} />} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
