import { Component, OnInit } from '@angular/core';
import {PokemonList} from "../../models/pokelistte";
import {PokemonLite} from "../../models/poke.lite";
import {PokeapiService} from "../service/pokemon.service";


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public pokemonList: Array<PokemonLite> = [];

  constructor(
    private pokeapiService: PokeapiService,
  ) { }

  ngOnInit(): void {
    this.pokeapiService.pokemonList.subscribe((data: PokemonList) => {
      this.pokemonList = data.results;
    });
  }

  public getId(pokemon: PokemonLite): string {
    const result = pokemon.url.match(/^https:\/\/pokeapi\.co\/api\/v2\/pokemon\/([0-9]+)\/?$/);
    if (result) {
      return result[1];
    }

    return '';
  }

}
