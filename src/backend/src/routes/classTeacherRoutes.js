const express = require('express');
const ClassTeacherController = require('../controllers/classTeacherControllers');
const router = express.Router();

router.get('/classId/:fk_id_turma', ClassTeacherController.getAllTeachersByClass);
router.post('/add', ClassTeacherController.addTeacherToClass);
router.get('/classesIdExcept/:fk_id_turma', ClassTeacherController.getClassTeachersByIdExcept);
router.delete('/delete/:id_oficina', ClassTeacherController.deleteClassTeacherFromWorkshop);

module.exports = router;
