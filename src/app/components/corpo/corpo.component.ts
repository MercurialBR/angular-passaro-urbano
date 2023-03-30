import { Component, OnInit } from '@angular/core';

import { OfertasService } from 'src/app/ofertas.service';
import { Oferta } from 'src/app/shared/oferta.model';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css'],
  providers: [OfertasService]
})
export class CorpoComponent implements OnInit {

  public ofertas!: Oferta[]

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    //  this. ofertas = this.ofertasService.getOfertas()

    this.ofertasService.getOfertas()
      .then((ofertas: Oferta[]) => {
        console.log('depois de 3seg')
        this.ofertas = ofertas
      })
      .catch((param: any) => {
        console.log(param)
      })

  }
}
