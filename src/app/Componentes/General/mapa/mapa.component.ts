import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements AfterViewInit {
  private map: any;

  private initMap(): void {
    const latitud = -33.4489;
    const longitud = -70.6693;
    const zoomLevel = 14;  // Nivel de zoom inicial

    this.map = L.map('map').setView([latitud, longitud], zoomLevel);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    const customIcon = L.icon({
      iconUrl: 'assets/icon/marker-icon-2x.png', // Asegúrate de tener el archivo aquí
      iconSize: [25, 41], // Tamaño del ícono
      iconAnchor: [12, 41], // Punto donde se ancla el ícono
      popupAnchor: [1, -34], // Punto donde se abre el popup
      shadowUrl: 'assets/icon/marker-shadow.png', // Opcional, sombra del marcador
      shadowSize: [41, 41], // Tamaño de la sombra
    });

    this.map.locate({ setView: false, maxZoom: 10 }); // SetView: false evita el ajuste automático del zoom

    this.map.on('locationfound', (e: any) => {
      const radius = e.accuracy / 2;

      L.marker(e.latlng, { icon: customIcon }).addTo(this.map)
        .bindPopup(`You are within ${radius} meters from this point`).openPopup();

      L.circle(e.latlng, radius).addTo(this.map);
    });

    this.map.on('locationerror', () => {
      alert('Location access denied.');
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
