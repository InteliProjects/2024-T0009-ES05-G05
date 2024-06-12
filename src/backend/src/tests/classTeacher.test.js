// Importando as dependências necessárias para os testes
const dbService = require('../services/databaseServices');
const ClassTeacherService = require('../services/classTeacherServices');
const ClassTeacherController = require('../controllers/classTeacherControllers');

// Mockando o módulo de databaseServices
jest.mock('../services/databaseServices', () => ({
  query: jest.fn(),
}));

// Mockando os dados de retorno da query
const mockTeachersByClass = [
  {
    fk_id_turma: '1',
    fk_id_professor: '1'
  },
  {
    fk_id_turma: '1',
    fk_id_professor: '2'
  },
];

// Iniciando os testes
describe('ClassTeacher Tests', () => {
  describe('Service Tests', () => {
    it('should return a list of teachers by class', async () => {
      const fk_id_turma = '1';
      dbService.query.mockResolvedValue(mockTeachersByClass);
      const result = await ClassTeacherService.getAllTeachersByClass(fk_id_turma);
      expect(result).toEqual(mockTeachersByClass);
      expect(dbService.query).toHaveBeenCalledWith(`SELECT * FROM professor_por_turma WHERE fk_id_turma = ${fk_id_turma}`);
    });
  });

  describe('Controller Tests', () => {
    it('should return a list of teachers by class', async () => {
      const req = { params: { fk_id_turma: '1' } };
      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };
      dbService.query.mockResolvedValue(mockTeachersByClass);
      await ClassTeacherController.getAllTeachersByClass(req, res);
      expect(res.json).toHaveBeenCalledWith(mockTeachersByClass);
    });

    it('should handle errors', async () => {
      const req = { params: { fk_id_turma: '1' } };
      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };
      const error = new Error('Test Error');
      dbService.query.mockRejectedValue(error);
      await ClassTeacherController.getAllTeachersByClass(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: error.message });
    });
  });
});

