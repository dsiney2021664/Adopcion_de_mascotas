const { Schema, model } = require('mongoose');

const MascotaSchema = Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es obligatorio']
    },
    raza: {
        type: String,
        require: [true, 'La raza es obligatoria']
    },
    sexo: {
        type: String,
        require: [true, 'El tipo de sexo es obligatorio']
    },
    edad: {
        type: String,
        require: [true, 'La edad es obligatoria']
    },
    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Mascota', MascotaSchema);