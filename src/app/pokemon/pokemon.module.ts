import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { POKEMONComponent } from './pokemons/pokemon.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    
    POKEMONComponent
  
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    PokemonRoutingModule,
    FormsModule,
        ReactiveFormsModule
    
    
    
    
  ],
  
})
export class PokamonModule { }
