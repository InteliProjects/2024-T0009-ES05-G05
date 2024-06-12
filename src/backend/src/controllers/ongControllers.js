const OngService = require('../services/ongServices');

class OngController {
  static async getAllOngs(req, res) {
    try {
      const ongs = await OngService.getAllOngs();
      res.json(ongs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = OngController;
