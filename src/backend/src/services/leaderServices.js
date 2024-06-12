const dbService = require('./databaseServices');
const Leader = require('../models/Leader');

class LeaderService {
  static async getAllLeaders() {
    const results = await dbService.query('SELECT * FROM lider');
    return results.map(row => new Leader(
      row.id_Leader,
      row.fk_id_ong,
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
}

module.exports = LeaderService;
