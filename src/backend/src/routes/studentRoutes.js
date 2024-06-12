    const express = require('express');
    const StudentController = require('../controllers/studentControllers');
    const router = express.Router();

    /**
     * @swagger
     * /students/get:
     *   get:
     *     summary: Get all students
     *     description: Retrieve a list of all students.
     *     responses:
     *       '200':
     *         description: A list of students.
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Student'
     */
    router.get('/get', StudentController.getAllStudents);

    /**
     * @swagger
     * /students/add:
     *   post:
     *     summary: Add a new student
     *     description: Add a new student to the database.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/StudentInput'
     *     responses:
     *       '201':
     *         description: Student added successfully.
     *       '500':
     *         description: Internal server error.
     */
    router.post('/add', StudentController.addStudent);

    /**
     * @swagger
     * /students/{id}:
     *   put:
     *     summary: Update student by ID
     *     description: Update a student by its ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         description: ID of the student
     *         required: true
     *         schema:
     *           type: integer
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/StudentInput'
     *     responses:
     *       '200':
     *         description: Student updated successfully.
     *       '404':
     *         description: Student not found.
     *       '500':
     *         description: Internal server error.
     */
    router.put('/:id', StudentController.updateStudent);

    /**
     * @swagger
     * /students/{id}:
     *   delete:
     *     summary: Delete student by ID
     *     description: Delete a student by its ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         description: ID of the student
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       '200':
     *         description: Student deleted successfully.
     *       '404':
     *         description: Student not found.
     *       '500':
     *         description: Internal server error.
     */
    router.delete('/:id', StudentController.deleteStudent);

    /**
     * @swagger
     * /students/studentIds/{id_alunos}:
     *   get:
     *     summary: Get students by IDs
     *     description: Retrieve a list of students by their IDs.
     *     parameters:
     *       - in: path
     *         name: id_alunos
     *         description: IDs of the students
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       '200':
     *         description: A list of students.
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Student'
     *       '500':
     *         description: Internal server error.
     */
    router.get('/studentIds/:id_alunos', StudentController.getStudentsByIds);

    /**
     * @swagger
     * /students/total:
     *   get:
     *     summary: Get total students
     *     description: Retrieve the total number of students.
     *     responses:
     *       '200':
     *         description: Total students count.
     *         content:
     *           application/json:
     *             schema:
     *               type: integer
     */
    router.get('/total', StudentController.getTotalStudents);

    module.exports = router;
