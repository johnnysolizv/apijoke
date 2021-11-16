const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes')
.then( () => console.log('Conectado a la BD'))
.catch( err => console.errror('Error al conectar con la BD', err));