import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { ToastController } from '@ionic/angular'; 
import { HttpClient } from '@angular/common/http';  
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
  verificado: boolean = false; // Agrega esta propiedad

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
      this.onSubmit();
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

  async onSubmit() {
    this.http.post('http://localhost:3000/api/login', {
      Correo: this.Correo,
      Contrasena: this.Contrasena,
    }).subscribe(
      async (response: any) => {
        // Si el login es exitoso
        if (response.message === 'Login exitoso') {          
          const buffer = response.usuario.FotoPerfil.data;
          let byteCharacters = '';
          for (let i = 0; i < buffer.length; i++) {
            byteCharacters += String.fromCharCode(buffer[i]);
          }
          const base64String = btoa(byteCharacters); // Convertir a base64
          const dataUrl = `data:image/png;base64,${base64String}`; // Crear el Data URL

          const usuario = {
            PrimNombre: response.usuario.primer_nombre,
            SegNombre: response.usuario.segundo_nombre,
            PrimApe: response.usuario.primer_apellido,
            SegApe: response.usuario.segundo_apellido,
            correo: response.usuario.correo_electronico,
            nacimiento:response.usuario.fecha_nacimiento,
            numero:response.usuario.numero_telefono,
            id_sede :response.usuario.Id_sede,
            foto: dataUrl, // Aquí debes almacenar el dataUrl generado
            descripcion: response.usuario.Descripcion, // Agregar descripción
            verificado: response.usuario.verificado // Agregar verificado

          };
          
          localStorage.setItem('usuarioAutenticado', JSON.stringify(usuario));
          localStorage.setItem('usuarioImagen', dataUrl); // Almacena el dataUrl
          console.log('Descripción del usuario:', usuario.descripcion); // Mostrar descripción
          console.log('Verificado del usuario:', usuario.verificado); // Mostrar estado verificado

          // Aquí podrías agregar lógica adicional si el usuario no está verificado

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
        this.presentToast('Se ha enviado el correo');
        this.setOpen(false);
      },
      async (error) => {
        console.error('Error al recuperar contraseña:', error); // Log para ver el error
        this.presentToast('Error al enviar el correo');
      }
    );
  }
}
