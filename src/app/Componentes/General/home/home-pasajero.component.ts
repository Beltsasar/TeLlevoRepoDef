import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-pasajero',
  templateUrl: './home-pasajero.component.html',
  styleUrls: ['./home-pasajero.component.scss'],
})
export class HomePasajeroComponent {
  address: string = ''; // Para almacenar la dirección
  nombreUsuario: string = ''; // Variable para almacenar el nombre del usuario
  @Output() cambiarSegmento = new EventEmitter<string>();

  constructor(private router: Router) {}

  // Esta es una mejor práctica para manejar el localStorage
  ngOnInit() {
    this.obtenerUsuario(); // Llama a la función para obtener el usuario del localStorage
  }

  obtenerUsuario() {
    const usuarioAutenticado = localStorage.getItem('usuarioAutenticado');
    if (usuarioAutenticado) {
      const usuario = JSON.parse(usuarioAutenticado);
      this.nombreUsuario = this.capitalizarPrimeraLetra(usuario.nombre); // Capitaliza la primera letra del nombre
    } else {
      console.log('No se encontró ningún usuario autenticado.');
    }
  }
  capitalizarPrimeraLetra(nombre: string): string {
    if (!nombre) return nombre; // Si el nombre está vacío, simplemente retorna
    return nombre.charAt(0).toUpperCase() + nombre.slice(1);
  }
  
  
  solicitarViaje() {
    this.router.navigate(['/buscar-viaje']);
    console.log('Solicitud de viaje enviada');
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
