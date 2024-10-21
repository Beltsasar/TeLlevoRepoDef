import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service'; // Importar el servicio
import { TablaPasajero } from '../Tablas/TablaPasajero.model';
import { TablaSede } from '../Tablas/TablaSedes.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  sedes: TablaSede[] = []; // Array para almacenar las sedes
  selectedSede: TablaSede | null = null; // Almacenar el objeto completo de la sede seleccionada
  
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
    Contrasena:''
  };
  isFormValid: boolean = false; // Variable para manejar el estado del formulario
  
  constructor(private databaseService: DatabaseService,
    private router : Router
  ) {}

  ngOnInit() {
    this.CargarSedes();
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

      const fechaNac = new Date(this.nuevoPasajero.FechaNacimiento).toISOString().split('T')[0];
  
      // Actualizar el valor de fecha_nacimiento
      this.nuevoPasajero.FechaNacimiento = fechaNac;
  
      this.databaseService.addPasajero(this.nuevoPasajero).subscribe(
        (response) => {
          this.router.navigate(['/login'])
        },
        (error) => {
          console.error('Error al agregar pasajero:', error);
        }
      );
    } else {
      console.error('Formulario inválido: Faltan campos obligatorios.');
    }
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
