// attendanceListController.js
const AttendanceListService = require('../services/attendanceListServices');

class AttendanceListController {
  static async getAllAttendances(req, res) {
    try {
      const Attendances = await AttendanceListService.getAllAttendances();
      res.json(Attendances);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async postAttendanceList(req, res) {
    try {
      let attendanceList = req.body;
      // Verifica se attendanceList não é um array e transforma em um array com um único elemento
      if (!Array.isArray(attendanceList)) {
        attendanceList = [attendanceList];
      }
      
      const result = await AttendanceListService.postAttendanceList(attendanceList);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static async getPercentagePresencesFromWorkshops(req, res) {
    try {
      const percentagesByWorkshop = await AttendanceListService.getPercentagePresencesFromWorkshops();
      res.json(percentagesByWorkshop);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
}

module.exports = AttendanceListController;
