import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { POKEMONComponent } from './pokemons/pokemon.component';
const routes: Routes = [
  {
    path:'',
    component:POKEMONComponent
  },
  
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
