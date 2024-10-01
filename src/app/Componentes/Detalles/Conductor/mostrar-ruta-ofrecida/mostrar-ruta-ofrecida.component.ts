import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-ruta-ofrecida',
  templateUrl: './mostrar-ruta-ofrecida.component.html',
  styleUrls: ['./mostrar-ruta-ofrecida.component.scss'],
})
export class MostrarRutaOfrecidaComponent implements OnInit {
  origen: string = 'Calle Falsa 123';
  destino: string = 'Avenida Siempre Viva 742';
  fechaSalida: string = '2024-10-01T10:00:00';
  horaSalida: string = '10:00';
  
  // Cambiar a true o false para probar ambos casos
  viajeOfrecido: boolean = true; // Cambia a false para mostrar el mensaje de no viajes

  constructor() {}

  ngOnInit() {}

  verDetallesRuta() {
    // Lógica para navegar a los detalles de la ruta (no funcional)
    console.log('Ver detalles de ruta');
  }
}
