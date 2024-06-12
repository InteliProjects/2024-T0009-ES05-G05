
const LessonService = require('../services/lessonServices');

class LessonController {
  static async getAllLessons(req, res) {
    try {
      const Lessons = await LessonService.getAllLessons();
      res.json(Lessons);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  static async getLessonByClass(req, res) {
    try {
      const { fk_id_turma } = req.params;
      const Lessons = await LessonService.getLessonByClass(fk_id_turma);
      res.json(Lessons);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static async getLessonById(req, res) {
    try {
      const { id_aula } = req.params;
      const Lesson = await LessonService.getLessonById(id_aula);
      res.json(Lesson);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteLessonById(req, res) {
    try {
      const { id_aula } = req.params;
      await LessonService.deleteLessonById(id_aula);
      res.json({ message: 'Aula deletada com sucesso.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateLesson(req, res) {
    try {
      const { id_aula } = req.params;
      const { nome, data } = req.body;
      const result = await LessonService.updateLesson(id_aula, nome, data);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static async addLesson(req, res) {
    try {
      const { nome, data, dias_semana, fk_id_turma } = req.body;
      await LessonService.addLesson(nome, data, dias_semana, fk_id_turma);
      res.status(201).json({ message: 'Aula adicionada com sucesso' });
    } catch (error) {
      console.error('Erro ao adicionar aula:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }

}
  static async deleteLessonByWorkshop(req, res) {
    try {
      const { id_aula } = req.params;
      await LessonService.deleteLessonByWorkshop(id_aula);
      res.json({ message: 'Aula deletada com sucesso.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}
}
module.exports = LessonController;