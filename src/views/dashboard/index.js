import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { META_INFORMATION_QUERY } from './queries'

class Dashboard extends Component {
  render () {
    return (
      <React.Fragment>
        <Query query={META_INFORMATION_QUERY}>
          {({ loading, error, data }) => {
            console.log(data);
            return (
              <div>Hello</div>
            )
          }}
        </Query>
      </React.Fragment>
    )
  }
}

export default Dashboard