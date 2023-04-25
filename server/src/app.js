const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/users.routes')

// Rutas

// Middlewares para cliente
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes)

// Uso de rutas

app.listen(3000, () => console.log('Servidor en ejecución en el puerto 3000'));
