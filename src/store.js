import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import getReducers from './reducers'

// this enables the chrome devtools for redux only in development
const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

export const initStore = (
  initialState,
  { middleware = [], reducers = {} } = {}
) => {
  if (initialState) {
    return createStore(
      getReducers(reducers),
      initialState,
      composeEnhancers(applyMiddleware(...middleware, thunkMiddleware))
    );
  } else {
    return createStore(
      getReducers(reducers),
      {},
      composeEnhancers(applyMiddleware(...middleware, thunkMiddleware))
    );
  }
};