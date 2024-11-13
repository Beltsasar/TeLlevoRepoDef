import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segmento-register',
  templateUrl: './segmento-register.component.html',
  styleUrls: ['./segmento-register.component.scss'],
})
export class SegmentoRegisterComponent  implements OnInit {

  selectedSegment: string = 'Conductor'; // Inicializa en 'home'

  constructor() { }

  ngOnInit() {
    // Puedes agregar lógica aquí si necesitas hacer algo al iniciar
  }

  cambiarSegmento(segment: string) {
    this.selectedSegment = segment; // Cambia el segmento seleccionado
  }
}
