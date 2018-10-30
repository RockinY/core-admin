import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { BreadcrumbsStateless, BreadcrumbsItem } from '@atlaskit/breadcrumbs'
import PageHeader from '@atlaskit/page-header'
import { META_INFORMATION_QUERY } from './queries'

const breadcrumbs = (
  <BreadcrumbsStateless onExpand={() => {}}>
    <BreadcrumbsItem text="概况" key="dashboard" />
  </BreadcrumbsStateless>
)

class Dashboard extends Component {
  render () {
    return (
      <React.Fragment>
        <PageHeader breadcrumbs={breadcrumbs}>
          主要数据指标
        </PageHeader>
        <Query query={META_INFORMATION_QUERY}>
          {({ loading, error, data }) => {
            console.log(data);
            return null
          }}
        </Query>
      </React.Fragment>
    )
  }
}

export default Dashboard