import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mostrar-postulante',
  templateUrl: './mostrar-postulante.page.html',
  styleUrls: ['./mostrar-postulante.page.scss'],
})
export class MostrarPostulantePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  
  usuario = {
    nombre: 'Juan Pérez',
    email: 'juan.perez@example.com',
    telefono: '+56912345678',
    direccion: 'Av. Siempre Viva 742'
  };
  volver() {
    this.navCtrl.back();
  }
}
