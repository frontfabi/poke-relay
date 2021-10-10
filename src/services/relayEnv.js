import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const fetchQuery = async(operation, variables) => {
  const response = await fetch(
  "https://graphql-pokemon2.vercel.app/",
    {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  });
  return await response.json();
}

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});
