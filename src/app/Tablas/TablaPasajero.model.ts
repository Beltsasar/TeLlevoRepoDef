export interface TablaPasajero {
    Rut: string; // Cambiado de Int16Array a number
    PrimerNombre: string;
    PrimerApellido: string;
    SegundoNombre?: string; // Puede ser opcional si aplica
    SegundoApellido?: string; // Puede ser opcional si aplica
    FechaNacimiento: string;
    NumeroTelefono: string; // Cambiado de Int16Array a number
    IdSede: number ; // Cambiado de Int16Array a number
    CorreoElectronico: string;
    Contrasena : string
}
