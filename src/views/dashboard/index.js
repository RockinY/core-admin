import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { META_INFORMATION_QUERY } from './queries'
import DataCard from 'components/DataCard'
import Container from 'components/Container'
import { Heading, Pane } from 'evergreen-ui'

class Dashboard extends Component {
  render () {
    return (
      <React.Fragment>
        <Query query={META_INFORMATION_QUERY}>
          {({ loading, error, data }) => {
            if (loading) {
              return null
            }

            const {
              usersGrowth,
              communitiesGrowth,
              channelsGrowth,
              threadsGrowth,
              threadMessagesGrowth,
              directMessagesGrowth
            } = data.meta
            
            console.log(data)
            return (
              <Container>
                <Pane
                  marginTop={32}
                  marginBottom={32}
                >
                  <Heading size={600}>用户数 {usersGrowth.count} | DAU {usersGrowth.dau} | MAU {usersGrowth.mau}</Heading>
                </Pane>
                <Pane
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <DataCard
                    growth={usersGrowth.weeklyGrowth.growth || 0}
                    currentPeriodCount={usersGrowth.weeklyGrowth.currentPeriodCount}
                    prevPeriodCount={usersGrowth.weeklyGrowth.prevPeriodCount}
                    prefix="周"
                  />
                  <DataCard
                    growth={usersGrowth.monthlyGrowth.growth || 0}
                    currentPeriodCount={usersGrowth.monthlyGrowth.currentPeriodCount}
                    prevPeriodCount={usersGrowth.monthlyGrowth.prevPeriodCount}
                    prefix="月"
                  />
                  <DataCard
                    growth={usersGrowth.quarterlyGrowth.growth || 0}
                    currentPeriodCount={usersGrowth.quarterlyGrowth.currentPeriodCount}
                    prevPeriodCount={usersGrowth.quarterlyGrowth.prevPeriodCount}
                    prefix="季"
                  />
                </Pane>

                <Pane
                  marginTop={32}
                  marginBottom={32}
                >
                  <Heading size={600}>社区数 {communitiesGrowth.count}</Heading>
                </Pane>
                <Pane
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <DataCard
                    growth={communitiesGrowth.weeklyGrowth.growth || 0}
                    currentPeriodCount={communitiesGrowth.weeklyGrowth.currentPeriodCount}
                    prevPeriodCount={communitiesGrowth.weeklyGrowth.prevPeriodCount}
                    prefix="周"
                  />
                  <DataCard
                    growth={communitiesGrowth.monthlyGrowth.growth || 0}
                    currentPeriodCount={communitiesGrowth.monthlyGrowth.currentPeriodCount}
                    prevPeriodCount={communitiesGrowth.monthlyGrowth.prevPeriodCount}
                    prefix="月"
                  />
                  <DataCard
                    growth={communitiesGrowth.quarterlyGrowth.growth || 0}
                    currentPeriodCount={communitiesGrowth.quarterlyGrowth.currentPeriodCount}
                    prevPeriodCount={communitiesGrowth.quarterlyGrowth.prevPeriodCount}
                    prefix="季"
                  />
                </Pane>

                <Pane
                  marginTop={32}
                  marginBottom={32}
                >
                  <Heading size={600}>频道数 {channelsGrowth.count}</Heading>
                </Pane>
                <Pane
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <DataCard
                    growth={channelsGrowth.weeklyGrowth.growth || 0}
                    currentPeriodCount={channelsGrowth.weeklyGrowth.currentPeriodCount}
                    prevPeriodCount={channelsGrowth.weeklyGrowth.prevPeriodCount}
                    prefix="周"
                  />
                  <DataCard
                    growth={channelsGrowth.monthlyGrowth.growth || 0}
                    currentPeriodCount={channelsGrowth.monthlyGrowth.currentPeriodCount}
                    prevPeriodCount={channelsGrowth.monthlyGrowth.prevPeriodCount}
                    prefix="月"
                  />
                  <DataCard
                    growth={channelsGrowth.quarterlyGrowth.growth || 0}
                    currentPeriodCount={channelsGrowth.quarterlyGrowth.currentPeriodCount}
                    prevPeriodCount={channelsGrowth.quarterlyGrowth.prevPeriodCount}
                    prefix="季"
                  />
                </Pane>

                <Pane
                  marginTop={32}
                  marginBottom={32}
                >
                  <Heading size={600}>帖子数 {threadsGrowth.count}</Heading>
                </Pane>
                <Pane
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <DataCard
                    growth={threadsGrowth.weeklyGrowth.growth || 0}
                    currentPeriodCount={threadsGrowth.weeklyGrowth.currentPeriodCount}
                    prevPeriodCount={threadsGrowth.weeklyGrowth.prevPeriodCount}
                    prefix="周"
                  />
                  <DataCard
                    growth={threadsGrowth.monthlyGrowth.growth || 0}
                    currentPeriodCount={threadsGrowth.monthlyGrowth.currentPeriodCount}
                    prevPeriodCount={threadsGrowth.monthlyGrowth.prevPeriodCount}
                    prefix="月"
                  />
                  <DataCard
                    growth={threadsGrowth.quarterlyGrowth.growth || 0}
                    currentPeriodCount={threadsGrowth.quarterlyGrowth.currentPeriodCount}
                    prevPeriodCount={threadsGrowth.quarterlyGrowth.prevPeriodCount}
                    prefix="季"
                  />
                </Pane>

                <Pane
                  marginTop={32}
                  marginBottom={32}
                >
                  <Heading size={600}>帖子回复数 {threadMessagesGrowth.count}</Heading>
                </Pane>
                <Pane
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <DataCard
                    growth={threadMessagesGrowth.weeklyGrowth.growth || 0}
                    currentPeriodCount={threadMessagesGrowth.weeklyGrowth.currentPeriodCount}
                    prevPeriodCount={threadMessagesGrowth.weeklyGrowth.prevPeriodCount}
                    prefix="周"
                  />
                  <DataCard
                    growth={threadMessagesGrowth.monthlyGrowth.growth || 0}
                    currentPeriodCount={threadMessagesGrowth.monthlyGrowth.currentPeriodCount}
                    prevPeriodCount={threadMessagesGrowth.monthlyGrowth.prevPeriodCount}
                    prefix="月"
                  />
                  <DataCard
                    growth={threadMessagesGrowth.quarterlyGrowth.growth || 0}
                    currentPeriodCount={threadMessagesGrowth.quarterlyGrowth.currentPeriodCount}
                    prevPeriodCount={threadMessagesGrowth.quarterlyGrowth.prevPeriodCount}
                    prefix="季"
                  />
                </Pane>

                <Pane
                  marginTop={32}
                  marginBottom={32}
                >
                  <Heading size={600}>用户信息数 {directMessagesGrowth.count}</Heading>
                </Pane>
                <Pane
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                  marginBottom={32}
                >
                  <DataCard
                    growth={directMessagesGrowth.weeklyGrowth.growth || 0}
                    currentPeriodCount={directMessagesGrowth.weeklyGrowth.currentPeriodCount}
                    prevPeriodCount={directMessagesGrowth.weeklyGrowth.prevPeriodCount}
                    prefix="周"
                  />
                  <DataCard
                    growth={directMessagesGrowth.monthlyGrowth.growth || 0}
                    currentPeriodCount={directMessagesGrowth.monthlyGrowth.currentPeriodCount}
                    prevPeriodCount={directMessagesGrowth.monthlyGrowth.prevPeriodCount}
                    prefix="月"
                  />
                  <DataCard
                    growth={directMessagesGrowth.quarterlyGrowth.growth || 0}
                    currentPeriodCount={directMessagesGrowth.quarterlyGrowth.currentPeriodCount}
                    prevPeriodCount={directMessagesGrowth.quarterlyGrowth.prevPeriodCount}
                    prefix="季"
                  />
                </Pane>
              </Container>
            )
          }}
        </Query>
      </React.Fragment>
    )
  }
}

export default Dashboard