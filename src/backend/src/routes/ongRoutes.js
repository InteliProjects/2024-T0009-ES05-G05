const express = require('express');
const OngController = require('../controllers/ongControllers');
const router = express.Router();

/**
 * @swagger
 * /ongs:
 *   get:
 *     summary: Get all NGOs
 *     description: Retrieve a list of all NGOs.
 *     responses:
 *       200:
 *         description: A list of NGOs.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ong'
 */
router.get('/', OngController.getAllOngs);

module.exports = router;
