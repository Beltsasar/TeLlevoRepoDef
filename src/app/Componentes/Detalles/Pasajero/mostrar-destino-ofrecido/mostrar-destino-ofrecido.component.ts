import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-destino-ofrecido',
  templateUrl: './mostrar-destino-ofrecido.component.html',
  styleUrls: ['./mostrar-destino-ofrecido.component.scss'],
})
export class MostrarDestinoOfrecidoComponent {
  // Variables que recibirán los datos del destino ofrecido
  @Input() destino: string = 'Santiago';
  @Input() origen: string = 'Valparaíso';
  @Input() horaPartida: string = '14:00';
  @Input() fechaPartida: string = '01/10/2024';

  constructor(private router: Router) {}

  verDetalles() {
    this.router.navigate(['/detalles-destino-ofrecido', this.destino, this.origen, this.horaPartida, this.fechaPartida]);
  }
}
