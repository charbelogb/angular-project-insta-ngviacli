import { Component, OnInit } from '@angular/core';
import { Pokemon } from './Pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  private pokemons: Pokemon[];
  private title = "Liste des Pokemons";

  constructor() { }

  ngOnInit() {
    this.pokemons=POKEMONS;
  }

}
