const express = require('express');
const RegisterClassController = require('../controllers/registerClassControllers');
const router = express.Router();

router.get('/', RegisterClassController.getAllRegisterClasses);
router.get('/classesId/:fk_id_turma', RegisterClassController.getRegisterClassesById);
router.post('/add', RegisterClassController.addRegisterClass);
router.get('/classesIdExcept/:fk_id_turma', RegisterClassController.getRegisterClassesByIdExcept);
router.delete('/delete/:id_oficina', RegisterClassController.deleteRegisterClassFromWorkshop);

module.exports = router;
