import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalles-destino-ofrecido',
  templateUrl: './detalles-destino-ofrecido.page.html',
  styleUrls: ['./detalles-destino-ofrecido.page.scss'],
})
export class DetallesDestinoOfrecidoPage implements OnInit {

  destino: String = '';
  origen: String = '';
  horaPartida: String = '';
  fechaPartida: String = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

  }
}
