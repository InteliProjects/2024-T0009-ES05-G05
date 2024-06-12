const ClassTeacherService = require('../services/classTeacherServices');

class ClassTeacherController {
  static async getAllTeachersByClass(req, res) {
    try {
      const { fk_id_turma } = req.params;
      const professoresPorTurma = await ClassTeacherService.getAllTeachersByClass(fk_id_turma);
      res.json(professoresPorTurma);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async addTeacherToClass(req, res) {
    try {
      const teachersData = req.body;
      await Promise.all(teachersData.map(async ({ fk_id_turma, fk_id_professor }) => {
        await ClassTeacherService.addTeacherToClass(fk_id_turma, fk_id_professor);
      }));
      res.status(201).json({ message: 'Professores adicionados', teachersData });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static async addTeacherToClass(req, res) {
    try {
      const teachersData = req.body;
      await Promise.all(teachersData.map(async ({ fk_id_turma, fk_id_professor, fk_id_oficina }) => {
        await ClassTeacherService.addTeacherToClass(fk_id_turma, fk_id_professor, fk_id_oficina);
      }));
      res.status(201).json({ message: 'Professores adicionados', teachersData });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static async getClassTeachersByIdExcept(req, res) {
    try {
      const { fk_id_turma } = req.params;
      const ClassTeachers = await ClassTeacherService.getClassTeachersByIdExcept(fk_id_turma);
      res.json(ClassTeachers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
    static async deleteClassTeacherFromWorkshop(req, res) {
      try {
        const { id_oficina } = req.params;
        await ClassTeacherService.deleteClassTeacherFromWorkshop(id_oficina);
        res.json({ message: 'Professor deletado com sucesso.' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  }
}

module.exports = ClassTeacherController;
