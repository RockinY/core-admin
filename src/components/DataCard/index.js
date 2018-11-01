import React from 'react'
import { Card, Pane, Icon, Text } from 'evergreen-ui'

export default ({ growth, currentPeriodCount, prevPeriodCount, prefix }) => (
  <Card
    elevation={1}
    backgroundColor="white"
    width={200}
    height={120}
    margin={24}
    display="flex"
    justifyContent="space-around"
    alignItems="center"
  >
    <Pane
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text>本{prefix} {currentPeriodCount}</Text>
      <Text size={300}>上{prefix} {prevPeriodCount}</Text>
    </Pane>
    <Pane
     display="flex"
     alignItems="center"
     justifyContent="center"
    >
      <Icon
        icon={`symbol-triangle-${growth > 0 ? 'up' : 'down'}`}
        color={growth > 0 ? 'success' : 'danger'}
      />
      <Text>{growth}%</Text>
    </Pane>
  </Card>
)
