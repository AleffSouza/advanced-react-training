import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { robotsSearch, robotsRequest } from './reducers'

const logger = createLogger()
const rootReducers = combineReducers({robotsSearch, robotsRequest})

let middlewares

if (process.env.NODE_ENV) {
  middlewares = applyMiddleware(ReduxThunk)
} else {
  middlewares = applyMiddleware(ReduxThunk, logger)
}

export const storeFactory = () => createStore(rootReducers, middlewares)