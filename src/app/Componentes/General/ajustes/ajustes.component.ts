import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajustos',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.scss'],
})
export class AjustesComponent  implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {}
  cerrarSesion() {
    localStorage.removeItem('usuarioAutenticado');

    this.router.navigate(['/login']); // Redirigir al usuario a la página de inicio de sesión
  }

}
