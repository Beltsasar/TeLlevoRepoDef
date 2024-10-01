import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-ruta-ofrecida',
  templateUrl: './mostrar-ruta-ofrecida.component.html',
  styleUrls: ['./mostrar-ruta-ofrecida.component.scss'],
})
export class MostrarRutaOfrecidaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  verDetallesRuta() {
    // Lógica para navegar a los detalles de la ruta
    console.log('Ver detalles de ruta');
  }

}
