const dbService = require('../services/databaseServices');
const StudentService = require('../services/studentServices');
const StudentController = require('../controllers/studentControllers');

jest.mock('../services/databaseServices', () => ({
  query: jest.fn(),
}));

const mockStudents = [
  { 
    id_aluno: 1,
    nome: 'Julia',
    email: 'student1@example.com',
    telefone: '123456789',
    data_nascimento: '2000-01-01',
    cpf: '12345678901',
    genero: 'Masculino',
    etnia: 'Branco',
    endereco: 'Rua A, 123',
    estado_civil: 'Solteiro',
    status: 'Ativo',
  },
  { 
    id_aluno: 2,
    nome: 'Marcos',
    email: 'student2@example.com',
    telefone: '987654321',
    data_nascimento: '2000-02-02',
    cpf: '98765432101',
    genero: 'Feminino',
    etnia: 'Negro',
    endereco: 'Rua B, 456',
    estado_civil: 'Casado',
    status: 'Ativo',
  },
];

describe('Student Tests', () => {
  describe('Service Tests', () => {
    it('should return a list of students', async () => {
      dbService.query.mockResolvedValue(mockStudents);
      const result = await StudentService.getAllStudents();
      expect(result).toEqual(mockStudents);
      expect(dbService.query).toHaveBeenCalledWith('SELECT * FROM alunos');
    });

  });

  describe('Controller Tests', () => {
    it('should return a list of students', async () => {
      const req = {};
      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };
      dbService.query.mockResolvedValue(mockStudents);
      await StudentController.getAllStudents(req, res);
      expect(res.json).toHaveBeenCalledWith(mockStudents);
    });

    it('should handle errors', async () => {
      const req = {};
      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };
      const error = new Error('Test Error');
      dbService.query.mockRejectedValue(error);
      await StudentController.getAllStudents(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: error.message });
    });

  });
});
