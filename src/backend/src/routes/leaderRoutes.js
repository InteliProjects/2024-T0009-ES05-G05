const express = require('express');
const LeaderController = require('../controllers/leaderControllers');
const router = express.Router();

/**
 * @swagger
 * /leaders:
 *   get:
 *     summary: Get all leaders
 *     description: Retrieve a list of all leaders.
 *     responses:
 *       200:
 *         description: A list of leaders.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Leader'
 */
router.get('/', LeaderController.getAllLeaders);

module.exports = router;
