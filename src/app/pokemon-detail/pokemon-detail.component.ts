import { Component, OnInit } from '@angular/core';
import {PokeapiService} from "../service/pokemon.service";
import {ActivatedRoute} from "@angular/router";
import {Poke} from "../../models/poke";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: Poke | null = null;

  constructor(private httpPokeApi: PokeapiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.httpPokeApi.getPokemon(param.idApi).subscribe((pok) => {
        this.pokemon = pok;
      })
    });
  }

}
