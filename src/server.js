require('babel-register')({ // transpile all imports
  extensions: ['.js'],
  presets: [
    'es2015', // converts ES6 into ES5
    'react-app' // converts JSX into React.createElement
  ],
});
require('ignore-styles'); // ignore all css imports

// React/Redux libraries
const { createElement } = require('react');
const { Provider } = require('react-redux');
const { renderToString } = require('react-dom/server');

// App-specific code
const App = require('./containers/App').default;
const createStore = require('./store').default;
const store = createStore();

// Express server setup
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require('fs');

// load the inital index.html for replacing the state and content
const initialContent = fs.readFileSync('./build/index.html', 'utf-8');
let markup = initialContent; // this will still allow something to be rendered if the store isn't ready

let prevPending = false;
const unsubscribe = store.subscribe(function(){
  const state = store.getState();
  const currPending = state.robotsRequest.isPending;

  // check for a change in isPending flag to indicate the request is completed
  const isRequestDone = (prevPending === true && currPending === false);
  if (isRequestDone) {
    // When the request is done, re-render to update the robot list
    markup = render(store);
    unsubscribe();
    return;
  }

  // iterate again with a new state change
  prevPending = currPending;
});

const render = (store) => {
  const DOMContent = renderToString(
      createElement(Provider, { store },
        createElement(App)
      )
    );
  const state = store.getState();
  return initialContent
    .replace('<span id="SSR_CONTENT"/>', DOMContent)
    .replace('INITIAL_STATE_JSON', JSON.stringify(store.getState()));
};
// Trigger the initial render cycle
markup = render(store);

const serveContent = (req, res) => res.send(markup);

app.get('/', serveContent);
app.get('/index.html', serveContent);
app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log('listening at http://localhost:' + PORT);
});
