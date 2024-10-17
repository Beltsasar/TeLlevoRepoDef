const axios = require('axios');

const url = 'http://localhost:3000/api/pasajeros'; // Asegúrate de que esta sea la URL correcta de tu API

async function mostrarPasajeros() {
  try {
    const response = await axios.get(url);
    const pasajeros = response.data;

    console.log('Lista de Pasajeros:');
    pasajeros.forEach(pasajero => {
      console.log(`ID: ${pasajero.id}, RUT: ${pasajero.rut}, Nombre: ${pasajero.primer_nombre} ${pasajero.segundo_nombre}, Apellido: ${pasajero.primer_apellido} ${pasajero.segundo_apellido}, Fecha de Nacimiento: ${pasajero.fecha_nacimiento}, Teléfono: ${pasajero.numero_telefono}, Correo: ${pasajero.correo_electronico}`);
    });
  } catch (error) {
    console.error('Error al obtener pasajeros:', error);
  }
}

// Llamar a la función
mostrarPasajeros();
