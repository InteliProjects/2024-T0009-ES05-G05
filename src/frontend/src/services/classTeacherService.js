const apiUrl = `${process.env.REACT_APP_API_URL}`;

async function postClassTeacher(fk_id_turma, selectedTeachers, workshopId) {
    try {
        const requestData = selectedTeachers.map(teacherId => ({
            fk_id_turma: fk_id_turma,
            fk_id_professor: teacherId,
            fk_id_oficina: workshopId
        }));

        const response = await fetch(`${apiUrl}/classTeacher/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData)
        });

        if (!response.ok) {
            throw new Error('Failed to add teachers to class');
        }

        const data = await response.json();
        return data; // Optionally, you can return data if needed
    } catch (error) {
        console.error('Error adding teachers to class:', error);
        throw error;
    }
}

export { postClassTeacher };
