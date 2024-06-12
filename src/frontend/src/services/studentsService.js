// studentsService.js
const apiUrl = `${process.env.REACT_APP_API_URL}`;


// Função assíncrona para buscar dados de um aluno por ID
async function fetchStudent(studentId) {
    try {
        // Faz uma requisição GET para a API com o ID do aluno no endpoint para obter os dados do aluno
        const response = await fetch(`${apiUrl}/students/studentIds/${studentId}`);
        // Extrai os dados da resposta como JSON
        const data = await response.json();
        // Retorna os dados obtidos do aluno
        return data;
    } catch (error) {
        // Em caso de erro, exibe uma mensagem de erro no console
        console.error('An error occurred while fetching data from the API:', error);
        // Lança o erro para ser tratado pela função chamadora
        throw error;
    }
}

async function fetchStudentsFromClass(classId) { //consulta na tabela matricula para usar os ids dos estudantes na consulta da tabela estudantes
    try {
        const response = await fetch(`${apiUrl}/registerClasses/classesId/${classId}`);
        const data = await response.json();
        // Extrai apenas os IDs dos alunos da resposta
        const studentIds = data.map(item => item.fk_id_aluno);
        // Chama a função fetchStudents com os IDs dos alunos
        const studentsData = await fetchStudent(studentIds);
        return studentsData;
    } catch (error) {
        console.error('An error occurred while fetching data from the API:', error);
        throw error;
    }
}

async function fetchStudentsNotInClass(classId) {
    try {
        const response = await fetch(`${apiUrl}/registerClasses/classesIdExcept/${classId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred while fetching data from the API:', error);
        throw error;
    }
}

async function fetchTotalStudents () {
    try {
        const response = await fetch(`${apiUrl}/students/total`);
        if (!response.ok) {
            throw new Error('Erro ao buscar total de alunos');
        }
        const data = await response.text();
        return parseInt(data, 10);
    } catch (error) {
        console.error('Erro ao buscar total de alunos:', error);
        throw error;
    }
}

async function fetchAllStudents() {
    try {
        const response = await fetch(`${apiUrl}/students/get`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred while fetching data from the API:', error);
        throw error;
    }
}

// Exporta a função fetchStudents para ser utilizada em outros arquivos
export { fetchStudent, fetchStudentsFromClass, fetchTotalStudents, fetchAllStudents, fetchStudentsNotInClass };
