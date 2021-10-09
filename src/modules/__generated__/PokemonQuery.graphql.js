/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PokemonQueryVariables = {|
  first?: ?number
|};
export type PokemonQueryResponse = {|
  +pokemons: ?{|
    +id: string,
    +number: ?string,
    +name: ?string,
    +classification: ?string,
    +types: ?$ReadOnlyArray<?string>,
    +resistant: ?$ReadOnlyArray<?string>,
    +weaknesses: ?$ReadOnlyArray<?string>,
    +fleeRate: ?number,
    +maxCP: ?number,
    +image: ?string,
  |}
|};
export type PokemonQuery = {|
  variables: PokemonQueryVariables,
  response: PokemonQueryResponse,
|};
*/


/*
query PokemonQuery(
  $first: Int
) {
  pokemons(first: $first) {
    id
    number
    name
    classification
    types
    resistant
    weaknesses
    fleeRate
    maxCP
    image
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "first",
        "variableName": "first"
      }
    ],
    "concreteType": "Pokemon",
    "kind": "LinkedField",
    "name": "pokemons",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "number",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "classification",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "types",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "resistant",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "weaknesses",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "fleeRate",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "maxCP",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "image",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PokemonQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PokemonQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "767704c090870cbe068f0b06990c6fa6",
    "id": null,
    "metadata": {},
    "name": "PokemonQuery",
    "operationKind": "query",
    "text": "query PokemonQuery(\n  $first: Int\n) {\n  pokemons(first: $first) {\n    id\n    number\n    name\n    classification\n    types\n    resistant\n    weaknesses\n    fleeRate\n    maxCP\n    image\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '99162d4bf9576c3e0db1a5a723b99331';

module.exports = node;
