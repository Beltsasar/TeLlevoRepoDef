import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service'; // Importar el servicio
import { TablaPasajero } from '../Tablas/TablaPasajero.model';
import { TablaSede } from '../Tablas/TablaSedes.model';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  sedes: TablaSede[] = []; // Array para almacenar las sedes
  selectedSede: TablaSede | null = null; // Almacenar el objeto completo de la sede seleccionada
  capturedImage: string | null = null;

  nuevoPasajero: TablaPasajero = {
    Rut: '',
    PrimerNombre: '',
    PrimerApellido: '',
    SegundoNombre: '',
    SegundoApellido: '',
    FechaNacimiento: '',
    NumeroTelefono: '',
    CorreoElectronico: '',
    IdSede: 1,
    Contrasena: '',
    Imagen: '',
    Verificado: false,
    descripcion: ''
  };

  isFormValid: boolean = false; // Variable para manejar el estado del formulario
  intervalId: any; // Para almacenar el ID del intervalo

  constructor(private databaseService: DatabaseService, private router: Router, private toastController: ToastController) { }

  reloadPage() {
    window.location.reload();
  }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      const state = navigation.extras.state as { image: string };
      if (state.image) {
        this.nuevoPasajero.Imagen = state.image; // Asignar imagen del estado de navegación
      }
    }
    this.capturedImage = localStorage.getItem('capturedImage'); // Recuperar imagen de localStorage
    this.recargarSeccionImagen();
    this.CargarSedes();
  }

  recargarSeccionImagen() {
    // Verificar la imagen en el localStorage
    const storedImage = localStorage.getItem('capturedImage');
    if (storedImage && storedImage.startsWith('data:image/')) {
      this.capturedImage = storedImage;
      this.nuevoPasajero.Imagen = storedImage; // Asignar imagen a nuevoPasajero
    }

    // Establecer un intervalo para revisar el localStorage cada segundo (1000 ms)
    this.intervalId = setInterval(() => {
      const newStoredImage = localStorage.getItem('capturedImage');
      if (newStoredImage && newStoredImage !== this.capturedImage) {
        this.capturedImage = newStoredImage;
        this.nuevoPasajero.Imagen = newStoredImage; // Actualizar imagen en nuevoPasajero
        console.log('Imagen actualizada:', this.capturedImage);
      }
    }, 1000);
  }

  // Función para validar si todos los campos requeridos están llenos
  validarFormulario() {
    const { Rut, PrimerNombre, PrimerApellido, FechaNacimiento, CorreoElectronico } = this.nuevoPasajero;
    this.isFormValid = !!(Rut && PrimerNombre && PrimerApellido && FechaNacimiento && CorreoElectronico);
  }

  // Actualiza el IdSede cuando cambia la sede seleccionada
  onSedeChange(event: any) {
    const selectedSedeId = event.detail.value; // Obtiene el ID de la sede seleccionada
    this.nuevoPasajero.IdSede = selectedSedeId; // Actualiza el IdSede en el objeto nuevoPasajero
  }

  onSubmit() {
    this.validarFormulario(); // Validar el formulario antes de enviar
    if (this.isFormValid) {
      const formData = new FormData();

      // Verificar y procesar la imagen
      if (this.nuevoPasajero.Imagen && this.nuevoPasajero.Imagen.startsWith('data:image/')) {
        const byteString = atob(this.nuevoPasajero.Imagen.split(',')[1]);
        const mimeString = this.nuevoPasajero.Imagen.split(',')[0].split(':')[1].split(';')[0];
        const ab = new Uint8Array(byteString.length);
        
        // Crear el Blob de la imagen
        for (let i = 0; i < byteString.length; i++) {
          ab[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: mimeString });
        formData.append('imagen', blob, 'imagen.png');
        console.log('Imagen procesada y añadida al formulario');
      } else {
        console.error('Formato de imagen no válido.');
      }

      // Añadir otros campos al FormData
      formData.append('Rut', this.nuevoPasajero.Rut);
      formData.append('PrimerNombre', this.nuevoPasajero.PrimerNombre);
      formData.append('PrimerApellido', this.nuevoPasajero.PrimerApellido);
      formData.append('SegundoNombre', this.nuevoPasajero.SegundoNombre || '');
      formData.append('SegundoApellido', this.nuevoPasajero.SegundoApellido || '');
      formData.append('FechaNacimiento', this.nuevoPasajero.FechaNacimiento || '');
      formData.append('NumeroTelefono', this.nuevoPasajero.NumeroTelefono || '');
      formData.append('CorreoElectronico', this.nuevoPasajero.CorreoElectronico || '');
      formData.append('IdSede', this.nuevoPasajero.IdSede.toString()); // Convertir a string
      formData.append('Contrasena', this.nuevoPasajero.Contrasena);
      formData.append('Verificado', this.nuevoPasajero.Verificado ? '0' : '1'); // Convertir a string
      formData.append('Descripcion', this.nuevoPasajero.descripcion || '');

      this.databaseService.addPasajero(formData).subscribe(
        (response) => {
          this.presentToast("Usuario Registrado");
          localStorage.removeItem('capturedImage'); // Limpiar la imagen capturada
          this.router.navigate(['/login']); // Navegar a la página de login
        },
        (error) => {
          console.error('Error al agregar pasajero:', error);
        }
      );
    } else {
      console.error('Formulario inválido: Faltan campos obligatorios.');
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

  CargarSedes() {
    this.databaseService.getSedes().subscribe(
      (sede) => {
        this.sedes = sede; // Almacenar las sedes obtenidas
      },
      (error) => {
        console.error('Error al cargar las sedes', error);
      }
    );
  }
}
