import styled from 'styled-components';

// Estilizando o componente de cartão
const Card = styled.div`
background-color: #FFFFFF;
border-radius: 16px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px;
margin: 30px;
width: 150px;
height: 150px;
cursor: pointer;
transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

&:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}
`;

// Estilizando o wrapper de conteúdo
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:  space-between;
    width: 100%;
    flex-grow: 1; /* O conteúdo pode crescer */
    margin-bottom: 8px; /* Margem inferior extra */
    padding: 16px; /* Preenchimento interno */
    margin-top: 1%; /* Margem superior */
`;

// Estilizando o texto
const Texto = styled.p`
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 12px; /* Tamanho da fonte do texto */
    margin: 2%;
    color: #3C4043; /* Cor do texto */
`;

// Estilizando o texto
const Title = styled.h1`
    font-family: 'Be Vietnam Pro Extra Bold', sans-serif;
    font-size: 20px; /* Tamanho da fonte do texto */
    margin: 2%;
    color: #3C4043; /* Cor do texto */
`;

// Estilizando o texto
const Subtitle = styled.h2`
    font-family: 'Be Vietnam Pro Extra Bold', sans-serif;
    font-size: 16px; /* Tamanho da fonte do texto */
    margin: 0;
    color: #3C4043; /* Cor do texto */
`;

// Estilizando a imagem
const Imagem = styled.img`
    width: 100%; /* Largura da imagem */
    max-height: 14vh; /* Altura máxima da imagem */
    object-fit: contain; /* Ajuste da imagem */
`;

// Componente de cartão
const CardClass = ({ imagem, title, subtitle, texto, onClick }) => {
    return (
        <Card>
            <ContentWrapper onClick={onClick}>
                <Imagem src={imagem} alt={texto} /> {/* Imagem */}
                <Title>{title}</Title> {/* Número */}
                <Subtitle>{subtitle}</Subtitle>
                <Texto>{texto}</Texto> {/* Texto */}
            </ContentWrapper>
        </Card>
    );
};

export default CardClass; // Exportando o componente
