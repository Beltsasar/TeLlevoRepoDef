export interface User {
  nombre: string;
  apellidos: string;
  email: string;
  password: string;
}

// Define el diccionario que simula una base de datos
export const userDatabase: { [id: string]: User } = {
  '1': { nombre: 'Juan', apellidos: 'Pérez', email: 'juan@example.com', password: 'password123' },
  '2': { nombre: 'Ana', apellidos: 'García', email: 'ana@example.com', password: 'password456' },
  '3': { nombre: 'Thiare', apellidos: 'Hernandez', email: 'thiare@Duoc.cl', password: '1234567' },
  '4': { nombre: 'Daniel', apellidos: 'Plasencia', email: '1@gmail.com', password: '123456' }
  
};