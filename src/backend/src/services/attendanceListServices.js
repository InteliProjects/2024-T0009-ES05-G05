// attendanceListService.js
const dbService = require('./databaseServices');
const AttendanceList = require('../models/AttendanceList');

class AttendanceListService {
  static async getAllAttendances() {
    const results = await dbService.query('SELECT * FROM lista_de_presenca');
    return results.map(row => new AttendanceList(
      row.fk_id_aluno,
      row.fk_id_aula,
      row.presenca,
      row.fk_id_oficina
    ));
  }

  static async postAttendanceList(attendanceList) {
    try {
      const values = attendanceList.map(item => [item.id_aluno, item.lessonId, item.workshopId, item.presenca ? 1 : 0]);
      const query = 'INSERT INTO lista_de_presenca (fk_id_aluno, fk_id_aula, fk_id_oficina, presenca) VALUES ?';

      const result = await dbService.query(query, [values]);
      return { insertId: result.insertId };
    } catch (error) {
      console.error('Error inserting attendance list:', error);
      throw error; // You can handle this error as needed
    }
  }
  static async getPercentagePresencesFromWorkshops() {
    try {
        const query = 'SELECT oficinas.nome_oficina, lista_de_presenca.fk_id_oficina, COUNT(*) AS totalRegistros, SUM(presenca) AS totalPresencas FROM lista_de_presenca JOIN oficinas ON lista_de_presenca.fk_id_oficina = oficinas.id_oficina GROUP BY lista_de_presenca.fk_id_oficina';

        const results = await dbService.query(query);

        const percentagesByWorkshop = results.map(row => {
          if (row.totalRegistros !== null && row.totalRegistros !== undefined && row.totalRegistros !== 0) {
              const attendancePercentage = (row.totalPresencas / row.totalRegistros) * 100;
              const formattedPercentage = parseFloat(attendancePercentage.toFixed(2)); // Format to two decimal places
              return {
                  workshopId: row.fk_id_oficina,
                  attendancePercentage: formattedPercentage,
                  workshopName: row.nome_oficina // Adicione o nome da oficina aqui
              };
          } else {
              return {
                  workshopId: row.fk_id_oficina,
                  attendancePercentage: null,
                  workshopName: row.nome_oficina // Adicione o nome da oficina aqui
              };
          }
      });
      

        return percentagesByWorkshop;
    } catch (error) {
        throw error;
    }
}

}  

module.exports = AttendanceListService;
