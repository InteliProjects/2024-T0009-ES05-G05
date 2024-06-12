// Importações necessárias
import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer'; // Importa o componente Footer
import Sidebar from '../components/Sidebar'; // Importa o componente Sidebar
import logo from '../img/logo.png';
import bruna from '../img/bruna.png';
import clara from '../img/clara.png';
import heitor from '../img/heitor.png';
import henrique from '../img/henrique.png';
import isabella from '../img/isabella.png';

// Estilo para o corpo da página
const StyledBody = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #f5f5f5;
    min-height: 100vh;
    width: 100%;
`;

const Logo = styled.img`
  width: 495px;
  display: flex;
  align-self: center;
  margin-top: -2%;
`;

// Estilo para o conteúdo principal da página
const MainContent = styled.div`
  flex-grow: 1; // Ocupa o espaço restante da tela
  width: calc(100% - 250px); // Subtrai a largura estimada da Sidebar
  margin-left: 250px; // Adiciona uma margem esquerda para não sobrepor a Sidebar
  padding-top: 20px; // Espaço para a barra superior
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto; 
`;

const Slogan = styled.h1`
    display: flex;
    font-family: "Be Vietnam Pro Bold", sans-serif;
    font-size: 32px;
    font-weight: bold;
    align-self: center;
    margin-top: -5%;
`;

const MissionDiv = styled.div`
    display: flex;
    align-self: center;
    width: 80%;
    height: 35%;
    margin-left: 8%;
    margin-top: 1%;
    background-color: white;
    border-radius: 16px;
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
    flex-direction: column;
`;

const MissionTitle = styled.h1`
    display: flex;
    font-family: "Be Vietnam Pro Bold", sans-serif;
    font-size: 32px;
    font-weight: bold;
    align-self: flex-start;
    margin-left: 3%;
`;

const MissionDescription = styled.h1`
    display: flex;
    font-family: "Be Vietnam Pro", sans-serif;
    font-size: 16px;
    font-weight: bold;
    align-self: flex-start;
    margin-left: 3%;
    margin-bottom: 2%;
    margin-right: 1%;
`;

const AboutUsDiv = styled.div`
    display: flex;
    align-self: center;
    width: 80%;
    height: 800px;
    margin-left: 8%;
    margin-top: 2%;
    margin-bottom: 10%;
    background-color: white;
    border-radius: 16px;
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
    flex-direction: column;
`;

const AboutUsTitle = styled.h1`
    display: flex;
    font-family: "Be Vietnam Pro Bold", sans-serif;
    font-size: 32px;
    font-weight: bold;
    align-self: flex-start;
    margin-left: 3%;
    margin-top: 2%;
`;

const AboutDescription = styled.h1`
    display: flex;
    font-family: "Be Vietnam Pro", sans-serif;
    font-size: 16px;
    font-weight: bold;
    align-self: flex-start;
    margin-left: 3%;
    margin-right: 3%;
    margin-bottom: 2%;
`;

const TeamDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: 3%;
`;

const TeamRowDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    width: 180%;
    justify-content: space-between;
`;

const PeerRowDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    width: 110%;
    margin-bottom: 10%;
    justify-content: space-between;
`;

const MemberDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const MemberPhoto = styled.img`
    height: 165px;
    width: 165px;
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 16px;
    transition: box-shadow 0.2s ease-in-out;

    &:hover {
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* efeito de hover com sombra mais forte */
      transform: translateY(-5px);
    }
`;

const MemberName = styled.h1`
    display: flex;
    font-family: "Be Vietnam Pro Bold", sans-serif;
    font-size: 20px;
    font-weight: bold;
    align-self: center;
`;

export default function About() {
    return (
        <StyledBody>
            <Sidebar/>
            <MainContent>
                <Logo src={logo} alt="Logo" />
                <Slogan>Integrando para o bem</Slogan>
                <MissionDiv>
                    <MissionTitle>Missão</MissionTitle>
                    <MissionDescription>Nossa missão é desenvolver soluções tecnológicas inovadoras que facilitam e aprimoram a gestão de atendimentos nas ONGs da rede Gerando Falcões. Comprometemo-nos a criar ferramentas que aumentem a eficiência e a eficácia dos serviços oferecidos, permitindo que as ONGs se concentrem no que fazem de melhor: transformar vidas e comunidades.</MissionDescription>
                </MissionDiv>
                <AboutUsDiv>
                    <AboutUsTitle>Quem somos</AboutUsTitle>
                    <AboutDescription>Somos um grupo de estudantes de Engenharia de Software do Inteli (Instituto de Tecnologia e Liderança), dedicados a criar soluções incríveis. Clique na nossa foto para conhecer mais sobre nós no LinkedIn!</AboutDescription>
                    <TeamDiv>
                        <PeerRowDiv>
                            <MemberDiv>
                                <a href="https://www.linkedin.com/in/bruna-brasil-alexandre/" target="_blank" rel="noopener noreferrer">
                                    <MemberPhoto src={bruna} alt="Bruna" />
                                </a>
                                <MemberName>Bruna Brasil</MemberName>
                            </MemberDiv>
                            <MemberDiv>
                                <a href="https://www.linkedin.com/in/claramohammad/" target="_blank" rel="noopener noreferrer">
                                    <MemberPhoto src={clara} alt="Clara" />
                                </a>
                                <MemberName>Clara Mohammad</MemberName>
                            </MemberDiv>
                        </PeerRowDiv>
                        <TeamRowDiv>
                            <MemberDiv>
                                <a href="https://www.linkedin.com/in/heitorprudente/" target="_blank" rel="noopener noreferrer">
                                    <MemberPhoto src={heitor} alt="Heitor" />
                                </a>
                                <MemberName>Heitor Prudente</MemberName>
                            </MemberDiv>
                            <MemberDiv>
                                <a href="https://www.linkedin.com/in/henrique-ottoboni-magalhaes-tecnologia/" target="_blank" rel="noopener noreferrer">
                                    <MemberPhoto src={henrique} alt="Henrique" />
                                </a>
                                <MemberName>Henrique Ottoboni</MemberName>
                            </MemberDiv>
                            <MemberDiv>
                                <a href="https://www.linkedin.com/in/isabella-fernandes-saldanha-138a631b4/" target="_blank" rel="noopener noreferrer">
                                    <MemberPhoto src={isabella} alt="Isabella" />
                                </a>
                                <MemberName>Isabella Fernandes</MemberName>
                            </MemberDiv>
                        </TeamRowDiv>
                    </TeamDiv>
                </AboutUsDiv>
            </MainContent>
            <Footer/>
        </StyledBody>
    )
}