import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorpoComponent } from './components/corpo/corpo.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';

const routes: Routes = [
  {path: '', component: CorpoComponent},
  {path: 'home', component: CorpoComponent},
  {path: 'restaurantes', component: RestaurantesComponent},
  {path: 'diversao', component: DiversaoComponent},
  {path: 'oferta', component: OfertaComponent},
  {path: 'oferta/:id', component: OfertaComponent,
    children: [
      {path: '', component: ComoUsarComponent},
      {path: 'como-usar', component: ComoUsarComponent},
      {path: 'onde-fica', component: OndeFicaComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
