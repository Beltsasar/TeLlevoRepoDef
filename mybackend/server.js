require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer'); 

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'Daniel',
  password: '123456789',
  database: 'tellevo1'
});
  
db.connect(err => {
  if (err) {
    console.error('Error conectando a MySQL:', err);
    return;
  }
  console.log('Conectado a MySQL');
});

// para ver la tabla pasajeros 
app.get('/api/pasajeros', (req, res) => {
  db.query('SELECT * FROM pasajero', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener pasajeros' });
    }
    res.json(results);
  });
});

  // funcion para creacion de pasajero
app.post('/api/pasajeros', (req, res) => {
    const nuevoPasajero = req.body;
    console.log('Datos recibidos:', req.body);

    if (!nuevoPasajero.Rut|| !nuevoPasajero.PrimerNombre|| !nuevoPasajero.PrimerApellido) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }
    const query = `
      INSERT INTO pasajero (rut, primer_nombre, primer_apellido, segundo_nombre, segundo_apellido, fecha_nacimiento, numero_telefono, correo_electronico, Id_sede, contrasena )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)`;

    const values = [
      
      nuevoPasajero.Rut,
      nuevoPasajero.PrimerNombre,
      nuevoPasajero.PrimerApellido,
      nuevoPasajero.SegundoNombre || null, // Si no hay segundo nombre, usar null
      nuevoPasajero.SegundoApellido || null, // Si no hay segundo apellido, usar null
      nuevoPasajero.FechaNacimiento || null, // Si no hay fecha de nacimiento, usar null
      nuevoPasajero.NumeroTelefono || null, // Si no hay número de teléfono, usar null
      nuevoPasajero.CorreoElectronico, // Si no hay correo electrónico, usar null
      nuevoPasajero.IdSede || null, // Si no hay ID de sede, usar null
      nuevoPasajero.Contrasena
    ];
  
    db.query(query, values, (err, result) => {
      if (err) {
        console.error('Error al agregar pasajero:', err);
        return res.status(500).json({ error: 'Error al agregar pasajero' });
      }
      res.status(201).json({ id: result.insertId, ...nuevoPasajero }); // Retornar el ID del nuevo pasajero
    });
  });

app.get('/api/sede', (req, res) => {
  db.query('SELECT * FROM sede', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener las sedes' });
    }
    res.json(results);
  });
});


app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


  //funcion para incio de sesion
app.post('/api/login', (req, res) => {
const { Correo, Contrasena } = req.body;

if (!Correo || !Contrasena) {
  return res.status(400).json({ error: 'Correo y contraseña son obligatorios' });
}

const query = 'SELECT primer_nombre, correo_electronico FROM pasajero WHERE correo_electronico = ? AND contrasena = ?';

db.query(query, [Correo, Contrasena], (err, results) => {
  if (err) {
    return res.status(500).json({ error: 'Error al realizar la consulta' });
  }

  if (results.length === 0) {
    return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
  }

  const usuario = results[0];
  res.json({ message: 'Login exitoso', usuario });
});
});

  //funcion para recuperar contrasena
app.post('/api/recuperar-contrasena', (req, res) => {
  const { correo } = req.body;

  const query = 'SELECT primer_nombre, contrasena,correo_electronico FROM pasajero WHERE correo_electronico = ?';
  
  db.query(query, [correo], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error en el servidor', error: err });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Correo no registrado' });
    }
    const nombre = results[0].primer_nombre; // Obtener el nombre del usuario
    const contrasena = results[0].contrasena; // Obtener la contraseña del usuario
    enviarCorreoRecuperacion(correo, contrasena,nombre);

    // Responder al cliente
  });
});
//funcion para enviar correo
function enviarCorreoRecuperacion(correo, contrasena,nombre) {
  // Configuración del transporter de Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nombreparacuentas1234@gmail.com', // Tu correo electrónico
      pass: 'xnfz gpzs xcqf wgiq', // Contraseña de aplicación
    },
  });

  const mailOptions = {
    from: 'tu_email@gmail.com', // Tu correo electrónico
    to: correo, // Destinatario
    subject: 'Recuperación de contraseña - Te Llevo',
    text: `Estimad@ ${nombre},
  
  Hemos recibido una solicitud para recuperar su contraseña en la aplicación "Te Llevo". 
  
  Su contraseña actual es: ${contrasena}
  
  Si no realizó esta solicitud, por favor ignore este correo. Si necesita asistencia adicional, no dude en ponerse en contacto con nuestro soporte técnico.
  
  Atentamente,
  El equipo de Te Llevo
    `,
  };
  

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
    } else {
      console.log('Correo enviado:', info.response);
    }
  });
}


