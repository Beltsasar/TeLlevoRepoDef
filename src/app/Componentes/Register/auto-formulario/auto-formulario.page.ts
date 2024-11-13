import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { TipoAuto } from 'src/app/Tablas/tipoAuto';
import { auto } from 'src/app/Tablas/auto';
import { Conductor } from 'src/app/Tablas/Conductor';
import { ToastController } from '@ionic/angular';
import { Conditional } from '@angular/compiler';
interface ResponseConductor {
  idConductor: number;
}
@Component({
  selector: 'app-auto-formulario',
  templateUrl: './auto-formulario.page.html',
  styleUrls: ['./auto-formulario.page.scss'],
})
export class AutoFormularioPage implements OnInit {
  // Recupera el conductor del localStorage y lo parsea a un objeto
  conductorData = localStorage.getItem("nuevoConductor");
  conductorAProcesar: Conductor = this.conductorData ? JSON.parse(this.conductorData) : null;

  // Modelo para el auto, con los campos vacíos para completar desde el formulario


  // Lista de tipos de auto que se cargarán desde localStorage o la base de datos
  tiposAuto: TipoAuto[] = [];

  constructor(
    private databaseService: DatabaseService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    // Verifica si hay datos de conductor en localStorage, si no, redirige al login
    if (!this.conductorAProcesar) {
      this.router.navigate(['/login']);
      return;
    }

    // Cargar los tipos de auto desde localStorage o desde la base de datos
    const tiposAutoLocal = localStorage.getItem('tiposAuto');
    if (tiposAutoLocal) {
      this.tiposAuto = JSON.parse(tiposAutoLocal);
    } else {
      // Si no están en localStorage, cargarlos desde el servidor
      this.databaseService.getTiposAuto().subscribe(
        (data) => {
          this.tiposAuto = data;
          // Guardar en localStorage para futuras sesiones
          localStorage.setItem('tiposAuto', JSON.stringify(this.tiposAuto));
        },
        (error) => {
          console.error('Error al cargar tipos de auto:', error);
        }
      );
    }
  }

  // Maneja el cambio en la selección del tipo de auto
  onAutoChange(event: any) {
    console.log('Auto seleccionado:', event.detail.value);
    this.nuevoauto.id_tipoAuto = event.detail.value; // Asigna el valor seleccionado al modelo auto
  }

  // Limpiar datos de conductor en localStorage
  Volver() {
    localStorage.removeItem("nuevoConductor");
  }

  nuevoauto: auto = {
    patente: '',
    modelo_auto: '',
    ano_auto: 0,
    idConductor: 0,
    CapacidadPasajeros: '',
    id_tipoAuto: 0
  };

async registrarConductorYAuto(conductor: Conductor, auto: auto) {
  try {
    const response: any = await this.databaseService.registrarConductor(conductor).toPromise();
    console.log('Respuesta del backend:', response);
    const idConductor: number = parseInt(response.conductorId); // Verificar qué contiene response
    

    // Verificar que idConductor no sea undefined o nulo
    if (idConductor) {
      console.log("Conductor registrado con ID:", idConductor);
      this.nuevoauto.idConductor = idConductor
      await this.databaseService.registrarAuto(this.nuevoauto).toPromise();
      console.log("Conductor y auto registrados exitosamente");
      this.presentToast("Se ha registrado exitosamente!")
      localStorage.removeItem("nuevoConductor")
      localStorage.removeItem("capturedImage")
      this.router.navigate(['/login']);
    } else {
      console.error("No se recibió el idConductor de la respuesta");
    }
  } catch (error) {
    console.error("Error al registrar conductor y auto:", error);
  }
}

// Método para enviar los datos cuando el formulario es enviado
onSubmit() {
  this.registrarConductorYAuto(this.conductorAProcesar, this.nuevoauto);
}


  
  
  
  

  // Muestra un toast de notificación
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }
}
