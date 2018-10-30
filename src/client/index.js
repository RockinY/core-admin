import { ApolloClient } from 'apollo-client'
import { createUploadLink } from 'apollo-upload-client'
import { WebSocketLink } from 'apollo-link-ws'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'

const cache = new InMemoryCache()

const httpLink = createUploadLink({
  uri: process.env.REACT_APP_API_URI,
  credentials: 'include'
})

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_WS_URI,
  options: {
    reconnect: true
  }
})

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink
)

const client = new ApolloClient({
  link,
  cache
})

export default client