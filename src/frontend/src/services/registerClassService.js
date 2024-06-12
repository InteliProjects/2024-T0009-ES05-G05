const apiUrl = `${process.env.REACT_APP_API_URL}`;

async function postRegisterClass(fk_id_turma, selectedStudents, workshopId) {
    try {
        const requestData = selectedStudents.map(studentId => ({
            fk_id_turma: fk_id_turma,
            fk_id_aluno: studentId,
            fk_id_oficina: workshopId
        }));

        const response = await fetch(`${apiUrl}/registerClasses/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData)
        });

        if (!response.ok) {
            throw new Error('Failed to add students to class');
        }

        const data = await response.json();
        return data; // Optionally, you can return data if needed
    }
    catch (error) {
        console.error('Error adding students to class:', error);
        throw error;
    }
}

export { postRegisterClass };
