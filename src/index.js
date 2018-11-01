// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { initStore } from './store'
import Routes from './routes'
import client from './client'
import * as serviceWorker from './serviceWorker'
import Protected from './components/Protected'
import GlobalStyle from './globalStyle'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

let initialState
const store = initStore(window.__SERVER_STATE__ || initialState)

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Protected>
        <GlobalStyle />
        <Router history={history}>
          <Routes />
        </Router>
      </Protected>
    </ApolloProvider>
  </Provider>,
  // $FlowFixMe
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
