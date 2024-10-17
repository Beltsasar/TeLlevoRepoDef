import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ofrecer-viaje',
  templateUrl: './ofrecer-viaje.page.html',
  styleUrls: ['./ofrecer-viaje.page.scss'],
})
export class OfrecerViajePage implements OnInit {
  ngOnInit(): void {
    
  }
  destino: string = '';
  origen: string = '';
  horaPartida: string = '';
  fechaPartida: string = '';
  publicacionExitosa: boolean = false;
  mostrarMensaje: boolean = false; 

  constructor(private router:Router) {}

  // Función para manejar la publicación del destino
  publicarDestino() {

      console.log(`Destino: ${this.destino}, Origen: ${this.origen}}`);
      this.publicacionExitosa = true;


      setTimeout(() => {
        this.mostrarMensaje = false;
        this.router.navigate(['/inicio-pasajero']);
      }, 1000);
  }
}
