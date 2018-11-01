import React from 'react'
import { Pane } from 'evergreen-ui'

export default ({ children }) => (
  <Pane
    width={800}
    marginLeft='auto'
    marginRight='auto'
    paddingLeft={24}
    paddingRight={24}
  >
    {children}
  </Pane>
)
