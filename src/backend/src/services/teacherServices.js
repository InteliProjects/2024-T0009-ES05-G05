const dbService = require('./databaseServices');
const Teacher = require('../models/Teacher');

class TeacherService {
  static async getAllTeachers() {
    const results = await dbService.query('SELECT * FROM professores');
    return results.map(row => new Teacher(
      row.id_professor,
      row.nome,
      row.email,
      row.data_nascimento,
      row.telefone,
      row.cpf,
      row.genero,
      row.etnia,
      row.endereco
    ));
  }

  static async getTeacherById(id) {
    const query = 'SELECT * FROM professores WHERE id_professor = ?';
    const result = await dbService.query(query, [id]);
    if (result.length === 0) {
      throw new Error('Professor não encontrado.');
    }
    return new Teacher(
      result[0].id_professor,
      result[0].nome,
      result[0].email,
      result[0].data_nascimento,
      result[0].telefone,
      result[0].cpf,
      result[0].genero,
      result[0].etnia,
      result[0].endereco
    );
  }

  static async addTeacher(teacherData) {
    const { nome, email, data_nascimento, telefone, cpf, genero, etnia, endereco } = teacherData;
    const query = 'INSERT INTO professores (nome, email, data_nascimento, telefone, cpf, genero, etnia, endereco) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const result = await dbService.query(query, [nome, email, data_nascimento, telefone, cpf, genero, etnia, endereco]);
    return result.insertId;
  }

  static async updateTeacher(id, updatedData) {
    const { nome, email, data_nascimento, telefone, cpf, genero, etnia, endereco } = updatedData;
    const query = 'UPDATE professores SET nome=?, email=?, data_nascimento=?, telefone=?, cpf=?, genero=?, etnia=?, endereco=? WHERE id_professor=?';
    const result = await dbService.query(query, [nome, email, data_nascimento, telefone, cpf, genero, etnia, endereco, id]);
    return result.affectedRows > 0;
  }

  static async deleteTeacher(id) {
    const query = 'DELETE FROM professores WHERE id_professor=?';
    const result = await dbService.query(query, [id]);
    return result.affectedRows > 0;
  }

  static async searchTeacher(query) {
    const searchQuery = '%' + query + '%';
    const searchResults = await dbService.query('SELECT * FROM professores WHERE nome LIKE ? OR id_professor = ?', [searchQuery, query]);
    return searchResults.map(row => new Teacher(
      row.id_professor,
      row.nome,
      row.email,
      row.data_nascimento,
      row.telefone,
      row.cpf,
      row.genero,
      row.etnia,
      row.endereco
    ));
  }
  static async getTeachersByIds(teacherIds) {
    const placeholders = teacherIds.map(() => '?').join(',');
    const query = `SELECT * FROM professores WHERE id_professor IN (${placeholders})`;
    const results = await dbService.query(query, teacherIds);
    return results.map(row => new Teacher(
      row.id_professor,
      row.nome,
      row.email,
      row.data_nascimento,
      row.telefone,
      row.cpf,
      row.genero,
      row.etnia,
      row.endereco
    ));

    }
  static async getTotalTeachers() {
    try {
      const result = await dbService.query('SELECT COUNT(*) FROM professores');
      return result[0]['COUNT(*)'];
    }
    catch (error) {
      throw error;
    } 
  }

  static async getTeacherByIds(teacherId) {
    const query = 'SELECT * FROM professores WHERE id_professor = ?';
    const result = await dbService.query(query, [teacherId]);
    if (result.length === 0) {
      throw new Error('Professor não encontrado.');
    }
    return new Teacher(
      result[0].id_professor,
      result[0].nome,
      result[0].email,
      result[0].data_nascimento,
      result[0].telefone,
      result[0].cpf,
      result[0].genero,
      result[0].etnia,
      result[0].endereco
    );
  }

}

module.exports = TeacherService;
