import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss'],
})
export class HistorialComponent implements OnInit {

  // Arreglo simulado de viajes, sin lógica de carga dinámica
  viajes = [
    { origen: 'Calle Falsa 123', destino: 'Plaza Mayor', fecha: '2024-09-20', costo: 10.50 },
    { origen: 'Av. Siempre Viva', destino: 'Parque Central', fecha: '2024-09-15', costo: 8.00 },
    { origen: 'Terminal de Buses', destino: 'Estación Central', fecha: '2024-09-10', costo: 12.75 }
  ];

  constructor() { }

  ngOnInit() {}

}
