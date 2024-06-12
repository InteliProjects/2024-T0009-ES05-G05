
const apiUrl = `${process.env.REACT_APP_API_URL}`;


// Função assíncrona para buscar lessons
async function fetchLessons() {
    try {
        // Faz uma requisição GET para a API
        const response = await fetch(apiUrl);
        // Extrai os dados da resposta como JSON
        const data = await response.json();
        // Retorna os dados obtidos
        return data;
    } catch (error) {
        // Em caso de erro, exibe uma mensagem de erro no console
        console.error('An error occurred while fetching data from the API:', error);
        // Lança o erro para ser tratado pela função chamadora
        throw error;
    }
}

async function fetchLessonsByClass(classId) {
    try {
        const response = await fetch(`${apiUrl}/lesson/classId/${classId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred while fetching data from the API:', error);
        throw error;
    }
}
async function fetchLessonById(lessonId) {
    try {
        const response = await fetch(`${apiUrl}/lesson/id/${lessonId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred while fetching data from the API:', error);
        throw error;
    }
}

async function deleteLesson(lessonId) {
    try {
        const response = await fetch(`${apiUrl}/lesson/id/${lessonId}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred while deleting lesson:', error);
        throw error;
    }
}

// Exporta a função fetchLessons para ser utilizada em outros arquivos
export { fetchLessonsByClass, fetchLessonById, deleteLesson };
