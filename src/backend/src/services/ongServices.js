const dbService = require('./databaseServices');
const Ong = require('../models/Ong');

class OngService {
  static async getAllOngs() {
    const results = await dbService.query('SELECT * FROM ong');
    return results.map(row => new Ong(
      row.id_ong,
      row.nome,
      row.email,
      row.responsavel,
      row.telefone,
      row.cnpj,
      row.endereco
    ));
  }
}

module.exports = OngService;
