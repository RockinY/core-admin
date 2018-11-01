import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { META_INFORMATION_QUERY } from './queries'
import DataCard from 'components/DataCard'

class Dashboard extends Component {
  render () {
    return (
      <React.Fragment>
        <Query query={META_INFORMATION_QUERY}>
          {({ loading, error, data }) => {
            return (
              <div>
                <DataCard
                  growth={10}
                  currentPeriodCount={678}
                  prevPeriodCount={450}
                  prefix="周"
                />
              </div>
            )
          }}
        </Query>
      </React.Fragment>
    )
  }
}

export default Dashboard