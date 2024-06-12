const apiUrl = `${process.env.REACT_APP_API_URL}`;

async function fetchClassById(id_turma) {
    try {
        const response = await fetch(`${apiUrl}/classes/getClassById/${id_turma}`);
        if (!response.ok) {
            throw new Error('Erro ao buscar classes da oficina');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar classes da oficina:', error);
        throw error;
    }
}

async function fetchRecentClass() {
    try {
        const response = await fetch(`${apiUrl}/classes/getRecentClass`);
        if (!response.ok) {
            throw new Error('Erro ao buscar classes da oficina');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar classes da oficina:', error);
        throw error;
    }
}

async function fetchAllClasses() {
    try {
        const response = await fetch(`${apiUrl}/classes/get`);
        if (!response.ok) {
            throw new Error('Erro ao buscar classes da oficina');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar classes da oficina:', error);
        throw error;
    }
}

export { fetchClassById, fetchRecentClass, fetchAllClasses}