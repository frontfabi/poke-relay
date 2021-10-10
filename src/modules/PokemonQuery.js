import { graphql } from 'relay-hooks';

export default graphql`query PokemonQuery($first: Int!) {
    pokemons(first: $first) {
      number
      name
      image
      types
    }
  }`