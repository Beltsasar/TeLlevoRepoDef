import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  usuarioImagen: string | null = null; // Para almacenar la imagen del usuario
  descripcion: string = '';

  constructor() {}

  ngOnInit() {
    console.log('Cargando el componente Perfil...');
    this.usuarioImagen = localStorage.getItem('usuarioImagen');
    this.loadUserDescription(); // Asegúrate de que este método se ejecute
  }

  loadUserDescription() {
    const usuario = localStorage.getItem('usuarioAutenticado');
    if (usuario) {
      console.log("llego al ts")

      const parsedUser = JSON.parse(usuario);
      console.log(parsedUser)
      this.descripcion = parsedUser.descripcion; // Accede a la descripción del usuario
      console.log(this.descripcion)
    }
  }
}
