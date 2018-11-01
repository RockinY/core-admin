import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import Dashboard from './views/dashboard'
import TopBar from 'components/TopBar'

class Routes extends Component {
  render () {
    return (
      <React.Fragment>
        <Route component={TopBar} />
        <Switch>
          <Route exact path='/' component={Dashboard} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default Routes