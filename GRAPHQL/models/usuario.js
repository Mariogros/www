const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    correo: String, 
    pass: String
});

module.exports = mongoose.model('Usuario',usuarioSchema );