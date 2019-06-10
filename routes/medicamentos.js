//medicamento.js
var express = require('express');
var controller = require('../controllers/medicamentoController');
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

router.put('/update/:id', function(req, res, next) {
  controller.update(req,res);
});

router.delete('/:id', function(req, res, next) {
  controller.delete(req,res);
});

module.exports = router;