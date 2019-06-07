//medicamentoController.js
let model = require('../models/medicamentoModel');
module.exports = {
	show: function (req, res) {
		model.find({}, function (err, data) {
			if (err) {
				console.log(err);
				res.status(500);
			} else {
				res.json(data);
			}
		});
	},
	
	detail: function (req, res) {
		let val_id = req.params.id;
		model.findOne({
			_id: val_id
		}, function (err, data) {
			if (err) {
				console.log(err);
				res.sendStatus(500);
			} else {
				res.send(data);
			}
		});
	},

	create: function (req, res) {
		model.findOne({}, { _id: 1 }, {
			sort: { _id: -1 }, limit:
				1
		}, function (err, result) {
			if (err) {
				console.log(err);
				res.sendStatus(500);
			} else {
				let obj = new model;
				last_id = parseInt(result._id);
				obj._id = (last_id + 1);
				obj.nombre = req.body.nombre;
				obj.descripcion = req.body.descripcion;
				obj.fecha_vencimiento = req.body.fecha_vencimiento;
                obj.tipo = req.body.tipo;
                obj.cantidad = req.body.cantidad;            
				obj.save(function (err, newData) {
					if (err) {
						console.log(err);
						res.sendStatus(500);
					} else {
						res.json(newData);
					}
				});
			}
		});
	},
	update: function (req, res) {
		let val_id = req.body.id;
		console.log('ID del elemento: ' + val_id);		
		let datos = {
			nombre: req.body.nombre,
			descripcion: req.body.descripcion,
			fecha_vencimiento: req.body.fecha_vencimiento,
            tipo: req.body.tipo,
            cantidad: req.body.cantidad
		};
		model.updateOne({
			_id: val_id
		}, datos, function (err, newData) {
			if (err) {
				console.log(err);
				res.sendStatus(500);
			} else {
				res.send(newData);
			}
		});
	},
	delete: function (req, res) {
		let val_id = req.body.id;
		console.log('ID del elemento: ' + val_id);		
		model.deleteOne({
			_id: val_id
		}, function(err, res) {
			if (err) {
				console.log(err);
				res.sendStatus(500);
			} 
		});
	}
};