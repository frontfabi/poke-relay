import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const fetchQuery = (operation, variables) => {
  return fetch('https://graphql-pokemon2.vercel.app/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }).then(res => res.json())
  })
}

const network = Network.create(fetchQuery)
const source = new RecordSource()
const store = new Store(source)

const env = new Environment({
    network,
    store,
})

export default env;
