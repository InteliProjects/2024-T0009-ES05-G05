import { fetchClassesByWorkshopId } from './classService';

describe('fetchClassesByWorkshopId function', () => {
    beforeEach(() => {
        // Mock fetch para simular a resposta da API
        global.fetch = jest.fn();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    test('fetches classes by workshop ID from API', async () => {
        const mockClassesData = [{ id: 1, name: 'Class 1' }, { id: 2, name: 'Class 2' }];
        const workshopId = 1;
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockClassesData,
        });

        const classes = await fetchClassesByWorkshopId(workshopId);

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(`${process.env.REACT_APP_API_URL}/workshops/classes/by-workshop/${workshopId}`);
        expect(classes).toEqual(mockClassesData);
    });

    test('throws an error if API request fails', async () => {
        const workshopId = 1;
        const errorMessage = 'Network Error';
        global.fetch.mockRejectedValueOnce(new Error(errorMessage));

        await expect(fetchClassesByWorkshopId(workshopId)).rejects.toThrow(errorMessage);

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(`${process.env.REACT_APP_API_URL}/workshops/classes/by-workshop/${workshopId}`);
    });
});
