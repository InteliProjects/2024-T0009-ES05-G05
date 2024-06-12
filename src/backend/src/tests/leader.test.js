const LeaderService = require('../services/leaderServices'); 


describe('LeaderService', () => {
  it('should return all leaders', async () => {
    const mockResults = [
      {
        id_Leader: 1,
        fk_id_ong: 1,
        nome: 'John Doe',
        email: 'johndoe@example.com',
      },
    ];

    const mockQuery = jest.fn().mockResolvedValue(mockResults);
    jest.spyOn(require('../services/databaseServices'), 'query').mockImplementation(mockQuery);

    const leaders = await LeaderService.getAllLeaders();
    expect(leaders).toHaveLength(mockResults.length);
    
  });
});
