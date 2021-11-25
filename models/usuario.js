const {Schema, model} = require('mongoose');

const UsuarioShema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    correo: {
        type: String,
        required: [true, 'El correo es requerido'],
        unique: true
    },
    clave: {
        type: String,
        required: [true, 'La clave es requerida']
    },
    img: {
        type: String        
    },
    rol: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
});

UsuarioShema.methods.toJSON = function() {
    const {__v, clave,_id, ...usuario} = this.toObject();
    usuario.uid = _id;

    return usuario;
}

module.exports = model('Usuario', UsuarioShema);