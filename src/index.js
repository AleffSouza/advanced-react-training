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

const LazyApp = Lazy(appLoader)
const LazyProfile =Lazy(profileLoader)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LazyApp} />
        <Route path="/profile/:id" component={LazyProfile} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
