import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segmento-inicio',
  templateUrl: './segmento-inicio.component.html',
  styleUrls: ['./segmento-inicio.component.scss'],
})
export class SegmentoInicioComponent  implements OnInit {
  selectedSegment: string = 'home'; // Inicializa en 'home'

  constructor() { }

  ngOnInit() {
    // Puedes agregar lógica aquí si necesitas hacer algo al iniciar
  }

  cambiarSegmento(segment: string) {
    this.selectedSegment = segment; // Cambia el segmento seleccionado
  }
}
