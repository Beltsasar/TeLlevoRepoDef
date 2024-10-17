import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-ver-rutas',
  templateUrl: './ver-rutas.component.html',
  styleUrls: ['./ver-rutas.component.scss'],
})
export class VerRutasComponent  implements OnInit {

  rutas = [
    {
      horaPartida: '08:00 AM',
      destino: 'Santiago Centro',
      nombrePasajero: 'Juan Pérez',
      rut: '12.345.678-9',
      puntoEncuentro: 'Plaza de Armas',
      contacto: '+56 9 1234 5678'
    },
    {
      horaPartida: '08:30 AM',
      destino: 'Providencia',
      nombrePasajero: 'María González',
      rut: '11.987.654-3',
      puntoEncuentro: 'Metro Salvador',
      contacto: '+56 9 8765 4321'
    },
    {
      horaPartida: '09:00 AM',
      destino: 'Las Condes',
      nombrePasajero: 'Carlos Fuentes',
      rut: '10.123.456-7',
      puntoEncuentro: 'Parque Araucano',
      contacto: '+56 9 1122 3344'
    }
  ];

  constructor(private ruter :Router) { }

  ngOnInit() {
  }


  VerDetalleRuta(){

    this.ruter.navigate(['/mostra-detalles-ruta-c']);
  }
}
