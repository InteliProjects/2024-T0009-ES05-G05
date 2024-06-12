import React from 'react';
import styled from 'styled-components';

// Estilizando o título da classe
const TitleClass = styled.h2`
    font-family: 'Be Vietnam Pro Bold', sans-serif;
    font-size: 20px;
`;

// Estilizando o overlay do pop-up
const PopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Adicionando um fundo semi-transparente */
    display: flex;
    justify-content: center;
    align-items: center;
`;

// Estilizando o conteúdo do pop-up
const PopupContent = styled.div`
    background-color: white;
    padding: 30px; /* Ajustando o preenchimento do pop-up */
    border-radius: 20px; /* Arredondando as bordas do pop-up */
    display: flex;
    flex-direction: column; /* Organizando os elementos em coluna */
    align-items: center; /* Centralizando os elementos horizontalmente */
    width: 80%; /* Aumentando a largura do pop-up */
    max-width: 500px; /* Definindo uma largura máxima */
`;

// Estilizando o formulário
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
`;

// Estilizando o rótulo do formulário
const FormLabel = styled.label`
    font-family: 'Be Vietnam Pro', sans-serif;
    margin-bottom: 10px;
`;

// Estilizando a entrada do formulário
const FormInput = styled.input`
    font-family: 'Be Vietnam Pro', sans-serif;
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

// Estilizando o contêiner dos botões
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px; /* Adicionando margem entre os botões e o conteúdo */
`;

// Estilizando o botão "Salvar"
const SaveButton = styled.button`
    padding: 10px 20px;
    font-size: 12px;
    font-family: 'Be Vietnam Pro', sans-serif;
    color: white;
    background-color: #2f3192;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        background-color: #23256e;
    }
`;

// Estilizando o botão "Voltar"
const BackButton = styled.button`
    padding: 10px 20px;
    font-size: 12px;
    font-family: 'Be Vietnam Pro', sans-serif;
    color: #999999;
    background-color: white;
    border: 1.25px solid #999999;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        background-color: #e8e8e8;
    }
`;

// Componente funcional para o pop-up de adição de aula
const AddClassPopup = ({ onClose }) => {
    return (
        <PopupOverlay>
            <PopupContent>
                {/* Título do pop-up */}
                <TitleClass>Adicionar Aula</TitleClass>
                {/* Formulário para adicionar aula (Nome, Data, Professor, Turma) */}
                <Form>
                    <FormLabel>Nome da Aula</FormLabel>
                    <FormInput type="text" />
                    <FormLabel>Data</FormLabel>
                    <FormInput type="date" />
                    <FormLabel>Professor</FormLabel>
                    <FormInput type="text" />
                    <FormLabel>Turma</FormLabel>
                    <FormInput type="text" />
                </Form>
                {/* Botões "Salvar" e "Voltar" */}
                <ButtonContainer>
                    <BackButton onClick={onClose}>Voltar</BackButton>
                    <SaveButton>Salvar</SaveButton>
                </ButtonContainer>
            </PopupContent>
        </PopupOverlay>
    );
};

export default AddClassPopup; // Exportando o componente
