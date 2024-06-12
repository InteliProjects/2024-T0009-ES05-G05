const apiUrl = `${process.env.REACT_APP_API_URL}`;

async function postAttendanceListByIds(attendanceData) {
    try {
        // Itera sobre cada objeto em attendanceData
        for (const data of attendanceData) {
            // Monta o objeto com os dados específicos
            const postData = {
                id_aluno: data.id_aluno,
                lessonId: data.lessonId,
                presenca: data.presenca,
                workshopId: data.workshopId
            };

            // Envia a requisição para cada objeto individualmente
            const response = await fetch(`${apiUrl}/attendanceList/postAttendanceList`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });

            // Aguarda a resposta e pega os dados de retorno, se houver
            const responseData = await response.json();
            console.log('Dados de retorno:', responseData);
        }
    } catch (error) {
        console.error('An error occurred while fetching data from the API:', error);
        throw error;
    }
}

async function fetchAttendanceListFromWorkshops() {
    try {
        const response = await fetch(`${apiUrl}/attendanceList/getAttendanceListFromWorkshops`);
        const attendanceList = await response.json();
        console.log('Lista de presença:', attendanceList);
        return attendanceList; // Adicione esta linha para retornar os dados da lista de presença
    } catch (error) {
        console.error('An error occurred while fetching data from the API:', error);
        throw error;
    }
}

export { postAttendanceListByIds, fetchAttendanceListFromWorkshops };
