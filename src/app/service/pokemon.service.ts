import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonList} from "../../models/pokelistte";
import {Poke} from "../../models/poke";

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  detailedPokemon: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private httpClient: HttpClient){ }

  public get pokemonList(): Observable<PokemonList> {
    return this.httpClient.get<PokemonList>('https://pokeapi.co/api/v2/pokemon');
  }

  getPokemon(number: number): Observable<Poke> {
    return this.httpClient.get<Poke>(this.detailedPokemon + number);
  }

}

