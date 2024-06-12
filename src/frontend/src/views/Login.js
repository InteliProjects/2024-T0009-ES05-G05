import styled from 'styled-components'; // Importa o módulo styled-components para estilização
import logo from '../../src/imagens/logo-gerandofalcoes.png'; // Importa a imagem do logo
import fly from '../../src/imagens/fly.png'; // Importa a imagem do "fly"
import imagem_login from '../../src/imagens/imagem-login.png'; // Importa a imagem do login
import { useState } from 'react'; // Importa o módulo useState para gerenciar o estado do componente
import usuarioService from '../services/userService'; // Importe o serviço usuarioService
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para realizar navegação programática

// Componentes estilizados
const Body = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Logo = styled.img`
    position: fixed;
    top: 0;
    right: 0;
    padding-right: 40px;
    padding-top: 10px;
`;

const Container = styled.div`
    padding-right: 30px;
    margin-top: 100px;
    width: 906px;
    height: 593px;
    background: linear-gradient(to right, white 50%, #00B094 50%);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
`;

const Imagens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: auto;
    padding-bottom: 80px;
`;

const FlyImage = styled.img`
    width: 500px;
    height: auto;
    margin-top: 10px;
`;

const ImageLogin = styled.img`
    width: 200px;
`;

const Login = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Titulo = styled.h1`
    font-family: 'Be Vietnam Pro Extra Bold', sans-serif;
    font-size: 40px;
    font-family: 'Be Vietnam', sans-serif;
    font-size: 35px;
    color: #ffffff;
    margin-bottom: 74px;
`;

const EmailSenha = styled.div`
    position: relative;
    margin-bottom: 50px;
`;

const Input = styled.input`
    font-family:'Be Vietnam Pro', sans-serif;
    color: white; 
    border: none;
    outline: none;
    padding: 5px 0;
    background: none;
`;

const Line = styled.span`
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #FFFFFF;
`;

const Button = styled.button`
    margin-top: 40px;
    padding: 13px 40px 13px 40px;
    border-radius: 30px;
    border: none;
    font-family: 'Be Vietnam Pro', sans-serif;
    cursor: pointer;
    &:hover {
        background-color: #dadada;
    }
`;

const ErrorMessage = styled.span`
    font-family: 'Be Vietnam Pro', sans-serif; 
    color: white;
    font-size: 12px;
    margin-top: 4%;
`;

// Componente funcional LoginPage

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await usuarioService.loginUsuario(email, senha);

            if (response && response.user) {
                // Redireciona para a página inicial após o login bem-sucedido
                navigate('/home');
            } else {
                setError('Email ou senha incorretos');
            }
        } catch (error) {
            console.error('Erro ao tentar fazer login:', error);
            setError('Erro ao tentar fazer login. Tente novamente mais tarde.');
        }
    };
    
    return (
        <Body>
            <Logo src={logo} alt="Logo Gerando Falcoes" />
            {user == null ? ( // Verifica se o usuário não está autenticado
                <Container>
                    <Imagens>
                        <FlyImage src={fly} alt="Fly" />
                        <ImageLogin src={imagem_login} alt="Imagem Login" />
                    </Imagens>
                    <Login>
                        <Titulo>Boas vindas!</Titulo>
                        <form>
                            <EmailSenha>
                                {/* Campo de entrada para o email */}
                                <Input type="email" id="email" name="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                                <Line /> {/* Linha decorativa abaixo do campo de entrada */}
                            </EmailSenha>
                            <EmailSenha>
                                {/* Campo de entrada para a senha */}
                                <Input type="password" id="senha" name="senha" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
                                <Line /> {/* Linha decorativa abaixo do campo de entrada */}
                            </EmailSenha>
                            {/* Botão de login */}
                            <Button onClick={(e) => handleLogin(e)} type="submit">Entrar</Button>
                        </form>
                        {/* Exibe mensagens de erro, se houver */}
                        {error && <ErrorMessage>{error}</ErrorMessage>}
                    </Login>
                </Container>
            ) : (
                <h1>Olá, {user.name}</h1> // Exibe uma mensagem de boas-vindas após o login bem-sucedido
            )}

        </Body>
    );
};

export default LoginPage; // Exporta o componente LoginPage
