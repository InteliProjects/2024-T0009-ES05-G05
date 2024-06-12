// Importando as dependências necessárias para os testes
const dbService = require('../services/databaseServices');
const ClassService = require('../services/classServices');
const ClassController = require('../controllers/classControllers');

// Mockando o módulo de databaseServices
jest.mock('../services/databaseServices', () => ({
  query: jest.fn(),
}));

// Mockando os dados de retorno da query
const mockClasses = [
  {
    id_turma: '1',
    nome: 'English Class',
    data_inicio: '2023-09-05',
    data_fim: '2023-12-15',
    dias_semana: 'Monday, Wednesday',
    fk_id_oficina: '1',
  },
  {
    id_turma: '2',
    nome: 'Math Class',
    data_inicio: '2023-09-10',
    data_fim: '2023-12-20',
    dias_semana: 'Tuesday, Thursday',
    fk_id_oficina: '2',
  },
];

// Iniciando os testes
describe('Class Tests', () => {
  describe('Service Tests', () => {
    it('should return a list of classes', async () => {
      dbService.query.mockResolvedValue(mockClasses);
      const result = await ClassService.getAllClasses();
      expect(result).toEqual(mockClasses);
      expect(dbService.query).toHaveBeenCalledWith('SELECT * FROM turmas');
    });
  });

  describe('Controller Tests', () => {
    it('should return a list of classes', async () => {
      const req = {};
      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };
      dbService.query.mockResolvedValue(mockClasses);
      await ClassController.getAllClasses(req, res);
      expect(res.json).toHaveBeenCalledWith(mockClasses);
    });

    it('should handle errors', async () => {
      const req = {};
      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };
      const error = new Error('Test Error');
      dbService.query.mockRejectedValue(error);
      await ClassController.getAllClasses(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: error.message });
    });
  });
});
