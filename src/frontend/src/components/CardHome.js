import React from 'react';
import styled from 'styled-components';

// Importação dos ícones
import DanceIcon from '../img/music_icon.svg';
import SportIcon from '../img/sport_icon.svg';
import ArtIcon from '../img/art_icon.svg';
import ProfileIcon from '../img/profile_icon.svg';
import BusinessIcon from '../img/business_icon.svg';
import GraphIcon from '../img/graph_icon.svg';

// Styled-components para os diferentes elementos do card
const CardWrapper = styled.div`
  background-color: #FFFFFF; /* cor de fundo do card */
  border-radius: 16px; /* bordas arredondadas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* sombra do card */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 10px;
  width: 150px; /* largura do card */
  height: 150px; /* altura do card */
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* efeito de hover com sombra mais forte */
    transform: translateY(-5px);
  }
`;
const Icon = styled.img`
  width: 50px; // ou o tamanho que você preferir
  height: auto;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 16px; // ou o tamanho que você preferir
  font-family: 'Be Vietnam Pro Bold', sans-serif;
  color: #333;
  text-align: center;
  margin: 0;
`;

// Mapeamento dos ícones
const iconMap = {
  Dança: DanceIcon,
  Esporte: SportIcon,
  Arte: ArtIcon,
  Negócios: BusinessIcon,
  Cursos: ProfileIcon,
  Cultura: GraphIcon,
  Empreendedorismo: BusinessIcon,
  // adicione mais mapeamentos conforme necessário
};

const CardHome = ({ icon, title, onClick }) => {
  const imgSrc = iconMap[icon]; // Obter o ícone correto com base na categoria

  return (
    <CardWrapper onClick={onClick}>
      <Icon src={imgSrc} alt={`${title} Icon`} />
      <Title>{title}</Title>
    </CardWrapper>
  );
};

export default CardHome;
