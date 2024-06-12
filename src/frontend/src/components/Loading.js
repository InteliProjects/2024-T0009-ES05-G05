import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animação de rotação
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Loader = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #00B094;
  box-shadow: #00B094 -20px 0px, #00B094 20px 0px;
  animation: ${rotate} 0.8s linear infinite; /* Aplicando a animação de rotação */
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Loader />
    </LoadingContainer>
  );
};

export default Loading;
