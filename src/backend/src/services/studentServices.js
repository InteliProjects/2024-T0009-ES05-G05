//studentServices.js

const dbService = require('./databaseServices');
const Student = require('../models/Student');

class StudentService {
  static async getAllStudents() {
    const results = await dbService.query('SELECT * FROM alunos');
    // Mapeie os resultados para instâncias de Student
    return results.map(row => new Student(
      row.id_aluno,
      row.nome,
      row.email,
      row.telefone,
      row.data_nascimento,
      row.cpf,
      row.genero,
      row.etnia,
      row.endereco,
      row.estado_civil,
      row.status
    ));
  }
  static async addStudent(studentData) {
    const { nome, email, telefone, data_nascimento, cpf, genero, etnia, endereco, estado_civil, status } = studentData;
    const query = 'INSERT INTO alunos (nome, email, telefone, data_nascimento, cpf, genero, etnia, endereco, estado_civil, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const result = await dbService.query(query, [nome, email, telefone, data_nascimento, cpf, genero, etnia, endereco, estado_civil, status]);
    return result.insertId; // Retorna o ID do aluno adicionado
  }
  static async updateStudent(id, updatedData) {
    const { nome, email, telefone, data_nascimento, cpf, genero, etnia, endereco, estado_civil, status } = updatedData;
    const query = 'UPDATE alunos SET nome=?, email=?, telefone=?, data_nascimento=?, cpf=?, genero=?, etnia=?, endereco=?, estado_civil=?, status=? WHERE id_aluno=?';
    const result = await dbService.query(query, [nome, email, telefone, data_nascimento, cpf, genero, etnia, endereco, estado_civil, status, id]);
    return result.affectedRows > 0; // Retorna true se a atualização for bem-sucedida
  }
  static async deleteStudent(id) {
    const query = 'DELETE FROM alunos WHERE id_aluno=?';
    const result = await dbService.query(query, [id]);
    return result.affectedRows > 0; // Retorna true se a exclusão for bem-sucedida
  }
  static async getStudentsByIds(studentIds) {
    try {
      // Crie uma string de placeholders para os IDs de alunos
      const placeholders = studentIds.map(() => '?').join(',');
      const query = `SELECT * FROM alunos WHERE id_aluno IN (${placeholders})`;
      const results = await dbService.query(query, studentIds);
      // Mapeie os resultados para instâncias de Student
      return results.map(row => new Student(
        row.id_aluno,
        row.nome,
        row.email,
        row.telefone,
        row.data_nascimento,
        row.cpf,
        row.genero,
        row.etnia,
        row.endereco,
        row.estado_civil,
        row.status
      ));
    } catch (error) {
      throw error;
    }
  }
  static async getTotalStudents() {
    try {
      const result = await dbService.query('SELECT COUNT(*) FROM alunos');
      return result[0]['COUNT(*)'];
    } catch (error) {
      throw error;
    }
  }
  
}

module.exports = StudentService;
