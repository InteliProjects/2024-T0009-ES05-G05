//classServices.js
const dbService = require('./databaseServices');
const Class = require('../models/Class');

class ClassService {
  
  static async getAllClasses() {
    const results = await dbService.query('SELECT * FROM turmas');
    return results.map(row => new Class(
      row.id_turma,
      row.nome,
      row.fk_id_oficina,
      row.data_inicio,
      row.data_fim,
      row.dias_semana
    ));
  }
  
  static async getClassesFromWorkshop(fk_id_oficina) {
    const results = await dbService.query(`SELECT * FROM turmas WHERE fk_id_oficina = ${fk_id_oficina}`);
    return results.map(row => new Class(
      row.id_turma,
      row.nome,
      row.fk_id_oficina,
      row.data_inicio,
      row.data_fim,
      row.dias_semana
    ));
  }

  static async addClass(nome, fk_id, data_inicio, data_fim, dias_semana) {
    try {
        await dbService.query(`INSERT INTO turmas (nome, fk_id_oficina, data_inicio, data_fim, dias_semana) VALUES ('${nome}', ${fk_id}, '${data_inicio}', '${data_fim}', '${dias_semana}')`);
    } catch (error) {
        console.error('Erro ao adicionar turma no banco de dados:', error);
        throw error; // Lança a exceção para que ela possa ser capturada no controlador
    }
}

  static async getClassById(id_turma) {
    const results = await dbService.query(`SELECT * FROM turmas WHERE id_turma = ${id_turma}`);
    return results.map(row => new Class(
      row.id_turma,
      row.nome,
      row.fk_id_oficina,
      row.data_inicio,
      row.data_fim,
      row.dias_semana
    ));
  }

  static async getRecentClass() {
    const results = await dbService.query('SELECT * FROM turmas ORDER BY id_turma DESC LIMIT 1');
    return results.map(row => new Class(
      row.id_turma,
      row.nome,
      row.fk_id_oficina,
      row.data_inicio,
      row.data_fim,
      row.dias_semana
    ));
  }

  static async deleteClassFromWorkshop(id_oficina) {
    try {
      await dbService.query(`DELETE FROM turmas WHERE fk_id_oficina = ${id_oficina}`);
    } catch (error) {
      console.error('Erro ao deletar turma:', error);
      throw error;
    }
  }

}

module.exports = ClassService;
