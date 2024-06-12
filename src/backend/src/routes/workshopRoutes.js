const express = require('express');
const WorkshopController = require('../controllers/workshopControllers');
const router = express.Router();

/**
 * @swagger
 * /workshops:
 *   get:
 *     summary: Get all workshops
 *     description: Retrieve a list of all workshops.
 *     responses:
 *       200:
 *         description: A list of workshops.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Workshop'
 */
router.get('/', WorkshopController.getAllWorkshops);

/**
 * @swagger
 * /workshops/getById/{id}:
 *   get:
 *     summary: Get workshop by ID
 *     description: Retrieve a workshop by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the workshop
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The workshop object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Workshop'
 *       404:
 *         description: Workshop not found.
 */
router.get('/getById/:id', WorkshopController.getWorkshopById);

/**
 * @swagger
 * /workshops:
 *   post:
 *     summary: Add a new workshop
 *     description: Add a new workshop to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WorkshopInput'
 *     responses:
 *       201:
 *         description: Workshop added successfully.
 *       500:
 *         description: Internal server error.
 */
router.post('/', WorkshopController.addWorkshop);

/**
 * @swagger
 * /workshops/total:
 *   get:
 *     summary: Get total workshops
 *     description: Retrieve the total number of workshops.
 *     responses:
 *       200:
 *         description: Total workshops count.
 *         content:
 *           application/json:
 *             schema:
 *               type: integer
 */
router.get('/total', WorkshopController.getTotalWorkshops);


/**
 * @swagger
 * /workshops/delete/{id}:
 *   delete:
 *     summary: Delete workshop by ID
 *     description: Delete a workshop by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the workshop
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Workshop deleted successfully.
 *       404:
 *         description: Workshop not found.
 */
router.delete('/delete/:id', WorkshopController.deleteWorkshop);


module.exports = router;
