const dbService = require('./databaseServices');
const Workshop = require('../models/Workshop');

class WorkshopService {
  static async getAllWorkshops() {
    const results = await dbService.query('SELECT * FROM oficinas');
    return results.map(row => new Workshop(
      row.id_oficina,
      row.fk_id_ong,
      row.nome_oficina,
      row.categoria
    ));
  }

  static async addWorkshop(workshop) {
    const { fk_id_ong, nome_oficina, categoria } = workshop;
    const result = await dbService.query(
      'INSERT INTO oficinas (fk_id_ong, nome_oficina, categoria) VALUES (?, ?, ?)',
      [fk_id_ong, nome_oficina, categoria]
    );
    return result.insertId;
  }
  static async getTotalWorkshops() {
    try {
      const result = await dbService.query('SELECT COUNT(*) FROM oficinas');
      return result[0]['COUNT(*)'];
    }
    catch (error) {
      throw error;
    } 
  }

  static async getWorkshopById(id) {
    const results = await dbService.query('SELECT * FROM oficinas WHERE id_oficina = ?', [id]);
    if (results.length === 0) {
      return null;
    }
    const row = results[0];
    return new Workshop(
      row.id_oficina,
      row.fk_id_ong,
      row.nome_oficina,
      row.categoria
    );
  }

  static async deleteWorkshop(id) {
    const result = await dbService.query('DELETE FROM oficinas WHERE id_oficina = ?', [id]);
    return result.affectedRows > 0;
  }
  
}

module.exports = WorkshopService;
