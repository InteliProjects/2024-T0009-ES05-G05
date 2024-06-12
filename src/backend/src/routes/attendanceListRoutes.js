const express = require('express');
const AttendanceListController = require('../controllers/attendanceListControllers');
const router = express.Router();

/**
 * @swagger
 * /attendances:
 *   get:
 *     summary: Get all attendances
 *     description: Retrieve a list of all attendances.
 *     responses:
 *       200:
 *         description: A list of attendances.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/AttendanceList'
 */
router.get('/', AttendanceListController.getAllAttendances);

/**
 * @swagger
 * /attendances/postAttendanceList:
 *   post:
 *     summary: Add a new attendance
 *     description: Add a new attendance to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AttendanceListInput'
 *     responses:
 *       201:
 *         description: Attendance added successfully.
 *       500:
 *         description: Internal server error.
 */
router.post('/postAttendanceList', AttendanceListController.postAttendanceList);

/**
 * @swagger
 * /attendances/getAttendanceListFromWorkshops:
 *   get:
 *     summary: Get percentage presences from workshops
 *     description: Retrieve the percentage presences from workshops.
 *     responses:
 *       200:
 *         description: Percentage presences from workshops.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PercentagePresence'
 */
router.get('/getAttendanceListFromWorkshops', AttendanceListController.getPercentagePresencesFromWorkshops);

module.exports = router;
