
const LessonService = require('../services/lessonServices');


jest.mock('../services/databaseServices', () => ({
  query: jest.fn().mockImplementation((query, params) => {
    if (query === 'SELECT * FROM aulas') {
      return Promise.resolve([
        {
          id_aula: 1,
          nome: 'Lesson 1',
          data: '2024-03-21',
          dias_semana: 'Monday',
          fk_id_turma: 1,
         
        },
      ]);
    } else if (query === 'SELECT * FROM aulas WHERE fk_id_turma = ?') {
      const [id] = params;
      if (id === 1) {
        return Promise.resolve([
          {
            id_aula: 1,
            nome: 'Lesson 1',
            data: '2024-03-21',
            dias_semana: 'Monday',
            fk_id_turma: 1,
          },
        ]);
      } else {
        return Promise.resolve([]);
      }
    } else if (query === 'SELECT * FROM aulas WHERE id_aula = ?') {
      const [id] = params;
      if (id === 1) {
        return Promise.resolve([
          {
            id_aula: 1,
            nome: 'Lesson 1',
            data: '2024-03-21',
            dias_semana: 'Monday',
            fk_id_turma: 1,
          },
        ]);
      } else {
        return Promise.resolve([]);
      }
    } else {
      return Promise.reject(new Error('Invalid query'));
    }
  }),
}));

describe('LessonService', () => {
  it('should fetch all lessons', async () => {
    const lessons = await LessonService.getAllLessons();
    expect(lessons.length).toBe(1); 
    
  });

  it('should get lesson by class', async () => {
    const lessonId = 1;
    const lessons = await LessonService.getLessonByClass(lessonId);
    expect(lessons.length).toBe(1); 

  });

  it('should get lesson by id', async () => {
    const lessonId = 1;
    const lesson = await LessonService.getLessonById(lessonId);
    expect(lesson.id_aula).toBe(1);
   
  });
});
