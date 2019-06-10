//medicamento.js
var express = require('express');
var controller = require('../controllers/medicamentoController');
let model = require('../models/medicamentoModel');
var router = express.Router();

router.get('/', function(req, res, next) {
  controller.show(req,res);
});

router.get('/:id', function(req, res, next) {
  controller.detail(req,res);
});

router.post('/', function(req, res, next) {
  controller.create(req,res);
});

router.put('/:id', function(req, res, next) {
  // controller.update(req,res);
  let id = req.params.id
  let update = req.body

  model.findByIdAndUpdate(id, update, (err, itemUpdated) => {
    if (err) res.sendStatus(500).send({message: `Error al borrar el item: ${err}`})

    res.status(200).send({ itemUpdated })
  })
});

router.delete('/:id', (req, res) => {
  // controller.delete(req,res);
  let id = req.params.id

  model.findById(id, (err, item) => {
    if (err) res.sendStatus(500).send({message: `Error al borrar el item: ${err}`})
    
    item.remove(err => {
      if (err) res.sendStatus(500).send({message: `Error al borrar el item: ${err}`})
      res.status(200).send({message: 'El item ha sido eliminado'})	
    })
  })
});

module.exports = router;