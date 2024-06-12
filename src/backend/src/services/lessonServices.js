const dbService = require('./databaseServices');
const Lesson = require('../models/Lesson');

class LessonService {
  static async getAllLessons() {
    const results = await dbService.query('SELECT * FROM aulas');
    return results.map(row => new Lesson(
      row.id_aula,
      row.nome,
      row.data,
      row.dias_semana,
      row.fk_id_turma,
    ));
  }
  static async getLessonByClass(id) {
    const query = 'SELECT * FROM aulas WHERE fk_id_turma = ?';
    const result = await dbService.query(query, [id]);
    if (result.length === 0) {
      throw new Error('Aula não encontrada.');
    }
    return result.map(value => new Lesson(
      value.id_aula,
      value.nome,
      value.data,
      value.dias_semana,
      value.fk_id_turma,
    ));
  }
  static async getLessonById(id) {
    const query = 'SELECT * FROM aulas WHERE id_aula = ?';
    const result = await dbService.query(query, [id]);
    if (result.length === 0) {
      throw new Error('Aula não encontrada.');
    }
    const value = result[0];
    return new Lesson(
      value.id_aula,
      value.nome,
      value.data,
      value.dias_semana,
      value.fk_id_turma,
    );
  }

  static async deleteLessonById(id) {
    const query = 'DELETE FROM aulas WHERE id_aula = ?';
    const result = await dbService.query(query, [id]);
    if (result.affectedRows === 0) {
      throw new Error('Aula não encontrada para deletar.');
    }
    return { message: 'Aula deletada com sucesso.' };
  }

  static async updateLesson(id, nome, data) {
    const query = 'UPDATE aulas SET nome = ?, data = ? WHERE id_aula = ?';
    const result = await dbService.query(query, [nome, data, id]);
    if (result.affectedRows === 0) {
      throw new Error('Aula não encontrada para atualizar.');
    }
    return { message: 'Aula atualizada com sucesso.' };
  }

  static async addLessonToClass(nome, data, dias_semana, fk_id_turma) {
    const query = 'INSERT INTO aulas (nome, data, dias_semana, fk_id_turma) VALUES (?, ?, ?, ?)';
    await dbService.query(query, [nome, data, dias_semana, fk_id_turma]);
}

  static async deleteLessonByWorkshop(id) {
    const query = 'DELETE FROM aulas WHERE fk_id_oficina = ?';
    await dbService.query(query, [id]);
  }
 
}
module.exports = LessonService;
