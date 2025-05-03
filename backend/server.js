const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ Usa CORS correctamente antes de las rutas
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());

// Rutas
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Conectado a MongoDB");
    app.listen(5000, () => console.log("Servidor en http://localhost:5000"));
  })
  .catch(err => console.error("Error de conexión:", err));