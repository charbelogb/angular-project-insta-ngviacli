import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { PokemonService } from './pokemon.services';

@Component({
	selector: 'detail-pokemon',
	templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {

	pokemons: Pokemon[] = null;
	//pokemon: Pokemon = null;
	pokemon : any = {};
	result : any = {};

	constructor(private route: ActivatedRoute, private router: Router, private pkmservice: PokemonService) {}

	ngOnInit(): void {
		let id = +this.route.snapshot.paramMap.get('id');
		this.pkmservice.getPokemonById(id).subscribe((res)=>{
			this.pokemon = res; 
		});
		//this.pokemon = this.pkmservice.getPokemonById(id);
	}

	goBack(): void {
		this.router.navigate(['/pokemons']);
	}

	goEdit(pokemon: Pokemon): void{
		let link = ['/pokemon/edit', pokemon.id];
		this.router.navigate(link);
	}

	deletePokemon(id){
		if(confirm("Etes-vous sûr de vouloir supprimer ce pokemon ?")){
		  this.pkmservice.deletePokemon(id).subscribe((res)=>{
			this.result = res; 
			if(this.result.status == 200){
				alert('Pokemon supprimé avec succès');
			  this.router.navigate(['/pokemons']);
			}else{
			  alert("Echec de la suppression. Une erreur s'est produite");
			}
		  })
		}
	  }

}