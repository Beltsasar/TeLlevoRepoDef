require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer'); 
const multer = require('multer');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' })); // Aumentar el límite de tamaño de solicitud

// Configuración de multer para manejar la carga de imágenes
const storage = multer.memoryStorage(); // Almacena archivos en memoria
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 } // Limitar el tamaño de la imagen a 10MB
});

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

// Ruta para agregar un pasajero con imagen
app.post('/api/pasajeros', upload.single('imagen'), (req, res) => {
  const nuevoPasajero = req.body;

  // Convertir la imagen de base64 a un Buffer solo si se ha subido una imagen
  const imagenBuffer = req.file ? req.file.buffer : null;

  // Validar que se hayan proporcionado todos los campos obligatorios
  if (!nuevoPasajero.Rut || !nuevoPasajero.PrimerNombre || !nuevoPasajero.PrimerApellido || !nuevoPasajero.Contrasena) {
    return res.status(400).json({ error: 'Faltan campos obligatorios: Rut, PrimerNombre, PrimerApellido y Contrasena son necesarios.' });
  }

  // Definir la consulta SQL para insertar el nuevo pasajero
  const query = `
  INSERT INTO pasajero (rut, primer_nombre, primer_apellido, segundo_nombre, segundo_apellido, fecha_nacimiento, numero_telefono, correo_electronico, id_sede, contrasena, FotoPerfil, verificado, Descripcion)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
`;

// Definir los valores a insertar en la base de datos
const values = [
  nuevoPasajero.Rut,
  nuevoPasajero.PrimerNombre,
  nuevoPasajero.PrimerApellido,
  nuevoPasajero.SegundoNombre ?? null, // Usando el operador nullish
  nuevoPasajero.SegundoApellido ?? null,
  nuevoPasajero.FechaNacimiento ?? null,
  nuevoPasajero.NumeroTelefono ?? null,
  nuevoPasajero.CorreoElectronico ?? null,
  nuevoPasajero.IdSede ?? null,
  nuevoPasajero.Contrasena,
  imagenBuffer || null, // Buffer de la imagen, puede ser null
  nuevoPasajero.Verificado ? 0 : 1, // Asegurarse de que 'verificado' sea un número
  nuevoPasajero.Descripcion ?? null // Puede ser null si no se proporciona
];

  // Ejecutar la consulta en la base de datos
  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error al agregar pasajero:', err);
      return res.status(500).json({ error: 'Error al agregar pasajero' });
    }
    // Responder con el ID del nuevo pasajero y los datos proporcionados
    res.status(201).json({ id: result.insertId, ...nuevoPasajero });
  });
});

// Ruta para obtener sedes
app.get('/api/sede', (req, res) => {
  db.query('SELECT * FROM sede', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener las sedes' });
    }
    res.json(results);
  });
});


app.post('/api/login', (req, res) => {
  const { Correo, Contrasena } = req.body;

  if (!Correo || !Contrasena) {
    return res.status(400).json({ error: 'Correo y contraseña son obligatorios' });
  }

  // Modificar la consulta para incluir 'FotoPerfil'
  const query = 'SELECT Id_sede,numero_telefono,rut,primer_nombre,segundo_nombre,segundo_apellido,segundo_nombre,  fecha_nacimiento	 ,correo_electronico, FotoPerfil, Descripcion, verificado FROM pasajero WHERE correo_electronico = ? AND contrasena = ?';

  
  db.query(query, [Correo, Contrasena], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al realizar la consulta' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
    }

    const usuario = results[0]; // Obtiene el primer resultado
    res.json({ message: 'Login exitoso', usuario }); // Envía el usuario, incluyendo la imagen
  });
});



// Ruta para recuperar contraseña
app.post('/api/recuperar-contrasena', (req, res) => {
  const { correo } = req.body;

  const query = 'SELECT primer_nombre, contrasena, correo_electronico FROM pasajero WHERE correo_electronico = ?';
  
  db.query(query, [correo], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error en el servidor', error: err });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Correo no registrado' });
    }
    const nombre = results[0].primer_nombre; // Obtener el nombre del usuario
    const contrasena = results[0].contrasena; // Obtener la contraseña del usuario

    enviarCorreoRecuperacion(correo, contrasena, nombre);

    // Responder al cliente
    res.json({ message: 'Correo de recuperación enviado' });
  });
});

// Función para enviar correo
function enviarCorreoRecuperacion(correo, contrasena, nombre) {
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

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
