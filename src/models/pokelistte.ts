import {PokemonLite} from "./poke.lite";

export interface PokemonList {
  count: number;
  next?: string;
  previous?: string;
  results: Array<PokemonLite>;
}
