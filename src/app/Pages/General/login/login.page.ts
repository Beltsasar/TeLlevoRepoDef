import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { ToastController } from '@ionic/angular'; 
import { HttpClient } from '@angular/common/http';  // Importar HttpClient

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  Correo: string = '';
  Contrasena: string = '';

  constructor(
    private router: Router,
    private toastController: ToastController,
    private http: HttpClient // Inyectar HttpClient
  ) {}

  ngOnInit() {
    this.verificarSesion(); // Verificar sesión al iniciar el componente
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

  // Cambiar la validación para usar la base de datos
  async validarDatos() {
    this.http.post('http://localhost:3000/login', {
      Correo: this.Correo,
      Contrasena: this.Contrasena
    }).subscribe(
      async (response: any) => {
        // Si el login es exitoso
        if (response.message === 'Login exitoso') {
          localStorage.setItem('usuarioAutenticado', JSON.stringify(response.usuario));
          this.presentToast('Login exitoso');
          this.router.navigate(['/index']);
        }
      },
      async (error) => {
        // Si el login falla
        this.presentToast('Correo o contraseña incorrectos');
      }
    );
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

  recuperarContra() {
  }
}
