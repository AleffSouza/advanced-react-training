import { searchReducer, robotsReducer } from './reducers'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import createLogger from 'redux-logger'

const logger = createLogger();
const rootReducers = combineReducers({
  robotsSearch: searchReducer,
  robotsRequest: robotsReducer,
});
const createAppStore = () => {
  // NODE_ENV is automatically provided to us by default; see the following link for details:
  // https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables
  const withLogger = (process.env.NODE_ENV === 'development');
  const middleware = withLogger ?
    applyMiddleware(ReduxThunk, logger) :
    applyMiddleware(ReduxThunk);
  return createStore(rootReducers, middleware);
};

export default createAppStore;
