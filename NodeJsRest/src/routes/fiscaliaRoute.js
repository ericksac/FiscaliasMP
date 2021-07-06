var express = require('express');

var FiscaliaController = require('../controllers/fiscaliaController');

var api = express.Router();

api.post('/fiscalia', FiscaliaController.createFiscalia);

api.get('/fiscalia', FiscaliaController.getFiscalias);

api.get('/fiscalia:id', FiscaliaController.getFiscaliaById);

api.put('/fiscalia/:id', FiscaliaController.updateFiscalia);

api.delete('/fiscalia/:id', FiscaliaController.deleteFiscalia);

module.exports = api; 