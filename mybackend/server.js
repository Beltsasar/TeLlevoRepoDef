require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

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

// Rutas para las tablas
app.get('/api/pasajeros', (req, res) => {
  db.query('SELECT * FROM pasajero', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener pasajeros' });
    }
    res.json(results);
  });
});

app.post('/api/pasajeros', (req, res) => {
    const nuevoPasajero = req.body;
  
    if (!nuevoPasajero.rut || !nuevoPasajero.primer_nombre || !nuevoPasajero.primer_apellido) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }
  
    const query = `
      INSERT INTO pasajero (rut, primer_nombre, primer_apellido, segundo_nombre, segundo_apellido, fecha_nacimiento, numero_telefono, correo_electronico, Id_sede)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
    const values = [
      nuevoPasajero.rut,
      nuevoPasajero.primer_nombre,
      nuevoPasajero.primer_apellido,
      nuevoPasajero.segundo_nombre || null, // Si no hay segundo nombre, usar null
      nuevoPasajero.segundo_apellido || null, // Si no hay segundo apellido, usar null
      nuevoPasajero.fecha_nacimiento || null, // Si no hay fecha de nacimiento, usar null
      nuevoPasajero.numero_telefono || null, // Si no hay número de teléfono, usar null
      nuevoPasajero.correo_electronico, // Si no hay correo electrónico, usar null
      nuevoPasajero.Id_sede || null, // Si no hay ID de sede, usar null
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
