//classControllers.js
const ClassService = require('../services/classServices');

class ClassController {
  static async getAllClasses(req, res) {
    try {
      const Classes = await ClassService.getAllClasses();
      console.log(Classes)
      res.json(Classes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  static async getClassesFromWorkshop(req, res) {
    try {
      const { fk_id_oficina } = req.params;
      const Classes = await ClassService.getClassesFromWorkshop(fk_id_oficina);
      res.json(Classes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async addClass(req, res) {
    try {
        const { nome, fk_id_oficina, data_inicio, data_fim, dias_semana } = req.body;
        await ClassService.addClass(nome, fk_id_oficina, data_inicio, data_fim, dias_semana);
        res.status(201).json({ message: 'Turma adicionada com sucesso' });
    } catch (error) {
        console.error('Erro ao adicionar turma:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
}

  static async getClassById(req, res) {
    try {
      const { id_turma } = req.params;
      const Classes = await ClassService.getClassById(id_turma);
      res.json(Classes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getRecentClass(req, res) {
    try {
      const Classes = await ClassService.getRecentClass();
      res.json(Classes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteClassFromWorkshop(req, res) {
    try {
      const { id_oficina } = req.params;
      await ClassService.deleteClassFromWorkshop(id_oficina);
      res.json({ message: 'Turma deletada com sucesso.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

}

module.exports = ClassController;
