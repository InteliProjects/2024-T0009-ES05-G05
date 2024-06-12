const RegisterClass = require('../services/registerClassServices');

class RegisterClassController {
  static async getAllRegisterClasses(req, res) {
    try {
      const RegisterClasses = await RegisterClass.getAllRegisterClasses();
      res.json(RegisterClasses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static async getRegisterClassesById(req, res) {
    try {
      const { fk_id_turma } = req.params;
      const RegisterClasses = await RegisterClass.getRegisterClassesById(fk_id_turma);
      res.json(RegisterClasses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getRegisterClassesByIdExcept(req, res) {
    try {
      const { fk_id_turma } = req.params;
      const RegisterClasses = await RegisterClass.getRegisterClassesByIdExcept(fk_id_turma);
      res.json(RegisterClasses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  static async addRegisterClass(req, res) {
    try {
      const studentsData = req.body;
      await Promise.all(studentsData.map(async ({ fk_id_turma, fk_id_aluno, fk_id_oficina}) => {
        await RegisterClass.addRegisterClass(fk_id_turma, fk_id_aluno, fk_id_oficina);
      }));
      res.status(201).json({ message: 'Alunos matriculados', studentsData });
    }
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteRegisterClassFromWorkshop(req, res) {
    try {
      const { id_oficina } = req.params;
      await RegisterClass.deleteRegisterClassFromWorkshop(id_oficina);
      res.json({ message: 'Aluno deletado da turma com sucesso.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
}

module.exports = RegisterClassController;
