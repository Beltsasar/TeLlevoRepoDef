import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements AfterViewInit {
  private map: any;

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    // Inicializa el mapa en la ubicación deseada
    this.map = L.map('map').setView([51.505, -0.09], 18); // Cambia 13 por un número mayor (18) para un zoom más cercano
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    // Localiza la ubicación actual del usuario
    this.map.locate({ setView: true, maxZoom: 16 });

    // Manejar el evento cuando se encuentra la ubicación
    this.map.on('locationfound', (e: any) => {
      const radius = e.accuracy / 2;

      // Coloca un marcador en la ubicación del usuario
      const marker = L.marker(e.latlng).addTo(this.map)
        .bindPopup(`You are within ${radius} meters from this point`).openPopup();

      // Dibuja un círculo alrededor de la ubicación para representar la precisión
      L.circle(e.latlng, radius).addTo(this.map);
    });

    // Manejar el evento si no se puede encontrar la ubicación
    this.map.on('locationerror', (e: any) => {
      alert('Location access denied.');
    });
  }
}
