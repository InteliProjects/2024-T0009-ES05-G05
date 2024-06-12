const StudentService = require('../services/studentServices');

class StudentController {
  static async getAllStudents(req, res) {
    try {
      const students = await StudentService.getAllStudents();
      res.json(students);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async addStudent(req, res) {
    try {
      const { nome, email, telefone, data_nascimento, cpf, genero, etnia, endereco, estado_civil, status } = req.body;
      const newStudentId = await StudentService.addStudent({ nome, email, telefone, data_nascimento, cpf, genero, etnia, endereco, estado_civil, status });
      res.status(201).json({ id: newStudentId, message: 'Aluno adicionado com sucesso.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateStudent(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, telefone, data_nascimento, cpf, genero, etnia, endereco, estado_civil, status } = req.body;
      const success = await StudentService.updateStudent(id, { nome, email, telefone, data_nascimento, cpf, genero, etnia, endereco, estado_civil, status });
      if (success) {
        res.json({ message: 'Aluno atualizado com sucesso.' });
      } else {
        res.status(404).json({ error: 'Aluno não encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteStudent(req, res) {
    try {
      const { id } = req.params;
      const success = await StudentService.deleteStudent(id);
      if (success) {
        res.json({ message: 'Aluno removido com sucesso.' });
      } else {
        res.status(404).json({ error: 'Aluno não encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getStudentsByIds(req, res) {
    try {
      const { id_alunos } = req.params;
      const studentIds = id_alunos.split(','); // Divide a lista de IDs em um array de IDs
      const students = await StudentService.getStudentsByIds(studentIds);
      res.json(students);
    } catch (error) {
      console.error('An error occurred while fetching students by IDs:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  static async getTotalStudents(req, res) {
    try {
      const totalStudents = await StudentService.getTotalStudents();
      res.json(totalStudents);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = StudentController;
