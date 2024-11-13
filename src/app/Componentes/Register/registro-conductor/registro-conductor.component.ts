import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service'; 
import { TablaSede } from '../../../Tablas/TablaSedes.model';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Conductor } from 'src/app/Tablas/Conductor';
import { TipoAuto } from 'src/app/Tablas/tipoAuto';

@Component({
  selector: 'app-registro-conductor',
  templateUrl: './registro-conductor.component.html',
  styleUrls: ['./registro-conductor.component.scss'],
})

export class RegistroConductorComponent implements OnInit {
  id_auto: string = ""; 
  sedes: TablaSede[] = []; 
  selectedSede: TablaSede | null = null; 
  capturedImage: string | null = null;
  autos: TipoAuto[] = [];
  RutForm: string = ''; // Variable para almacenar el RUT ingresado

  nuevoConductor: Conductor = {
    Rut: 0,
    PrimerNombre: '',
    PrimerApellido: '',
    SegundoNombre: '',
    SegundoApellido: '',
    FechaNacimiento: '',
    NumeroTelefono: '',
    CorreoElectronico: '',
    Id_Sede: 1,
    Imagen: '',
    Contrasena: '',
    Verificado: false,
    descripcion: '',
    IdValoracion: 0,
  };
  isFormValid: boolean = false;
  intervalId: any;

  constructor(private databaseService: DatabaseService, private router: Router, private toastController: ToastController) { }

  ngOnInit() {
    this.autos = JSON.parse(localStorage.getItem('tiposAuto') || '[]');
  
    this.capturedImage = localStorage.getItem('capturedImage');
    if (this.capturedImage) {
      this.nuevoConductor.Imagen = this.capturedImage;
    }
  
    console.log("Foto capturada:", this.nuevoConductor.Imagen);
    this.recargarSeccionImagen();
    this.CargarSedes();
  }
  
  recargarSeccionImagen() {
    const storedImage = localStorage.getItem('capturedImage');
    if (storedImage && storedImage.startsWith('data:image/')) {
      this.capturedImage = storedImage;
      this.nuevoConductor.Imagen = storedImage;
    }
    this.intervalId = setInterval(() => {
      const newStoredImage = localStorage.getItem('capturedImage');
      if (newStoredImage && newStoredImage !== this.capturedImage) {
        this.capturedImage = newStoredImage;
        this.nuevoConductor.Imagen = newStoredImage;
        console.log('Imagen actualizada:', this.capturedImage);
      }
    }, 1000);
  }

  validarFormulario() {
    const { Rut, PrimerNombre, PrimerApellido, FechaNacimiento, CorreoElectronico } = this.nuevoConductor;
    this.isFormValid = !!(Rut && PrimerNombre && PrimerApellido && FechaNacimiento && CorreoElectronico);
  }

  // Método para procesar el RUT y convertirlo en un número
  procesarRut(rut: string): number {
    // Eliminar guion y cualquier punto
    const rutSinFormato = rut.replace(/[\.\-]/g, '');
    // Extraer solo la parte numérica, sin el dígito verificador
    const rutNumerico = rutSinFormato.slice(0, -1); 
    return parseInt(rutNumerico, 10);
  }

  onSedeChange(event: any) {
    const selectedSedeId = event.detail.value;
    this.nuevoConductor.Id_Sede = selectedSedeId;
  }

  onSubmit() {
    // Convertir el RUT en número antes de guardarlo en nuevoConductor
    this.nuevoConductor.Rut = this.procesarRut(this.RutForm);

    this.validarFormulario();
    if (this.isFormValid) {
      localStorage.setItem('nuevoConductor', JSON.stringify(this.nuevoConductor));
      console.log("Datos del conductor guardados en localStorage", this.nuevoConductor);
      this.router.navigate(['/auto-formulario']); // Navega al siguiente formulario
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
      (sedes) => {
        this.sedes = sedes;
      },
      (error) => {
        console.error('Error al cargar las sedes', error);
      }
    );
  }
}
