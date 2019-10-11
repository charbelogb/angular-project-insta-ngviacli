import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ListPokemonComponent } from './pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './pokemon/page-not-found.component';
import { PokemonFormComponent } from './pokemon/pokemon-form.component';
import { EditPokemonComponent } from './pokemon/edit-pokemon.component';
import { PokemonTypeColorPipe } from './pokemon/pokemon-type-color.pipe';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PokemonService } from './pokemon/pokemon.services';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
    PageNotFoundComponent,
    PokemonFormComponent,
    EditPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
