const express = require('express');
const FiscaliaController = require('../controllers/fiscaliaController');
const api = express.Router();

/**
 * @swagger
 * /fiscalia:
 *   post:
 *     summary: Crea una nueva fiscalia
 *     description: Crea una nueva fiscalia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: The user's name.
 *                 example: Fiscalia Atención
 *               direccion:
 *                 type: string
 *                 description: The user's name.
 *                 example: 2 calle 19-3 zona 12
 *               telefono:
 *                 type: string
 *                 description: The user's name.
 *                 example: 20898956
 *               archivo_url:
 *                 type: string
 *                 description: The user's name.
 *                 example: /paht/exmaple/fiscalia.pdf
 *     responses:
 *       201:
 *         description: Fiscalia Creada
 */
api.post('/fiscalia', FiscaliaController.createFiscalia);
/**
 * 
 * /fiscalia:
 *   get:
 *     summary: Devuelve un listado de fiscalias
 *     description: Devuelve un listado de fiscalias
 *     responses:
 *       200:
 *         description: Listado de fiscalias
 */
api.get('/fiscalia', FiscaliaController.getFiscalias);

api.get('/fiscalia:id', FiscaliaController.getFiscaliaById);
/**
 * @swagger
 * /fiscalia/{id}:
 *   put:
 *     summary: Actualiza una fiscalía
 *     description: Actualiza una fiscalía
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Id de la fiscalía
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: The user's name.
 *                 example: Fiscalia Atención
 *               direccion:
 *                 type: string
 *                 description: The user's name.
 *                 example: 2 calle 19-3 zona 12
 *               telefono:
 *                 type: string
 *                 description: The user's name.
 *                 example: 20898956
 *               archivo_url:
 *                 type: string
 *                 description: The user's name.
 *                 example: /paht/exmaple/fiscalia.pdf
 *     responses:
 *       200:
 *         description: Mensaje de éxito
 */
api.put('/fiscalia/:id', FiscaliaController.updateFiscalia);

/**
 * @swagger
 * /fiscalia/{id}:
 *   delete:
 *     summary: Elimina una fiscalía
 *     description: Elimina una fiscalía
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Id de la fiscalía
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mensaje de éxito
 */
api.delete('/fiscalia/:id', FiscaliaController.deleteFiscalia);

module.exports = api; 