import { NgModule } from '@angular/core';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PokamonModule } from './pokemon/pokemon.module';


const routes: Routes = [
   {
    path:'',
    component:LayoutComponent,
children:[
  {
    path:'',
    redirectTo:'/pokemon',
    pathMatch:'full'
  },
  {
    path:'pokemon',
    loadChildren: ()=> import ('./pokemon/pokemon.module').then(m=> m.PokamonModule)

      },
     
]

   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
