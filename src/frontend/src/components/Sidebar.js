import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png'; // Substitua pelo caminho correto do arquivo da logo

const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: 100vh;
  background-color: #FFF;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
`;

const Logo = styled.img`
  width: auto;
  height: 12vh;
  margin: 20px;
`;

const Navigation = styled.nav`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 16px;
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin: 20px 0;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: black;
    &:hover {
      color: #4FC090;
    }
  }
`;

export default function Sidebar() {
  return (
    <SidebarContainer>
      <Logo src={logo} alt="Logo" />
      <Navigation>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/estatisticas">Indicadores</a></li>
          <li><a href="/about">Sobre nós</a></li>
          <li><a href="/alunos">Alunos</a></li>
          <li><a href="/professores">Professores</a></li>
        </ul>
      </Navigation>
    </SidebarContainer>
  );
}


