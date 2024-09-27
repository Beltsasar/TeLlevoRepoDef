import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segmento',
  templateUrl: './segmento.component.html',
  styleUrls: ['./segmento.component.scss']
})
export class SegmentoComponent implements OnInit {
  selectedSegment: string = 'home'; // Inicializa en 'home'

  constructor() { }

  ngOnInit() {
    // Puedes agregar lógica aquí si necesitas hacer algo al iniciar
  }

  cambiarSegmento(segment: string) {
    this.selectedSegment = segment; // Cambia el segmento seleccionado
  }
}
