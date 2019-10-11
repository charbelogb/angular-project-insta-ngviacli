import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { Router } from '@angular/router';
import { PokemonService } from './pokemon.services';

@Component({
	selector: 'list-pokemon',
	templateUrl: './list-pokemon.component.html',
	providers: [PokemonService]
})
export class ListPokemonComponent implements OnInit {

	//pokemons: Pokemon[] = null;
	private pokemons: Pokemon[];
	private cacher = true;

	constructor(private router: Router, private pkmservice: PokemonService) { }

	ngOnInit(): void {
		this.pkmservice.getPokemons().subscribe((res)=>{
			this.pokemons = res;
		});
		//this.pokemons = this.pkmservice.getPokemons();
		//this.pokemons = POKEMONS;
	}

	selectPokemon(pokemon: Pokemon): void {
		console.log('Vous avez selectionné ' + pokemon.name);
		let link = ['/pokemon', pokemon.id];
		this.router.navigate(link);
	}

	onSearchChange(searchValue: string): void {  
		this.cacher = !this.cacher;
		if(searchValue == "" || searchValue == null){
			this.pkmservice.getPokemons().subscribe((res)=>{
				this.cacher = !this.cacher;
				this.pokemons = res;
			});
		}else{
			this.pkmservice.findPokemon(searchValue).subscribe((res)=>{
				this.cacher = !this.cacher;
				this.pokemons = res;
			})
		}
		
		//alert(searchValue);
	}

}