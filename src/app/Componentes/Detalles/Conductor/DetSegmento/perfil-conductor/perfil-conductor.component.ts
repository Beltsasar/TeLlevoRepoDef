import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-conductor',
  templateUrl: './perfil-conductor.component.html',
  styleUrls: ['./perfil-conductor.component.scss'],
})
export class PerfilConductorComponent implements OnInit {
  usuario: any = {}; // Asegúrate de inicializar la variable 'usuario'

  constructor(private router: Router) {}

  ngOnInit() {
    this.cargarUsuario(); // Asegúrate de que este método se ejecute al iniciar
  }

  cargarUsuario() {
    const usuario = localStorage.getItem('conductorAutenticado');
    if (usuario) {
      this.usuario = JSON.parse(usuario); // Asignamos el usuario a la variable 'usuario'
      console.log(this.usuario); // Para ver los datos cargados
    }
  }

  cerrarSesion() {
    localStorage.removeItem('conductorAutenticado');
    this.router.navigate(['/login']);
  }
}
