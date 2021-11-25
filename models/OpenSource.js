const {Schema, model} = require('mongoose');

const FacturaShema = Schema({
   
    condicion: {
        type: String,
        required: [true, 'La condicion es requerida']
    },
    id_cliente: {
        type: Number,
        required: [true, 'El id cliente es requerida'],
        unique: true
    },
    fechaFacturacion: {
        type: Date,
        default: false
    },  
    monto: {
        type: Number,
        default: false
    },  
    estado: {
        type: String,
        default: true
    },
    Foto: {
        type: String,
        default: true
    },
    
});

FacturaShema.methods.toJSON = function() {
    const {__v,_id, ...factura} = this.toObject();
    factura.uid = _id;

    return factura;
}

module.exports = model('Factura', FacturaShema);