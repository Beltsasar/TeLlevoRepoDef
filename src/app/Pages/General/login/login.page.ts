import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { ToastController } from '@ionic/angular'; 
import { HttpClient } from '@angular/common/http';  // Importar HttpClient
import { DatabaseService } from 'src/app/services/database.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  Correo: string = '';
  Contrasena: string = '';
  Nombre: string = '';
  CorreoRecuperacion: string = ''; // Campo para el correo de recuperación

  constructor(
    private databaseService: DatabaseService,

    private router: Router,
    private toastController: ToastController,
    private http: HttpClient // Inyectar HttpClient
  ) {}

  ngOnInit() {
    this.verificarSesion();
  }

  enterPresionado(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.validarDatos();
    }
  }

  async verificarSesion() {
    const usuarioAutenticado = localStorage.getItem('usuarioAutenticado');
    
    if (usuarioAutenticado) {
      this.router.navigate(['/index']);
    }
  }


  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }

  isModalOpen: boolean = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

async validarDatos() {
  this.http.post('http://localhost:3000/api/login', {
    Correo: this.Correo,
    Contrasena: this.Contrasena,
  }).subscribe(
    async (response: any) => {
      // Si el login es exitoso
      if (response.message === 'Login exitoso') {
        const usuario = {
          nombre: response.usuario.primer_nombre, // Asegúrate de que el campo coincida con el backend
          correo: response.usuario.correo_electronico,  // Correo que también viene desde el servidor
        };

        localStorage.setItem('usuarioAutenticado', JSON.stringify(usuario));
        this.presentToast('Login exitoso');
        this.router.navigate(['/index']);
      }
    },
    async (error) => {
      if (error.status === 401) {
        this.presentToast('Correo o contraseña incorrectos');
      } else {
        this.presentToast('Error en el servidor');
      }
    }
  );
}

recuperarContra() {
  this.databaseService.recuperarContrasena(this.CorreoRecuperacion).subscribe(
    async (response) => {
      console.log('Respuesta del servidor:', response); // Log para ver la respuesta
      this.presentToast('se ha enviado el correo');
    },
    async (error) => {
      console.error('Error al recuperar contraseña:', error); // Log para ver el error

      this.presentToast('error al enviar el correo');
    }
  );
}
}
