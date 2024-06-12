const express = require('express');
const TeacherController = require('../controllers/teacherControllers');
const router = express.Router();

/**
 * @swagger
 * /teachers/get:
 *   get:
 *     summary: Obter todos os professores
 *     description: Retorna uma lista de todos os professores cadastrados.
 *     responses:
 *       '200':
 *         description: Lista de professores.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Teacher'
 */
router.get('/get', TeacherController.getAllTeachers);

/**
 * @swagger
 * /teachers/add:
 *   post:
 *     summary: Adicionar um novo professor
 *     description: Adiciona um novo professor à base de dados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TeacherInput'
 *     responses:
 *       '201':
 *         description: Professor adicionado com sucesso.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.post('/add', TeacherController.addTeacher);

/**
 * @swagger
 * /teachers/{id}:
 *   put:
 *     summary: Atualizar professor por ID
 *     description: Atualiza um professor pelo seu ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID do professor a ser atualizado
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TeacherInput'
 *     responses:
 *       '200':
 *         description: Professor atualizado com sucesso.
 *       '404':
 *         description: Professor não encontrado.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.put('/:id', TeacherController.updateTeacher);

/**
 * @swagger
 * /teachers/{id}:
 *   delete:
 *     summary: Excluir professor por ID
 *     description: Exclui um professor da base de dados pelo seu ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID do professor a ser excluído
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Professor excluído com sucesso.
 *       '404':
 *         description: Professor não encontrado.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.delete('/:id', TeacherController.deleteTeacher);

/**
 * @swagger
 * /teachers/professorIds/{id_professores}:
 *   get:
 *     summary: Obter professores por IDs
 *     description: Retorna uma lista de professores por seus IDs.
 *     parameters:
 *       - in: path
 *         name: id_professores
 *         description: IDs dos professores
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Lista de professores.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Teacher'
 *       '500':
 *         description: Erro interno do servidor.
 */
router.get('/professorIds/:id_professores', TeacherController.getTeachersByIds);

/**
 * @swagger
 * /teachers/total:
 *   get:
 *     summary: Obter total de professores
 *     description: Retorna o número total de professores na base de dados.
 *     responses:
 *       '200':
 *         description: Total de professores.
 *         content:
 *           application/json:
 *             schema:
 *               type: integer
 */
router.get('/total', TeacherController.getTotalTeachers);

module.exports = router;
