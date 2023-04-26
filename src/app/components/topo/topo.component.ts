import { Component } from '@angular/core';
import { OfertasService } from 'src/app/ofertas.service';
import { Oferta } from 'src/app/shared/oferta.model';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent {

  public ofertas: Observable<Oferta[]> | undefined

  constructor(private ofertasService : OfertasService) { }


  public pesquisa(termoDaBusca: string) : void {
    this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca)

    this.ofertas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas),
      (erro: any) => console.log('Erro status: ', erro.status)
    )
  }
}
