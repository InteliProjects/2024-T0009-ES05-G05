// frontend/services/usuarioService.js

const API_URL = `${process.env.REACT_APP_API_URL}`; // Ajuste a URL conforme necessário

const usuarioService = {
    async loginUsuario(email, senha) {
        try {
            console.log('Dados de login:', email, senha); // Verifica se os dados estão corretos
            const response = await fetch(`${API_URL}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, senha})
            });
            console.log('Resposta do login:', response); // Verifica a resposta do backend
            if (!response.ok) {
                throw new Error('Erro ao fazer login');
            }
            return await response.json();
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            throw error;
        }
    },
};


export default usuarioService;
