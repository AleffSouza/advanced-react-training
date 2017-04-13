import React from 'react';
import ReactDOM from 'react-dom'; // glue between React and the DOM
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import App from './containers/app/App';
import Profile from './containers/profile/Profile';
import './index.css';
import createStore from './store';

const store = createStore();

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
