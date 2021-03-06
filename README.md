# API Logradouros Brasil

Api desenvolvida em GraphQL com a finalidade de flexibilixar a geração automática de endereços. Podem variar a escrita do logradouro, deixando a cargo do usuário propor a sua resposta.



## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/next.js/tree/canary/examples/api-routes-graphql)


## Como usar

Realizamos a requisição passando o valor da Query logradouro, com as possibilidades de rua, número da rua, bairro, cep, cidade e UF:
```js
// GET
// curl 'https://logradouros-graphql.vercel.app/api/logradouro' \
// -H 'Accept-Encoding: gzip, deflate, br'\
// -H 'Content-Type: application/json' \
// -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' \ 
// -H 'Origin: file://' \
// --data-binary '{"query":"{\n  logradouro{\n    rua\n    numero\n    bairro\n    cep\n    UF\n  }\n}"}' --compressed


{
  "data": {
    "logradouro": [
      {
        "rua": "Iguaçu",
        "numero": 189,
        "bairro": "Santo Antônio",
        "cep": 89218180,
        "UF": "SC"
      }
    ]
  }
}
```

## Onde usar

Esta tecnologia possibilita desde a criação de montante de dados fakes para uma simulação de testes, até ser usada para enriquecer dados por negócios e instuições que não tenham conseguido coletar dados geopolíticos com tanta exatidão.

- Testes Automatizados de criação de conta
- Simulação de usuários para calculos de geoestatística
- Complemento de informações sobre endereços
- Usar como sistema de autocomplete para melhorar a coleta de dados em um cadastro
- Confirmar se as informações sobre endereços estão válidas
- etc ...
