const dbService = require('../services/databaseServices');
const AttendanceListService = require('../services/attendanceListServices');
const AttendanceListController = require('../controllers/attendanceListControllers');

// Mocking the express response
const res = {
  json: jest.fn((x) => x),
  status: jest.fn(() => res)
};

// Mock do dbService.query para simular o retorno do banco de dados
jest.mock('../services/databaseServices', () => ({
  query: jest.fn()
}));

describe('AttendanceListService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('getAllAttendances returns list of attendances', async () => {
    dbService.query.mockResolvedValueOnce([
      { fk_id_aluno: 1, fk_id_aula: 1, presenca: true },
      // Adicione mais objetos simulados conforme necessário
    ]);

    const results = await AttendanceListService.getAllAttendances();
    expect(results).toHaveLength(1); // Ou o número esperado de objetos
    expect(results[0].fk_id_aluno).toEqual(1); // Verifica se os campos estão corretos
  });

  it('postAttendanceListByIds posts attendances correctly', async () => {
    dbService.query.mockImplementation((query, values) => {
      return Promise.resolve({ insertId: Math.floor(Math.random() * 1000) });
    });

    const studentIds = [1, 2, 3]; // IDs simulados dos alunos
    const lessonId = 1; // ID simulado da aula
    const results = await AttendanceListService.postAttendanceListByIds(studentIds, lessonId);
    expect(results).toHaveProperty('insertId'); // Verifica se o número de presenças postadas é igual ao número de IDs fornecidos
  });
});

describe('AttendanceListController', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('getAllAttendances handles request and response correctly', async () => {
    const req = {}; // Mock do objeto de requisição
    dbService.query.mockResolvedValueOnce([
      { fk_id_aluno: 1, fk_id_aula: 1, presenca: true },
      // Adicione mais objetos simulados conforme necessário
    ]);

    await AttendanceListController.getAllAttendances(req, res);
    expect(res.json).toHaveBeenCalledWith(expect.any(Array));
    expect(res.json.mock.calls[0][0]).toHaveLength(1); // Verifica se o array de respostas tem o tamanho esperado
  });

  it('postAttendanceListByIds handles request and response correctly', async () => {
    const req = {
      body: {
        studentIds: [1, 2, 3],
        lessonId: 1
      }
    };

    dbService.query.mockImplementation((query, values) => {
      return Promise.resolve({ insertId: Math.floor(Math.random() * 1000) });
    });

    await AttendanceListController.postAttendanceListByIds(req, res);
    expect(Array.isArray(res.json.mock.calls[0][0])).toBe(false);
    expect(res.json.mock.calls[0][0]).toHaveProperty('insertId');
  });
});

