import styled from 'styled-components';

// Estilizando o componente de cartão
const Card = styled.div`
    display: grid;
    grid-template-rows: auto auto auto; // Define 3 linhas de altura automática
    gap: 0; // Remove o espaço entre as linhas do grid
    align-items: center;
    justify-items: center;
    background-color: #fff; // Cor de fundo
    border-radius: 20px; // Bordas arredondadas
    box-shadow: 0 4px 8px rgba(0,0,0,0.1); // Sombra
    padding: 20px;
    margin: 20px;
    transition: transform 0.2s; // Transição suave
    max-width: 300px; // Define a largura máxima do card
    overflow-x: auto; // Adiciona rolagem lateral quando necessário
    overflow-y: hidden; // Esconde a rolagem vertical

    &:hover {
        transform: scale(1.05); // Efeito de zoom ao passar o mouse
    }
`;

// Estilizando o número
const Numero = styled.h1`
    font-family: 'Be Vietnam Pro Extra Bold', sans-serif;
    color: #00AEEF; /* Cor do número */
    font-size: 3vw; // Ajusta o tamanho da fonte baseado na largura da viewport
    margin: 0; // Remove margens para evitar espaçamento adicional
    @media (max-width: 768px) {
        font-size: 5vw; // Tamanho da fonte para telas menores
    }
`;

// Estilizando o texto
const Texto = styled.p`
    font-family: 'Be Vietnam Pro', sans-serif;
    color: #3C4043; /* Cor do texto */
    font-size: 1vw; // Ajusta o tamanho da fonte baseado na largura da viewport
    margin: 0; // Remove margens para evitar espaçamento adicional
    @media (max-width: 768px) {
        font-size: 4vw; // Tamanho da fonte para telas menores
    }
`;

// Estilizando a imagem
const Imagem = styled.img`
    max-width: 80%; // Largura máxima da imagem
    max-height: 80%; // Altura máxima da imagem
    width: 100%; // Garante que a imagem ocupe toda a largura do contêiner
    object-fit: cover; // Garante que a imagem cubra o espaço disponível
    border-radius: 20px 20px 0 0; // Bordas arredondadas apenas no topo
`;

// Componente de cartão
const CardComponent = ({ imagem, numero, texto }) => {
    return (
        <Card>
            <Imagem src={imagem} alt={texto} /> {/* Imagem */}
            <Numero>{numero}</Numero> {/* Número */}
            <Texto>{texto}</Texto> {/* Texto */}
        </Card>
    );
};

export default CardComponent;
