import { Component, EventEmitter, Output } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-home-pasajero',
  templateUrl: './home-pasajero.component.html',
  styleUrls: ['./home-pasajero.component.scss'],
})
export class HomePasajeroComponent {
  address : String=""; // Para almacenar la dirección
  nombreUsuario: string = ''; // Variable para almacenar el nombre del usuario

  @Output() cambiarSegmento = new EventEmitter<string>();

  constructor(private router: Router) { 
    
  }
  ngOnInit() {
    // Obtener el usuario autenticado desde el localStorage
    const usuarioAutenticado = JSON.parse(localStorage.getItem('usuarioAutenticado') || '{}');

    // Verificar si hay un nombre en el objeto del usuario
    if (usuarioAutenticado && usuarioAutenticado.PrimerNombre) {
      this.nombreUsuario = usuarioAutenticado.PrimerNombre;
    } else {
      console.log(usuarioAutenticado)
      this.nombreUsuario = 'ERROR'; // Nombre por defecto si no se encuentra el usuario
    }
  }

  solicitarViaje() {
        this.router.navigate(['/buscar-viaje']);
    console.log('Solicitud de viaje enviada');
    // Aquí podrías agregar la lógica para solicitar un viaje
  }


  irAPerfil() {
    this.cambiarSegmento.emit('perfil'); 
  }

  irAHistorial() {
    this.cambiarSegmento.emit('historial'); 
}
irAConductor() {
  this.router.navigate(['/inicio-conductor']); // Redirigir a la página de "Conductor"
}

irAPasajero() {
  this.router.navigate(['/inicio-pasajero']); // Redirigir a la página de "Pasajero"
}
}
