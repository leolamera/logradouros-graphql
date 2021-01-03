import { ApolloServer } from 'apollo-server-micro'
import resolvers from './src/resolvers'
import typeDefs from './src/typeDefs'

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  }
}

export default apolloServer.createHandler({ path: '/api/logradouro' })
