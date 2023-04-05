import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorpoComponent } from './components/corpo/corpo.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { OfertaComponent } from './oferta/oferta.component';

const routes: Routes = [
  {path: '', component: CorpoComponent},
  {path: 'home', component: CorpoComponent},
  {path: 'restaurantes', component: RestaurantesComponent},
  {path: 'diversao', component: DiversaoComponent},
  {path: 'oferta', component: OfertaComponent},
  {path: 'oferta/:id', component: OfertaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
