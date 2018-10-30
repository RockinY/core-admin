import React from 'react'

const Growth = ({ range, prev, current, growth }) => (
  <GrowthWrapper>
    
  </GrowthWrapper>
)

export default ({ data, title }) => {
  return (
    <CardWrapper>
      <Title>{title}</Title>
      <KeyValue>{data.count}</KeyValue>
      <Growth
        current={data.weeklyGrowth.currentPeriodCount}
        prev={data.weeklyGrowth.prevPeriodCount}
        growth={data.weeklyGrowth.growth || 0}
        range='每周增长'
      />
      <Growth
        current={data.monthlyGrowth.currentPeriodCount}
        prev={data.monthlyGrowth.prevPeriodCount}
        growth={data.monthlyGrowth.growth || 0}
        range='月度增长'
      />
      <Growth
        current={data.quarterlyGrowth.currentPeriodCount}
        prev={data.quarterlyGrowth.prevPeriodCount}
        growth={data.quarterlyGrowth.growth || 0}
        range='季度增长'
      />
    </CardWrapper>
  )
}
