import { robotsSearch, robotsRequest } from './reducers'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import createLogger from 'redux-logger'

const logger = createLogger()
const rootReducers = combineReducers({robotsSearch, robotsRequest})
export const store = createStore(rootReducers, applyMiddleware(ReduxThunk, logger))