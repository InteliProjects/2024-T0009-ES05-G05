const LeaderService = require('../services/leaderServices');

class LeaderController {
  static async getAllLeaders(req, res) {
    try {
      const Leaders = await LeaderService.getAllLeaders();
      res.json(Leaders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = LeaderController;
