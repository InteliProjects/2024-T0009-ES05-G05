import { fetchLessons } from './dashboardService';

describe('fetchLessons function', () => {
    beforeEach(() => {
        global.fetch = jest.fn(); // Mock do fetch global
    });

    afterEach(() => {
        jest.resetAllMocks(); // Limpa todos os mocks depois de cada teste
    });

    test('fetches lessons successfully', async () => {
        const lessonsData = [{ id: 1, name: 'Lesson 1' }, { id: 2, name: 'Lesson 2' }];
        const mockResponse = { json: jest.fn().mockResolvedValueOnce(lessonsData) };
        global.fetch.mockResolvedValueOnce(mockResponse);

        const lessons = await fetchLessons();

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(`${process.env.REACT_APP_API_URL}/all-lessons`);
        expect(lessons).toEqual(lessonsData);
    });

    test('handles fetch error', async () => {
        const errorMessage = 'Failed to fetch lessons';
        const mockResponse = { json: jest.fn().mockRejectedValueOnce(new Error(errorMessage)) };
        global.fetch.mockResolvedValueOnce(mockResponse);

        try {
            await fetchLessons();
        } catch (error) {
            expect(error.message).toBe(errorMessage);
        }

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(`${process.env.REACT_APP_API_URL}/all-lessons`);
    });
});
