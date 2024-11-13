export interface Conductor {
  Rut: number; // Cambiado de Int16Array a number
  PrimerNombre: string;
  PrimerApellido: string;
  SegundoNombre?: string; // Puede ser opcional si aplica
  SegundoApellido?: string; // Puede ser opcional si aplica
  FechaNacimiento: string;
  NumeroTelefono: string; // Cambiado de Int16Array a number
  Id_Sede: number ; // Cambiado de Int16Array a number
  CorreoElectronico: string;
  Contrasena : string,
  Imagen : string,
  Verificado :boolean,
  descripcion: string,
  IdValoracion : number
    // Otros campos que tenga tu tabla
  }