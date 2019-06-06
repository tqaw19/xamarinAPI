//medicamentoModel.js
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let modelSchema = new Schema({
	_id : { type: Number , required: true },
	nombre : { type: String , required: true },
	descripcion : { type: String , required: true },
	fecha_vencimiento : { type: String , required: true },
    tipo : { type: String , required: true },
    cantidad : { type: Number , required: true }
	
});
let model = mongoose.model('medicamentos',modelSchema,'medicamentos');
module.exports = model;