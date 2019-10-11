import { Injectable } from '@angular/core';
import { Pokemon } from './Pokemon';
import { POKEMONS } from './mock-pokemons';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class PokemonService {
    apiURL: string = 'http://localhost:5000';

    constructor(private httpClient: HttpClient) {}

    /*
    public getPokemons(): Pokemon[] {
        return POKEMONS;
    } */

    public getPokemons(): Observable<Pokemon[]> {
        return this.httpClient.get<Pokemon[]>(`${this.apiURL}/getPokemonsListe`);
    }

    public findPokemon(search: string): Observable<Pokemon[]>{
        return this.httpClient.get<Pokemon[]>(`${this.apiURL}/findPokemon/${search}`);
        
      }

    /*
    public getPokemonById(id: number){
        let pokemons = this.getPokemons();
        for (let index=0; pokemons.length; index++){
            if(id === pokemons[index].id){
                return pokemons[index];
            }
        }
    } */

    public getPokemonById(id: number){
        return this.httpClient.get<Pokemon>(`${this.apiURL}/getPokemon/${id}`);
    }

    public getPokemonTypes(): string[]{
        return ['Plante', 'Feu','Eau', 'Insect', 'Normal',
            'Electrik', 'Poison', 'Fée', 'Vol']
    }

    public deletePokemon(id: number){
        return this.httpClient.get<void>(`${this.apiURL}/deletePokemon/${id}`);
    }
}