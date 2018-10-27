// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { initStore } from './store'
import Routes from './routes'
import * as serviceWorker from './serviceWorker'

let initialState
const store = initStore(window.__SERVER_STATE__ || initialState)

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  // $FlowFixMe
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
