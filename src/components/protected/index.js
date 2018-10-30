import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Route } from 'react-router'

const CHECK_ADMIN = gql`
  query isAdmin {
    meta {
      isAdmin
    }
  }
`

export default ({ children }) => (
  <Query query={CHECK_ADMIN}>
    {({loading, error, data}) => {
      if (data && data.meta && data.meta.isAdmin) {
        return children
      }
      return null
    }}
  </Query>
)

