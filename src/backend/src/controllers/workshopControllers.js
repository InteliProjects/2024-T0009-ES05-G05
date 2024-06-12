const WorkshopService = require('../services/workshopServices');

class WorkshopController {
  static async getAllWorkshops(req, res) {
    try {
      const workshops = await WorkshopService.getAllWorkshops();
      res.json(workshops);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async addWorkshop(req, res) {
    const { fk_id_ong, nome_oficina, categoria } = req.body;
    try {
      const newWorkshop = { fk_id_ong, nome_oficina, categoria };
      const result = await WorkshopService.addWorkshop(newWorkshop);
      res.status(201).json({ id: result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getWorkshopById(req, res) {
    const { id } = req.params;
    try {
      const workshop = await WorkshopService.getWorkshopById(id);
      if (workshop) {
        res.json(workshop);
      } else {
        res.status(404).json({ error: 'Workshop not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteWorkshop(req, res) {
    const { id } = req.params;
    try {
      const result = await WorkshopService.deleteWorkshop(id);
      if (result) {
        res.json({ message: 'Workshop deleted successfully' });
      } else {
        res.status(404).json({ error: 'Workshop not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  

  static async getTotalWorkshops(req, res) {
    try {
      const totalWorkshops = await WorkshopService.getTotalWorkshops();
      res.json(totalWorkshops);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = WorkshopController;
