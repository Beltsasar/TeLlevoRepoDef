import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service'; // Importar el servicio
import { TablaPasajero } from '../Tablas/TablaPasajero.model';
import { TablaSede } from '../Tablas/TablaSedes.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  sedes: TablaSede[] = []; // Array para almacenar las sedes
  selectedSede: string | null = null;
  nuevoPasajero: TablaPasajero = {
    Rut: '',
    PrimerNombre: '',
    PrimerApellido: '',
    SegundoNombre: '',
    SegundoApellido: '',
    FechaNacimiento: '',
    NumeroTelefono: '',
    CorreoElectronico: '',
    IdSede: null,
    IdCarrera: null
  };
  isFormValid: boolean = false; // Variable para manejar el estado del formulario
  
  constructor(private databaseService: DatabaseService) {}

  ngOnInit() {
    this.cargarPasajeros(); // Cargar pasajeros al iniciar
    this.CargarSedes();
  }

  // Función para validar si todos los campos requeridos están llenos
  validarFormulario() {
    const { Rut, PrimerNombre, PrimerApellido, FechaNacimiento, CorreoElectronico } = this.nuevoPasajero;
    this.isFormValid = !!( PrimerNombre && PrimerApellido && FechaNacimiento && CorreoElectronico);
  }

  onSubmit() {
    if (this.isFormValid) {
      this.databaseService.addPasajero(this.nuevoPasajero).subscribe(
        (response) => {
          console.log('Pasajero agregado:', response);
          // Aquí puedes agregar lógica adicional, como mostrar un mensaje de éxito
        },
        (error) => {
          console.error('Error al agregar pasajero:', error);
          // Manejo de errores aquí
        }
      );
    } else {
      console.error('Formulario inválido: Faltan campos obligatorios.');
    }
  }

  cargarPasajeros() {
    this.databaseService.getPasajeros().subscribe(
      (pasajeros) => {
        console.log('Pasajeros obtenidos:', pasajeros); // Mostrar los pasajeros en la consola
      },
      (error) => {
        console.error('Error al cargar los pasajeros', error);
      }
    );
  }

  CargarSedes() {
    this.databaseService.getSedes().subscribe(
      (sede) => {
        this.sedes = sede; // Almacenar las sedes obtenidas
        console.log('Sedes obtenidas:', sede); // Mostrar las sedes en la consola
      },
      (error) => {
        console.error('Error al cargar las sedes', error);
      }
    );
  }
}
