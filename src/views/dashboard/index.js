import React, { Component } from 'react'
import { BreadcrumbsStateless, BreadcrumbsItem } from '@atlaskit/breadcrumbs'
import PageHeader from '@atlaskit/page-header';

const breadcrumbs = (
  <BreadcrumbsStateless onExpand={() => {}}>
    <BreadcrumbsItem text="概况" key="dashboard" />
  </BreadcrumbsStateless>
);

class Dashboard extends Component {
  render () {
    return (
      <React.Fragment>
        <PageHeader breadcrumbs={breadcrumbs}>
          主要数据指标
        </PageHeader>
        Content
      </React.Fragment>
    )
  }
}

export default Dashboard