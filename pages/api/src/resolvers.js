const resolvers = {
  Query: {
    logradouro(parent, args, context) {
      return [{ 
        rua: "Iguaçu",
        numero: 189,
        bairro: "Santo Antônio",
        cep: 89218180,
        cidade: "Joinville",
        UF: "SC" 
        }]
    },
  }
}

export default resolvers