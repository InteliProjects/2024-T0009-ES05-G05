const dbService = require('./databaseServices');
const RegisterClass = require('../models/RegisterClass');

class RegisterClassService {
  static async getAllRegisterClasses() {
    const results = await dbService.query('SELECT * FROM matricula');
    return results.map(row => new RegisterClass(
      row.fk_id_aluno,
      row.fk_id_turma
    ));
  }
  static async getRegisterClassesById(fk_id_turma) {
    const results = await dbService.query(`SELECT * FROM matricula WHERE fk_id_turma = ${fk_id_turma}`);
    return results.map(row => new RegisterClass(
      row.fk_id_aluno,
      row.fk_id_turma
    ));
  }

  static async getRegisterClassesByIdExcept(fk_id_turma) {
    const results = await dbService.query(`SELECT DISTINCT fk_id_aluno FROM matricula WHERE fk_id_aluno NOT IN (SELECT fk_id_aluno FROM matricula WHERE fk_id_turma = ${fk_id_turma})`);
    return results.map(row => new RegisterClass(
      row.fk_id_aluno
    ));

  }

  static async addRegisterClass(fk_id_turma, fk_id_aluno, fk_id_oficina) {
    await dbService.query(
      'INSERT INTO matricula (fk_id_turma, fk_id_aluno, fk_id_oficina) VALUES (?, ?, ?)',
      [fk_id_turma, fk_id_aluno, fk_id_oficina]
    );
  }
  static async deleteRegisterClassFromWorkshop(id_oficina) {
    await dbService.query(
      'DELETE FROM matricula WHERE fk_id_oficina = ?',
      [id_oficina]
    );
  }

}

module.exports = RegisterClassService;