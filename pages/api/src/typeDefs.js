import { gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    logradouro: [Logradouro!]!
  }
  type Logradouro {
    rua: String,
    numero: Int,
    bairro: String,
    cep: Int,
    cidade: String,
    UF: String
  }
`

export default typeDefs
