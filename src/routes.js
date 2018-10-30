import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router'
import Dashboard from './views/dashboard'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

class Routes extends Component {
  render () {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Dashboard} />
        </Switch>
      </Router>
    )
  }
}

export default Routes