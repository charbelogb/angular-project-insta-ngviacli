import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.services';

@Component({
  selector: 'edit-pokemon',
  template: `
    <h2 class="header center">Editer {{ pokemon?.name }}</h2>
		<p class="center">
			<img *ngIf="pokemon" [src]="pokemon.picture"/>
		</p>
    <pokemon-form [pokemon]="pokemon"></pokemon-form>
  `,
})
export class EditPokemonComponent implements OnInit {

  //pokemon: Pokemon = null;
  pokemon : any = {};

  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonService) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    //this.pokemon = this.pokemonsService.getPokemonById(id);
    this.pokemonsService.getPokemonById(id).subscribe((res)=>{
			this.pokemon = res; 
		});
  }

}