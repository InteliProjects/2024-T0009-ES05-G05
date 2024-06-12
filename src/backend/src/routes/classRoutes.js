const express = require('express');
const router = express.Router();
const ClassController = require('../controllers/classControllers');

router.get('/get', ClassController.getAllClasses);
router.get('/classesFromWorkshop/:fk_id_oficina', ClassController.getClassesFromWorkshop);
router.post('/', ClassController.addClass);
router.get('/getClassById/:id_turma', ClassController.getClassById);
router.get('/getRecentClass', ClassController.getRecentClass);
router.delete('/delete/:id_oficina', ClassController.deleteClassFromWorkshop);

module.exports = router;
