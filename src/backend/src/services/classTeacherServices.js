const dbService = require('./databaseServices');
const ClassTeacher = require('../models/ClassTeacher');

class ClassTeacherService {
  static async getAllTeachersByClass(fk_id_turma) {
    const results = await dbService.query('SELECT * FROM professor_por_turma WHERE fk_id_turma = ?', [fk_id_turma]);
    return results;
  }

  static async addTeacherToClass(fk_id_turma, fk_id_professor, fk_id_oficina) {
    await dbService.query(
      'INSERT INTO professor_por_turma (fk_id_turma, fk_id_professor, fk_id_oficina) VALUES (?, ?, ?)',
      [fk_id_turma, fk_id_professor, fk_id_oficina]
    );
  }
  static async getClassTeachersByIdExcept(fk_id_turma) {
    const results = await dbService.query(`SELECT DISTINCT fk_id_professor FROM professor_por_turma WHERE fk_id_professor NOT IN (SELECT fk_id_professor FROM professor_por_turma WHERE fk_id_turma = ${fk_id_turma})`);
    return results.map(row => new ClassTeacher(
      row.fk_id_professor
    ));

  }

  static async deleteClassTeacherFromWorkshop(id_oficina) {
    const result = await dbService.query('DELETE FROM professor_por_turma WHERE fk_id_oficina = ?', [id_oficina]);
    return result.affectedRows > 0;
  }
}


module.exports = ClassTeacherService;
