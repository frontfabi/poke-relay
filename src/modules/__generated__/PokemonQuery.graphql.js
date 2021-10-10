/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PokemonQueryVariables = {|
  first: number
|};
export type PokemonQueryResponse = {|
  +pokemons: ?$ReadOnlyArray<?{|
    +number: ?string,
    +name: ?string,
    +image: ?string,
    +types: ?$ReadOnlyArray<?string>,
  |}>
|};
export type PokemonQuery = {|
  variables: PokemonQueryVariables,
  response: PokemonQueryResponse,
|};
*/


/*
query PokemonQuery(
  $first: Int!
) {
  pokemons(first: $first) {
    number
    name
    image
    types
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "number",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "image",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "types",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PokemonQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Pokemon",
        "kind": "LinkedField",
        "name": "pokemons",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PokemonQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Pokemon",
        "kind": "LinkedField",
        "name": "pokemons",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "cb66305b1d1fe0706f814858d84a140f",
    "id": null,
    "metadata": {},
    "name": "PokemonQuery",
    "operationKind": "query",
    "text": "query PokemonQuery(\n  $first: Int!\n) {\n  pokemons(first: $first) {\n    number\n    name\n    image\n    types\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '95839e3f2417e1f94fb3a29e07d32349';

module.exports = node;
