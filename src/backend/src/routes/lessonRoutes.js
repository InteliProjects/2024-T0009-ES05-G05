const express = require('express');
const LessonController = require('../controllers/lessonControllers');
const router = express.Router();

router.get('/', LessonController.getAllLessons);
router.get('/id/:id_aula', LessonController.getLessonById);
router.get('/classId/:fk_id_turma', LessonController.getLessonByClass);
router.delete('/id/:id_aula', LessonController.deleteLessonById); // Rota para deletar uma aula por ID
router.put('/id/:id_aula', LessonController.updateLesson); // Rota para atualizar uma aula por ID
router.post('/add', LessonController.addLesson); // Rota para adicionar uma aula
router.delete('/delete/:id_aula', LessonController.deleteLessonByWorkshop); // Rota para deletar uma aula

module.exports = router;
