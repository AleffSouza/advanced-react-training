import React from 'react';
import ReactDOM from 'react-dom'; // glue between React and the DOM
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Lazy from './components/Lazy';
import './index.css';
import createStore from './store';

const store = createStore();

const appLoader = (cb) => require.ensure([], (require) => {
  cb(require('./containers/app/App').default);
}, 'app');

const profileLoader = (cb) => require.ensure([], (require) => {
  cb(require('./containers/profile/Profile').default);
}, 'profile');

const App = Lazy(appLoader);
const Profile = Lazy(profileLoader);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/profile/:id" component={Profile} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
