import { searchReducer, robotsReducer } from './reducers'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import createLogger from 'redux-logger'

const logger = createLogger();
const rootReducers = combineReducers({
  robotsSearch: searchReducer,
  robotsRequest: robotsReducer,
});
export const store = createStore(rootReducers, applyMiddleware(ReduxThunk, logger));