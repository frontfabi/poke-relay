import { graphql } from 'relay-hooks';

export default graphql`query PokemonQuery($first: Int) {
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
  }`