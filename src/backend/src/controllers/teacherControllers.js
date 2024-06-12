const TeacherService = require('../services/teacherServices');

class TeacherController {
  static async getAllTeachers(req, res) {
    try {
      const teachers = await TeacherService.getAllTeachers();
      res.json(teachers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getTeacherById(req, res) {
    try {
      const { id } = req.params;
      const teacher = await TeacherService.getTeacherById(id);
      res.json(teacher);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  static async addTeacher(req, res) {
    try {
      const teacherData = req.body;
      const newTeacherId = await TeacherService.addTeacher(teacherData);
      res.status(201).json({ id: newTeacherId, message: 'Professor adicionado com sucesso.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateTeacher(req, res) {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const success = await TeacherService.updateTeacher(id, updatedData);
      if (success) {
        res.json({ message: 'Professor atualizado com sucesso.' });
      } else {
        res.status(404).json({ error: 'Professor não encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteTeacher(req, res) {
    try {
      const { id } = req.params;
      const success = await TeacherService.deleteTeacher(id);
      if (success) {
        res.json({ message: 'Professor removido com sucesso.' });
      } else {
        res.status(404).json({ error: 'Professor não encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async searchTeacher(req, res) {
    try {
      const query = req.query.q;
      const searchResults = await TeacherService.searchTeacher(query);
      res.json(searchResults);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getTeachersByIds(req, res) {
    try {
      const { id_professores } = req.params;
      const teacherIds = id_professores.split(','); // Divide a lista de IDs em um array de IDs
      const teachers = await TeacherService.getTeachersByIds(teacherIds);
      res.json(teachers);
    } catch (error) {
      console.error('An error occurred while fetching students by IDs:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  static async getTotalTeachers(req, res) {
    try {
      const totalTeachers = await TeacherService.getTotalTeachers();
      res.json(totalTeachers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static async getTeacherById(req, res) {
    try {
      const { id } = req.params;
      const teacher = await TeacherService.getTeacherById(id);
      res.json(teacher);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

}

module.exports = TeacherController;
